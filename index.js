const express = require("express");
const ytpl = require("ytpl");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000
app.use(express.static(path.join(__dirname, "public")));

function durationToSeconds(duration) {
  if (!duration) return 0;
  const parts = duration.split(":").map(Number).reverse();
  let seconds = 0;
  if (parts[0]) seconds += parts[0];
  if (parts[1]) seconds += parts[1] * 60;
  if (parts[2]) seconds += parts[2] * 3600;
  return seconds;
}

function calc(seconds) {
    let time = Math.floor(seconds/3600) + ' hrs : ';
    seconds %= 3600;
    time += Math.floor(seconds / 60) + ' min : ';
    seconds %= 60;
    time += Math.floor(seconds) + ' sec';
    return time;
}

app.get("/", (req, res) => {
  res.send("Jai Shree Ram");
});

app.get("/playlist/:id", async (req, res) => {
  try {
    const playlistIdOrUrl = req.params.id;
    const playlist = await ytpl(playlistIdOrUrl, { limit: Infinity });

    let totalSeconds = 0;
    playlist.items.forEach((video) => {
      totalSeconds += durationToSeconds(video.duration);
    });

    res.json({
      title: playlist.title,
      totalVideos: playlist.items.length,
      totalTimeSeconds: totalSeconds,
      totalTimeFormatted: calc(totalSeconds),
      videos: playlist.items.map((v) => ({
        title: v.title,
        id: v.id,
        duration: v.duration,
      })),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
