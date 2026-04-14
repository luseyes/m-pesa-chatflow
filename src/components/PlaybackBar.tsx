import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Maximize2, Mic2, ListMusic, MonitorSpeaker } from "lucide-react";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";

const PlaybackBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState([33]);
  const [volume, setVolume] = useState([70]);

  return (
    <div className="h-24 bg-black border-t border-white/5 flex items-center justify-between px-4 select-none">
      {/* Current Song Info */}
      <div className="flex items-center gap-4 w-[30%] min-w-[180px]">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/bd829899-57e2-4919-96be-75a12f138626/synthwave-cover-841cb02d-1776159218440.webp" 
          alt="Current Album" 
          className="w-14 h-14 rounded-md shadow-lg"
        />
        <div className="flex flex-col min-w-0">
          <span className="text-sm font-medium hover:underline cursor-pointer truncate">Nightcall</span>
          <span className="text-xs text-spotify-gray hover:underline hover:text-white cursor-pointer truncate">Kavinsky</span>
        </div>
      </div>

      {/* Playback Controls */}
      <div className="flex flex-col items-center gap-2 max-w-[40%] w-full">
        <div className="flex items-center gap-6 text-spotify-gray">
          <Shuffle size={20} className="hover:text-white cursor-pointer transition-colors" />
          <SkipBack size={20} className="hover:text-white fill-spotify-gray hover:fill-white cursor-pointer transition-colors" />
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform active:scale-95"
          >
            {isPlaying ? <Pause size={20} className="text-black fill-black" /> : <Play size={20} className="text-black fill-black translate-x-0.5" />}
          </button>
          <SkipForward size={20} className="hover:text-white fill-spotify-gray hover:fill-white cursor-pointer transition-colors" />
          <Repeat size={20} className="hover:text-white cursor-pointer transition-colors" />
        </div>
        <div className="flex items-center gap-2 w-full group">
          <span className="text-[11px] text-spotify-gray min-w-[32px] text-right">1:24</span>
          <Slider 
            value={progress} 
            onValueChange={setProgress}
            max={100} 
            step={1}
            className="flex-1 cursor-pointer"
          />
          <span className="text-[11px] text-spotify-gray min-w-[32px]">4:18</span>
        </div>
      </div>

      {/* Volume and Extra Controls */}
      <div className="flex items-center justify-end gap-3 w-[30%] min-w-[180px] text-spotify-gray">
        <Mic2 size={16} className="hover:text-white cursor-pointer" />
        <ListMusic size={16} className="hover:text-white cursor-pointer" />
        <MonitorSpeaker size={16} className="hover:text-white cursor-pointer" />
        <div className="flex items-center gap-2 w-24 group">
          <Volume2 size={16} className="hover:text-white cursor-pointer" />
          <Slider 
            value={volume} 
            onValueChange={setVolume}
            max={100} 
            step={1}
            className="flex-1 cursor-pointer"
          />
        </div>
        <Maximize2 size={16} className="hover:text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default PlaybackBar;