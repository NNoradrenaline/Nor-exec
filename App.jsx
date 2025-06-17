export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8 font-mono">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-blue-400 mb-2">Nor</h1>
          <p className="text-lg text-gray-300">
            A lightweight, developer-focused DLL injector for Roblox. Built to help developers test and automate—not cheat.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li>Fast and stable injection process</li>
            <li>Clean UI with dev-focused design</li>
            <li>Supports automation and script debugging</li>
            <li>Safe for personal development use</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">Download</h2>
          <a
            href="#"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl transition"
          >
            Download Nor
          </a>
        </section>

        <footer className="text-sm text-gray-500 mt-24 border-t border-gray-800 pt-4">
          © {new Date().getFullYear()} Nor Dev Tool. Built for Roblox developers.
        </footer>
      </div>
    </main>
  );
}
