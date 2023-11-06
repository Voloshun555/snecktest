export interface GameOverBoardProps {
    startFn: () => void;
    tSpeed: (name: string, speed: number) => void;
    name: string; 
    speed: number; 
  }