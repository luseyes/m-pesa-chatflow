import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import PlaybackBar from "./components/PlaybackBar";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="h-screen w-screen bg-black text-white flex flex-col overflow-hidden font-sans">
      {/* Main Layout Area */}
      <div className="flex-1 flex min-h-0 overflow-hidden">
        {/* Fixed Sidebar */}
        <Sidebar />
        
        {/* Main Scrollable Content */}
        <MainContent />
      </div>

      {/* Persistent Playback Bar */}
      <PlaybackBar />

      {/* Toast Notifications */}
      <Toaster position="top-right" />
    </div>
  );
}

export default App;