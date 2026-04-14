import { Clock } from "lucide-react";
import { Song } from "../data/mock";

interface SongListProps {
  songs: Song[];
}

const SongList = ({ songs }: SongListProps) => {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-[16px_4fr_3fr_2fr_minmax(60px,1fr)] gap-4 px-4 py-2 text-spotify-gray border-b border-white/10 text-xs font-medium uppercase tracking-wider mb-2">
        <span>#</span>
        <span>Title</span>
        <span>Album</span>
        <span>Date Added</span>
        <div className="flex justify-end">
          <Clock size={16} />
        </div>
      </div>

      <div className="space-y-0.5">
        {songs.map((song, index) => (
          <div 
            key={song.id}
            className="grid grid-cols-[16px_4fr_3fr_2fr_minmax(60px,1fr)] gap-4 px-4 py-2 rounded-md hover:bg-white/10 transition-colors group cursor-pointer items-center"
          >
            <span className="text-sm text-spotify-gray group-hover:text-white">{index + 1}</span>
            <div className="flex items-center gap-3">
              <img src={song.cover} alt="" className="w-10 h-10 rounded shadow" />
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-medium text-white truncate">{song.title}</span>
                <span className="text-xs text-spotify-gray group-hover:text-white truncate">{song.artist}</span>
              </div>
            </div>
            <span className="text-sm text-spotify-gray group-hover:text-white truncate">{song.album}</span>
            <span className="text-sm text-spotify-gray truncate">{song.addedAt}</span>
            <span className="text-sm text-spotify-gray text-right">{song.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongList;