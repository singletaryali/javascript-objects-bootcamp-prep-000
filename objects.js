var playlist = { keys: "song titles"};

function updatePlaylist (playlist, artistName,songTitle){
  playlist[artistName] = songTitle
  return playlist
}
function removeFromPlaylist (playlist,artistName){
 artistName[playlist] = playlist
  delete playlist.artistName;
}