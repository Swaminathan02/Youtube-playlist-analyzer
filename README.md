# 🎬 YouTube Playlist Tracker
### [Live Demo](https://youtube-playlist-analyzer.onrender.com/)
A mini project built with **Node.js + Express.js** and a simple **HTML/CSS/JS frontend** that analyzes a YouTube playlist.  
It shows the **total videos, total duration**, and allows marking videos as **completed** with a progress tracker (based on video durations).  


## 🚀 Features
- Fetch YouTube playlist details (title, video count, durations).
- Calculate **total playlist duration** in real time.
- Track progress:
  - Completion is based on **video durations** (not just video count).
  - Dynamic **progress bar** updates as you mark videos complete.
- Frontend styled with modern UI.
- Each video has a direct **YouTube link** for quick access.


## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js, [ytpl](https://www.npmjs.com/package/ytpl)  
- **Frontend:** HTML, CSS, JavaScript  
- **Process Management (optional):** PM2 for auto-restart in production  
- **Deployment:** Works on platforms like Render
