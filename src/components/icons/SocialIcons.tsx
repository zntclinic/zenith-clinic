import { Instagram, Mail, MessageCircle } from "lucide-react";

interface IconProps {
  className?: string;
}

export const InstagramIcon = ({ className = "w-4 h-4" }: IconProps) => {
  return <Instagram className={className} />;
};

export const GmailIcon = ({ className = "w-4 h-4" }: IconProps) => {
  return <Mail className={className} />;
};

export const WhatsAppIcon = ({ className = "w-4 h-4" }: IconProps) => {
  return <MessageCircle className={className} />;
};
