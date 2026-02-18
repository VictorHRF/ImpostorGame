export enum GamePhase {
  SETUP = 'SETUP',
  REVEAL = 'REVEAL',
  GAME = 'GAME',
  GAME_OVER = 'GAME_OVER',
}

export interface WordDef {
  term: string;
  hint: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  words: WordDef[];
}

export interface GameState {
  phase: GamePhase;
  players: string[];
  currentPlayerIndex: number;
  imposterIndices: number[]; // Array for multiple impostors
  caughtImposterIndices: number[]; // Track which impostors have been caught
  eliminatedIndices: number[]; // Track innocents voted out
  startingPlayerIndex: number; // Who starts talking
  imposterCount: number; // Setting for how many impostors
  selectedCategories: string[];
  secretWord: WordDef | null;
  roundDuration: number; // in seconds
  showHint: boolean; // Setting to toggle hints for impostor
  winner: 'CITIZENS' | 'IMPOSTOR' | null;
  winReason?: 'TIME_UP' | 'ALL_CAUGHT' | null; // Why did the game end
}