import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

const TapToEarn = () => {
  const [points, setPoints] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleTap = () => {
    setPoints(prev => prev + 1);
    setIsAnimating(true);
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 200);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 flex flex-col items-center justify-center p-4">
      {/* Score Display */}
      <div className="bg-white/20 backdrop-blur-lg rounded-xl p-4 mb-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-2">Points</h1>
        <p className="text-6xl font-bold text-white">{points}</p>
      </div>

      {/* Tap Button */}
      <button
        onClick={handleTap}
        className={`
          relative w-48 h-48 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500
          shadow-xl active:scale-95 transition-all duration-200
          flex items-center justify-center
          ${isAnimating ? 'scale-105' : 'scale-100'}
        `}
      >
        <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-sm" />
        <div className="relative flex flex-col items-center">
          <Sparkles className="w-12 h-12 text-white mb-2" />
          <span className="text-xl font-bold text-white">TAP!</span>
        </div>
      </button>

      {/* Points Per Second */}
      <div className="mt-8 text-center text-white/80">
        <p className="text-lg">Tap the button to earn points!</p>
      </div>
    </div>
  );
};

export default TapToEarn;