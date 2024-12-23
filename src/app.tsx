import React from 'react';
import Chat from './Chat';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Professeur Parker</h1>
      </header>
      <main className="flex-1 p-4">
        <Chat />
      </main>
      <footer className="bg-gray-900 text-white p-4 text-center">
        © 2024 Professeur Parker
      </footer>
    </div>
  );
}

export default App;
