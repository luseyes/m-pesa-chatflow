import React from "react";
import { Home, Search, Library, Plus, Heart } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full bg-spotify-black w-[240px] p-2 space-y-2 select-none">
      {/* Home and Search section */}
      <div className="bg-spotify-light rounded-lg p-3 px-4 space-y-4">
        <SidebarLink icon={<Home size={24} />} label="Home" active />
        <SidebarLink icon={<Search size={24} />} label="Search" />
      </div>

      {/* Your Library section */}
      <div className="flex-1 bg-spotify-light rounded-lg flex flex-col min-h-0 overflow-hidden">
        <div className="p-3 px-4 flex items-center justify-between text-spotify-gray hover:text-white transition-colors cursor-pointer group">
          <div className="flex items-center gap-3">
            <Library size={24} />
            <span className="font-bold text-sm">Your Library</span>
          </div>
          <Plus size={20} className="hover:bg-white/10 rounded-full p-0.5" />
        </div>

        {/* Library Filters */}
        <div className="px-4 pb-2 flex gap-2 overflow-x-auto no-scrollbar">
          <Badge label="Playlists" />
          <Badge label="Artists" />
          <Badge label="Albums" />
        </div>

        {/* Playlists List */}
        <div className="flex-1 overflow-y-auto px-2 py-1 space-y-1">
          <div className="flex items-center gap-3 p-2 rounded-md hover:bg-white/5 cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-700 to-blue-300 rounded-md flex items-center justify-center">
              <Heart size={20} className="text-white fill-white" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-medium truncate">Liked Songs</span>
              <span className="text-xs text-spotify-gray">Playlist • 128 songs</span>
            </div>
          </div>
          
          {[...Array(15)].map((_, i) => (
            <div key={i} className="flex items-center gap-3 p-2 rounded-md hover:bg-white/5 cursor-pointer group">
              <div className="w-12 h-12 bg-[#282828] rounded-md shrink-0"></div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-medium truncate">My Playlist #{i + 1}</span>
                <span className="text-xs text-spotify-gray">Playlist • User</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SidebarLink = ({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) => (
  <div className={`flex items-center gap-4 cursor-pointer transition-colors duration-200 ${active ? "text-white" : "text-spotify-gray hover:text-white"}`}>
    {icon}
    <span className="font-bold text-sm">{label}</span>
  </div>
);

const Badge = ({ label }: { label: string }) => (
  <button className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap transition-colors">
    {label}
  </button>
);

export default Sidebar;