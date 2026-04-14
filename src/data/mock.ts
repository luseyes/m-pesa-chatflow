export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  cover: string;
  addedAt: string;
}

export interface Playlist {
  id: string;
  title: string;
  description: string;
  cover: string;
  type: 'Playlist' | 'Album';
}

export const MOCK_PLAYLISTS: Playlist[] = [
  {
    id: '1',
    title: 'Synthwave Night',
    description: 'Electric dreams and neon lights.',
    cover: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bd829899-57e2-4919-96be-75a12f138626/synthwave-cover-841cb02d-1776159218440.webp',
    type: 'Playlist'
  },
  {
    id: '2',
    title: 'Lo-Fi Chill Beats',
    description: 'Cozy vibes for your study sessions.',
    cover: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bd829899-57e2-4919-96be-75a12f138626/lofi-chill-cover-c72e7cb1-1776159218240.webp',
    type: 'Playlist'
  },
  {
    id: '3',
    title: 'Workout High Pop',
    description: 'The energy you need to push through.',
    cover: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bd829899-57e2-4919-96be-75a12f138626/workout-pop-cover-97987f41-1776159217697.webp',
    type: 'Album'
  },
  {
    id: '4',
    title: 'Deep Techno',
    description: 'Minimalist industrial textures.',
    cover: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bd829899-57e2-4919-96be-75a12f138626/deep-techno-cover-e9ee6328-1776159217441.webp',
    type: 'Playlist'
  },
  {
    id: '5',
    title: 'Piano Essentials',
    description: 'Soft lighting and sophisticated keys.',
    cover: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bd829899-57e2-4919-96be-75a12f138626/piano-essentials-cover-2e36b592-1776159217171.webp',
    type: 'Album'
  },
  {
    id: '6',
    title: 'Rainy Day Acoustic',
    description: 'Organic textures for a slow day.',
    cover: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bd829899-57e2-4919-96be-75a12f138626/rainy-day-cover-4ef71629-1776159218124.webp',
    type: 'Playlist'
  }
];

export const MOCK_SONGS: Song[] = [
  {
    id: '1',
    title: 'Nightcall',
    artist: 'Kavinsky',
    album: 'OutRun',
    duration: '4:18',
    cover: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bd829899-57e2-4919-96be-75a12f138626/synthwave-cover-841cb02d-1776159218440.webp',
    addedAt: '2 days ago'
  },
  {
    id: '2',
    title: 'Midnight City',
    artist: 'M83',
    album: "Hurry Up, We're Dreaming",
    duration: '4:03',
    cover: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bd829899-57e2-4919-96be-75a12f138626/synthwave-cover-841cb02d-1776159218440.webp',
    addedAt: '1 week ago'
  },
  {
    id: '3',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    duration: '3:20',
    cover: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bd829899-57e2-4919-96be-75a12f138626/workout-pop-cover-97987f41-1776159217697.webp',
    addedAt: '3 hours ago'
  },
  {
    id: '4',
    title: 'Stressed Out',
    artist: 'Twenty One Pilots',
    album: 'Blurryface',
    duration: '3:22',
    cover: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bd829899-57e2-4919-96be-75a12f138626/lofi-chill-cover-c72e7cb1-1776159218240.webp',
    addedAt: 'Yesterday'
  },
  {
    id: '5',
    title: 'Lose Yourself',
    artist: 'Eminem',
    album: '8 Mile',
    duration: '5:26',
    cover: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bd829899-57e2-4919-96be-75a12f138626/workout-pop-cover-97987f41-1776159217697.webp',
    addedAt: '4 days ago'
  }
];