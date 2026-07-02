function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-3xl shadow-2xl">
        <h1 className="text-5xl font-bold text-blue-600">
          Welcome to VitalSync 🚀
        </h1>

        <p className="text-slate-500 mt-4 text-lg">
          Your Personal Health Intelligence Dashboard
        </p>

        <button
          className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;