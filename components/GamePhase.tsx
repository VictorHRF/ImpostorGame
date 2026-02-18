import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Timer, User, Gavel, Menu, CheckCircle, XCircle, Skull, MessageCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';

interface GamePhaseProps {
  players: string[];
  duration: number;
  startingPlayerIndex: number;
  eliminatedIndices: number[];
  caughtImposterIndices: number[];
  onReset: () => void;
  onAccuse: (playerIndex: number) => { status: 'GAME_OVER' | 'CONTINUE', message: string, type: 'success' | 'error' | 'info' };
  onTimeUp: () => void;
}

export const GamePhase: React.FC<GamePhaseProps> = ({
  players,
  duration,
  startingPlayerIndex,
  eliminatedIndices,
  caughtImposterIndices,
  onReset,
  onAccuse,
  onTimeUp
}) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [timerActive, setTimerActive] = useState(true);
  const [isVoting, setIsVoting] = useState(false);
  const [showStarter, setShowStarter] = useState(true);
  const [notification, setNotification] = useState<{msg: string, type: 'error' | 'success' | 'info'} | null>(null);

  // Show starting player modal briefly on mount
  useEffect(() => {
    const timer = setTimeout(() => setShowStarter(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  // Timer Logic
  useEffect(() => {
    setTimeLeft(duration);
    setTimerActive(true);
  }, [duration]);

  useEffect(() => {
    let interval: number;
    if (timerActive && timeLeft > 0) {
      interval = window.setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setTimerActive(false);
      onTimeUp(); // Trigger game over when time runs out
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft, onTimeUp]);

  // Notification auto-dismiss
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleTimer = () => setTimerActive(!timerActive);

  const handleAccusationClick = (idx: number) => {
    const result = onAccuse(idx);
    
    // Close voting modal regardless of result
    setIsVoting(false);
    
    // If game continues, show notification
    if (result.status === 'CONTINUE') {
      setNotification({
        msg: result.message,
        type: result.type
      });
    }
  };

  const isPlayerOut = (idx: number) => eliminatedIndices.includes(idx) || caughtImposterIndices.includes(idx);

  return (
    <div className="max-w-md mx-auto space-y-6 pb-20 relative">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-2">
        <div className="flex items-center gap-2">
           <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"/>
           <span className="text-xs font-bold text-red-500 uppercase tracking-widest">En Juego</span>
        </div>
        <button onClick={onReset} className="p-2 text-gray-400 hover:text-white transition-colors bg-gray-800 rounded-lg">
          <Menu size={20} />
        </button>
      </div>

      <Card className="text-center py-8 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none" />
        <button onClick={toggleTimer} className="relative z-10 w-full">
          <div className="text-gray-400 text-sm font-medium uppercase tracking-widest mb-2">Tiempo Restante</div>
          <div className={`text-6xl font-black tabular-nums transition-colors ${timeLeft < 60 ? 'text-red-500 animate-pulse' : 'text-white'}`}>
            {formatTime(timeLeft)}
          </div>
          <div className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
            {timerActive ? 'Toca para pausar' : 'Toca para reanudar'}
          </div>
        </button>
      </Card>

      <div className="grid grid-cols-1 gap-3">
        <div className="flex justify-between items-center px-2 text-gray-400 font-semibold">
           <span className="flex items-center gap-2"><User size={16} /> Jugadores</span>
           <span className="text-xs bg-gray-800 px-2 py-1 rounded">Total: {players.length}</span>
        </div>
        
        {players.map((player, idx) => {
          const isEliminated = eliminatedIndices.includes(idx);
          const isCaught = caughtImposterIndices.includes(idx);
          const isOut = isEliminated || isCaught;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isOut ? 0.6 : 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`border p-4 rounded-xl flex items-center justify-between ${
                isCaught 
                  ? 'bg-red-900/20 border-red-500/30' 
                  : isEliminated 
                    ? 'bg-gray-800/30 border-gray-700/50' 
                    : 'bg-gray-800/50 border-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono ${
                  isOut ? 'bg-gray-800 text-gray-500' : 'bg-gray-700 text-gray-400'
                }`}>
                  {idx + 1}
                </div>
                <div>
                  <span className={`font-medium ${isOut ? 'text-gray-500 line-through' : 'text-gray-200'}`}>{player}</span>
                  {isCaught && <span className="block text-[10px] text-red-400 font-bold uppercase">Impostor Atrapado</span>}
                  {isEliminated && <span className="block text-[10px] text-gray-500 font-bold uppercase">Eliminado</span>}
                </div>
              </div>
              
              {idx === startingPlayerIndex && !isOut && (
                <div title="Jugador inicial" className="bg-indigo-500/20 p-1.5 rounded-full">
                  <MessageCircle size={16} className="text-indigo-400" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Action Bar */}
      <div className="fixed bottom-6 left-0 right-0 px-4 max-w-md mx-auto z-20">
         <div className="flex gap-3">
            <Button 
              onClick={() => setIsVoting(true)} 
              variant="danger" 
              fullWidth 
              className="shadow-xl shadow-red-900/20 border border-red-500/30"
            >
              <span className="flex items-center justify-center gap-2">
                <Gavel size={20} /> Acusar / Votar
              </span>
            </Button>
         </div>
      </div>
      
      {/* Starting Player Overlay */}
      <AnimatePresence>
        {showStarter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm rounded-3xl"
            onClick={() => setShowStarter(false)}
          >
            <motion.div
              initial={{ scale: 0.5, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.5, y: 50 }}
              className="bg-gray-900 border border-indigo-500/50 p-8 rounded-2xl text-center shadow-2xl max-w-xs mx-4"
            >
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full mx-auto flex items-center justify-center mb-4">
                <MessageCircle size={32} className="text-indigo-400" />
              </div>
              <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-2">Comienza la ronda</h3>
              <p className="text-2xl font-black text-white leading-tight">
                ¡<span className="text-indigo-400">{players[startingPlayerIndex]}</span> empieza hablando!
              </p>
              <p className="text-xs text-gray-500 mt-4 animate-pulse">Toca para continuar</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Voting Modal Overlay */}
      <AnimatePresence>
        {isVoting && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-4"
          >
            <motion.div 
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              className="bg-gray-900 border border-gray-700 w-full max-w-sm rounded-2xl p-6 shadow-2xl space-y-4"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">Votar Jugador</h3>
                <button onClick={() => setIsVoting(false)} className="p-1 hover:bg-gray-800 rounded-full">
                  <XCircle className="text-gray-400" />
                </button>
              </div>
              <p className="text-sm text-gray-400 -mt-3 mb-2">Si fallas, el inocente será eliminado.</p>
              
              <div className="grid gap-2 max-h-[50vh] overflow-y-auto">
                {players.map((player, idx) => {
                  const disabled = isPlayerOut(idx);
                  return (
                    <button
                      key={idx}
                      onClick={() => !disabled && handleAccusationClick(idx)}
                      disabled={disabled}
                      className={`w-full p-4 border rounded-xl text-left transition-colors flex justify-between items-center group ${
                        disabled 
                          ? 'bg-gray-800/30 border-gray-800 opacity-50 cursor-not-allowed' 
                          : 'bg-gray-800 hover:bg-red-900/20 border-gray-700 hover:border-red-500/50'
                      }`}
                    >
                       <span className={`font-medium ${disabled ? 'text-gray-600' : 'text-gray-200 group-hover:text-red-200'}`}>
                         {player} {disabled && '(Eliminado)'}
                       </span>
                       {!disabled && <Gavel size={16} className="opacity-0 group-hover:opacity-100 text-red-400" />}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notification Toast */}
      <AnimatePresence>
        {notification && (
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: 20 }}
             className={`fixed bottom-24 left-4 right-4 max-w-md mx-auto p-4 rounded-xl shadow-xl flex items-center gap-3 z-50 border ${
               notification.type === 'error' ? 'bg-red-950/90 border-red-500/50 text-white' : 
               notification.type === 'success' ? 'bg-emerald-950/90 border-emerald-500/50 text-white' :
               'bg-blue-950/90 border-blue-500/50 text-white'
             }`}
          >
             {notification.type === 'error' ? <Skull size={24} className="text-red-400" /> : 
              notification.type === 'success' ? <CheckCircle size={24} className="text-emerald-400" /> :
              <MessageCircle size={24} className="text-blue-400" />}
             <span className="font-bold text-sm">{notification.msg}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};