import { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar2";
import PortfolioSection from "../components/PortfolioSection";
import CinematicModal from "../components/CinematicModal";
import { generatePortfolioItems } from "../data/portfolioData";

const Portfolio2 = () => {
  const videoRefs = useRef({});
  const [active, setActive] = useState("All");
  const [fullscreenVideo, setFullscreenVideo] = useState(null);

  // 🔥 Stop all videos except current
  const stopAllVideosExcept = (currentId) => {
    Object.entries(videoRefs.current).forEach(([id, video]) => {
      if (!video) return;
      if (Number(id) !== currentId) {
        video.pause();
        video.currentTime = 0;
        video.muted = true;
      }
    });
  };

  const items = generatePortfolioItems();

  const filtered =
    active === "All" ? items : items.filter((i) => i.category === active);

  const grouped = filtered.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

  // 🎯 GRID RULES (LG FIXED)
  const getGridCols = (category) => {
    switch (category) {
      // 🎞 REELS → 3
      case "3D Products Animation":
      case "Social Media Strategy & Content Creation":
      case "Social Media Designs":
      case "Reels":
        return "grid-cols-2 md:grid-cols-2 lg:grid-cols-3";

      // 🎬 LANDSCAPE → 2
      case "Landscape":
      case "Videography":
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-2";

      // 🌐 360 → 1 CENTER
      case "360 Previews":
        return "grid-cols-1";

      default:
        return "grid-cols-2 md:grid-cols-4 lg:grid-cols-6";
    }
  };

  return (
    <div className="bg-[#4A2D1D] min-h-screen text-white">
      <Helmet>
        <title>Portfolio - Creative Works | 3D Animations, Photography, Reels</title>
        <meta name="description" content="Explore a stunning portfolio of creative works including 3D product animations, landscape photography, videography, social media content, and cinematic reels." />
        <meta name="keywords" content="portfolio, 3D animation, photography, videography, reels, creative works, social media" />
        <meta property="og:title" content="Portfolio - Creative Works" />
        <meta property="og:description" content="Showcasing innovative 3D animations, photography, and video content." />
        <meta property="og:image" content="/vite.svg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio - Creative Works" />
        <meta name="twitter:description" content="Explore creative portfolios in 3D, photography, and video." />
      </Helmet>
      <Navbar active={active} setActive={setActive} />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {Object.entries(grouped).map(([category, items]) => (
          <PortfolioSection
            key={category}
            title={category}
            items={items}
            videoRefs={videoRefs}
            stopAllVideosExcept={stopAllVideosExcept}
            onOpenFullscreen={(v) => setFullscreenVideo(v)}
            hideTitle={active !== "All"}
            gridCols={getGridCols(category)}
          />
        ))}
      </div>

      <CinematicModal
        video={fullscreenVideo}
        onClose={() => setFullscreenVideo(null)}
      />
    </div>
  );
};

export default Portfolio2;
