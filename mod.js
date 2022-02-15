
module.exports = {
  title: "Komm Susser Game Over", 
  summary: "Replaces audio on 00801",
  author: "waitingforrobots",
  modVersion: 0.1,
  locked: "002000",

  description: `Replaces audio on page 008801 with Komm Susser Tod from End of Evangelion.`,

  routes: {
    'assets://storyfiles/hs2/06898/gameover.mp3': './gameover.mp3',
  },
  
	edit(archive) {
		const unite = archive.mspa.story['008801']
    archive.audioData[unite.media[0]] = [
      {
        href: `assets://storyfiles/hs2/06898/gameover.mp3`,
      },
    ]
    archive.music.flashes['008801'] = {
      "date": "2012-07-09T01:00:00.000Z",
      "tracks": [ "Komm Susser Tod - The End of Evangelion" ]
    }
	}
}
