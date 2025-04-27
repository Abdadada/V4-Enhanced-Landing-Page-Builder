import { Sidebar } from './components/Sidebar';

export default function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-100 p-4 overflow-auto">
        {/* Canvas area (future expansion) */}
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          Canvas Area (Future)
        </div>
      </main>
    </div>
  );
}
