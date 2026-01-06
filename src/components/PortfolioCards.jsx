/* eslint-disable react-hooks/immutability */
import { HiVolumeOff, HiVolumeUp, HiPlay, HiPause } from "react-icons/hi";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const PortfolioCard = ({
  item,
  videoRefs,
  stopAllVideosExcept,
  onOpenFullscreen,
}) => {
  const [isMuted, setIsMuted] = useState(false); // 🔥 sound ON by default
  const [isPlaying, setIsPlaying] = useState(false);

  // 🌐 360 PREVIEW
  if (item.type === "external") {
    return (
      <motion.div className="relative overflow-hidden rounded-2xl shadow-xl h-[60vh] bg-black">
        <iframe
          src={item.url}
          className="absolute inset-0 w-full h-full"
          loading="lazy"
          sandbox="allow-same-origin allow-scripts allow-popups"
          allowFullScreen
        />
      </motion.div>
    );
  }

  // ▶ PLAY / PAUSE VIDEO
  const togglePlay = (e) => {
    e.stopPropagation();
    const video = videoRefs.current[item.id];
    if (!video) return;

    if (video.paused) {
      stopAllVideosExcept(item.id);
      video.muted = isMuted;
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // 🔊 MUTE / UNMUTE (NO PLAY STOP)
  const toggleMute = (e) => {
    e.stopPropagation();
    const video = videoRefs.current[item.id];
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-2xl shadow-xl bg-neutral-900 group
        ${item.type === "reel" ? "aspect-[9/16]" : ""}
        ${item.type === "landscape" ? "aspect-video" : ""}
      `}
      whileHover={{ scale: 1.04 }}
    >
      {/* VIDEO */}
      <video
        ref={(el) => (videoRefs.current[item.id] = el)}
        src={item.video}
        preload="metadata"
        muted={isMuted}
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ▶ PLAY / ⏸ PAUSE */}
      <button
        onClick={togglePlay}
        className="absolute inset-0 flex items-center justify-center bg-black/40"
      >
        {isPlaying ? (
          <HiPause size={52} className="text-white opacity-90" />
        ) : (
          <HiPlay size={52} className="text-white opacity-90" />
        )}
      </button>

      {/* 🔊 MUTE BUTTON */}
      <button
        onClick={toggleMute}
        className="absolute bottom-3 right-3 bg-black/70 text-white p-2 rounded-full z-20"
      >
        {isMuted ? <HiVolumeOff /> : <HiVolumeUp />}
      </button>

      {/* FULLSCREEN */}
      <button
        onClick={() => onOpenFullscreen(item.video)}
        className="absolute bottom-3 left-3 bg-white/90 text-black text-sm font-semibold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        Watch Fullscreen
      </button>
    </motion.div>
  );
};

export default PortfolioCard;
