// Auto-import all videos
const productAnimationVideos = import.meta.glob("../assets/3d product animation/*.mkv", { eager: true });
const socialMediaVideos = import.meta.glob("../assets/social media/*.mp4", { eager: true });
const photographyVideos = import.meta.glob("../assets/Photograhy/*.mp4", { eager: true });
const reelVideos = import.meta.glob("../assets/Reel/*.mp4", { eager: true });
const landscapeVideos = import.meta.glob("../assets/Landscape/*.mp4", { eager: true });

// ---------- FIX ORDER: Sort by filename ----------
const sortByFileName = (videos) => {
  return Object.entries(videos).sort((a, b) => {
    const nameA = a[0].split("/").pop().toLowerCase();
    const nameB = b[0].split("/").pop().toLowerCase();
    return nameA.localeCompare(nameB, undefined, { numeric: true });
  });
};

export const generatePortfolioItems = () => {
  const items = [];
  let id = 1;

  const pushItems = (videos, type, category) => {
    sortByFileName(videos).forEach(([path, mod]) => {
      const isMkv = path.endsWith('.mkv');
      items.push({
        id: id++,
        type,
        video: mod.default,
        title: path.split("/").pop().replace(isMkv ? ".mkv" : ".mp4", ""),
        category,
      });
    });
  };

  pushItems(productAnimationVideos, "reel", "3D Products Animation");
  pushItems(socialMediaVideos, "reel", "Social Media Strategy & Content Creation");
  pushItems(photographyVideos, "landscape", "Videography");
  pushItems(reelVideos, "reel", "Reels");
  pushItems(landscapeVideos, "landscape", "Landscape");

  // 360 items
  items.push(
    {
      id: id++,
      type: "external",
      title: "360 Preview - Ashford Tunisia",
      url: "https://aevitasceramic.com/ashfordtunisia/",
      category: "360 Previews",
    },
    {
      id: id++,
      type: "external",
      title: "360 Preview - Vera White",
      url: "https://aevitasceramic.com/verawhite/",
      category: "360 Previews",
    },
    {
      id: id++,
      type: "external",
      title: "360 Preview - Fog White",
      url: "https://aevitasceramic.com/fogwhite/",
      category: "360 Previews",
    }
  );

  return items;
};
