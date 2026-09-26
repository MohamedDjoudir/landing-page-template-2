interface StepNumberProps {
  number: string;
}

export function StepNumber({ number }: StepNumberProps) {
  return (
    <div className="relative shrink-0 z-10">
      <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-900 rounded-full border-2 border-purple-500 flex items-center justify-center shadow-lg shadow-purple-900/20">
        <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {number}
        </span>
      </div>
      <div className="absolute -inset-3 z-0">
        <div className="absolute inset-0 rounded-full bg-purple-500/20 animate-ping opacity-50" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-sm" />
      </div>
    </div>
  );
}
