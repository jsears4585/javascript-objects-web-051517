var playlist = {
  "Admiration of Anger" : "Disfiguring the Goddess"
};

var updatePlaylist = (playlist, artistName, songTitle) => {
  playlist[artistName] = songTitle;
}

var removeFromPlaylist = (playlist, artistName) => {
  delete playlist[artistName];
}
