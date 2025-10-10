import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "34628521662";
  const message = "Hola, me gustaría obtener más información sobre los servicios de Zenith Clinic.";
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full p-4 shadow-elegant hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} />
    </button>
  );
};
