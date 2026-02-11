export function Presets({ setInput }: { setInput: (v: string) => void }) {
    const presets = [
      { label: "Quantum Entanglement", value: "Explain quantum entanglement" },
      { label: "Photosynthesis", value: "Describe the process of photosynthesis in plants" },
      { label: "World War II Causes", value: "What were the main causes of World War II?" },
      { label: "Python Decorators", value: "What are decorators in Python and how do they work?" },
    ];
  
    return (
      <div className="space-y-3">
        <p className="text-sm text-gray-400">Quick starts</p>
        <div className="flex flex-wrap gap-3">
          {presets.map((p, i) => (
            <button
              key={i}
              onClick={() => setInput(p.value)}
              className="px-4 py-2 text-sm bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all text-gray-300 hover:text-white hover:border-white/20"
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>
    );
  }