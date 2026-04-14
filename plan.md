# Spotify-Themed Responsive UI Plan

Implement a high-fidelity, responsive Spotify-like frontend using React 19, Tailwind CSS v4, and Framer Motion.

## 1. Theme & Styling
- **Colors**:
  - `bg-spotify-black`: #121212
  - `bg-spotify-dark`: #000000
  - `bg-spotify-light`: #181818
  - `spotify-green`: #1DB954
  - `text-spotify-white`: #FFFFFF
  - `text-spotify-gray`: #A7A7A7
- **Typography**: Sans-serif (Circular-like via standard sans-serif stack).
- **Layout**: Fixed Sidebar (left), Fixed Playback Bar (bottom), Scrollable Main Content (center).

## 2. Components Structure (`src/components/`)
- `Sidebar.tsx`: Navigation links and user library.
- `MainContent.tsx`: Hero section, grid of playlists, and song lists.
- `PlaybackBar.tsx`: Media controls, progress bar, and volume slider.
- `AlbumCard.tsx`: Reusable card for playlists/albums.
- `SongList.tsx`: Row-based song display with hover states.
- `SearchBar.tsx`: Functional-looking search input.

## 3. Mock Data
- Create a set of mock playlists and songs to populate the UI.

## 4. Implementation Steps
1. **Dependencies**: Install `lucide-react` and `framer-motion`.
2. **Global CSS**: Update `src/index.css` with the Spotify color palette using Tailwind v4 variables.
3. **Components**: Build individual components with Tailwind classes.
4. **Images**: Generate 6-8 mock album cover images using `generate_images_bulk`.
5. **App.tsx**: Assemble the final layout.
6. **Verification**: Run `validate_build` to ensure everything is correct.
