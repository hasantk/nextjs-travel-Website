import { Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigationLinks } from "@/constans";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="p-3 lg:hidden bg-orange-500 cursor-pointer text-white rounded-full">
          <Menu />
        </div>
      </SheetTrigger>
      <SheetContent className="text-center font-bold">
        <SheetTitle className="text-5xl text-orange-500 pt-15">
          Travel
        </SheetTitle>
        <div className="mt-8 flex flex-col gap-4">
          {navigationLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="block hover:text-orange-500 text-xl"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
