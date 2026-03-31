export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black to-zinc-900">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Routis
        </h1>
        <p className="text-xl text-zinc-400 mb-8 max-w-lg">Coming Soon...</p>
        <a
          href="https://github.com/TheRealDarkCoder/Routis"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-zinc-100 transition-colors"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}
