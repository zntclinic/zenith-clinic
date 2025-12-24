import { useEffect, useState } from "react";

const HolidayMessage = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 3.5 seconds
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3500);

    // Remove from DOM after 4 seconds
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 4000);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <h2
        className={`text-4xl md:text-5xl font-bold text-center text-white transform transition-all duration-500 ${
          fadeOut ? "holiday-message-fadeout" : "holiday-message-fadein"
        }`}
        style={{
          pointerEvents: "none",
          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 255, 255, 0.5)",
        }}
      >
        ¡Felices Fiestas! 🎄
      </h2>
    </div>
  );
};

export default HolidayMessage;

