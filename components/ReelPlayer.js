"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";
import { useReducedMotion } from "motion/react";

// Real-video reel. Plays muted and looping while the card is on screen (like a
// feed), pauses when it scrolls away so nothing downloads or runs in the
// background. Tap the frame to pause/resume, the speaker button for sound.
// Reduced motion: nothing autoplays, the card waits for a tap.
// `poster` (set in data/site.js) shows before the first frame is decoded.
export default function ReelPlayer({ item, badge }) {
  const vref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const reduce = useReducedMotion();

  // Autoplay only while at least half the card is visible.
  useEffect(() => {
    const v = vref.current;
    if (!v || reduce) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.5 }
    );

    io.observe(v);
    return () => io.disconnect();
  }, [reduce]);

  const toggle = () => {
    const v = vref.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  const toggleSound = (e) => {
    e.stopPropagation();
    const v = vref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (v.paused) v.play().catch(() => {});
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
        muted={muted}
        preload="metadata"
        onClick={toggle}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      <span className="reel-shade" aria-hidden="true" />

      <span className="reel-top">
        {badge && (
          <span className={"reel-tag reel-tag--" + item.format}>{badge}</span>
        )}
        <span className="reel-cat">{item.category}</span>
      </span>

      {!playing && (
        <button
          className="reel-play reel-play-btn"
          onClick={toggle}
          aria-label={`${item.title} play`}
        >
          <Play size={22} strokeWidth={2} fill="currentColor" />
        </button>
      )}

      <button
        className="reel-sound"
        onClick={toggleSound}
        aria-label={muted ? "Turn sound on" : "Turn sound off"}
      >
        {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
      </button>
    </div>
  );
}
