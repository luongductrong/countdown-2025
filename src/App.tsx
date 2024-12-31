import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-vt323">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR Xin chào
        </p>
        {/* Một đoạn text tiếng Việt để test lỗi font */}
        <p>Đây là một đoạn text tiếng Việt để test lỗi font</p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <div className="bg-red-500 text-white">Hehe</div>
    </div>
  );
}

export default App;
