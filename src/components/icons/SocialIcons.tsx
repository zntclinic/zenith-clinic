import InstagramSvg from "@/assets/icons/instagram.svg?react";
import GmailSvg from "@/assets/icons/gmail.svg?react";
import WhatsAppSvg from "@/assets/icons/whatsapp.svg?react";

interface IconProps {
  className?: string;
}

export const InstagramIcon = ({ className = "w-4 h-4 text-black" }: IconProps) => {
  return (
    <InstagramSvg className={className} />
  );
};

export const GmailIcon = ({ className = "w-4 h-4 text-black" }: IconProps) => {
  return (
    <GmailSvg className={className} />
  );
};

export const WhatsAppIcon = ({ className = "w-4 h-4 text-black" }: IconProps) => {
  return (
    <WhatsAppSvg className={className} />
  );
};
