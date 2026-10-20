"use client";

import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

// Real-video reel. preload="metadata" fetches only enough to show the first
// frame; the full clip downloads on tap. No autoplay; sound only on a user
// gesture. `poster` (set in data/site.js) is shown before playback starts.
// `badge` is the format label (REEL / AI VIDEO) shown over the frame.
export default function ReelPlayer({ item, badge }) {
  const vref = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = vref.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div className={"reel-frame reel--" + item.kind}>
      <video
        ref={vref}
        className="reel-video"
        src={item.video}
        poster={item.poster || undefined}
        playsInline
        loop
        preload="metadata"
        controls={playing}
        onClick={toggle}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      {!playing && (
        <>
          <span className="reel-shade" aria-hidden="true" />
          <span className="reel-top">
            {badge && (
              <span className={"reel-tag reel-tag--" + item.format}>
                {badge}
              </span>
            )}
            <span className="reel-cat">{item.category}</span>
          </span>
          <button
            className="reel-play reel-play-btn"
            onClick={toggle}
            aria-label={`${item.title} play karein`}
          >
            <Play size={22} strokeWidth={2} fill="currentColor" />
          </button>
        </>
      )}

      {playing && (
        <button className="reel-pausehint" onClick={toggle} aria-label="Pause">
          <Pause size={16} />
        </button>
      )}
    </div>
  );
}
