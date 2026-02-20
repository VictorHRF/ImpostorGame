import React, { useState } from 'react';
import { GamePhase, GameState } from './types';
import { CATEGORIES } from './constants';
import { WelcomeScreen } from './components/WelcomeScreen';
import { RevealPhase } from './components/RevealPhase';
import { GamePhase as GamePhaseComponent } from './components/GamePhase';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './components/ui/Button';
import { Trophy, RefreshCw, Home, Skull, Clock, CheckCircle } from 'lucide-react';
import { Card } from './components/ui/Card';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    phase: GamePhase.SETUP,
    players: [],
    currentPlayerIndex: 0,
    imposterIndices: [],
    caughtImposterIndices: [],
    eliminatedIndices: [],
    startingPlayerIndex: 0,
    imposterCount: 1,
    selectedCategories: [],
    secretWord: null,
    imposterHints: {},
    roundDuration: 300,
    showHint: true,
    showCategory: true,
    winner: null,
    winReason: null
  });

  const setPlayers = (players: string[]) => {
    setGameState(prev => ({ ...prev, players }));
  };

  const toggleCategory = (id: string) => {
    setGameState(prev => {
      const current = prev.selectedCategories;
      const isSelected = current.includes(id);
      if (isSelected) {
        return { ...prev, selectedCategories: current.filter(c => c !== id) };
      } else {
        return { ...prev, selectedCategories: [...current, id] };
      }
    });
  };

  const generateImpostors = (playerCount: number, imposterCount: number): number[] => {
    const indices = new Set<number>();
    while(indices.size < imposterCount) {
      indices.add(Math.floor(Math.random() * playerCount));
    }
    return Array.from(indices);
  };

  const assignHintsToImpostors = (imposterIndices: number[], hints: string[]): Record<number, string> => {
    const assignedHints: Record<number, string> = {};
    if (!hints || hints.length === 0) return assignedHints;

    // Shuffle hints so the assignment is random
    const shuffledHints = [...hints].sort(() => Math.random() - 0.5);

    imposterIndices.forEach((playerIdx, i) => {
      // Assign a hint using modulo to loop if we have more impostors than unique hints
      assignedHints[playerIdx] = shuffledHints[i % shuffledHints.length];
    });

    return assignedHints;
  };

  const startGame = () => {
    if (gameState.selectedCategories.length === 0 || gameState.players.length < 3) return;

    const relevantCategories = CATEGORIES.filter(c => gameState.selectedCategories.includes(c.id));
    const allWords = relevantCategories.flatMap(c => c.words);
    
    if (allWords.length === 0) return;

    const randomWord = allWords[Math.floor(Math.random() * allWords.length)];
    const safeImposterCount = Math.min(gameState.imposterCount, Math.floor((gameState.players.length - 1) / 2)) || 1;
    const newImposterIndices = generateImpostors(gameState.players.length, safeImposterCount);
    const newImposterHints = assignHintsToImpostors(newImposterIndices, randomWord.hints);

    setGameState(prev => ({
      ...prev,
      phase: GamePhase.REVEAL,
      secretWord: randomWord,
      imposterIndices: newImposterIndices,
      imposterHints: newImposterHints,
      caughtImposterIndices: [],
      eliminatedIndices: [],
      currentPlayerIndex: 0,
      winner: null,
      winReason: null
    }));
  };

  const nextReveal = () => {
    setGameState(prev => {
      const nextIndex = prev.currentPlayerIndex + 1;
      if (nextIndex >= prev.players.length) {
        // All revealed, pick random starter and go to game
        const randomStarter = Math.floor(Math.random() * prev.players.length);
        return { 
          ...prev, 
          phase: GamePhase.GAME,
          startingPlayerIndex: randomStarter
        };
      }
      return { ...prev, currentPlayerIndex: nextIndex };
    });
  };

  const restartSamePlayers = () => {
    const relevantCategories = CATEGORIES.filter(c => gameState.selectedCategories.includes(c.id));
    const allWords = relevantCategories.flatMap(c => c.words);
    const randomWord = allWords.length > 0 
      ? allWords[Math.floor(Math.random() * allWords.length)]
      : { term: 'Error', hints: ['Error'] };
    
    const safeImposterCount = Math.min(gameState.imposterCount, Math.floor((gameState.players.length - 1) / 2)) || 1;
    const newImposterIndices = generateImpostors(gameState.players.length, safeImposterCount);
    const newImposterHints = assignHintsToImpostors(newImposterIndices, randomWord.hints);

    setGameState(prev => ({
      ...prev,
      phase: GamePhase.REVEAL,
      secretWord: randomWord,
      imposterIndices: newImposterIndices,
      imposterHints: newImposterHints,
      caughtImposterIndices: [],
      eliminatedIndices: [],
      currentPlayerIndex: 0,
      winner: null,
      winReason: null
    }));
  };

  const fullReset = () => {
    setGameState(prev => ({
      ...prev,
      phase: GamePhase.SETUP,
      currentPlayerIndex: 0,
      imposterIndices: [],
      imposterHints: {},
      caughtImposterIndices: [],
      eliminatedIndices: [],
      secretWord: null,
      winner: null,
      winReason: null
    }));
  };

  const handleTimeUp = () => {
    setGameState(prev => ({
      ...prev,
      phase: GamePhase.GAME_OVER,
      winner: 'IMPOSTOR',
      winReason: 'TIME_UP'
    }));
  };

  const handleAccuse = (playerIndex: number): { status: 'GAME_OVER' | 'CONTINUE', message: string, type: 'success' | 'error' | 'info' } => {
    // 1. Check if Impostor
    if (gameState.imposterIndices.includes(playerIndex)) {
      const newCaught = [...gameState.caughtImposterIndices, playerIndex];
      const allCaught = newCaught.length === gameState.imposterIndices.length;

      if (allCaught) {
        setGameState(prev => ({
          ...prev,
          phase: GamePhase.GAME_OVER,
          winner: 'CITIZENS',
          winReason: 'ALL_CAUGHT',
          caughtImposterIndices: newCaught
        }));
        return { status: 'GAME_OVER', message: '¡Impostor atrapado!', type: 'success' };
      } else {
        // Partially caught, game continues
        setGameState(prev => ({
          ...prev,
          caughtImposterIndices: newCaught
        }));
        const remaining = gameState.imposterIndices.length - newCaught.length;
        return { 
          status: 'CONTINUE', 
          message: `¡${gameState.players[playerIndex]} era un Impostor! Quedan ${remaining}.`, 
          type: 'success' 
        };
      }
    } 
    
    // 2. Innocent
    else {
      setGameState(prev => ({
        ...prev,
        eliminatedIndices: [...prev.eliminatedIndices, playerIndex]
      }));
      
      // Calculate active players (total - eliminated - caught)
      return { 
        status: 'CONTINUE', 
        message: `¡Fallo! ${gameState.players[playerIndex]} es Inocente y ha sido eliminado.`, 
        type: 'error' 
      };
    }
  };

  const getActiveCategoryName = () => {
    if (!gameState.secretWord) return '';
    const category = CATEGORIES.find(c => c.words.some(w => w.term === gameState.secretWord?.term));
    return category ? category.name : 'Desconocida';
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-indigo-500/30">
      {/* Background Ambience */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col">
        <AnimatePresence mode="wait">
          {gameState.phase === GamePhase.SETUP && (
            <motion.div
              key="setup"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex flex-col justify-center"
            >
              <WelcomeScreen
                players={gameState.players}
                setPlayers={setPlayers}
                selectedCategories={gameState.selectedCategories}
                toggleCategory={toggleCategory}
                
                roundDuration={gameState.roundDuration}
                setRoundDuration={(val) => setGameState(prev => ({...prev, roundDuration: val}))}
                imposterCount={gameState.imposterCount}
                setImposterCount={(val) => setGameState(prev => ({...prev, imposterCount: val}))}
                showHint={gameState.showHint}
                setShowHint={(val) => setGameState(prev => ({...prev, showHint: val}))}
                showCategory={gameState.showCategory}
                setShowCategory={(val) => setGameState(prev => ({...prev, showCategory: val}))}

                onStart={startGame}
              />
            </motion.div>
          )}

          {gameState.phase === GamePhase.REVEAL && (
            <motion.div
              key="reveal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col justify-center"
            >
              <RevealPhase
                currentPlayerName={gameState.players[gameState.currentPlayerIndex]}
                isImposter={gameState.imposterIndices.includes(gameState.currentPlayerIndex)}
                secretWordTerm={gameState.secretWord?.term || ''}
                imposterHint={gameState.imposterHints[gameState.currentPlayerIndex] || ''}
                categoryName={getActiveCategoryName()}
                showHint={gameState.showHint}
                showCategory={gameState.showCategory}
                onNext={nextReveal}
              />
            </motion.div>
          )}

          {gameState.phase === GamePhase.GAME && (
            <motion.div
              key="game"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="flex-1 flex flex-col"
            >
              <GamePhaseComponent
                players={gameState.players}
                duration={gameState.roundDuration}
                startingPlayerIndex={gameState.startingPlayerIndex}
                eliminatedIndices={gameState.eliminatedIndices}
                caughtImposterIndices={gameState.caughtImposterIndices}
                onReset={fullReset}
                onAccuse={handleAccuse}
                onTimeUp={handleTimeUp}
              />
            </motion.div>
          )}

          {gameState.phase === GamePhase.GAME_OVER && (
            <motion.div
              key="gameover"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 flex flex-col justify-center items-center text-center space-y-8"
            >
               <Card className={`border-2 py-12 px-6 ${gameState.winner === 'CITIZENS' ? 'border-emerald-500/50 bg-emerald-950/20' : 'border-red-500/50 bg-red-950/20'}`}>
                 <div className="mb-6">
                   {gameState.winner === 'CITIZENS' ? (
                     <Trophy size={64} className="text-yellow-400 mx-auto animate-bounce" />
                   ) : (
                     <Skull size={64} className="text-red-400 mx-auto animate-pulse" />
                   )}
                 </div>
                 
                 <h1 className="text-4xl font-black text-white mb-2">
                   {gameState.winner === 'CITIZENS' ? '¡Victoria de Ciudadanos!' : '¡Ganan los Impostores!'}
                 </h1>
                 
                 <p className={`${gameState.winner === 'CITIZENS' ? 'text-emerald-200' : 'text-red-200'} mb-8 text-lg font-medium`}>
                   {gameState.winReason === 'TIME_UP' 
                     ? 'El tiempo se agotó y los impostores sobrevivieron.' 
                     : gameState.winReason === 'ALL_CAUGHT' 
                       ? 'Todos los impostores fueron eliminados.' 
                       : 'Juego terminado.'}
                 </p>
                 
                 <div className="bg-gray-900/50 rounded-xl p-6 mb-8 text-left space-y-4">
                   <div>
                      <div className="text-xs text-gray-500 uppercase mb-2">Impostor(es):</div>
                      <div className="flex flex-wrap gap-2">
                        {gameState.imposterIndices.map(idx => (
                          <span key={idx} className={`border px-3 py-1 rounded-lg font-bold flex items-center gap-2 ${
                            gameState.caughtImposterIndices.includes(idx) 
                            ? 'bg-red-500/20 border-red-500/40 text-red-300 line-through opacity-70'
                            : 'bg-red-600/20 border-red-500 text-red-100'
                          }`}>
                            {gameState.players[idx]}
                            {gameState.caughtImposterIndices.includes(idx) && <CheckCircle size={12}/>}
                          </span>
                        ))}
                      </div>
                   </div>
                   
                   <div className="h-px bg-gray-700" />
                   
                   <div>
                     <div className="text-xs text-gray-500 uppercase mb-1">La palabra era:</div>
                     <div className="text-2xl font-black text-white tracking-wide">{gameState.secretWord?.term}</div>
                   </div>
                 </div>

                 <div className="space-y-3">
                   <Button onClick={restartSamePlayers} fullWidth size="lg">
                     <span className="flex items-center justify-center gap-2">
                       <RefreshCw size={20} /> Jugar Otra Vez
                     </span>
                   </Button>
                   <Button onClick={fullReset} fullWidth variant="ghost">
                     <span className="flex items-center justify-center gap-2">
                       <Home size={20} /> Volver al Menú
                     </span>
                   </Button>
                 </div>
               </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;