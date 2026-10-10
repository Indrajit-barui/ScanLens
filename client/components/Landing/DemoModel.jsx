import { X } from "lucide-react";

const DemoModel = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl bg-white p-5 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full bg-white p-2 shadow"
          aria-label="Close demo"
        >
          <X size={22} />
        </button>

        <h2 className="mb-4 text-xl font-bold text-slate-900">
          See ScamLens in Action
        </h2>

        <video
          controls
          autoPlay
          playsInline
          preload="metadata"
          className="w-full rounded-xl"
        >
          <source
            src="/video/demoVideo.mp4"
            type="video/mp4"
          />
          Your browser does not support video playback.
        </video>
      </div>
    </div>
  );
};

export default DemoModel;