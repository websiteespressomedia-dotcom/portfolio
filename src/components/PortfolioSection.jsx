import PortfolioCard from "./PortfolioCards";

const PortfolioSection = ({
  title,
  items,
  videoRefs,
  stopAllVideosExcept,
  onOpenFullscreen,
  hideTitle,
  gridCols,
}) => {
  return (
    <section className="mb-20">
      {!hideTitle && (
        <h2 className="text-3xl font-bold mb-8 text-white">
          {title}
        </h2>
      )}

      <div className={`grid ${gridCols} gap-6`}>
        {items.map((item) => (
          <PortfolioCard
            key={item.id}
            item={item}
            videoRefs={videoRefs}
            stopAllVideosExcept={stopAllVideosExcept}
            onOpenFullscreen={onOpenFullscreen}
          />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
