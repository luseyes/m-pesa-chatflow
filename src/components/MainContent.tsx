import { ChevronLeft, ChevronRight, Bell, Users, Search } from "lucide-react";
import AlbumCard from "./AlbumCard";
import SongList from "./SongList";
import SearchBar from "./SearchBar";
import { MOCK_PLAYLISTS, MOCK_SONGS } from "../data/mock";

const MainContent = () => {
  return (
    <div className="flex-1 bg-gradient-to-b from-[#222222] to-spotify-black overflow-y-auto rounded-lg relative m-2 ml-0 p-6 scroll-smooth">
      {/* Header */}
      <div className="sticky top-0 z-10 flex items-center justify-between py-4 mb-6 -mx-6 px-6 bg-[#1a1a1a]/80 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button className="p-1 rounded-full bg-black/60 text-white disabled:text-white/40" disabled>
              <ChevronLeft size={24} />
            </button>
            <button className="p-1 rounded-full bg-black/60 text-white">
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="hidden md:block">
            <SearchBar />
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="hidden lg:block bg-white text-black font-bold py-1.5 px-4 rounded-full text-sm hover:scale-105 transition-transform">
            Explore Premium
          </button>
          <button className="p-2 rounded-full bg-black/60 text-spotify-gray hover:text-white hover:scale-105 transition-all">
            <Bell size={20} />
          </button>
          <button className="p-2 rounded-full bg-black/60 text-spotify-gray hover:text-white hover:scale-105 transition-all">
            <Users size={20} />
          </button>
          <div className="w-8 h-8 rounded-full bg-[#282828] border-4 border-black/40 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform overflow-hidden">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Good evening</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {MOCK_PLAYLISTS.slice(0, 6).map((playlist) => (
            <div 
              key={playlist.id} 
              className="flex items-center gap-4 bg-white/5 hover:bg-white/10 transition-colors rounded-md overflow-hidden group cursor-pointer"
            >
              <img src={playlist.cover} alt={playlist.title} className="w-20 h-20 shadow-lg shrink-0" />
              <div className="flex items-center justify-between flex-1 pr-4">
                <span className="font-bold truncate">{playlist.title}</span>
                <button className="w-12 h-12 rounded-full bg-spotify-green shadow-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:scale-105 active:scale-95 translate-x-1">
                  <ChevronRight className="text-black fill-black" size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Suggested Playlists */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold hover:underline cursor-pointer">Made For You</h2>
          <span className="text-sm font-bold text-spotify-gray hover:underline cursor-pointer">Show all</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {MOCK_PLAYLISTS.map((playlist) => (
            <AlbumCard key={playlist.id} playlist={playlist} />
          ))}
        </div>
      </section>

      {/* Recently Played Table */}
      <section className="mb-8">
         <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold hover:underline cursor-pointer">Jump back in</h2>
          <span className="text-sm font-bold text-spotify-gray hover:underline cursor-pointer">Show all</span>
        </div>
        <SongList songs={MOCK_SONGS} />
      </section>
      
      {/* Footer spacing */}
      <div className="h-20" />
    </div>
  );
};

export default MainContent;