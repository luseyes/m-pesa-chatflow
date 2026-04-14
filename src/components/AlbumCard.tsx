import { Play } from "lucide-react";
import { Playlist } from "../data/mock";

interface AlbumCardProps {
  playlist: Playlist;
}

const AlbumCard = ({ playlist }: AlbumCardProps) => {
  return (
    <div className="bg-[#181818] hover:bg-[#282828] p-4 rounded-lg transition-all duration-300 group cursor-pointer relative">
      <div className="relative mb-4 aspect-square shadow-2xl">
        <img 
          src={playlist.cover} 
          alt={playlist.title}
          className="object-cover w-full h-full rounded-md"
        />
        <div className="absolute bottom-2 right-2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button className="w-12 h-12 rounded-full bg-spotify-green flex items-center justify-center shadow-xl hover:scale-105 active:scale-95">
            <Play className="text-black fill-black ml-1" size={24} />
          </button>
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="font-bold text-base truncate">{playlist.title}</h3>
        <p className="text-spotify-gray text-sm line-clamp-2">{playlist.description}</p>
      </div>
    </div>
  );
};

export default AlbumCard;