// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";

const CinematicModal = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] bg-black flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onContextMenu={(e) => e.preventDefault()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white text-3xl"
        >
          <HiX />
        </button>

        <motion.video
          src={video}
          autoPlay
          controls
          playsInline
          disablePictureInPicture
          controlsList="nodownload noplaybackrate"
          onContextMenu={(e) => e.preventDefault()}
          className="max-w-[90vw] max-h-[90vh] rounded-xl"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default CinematicModal;
