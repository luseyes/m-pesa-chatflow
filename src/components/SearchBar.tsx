import { Search as SearchIcon, X } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState("");

  return (
    <div className="relative group w-full max-w-[364px]">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <SearchIcon size={20} className="text-spotify-gray group-focus-within:text-white transition-colors" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What do you want to listen to?"
        className="w-full bg-[#242424] hover:bg-[#2a2a2a] border-none focus:ring-2 focus:ring-white h-12 pl-10 pr-10 rounded-full text-sm font-medium placeholder:text-spotify-gray transition-colors outline-none"
      />
      {value && (
        <button 
          onClick={() => setValue("")}
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
        >
          <X size={18} className="text-spotify-gray hover:text-white transition-colors" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;