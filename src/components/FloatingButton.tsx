import { useState } from "react";
import { FiPhone } from "react-icons/fi";

const FloatingButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="z-90 h-15 w-15 fixed bottom-10 right-8 flex">
      <button
        onClick={() => setShowPopup(!showPopup)}
        title="Contact Sale"
        className="items-center justify-center rounded-full bg-zinc-500/20 text-4xl text-black/75 drop-shadow-lg duration-300 hover:bg-fuchsia-500 hover:drop-shadow-2xl dark:bg-zinc-500/20 dark:text-white dark:hover:bg-fuchsia-500"
      >
        <div className="p-2">
          <FiPhone size={20} />
        </div>
      </button>
    </div>
  );
};

export default FloatingButton;
