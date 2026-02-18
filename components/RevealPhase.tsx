import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { WordDef } from '../types';

interface RevealPhaseProps {
  currentPlayerName: string;
  isImposter: boolean;
  secretWord: WordDef | null;
  categoryName: string;
  showHint: boolean;
  onNext: () => void;
}

export const RevealPhase: React.FC<RevealPhaseProps> = ({
  currentPlayerName,
  isImposter,
  secretWord,
  categoryName,
  showHint,
  onNext
}) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => setIsRevealed(true);
  
  const handleNext = () => {
    setIsRevealed(false);
    onNext();
  };

  return (
    <div className="h-full flex flex-col items-center justify-center max-w-md mx-auto w-full">
      <AnimatePresence mode="wait">
        {!isRevealed ? (
          <motion.div
            key="hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full"
          >
            <Card className="text-center space-y-8 py-12 border-indigo-500/30 bg-gray-900/90">
              <div className="space-y-4">
                <div className="w-20 h-20 bg-gray-800 rounded-full mx-auto flex items-center justify-center mb-6 ring-4 ring-gray-800 ring-offset-2 ring-offset-gray-900">
                  <span className="text-4xl">🤔</span>
                </div>
                <h2 className="text-gray-400 text-lg uppercase tracking-wider font-semibold">Pasa el dispositivo a</h2>
                <h1 className="text-4xl font-black text-white">{currentPlayerName}</h1>
              </div>
              
              <div className="pt-8">
                <Button onClick={handleReveal} fullWidth className="text-lg py-4">
                  <span className="flex items-center justify-center gap-3">
                    <Eye size={24} />
                    Ver mi palabra
                  </span>
                </Button>
              </div>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            key="revealed"
            initial={{ opacity: 0, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            <Card className={`text-center space-y-8 py-12 border-2 ${isImposter ? 'border-red-500/50 bg-red-950/20' : 'border-emerald-500/50 bg-emerald-950/20'}`}>
              <div className="space-y-6">
                <div className="text-sm font-medium uppercase tracking-widest text-gray-500">
                  Tu rol secreto
                </div>

                {isImposter ? (
                  <div className="space-y-4">
                    <div className="w-24 h-24 bg-red-500/20 rounded-full mx-auto flex items-center justify-center animate-pulse-slow">
                      <span className="text-5xl">🤫</span>
                    </div>
                    <h2 className="text-4xl font-black text-red-500">IMPOSTOR</h2>
                    <p className="text-red-200 text-lg">
                      No sabes la palabra exacta.
                    </p>
                    
                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mt-4 space-y-3">
                      <div>
                        <div className="text-xs text-red-400 uppercase tracking-widest mb-1">Categoría</div>
                        <p className="font-bold text-white">{categoryName}</p>
                      </div>
                      
                      {showHint && (
                        <div className="pt-2 border-t border-red-500/20">
                          <div className="text-xs text-red-400 uppercase tracking-widest mb-1">Tu Pista</div>
                          <p className="text-lg font-bold text-white italic">"{secretWord?.hint}"</p>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="w-24 h-24 bg-emerald-500/20 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-5xl">🕵️</span>
                    </div>
                    <h2 className="text-2xl font-bold text-emerald-400">La palabra es:</h2>
                    <div className="bg-emerald-500/10 border-2 border-emerald-500/30 rounded-xl py-4 px-6">
                      <span className="text-4xl font-black text-white tracking-wide">
                        {secretWord?.term}
                      </span>
                    </div>
                    <p className="text-emerald-200/80 text-sm">
                      Encuentra al impostor.
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-8">
                <Button 
                  onClick={handleNext} 
                  fullWidth 
                  variant={isImposter ? 'danger' : 'primary'}
                  className="text-lg py-4"
                >
                  <span className="flex items-center justify-center gap-3">
                    <span className="text-sm font-normal opacity-80">Entendido, </span>
                    Ocultar <EyeOff size={20} />
                  </span>
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};