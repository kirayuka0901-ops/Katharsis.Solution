/**
 * EDIT YOUR SPOTIFY PLAYLISTS HERE
 * Copy a playlist URL from Spotify and paste it into `url`.
 * Example: https://open.spotify.com/playlist/your-playlist-id
 */
export type PlaylistLink = { name: string; description?: string; url: string };

export const playlists: PlaylistLink[] = [
    { name: "Playlist one", description: "Add a genre or short description", url: "https://open.spotify.com/" },
    { name: "Playlist two", description: "Another playlist", url: "https://open.spotify.com/" },
    { name: "Playlist three", description: "Your music, your selection", url: "https://open.spotify.com/" },
];
