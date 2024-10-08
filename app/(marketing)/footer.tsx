import { Button } from "@/components/ui/button";
import RSFlag from "@/public/rs.svg";
import ESFlag from "@/public/es.svg";
import FRFlag from "@/public/fr.svg";
import ITFlag from "@/public/it.svg";
import JPFlag from "@/public/jp.svg";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src={RSFlag}
            alt="RSFlag"
            height={32}
            width={32}
            className="mr-4 rounded-md"
          />
          Serbian
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src={ESFlag}
            alt="ESFlag"
            height={32}
            width={32}
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src={FRFlag}
            alt="FRFlag"
            height={32}
            width={32}
            className="mr-4 rounded-md"
          />
          French
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src={ITFlag}
            alt="ITFlag"
            height={32}
            width={32}
            className="mr-4 rounded-md"
          />
          Italian
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src={JPFlag}
            alt="JPFlag"
            height={32}
            width={32}
            className="mr-4 rounded-md"
          />
          Japanese
        </Button>
      </div>
    </footer>
  );
};
