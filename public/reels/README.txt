Reel clips — source & licence
-----------------------------
All clips and poster images from Pexels (https://www.pexels.com) — Pexels
Licence: free for commercial use, no attribution required, modification
allowed. Each .mp4 has a matching .jpg used as the <video> poster.

restaurant.mp4  540x960  Indian thali   https://www.pexels.com/video/person-holding-foods-on-a-tray-9346264/
salon.mp4       360x640  Bridal look    https://www.pexels.com/video/29575335/
jewellery.mp4   540x960  Gold earrings  https://www.pexels.com/video/8844332/

Replace any file with your own footage using the same filename and it will
just work (paths are set in data/site.js -> reels.items[].video / .poster).
Keep clips vertical (9:16), short and under ~4 MB.
Tip: compress with ffmpeg, e.g.
  ffmpeg -i in.mp4 -vf "scale=540:-2" -c:v libx264 -crf 30 -preset veryfast -t 12 out.mp4
