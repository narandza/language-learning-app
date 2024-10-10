import { cn } from "@/lib/utils";
import Mascot from "@/public/mascot.svg";
import Image from "next/image";

import Link from "next/link";
import HomeIcon from "@/public/learn.svg";
import LeaderboardIcon from "@/public/leaderboard.svg";
import ShopIcon from "@/public/shop.svg";
import QuestsIcon from "@/public/quests.svg";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "h-full lg:w-[256px] lg:fixed flex left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-4 flex items-center gap-x-3">
          <Image src={Mascot} height={40} width={40} alt="mascot" />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            LingoQuest
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="learn" href="/learn" iconSrc={HomeIcon} />
        <SidebarItem
          label="leaderboard"
          href="/leaderboard"
          iconSrc={LeaderboardIcon}
        />
        <SidebarItem label="quests" href="/quests" iconSrc={QuestsIcon} />
        <SidebarItem label="shop" href="/shop" iconSrc={ShopIcon} />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="size-5 animate-spin text-muted-foreground" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton />
        </ClerkLoaded>
      </div>
    </div>
  );
};
