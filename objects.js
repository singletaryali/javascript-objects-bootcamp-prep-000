var playlist = { keys: "song titles"};

function updatePlaylist (playlist, artistName,songTitle){
  playlist[artistName] = songTitle
  return playlist
}
