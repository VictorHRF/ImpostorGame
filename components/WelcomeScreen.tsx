import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserPlus, X, Play, Users, LayoutGrid, Check, Settings, Clock, HelpCircle, AlertCircle } from 'lucide-react';
import { CATEGORIES, MIN_PLAYERS } from '../constants';
import { Button } from './ui/Button';
import { Card } from './ui/Card';

interface WelcomeScreenProps {
  players: string[];
  setPlayers: (players: string[]) => void;
  selectedCategories: string[];
  toggleCategory: (id: string) => void;
  
  // New Config Props
  roundDuration: number;
  setRoundDuration: (seconds: number) => void;
  imposterCount: number;
  setImposterCount: (count: number) => void;
  showHint: boolean;
  setShowHint: (show: boolean) => void;
  
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  players,
  setPlayers,
  selectedCategories,
  toggleCategory,
  roundDuration,
  setRoundDuration,
  imposterCount,
  setImposterCount,
  showHint,
  setShowHint,
  onStart
}) => {
  const [newName, setNewName] = useState('');
  const [showSettings, setShowSettings] = useState(false);

  const handleAddPlayer = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (newName.trim()) {
      setPlayers([...players, newName.trim()]);
      setNewName('');
    }
  };

  const removePlayer = (index: number) => {
    setPlayers(players.filter((_, i) => i !== index));
    // Reset impostor count if players drop too low
    if (imposterCount >= players.length - 1) {
      setImposterCount(Math.max(1, Math.floor((players.length - 1) / 2)));
    }
  };

  const maxImpostors = Math.max(1, Math.floor((players.length - 1) / 2));
  const canStart = players.length >= MIN_PLAYERS && selectedCategories.length > 0;

  return (
    <div className="max-w-md mx-auto space-y-6 pb-20">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2 mb-6"
      >
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
          El Impostor
        </h1>
        <p className="text-gray-400">Descubre quién miente entre nosotros</p>
      </motion.div>

      {/* Players Section */}
      <Card delay={0.1} className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-bold text-white">
            <Users className="w-6 h-6 text-indigo-400" />
            <h2>Jugadores ({players.length})</h2>
          </div>
          <button 
            onClick={() => setShowSettings(!showSettings)}
            className={`p-2 rounded-lg transition-colors ${showSettings ? 'bg-indigo-500/20 text-indigo-300' : 'bg-gray-800 text-gray-400 hover:text-white'}`}
          >
            <Settings size={20} />
          </button>
        </div>

        {/* Configuration Panel */}
        <AnimatePresence>
          {showSettings && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-b border-gray-700/50 pb-4 mb-4"
            >
              <div className="bg-gray-800/50 rounded-xl p-4 space-y-4 mt-2">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                  <Settings size={14} /> Configuración de Partida
                </h3>
                
                {/* Time Setting */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300 flex items-center gap-2"><Clock size={14}/> Tiempo de ronda</span>
                    <span className="font-mono font-bold text-indigo-400">{Math.floor(roundDuration / 60)} min</span>
                  </div>
                  <input 
                    type="range" 
                    min="60" 
                    max="600" 
                    step="60"
                    value={roundDuration}
                    onChange={(e) => setRoundDuration(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                  />
                </div>

                {/* Imposter Count */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm flex items-center gap-2"><AlertCircle size={14}/> Cantidad de Impostores</span>
                  <div className="flex items-center gap-3 bg-gray-900 rounded-lg p-1">
                    <button 
                      onClick={() => setImposterCount(Math.max(1, imposterCount - 1))}
                      className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded hover:bg-gray-700 text-white disabled:opacity-50"
                      disabled={imposterCount <= 1}
                    >
                      -
                    </button>
                    <span className="font-bold w-4 text-center">{imposterCount}</span>
                    <button 
                      onClick={() => setImposterCount(Math.min(maxImpostors, imposterCount + 1))}
                      className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded hover:bg-gray-700 text-white disabled:opacity-50"
                      disabled={imposterCount >= maxImpostors}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Show Hint Toggle */}
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-gray-300 text-sm flex items-center gap-2"><HelpCircle size={14}/> Pista al Impostor</span>
                    <span className="text-xs text-gray-500">¿El impostor ve la pista?</span>
                  </div>
                  <button 
                    onClick={() => setShowHint(!showHint)}
                    className={`w-12 h-6 rounded-full p-1 transition-colors ${showHint ? 'bg-indigo-500' : 'bg-gray-700'}`}
                  >
                    <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${showHint ? 'translate-x-6' : 'translate-x-0'}`} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleAddPlayer} className="flex gap-2">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Añadir jugador..."
            className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
          />
          <Button type="button" onClick={() => handleAddPlayer()} disabled={!newName.trim()} className="px-4">
            <UserPlus size={24} />
          </Button>
        </form>

        <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
          <AnimatePresence>
            {players.map((player, idx) => (
              <motion.span
                key={`${player}-${idx}`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-sm font-medium text-gray-200"
              >
                {player}
                <button 
                  onClick={() => removePlayer(idx)}
                  className="text-gray-500 hover:text-red-400 transition-colors"
                >
                  <X size={14} />
                </button>
              </motion.span>
            ))}
          </AnimatePresence>
        </div>
      </Card>

      <Card delay={0.2} className="space-y-4">
        <div className="flex items-center gap-2 text-xl font-bold text-white">
          <LayoutGrid className="w-6 h-6 text-purple-400" />
          <h2>Categorías</h2>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategories.includes(cat.id);
            return (
              <button
                key={cat.id}
                onClick={() => toggleCategory(cat.id)}
                className={`relative p-3 rounded-xl border transition-all duration-200 text-left group overflow-hidden ${
                  isSelected
                    ? 'bg-gradient-to-br from-indigo-600 to-purple-700 border-indigo-400 shadow-indigo-500/20 shadow-lg'
                    : 'bg-gray-800/50 border-gray-700 hover:bg-gray-800 hover:border-gray-500'
                }`}
              >
                <div className="flex justify-between items-start mb-1 relative z-10">
                  <div className="text-2xl">{cat.icon}</div>
                  {isSelected && (
                    <div className="bg-white/20 p-1 rounded-full">
                      <Check size={12} className="text-white" />
                    </div>
                  )}
                </div>
                <div className={`font-semibold text-sm relative z-10 ${isSelected ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                  {cat.name}
                </div>
              </button>
            );
          })}
        </div>
      </Card>

      <div className="sticky bottom-4 z-10">
        <Button 
          fullWidth 
          size="lg" 
          onClick={onStart} 
          disabled={!canStart}
          className="text-lg py-4 shadow-xl shadow-indigo-900/20"
        >
          <span className="flex items-center justify-center gap-2">
            Comenzar Juego <Play size={20} fill="currentColor" />
          </span>
        </Button>
      </div>
    </div>
  );
};