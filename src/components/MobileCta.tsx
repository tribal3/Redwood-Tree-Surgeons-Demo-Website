import { Phone, Send } from "lucide-react";
import { business } from "../data/site";

type MobileCtaProps = {
  onQuoteClick: () => void;
};

export function MobileCta({ onQuoteClick }: MobileCtaProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-forest/10 bg-cream/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_40px_-28px_rgba(23,59,45,0.55)] backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-2 gap-2.5">
        <a href={business.phoneHref} className="btn-outline w-full !px-4 !py-3 text-[0.76rem]">
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call Now
        </a>
        <button
          type="button"
          onClick={onQuoteClick}
          className="btn-primary w-full !px-4 !py-3 text-[0.76rem]"
        >
          <Send className="h-4 w-4" aria-hidden="true" />
          Free Quote
        </button>
      </div>
    </div>
  );
}
