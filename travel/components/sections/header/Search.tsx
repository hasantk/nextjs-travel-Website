import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchPage = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="p-3 hidden lg:flex bg-orange-500 cursor-pointer text-white rounded-full">
          <Search />
        </div>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent className="bg-transparent border-none shadow-none">
          <DialogTitle></DialogTitle>

          <div className="mt-8 flex flex-row items-center justify-center gap-2">
            <Input placeholder="Search..." className="w-full py-6" />
            <Button className="py-6 bg-orange-500 hover:bg-orange-600">
              <Search />
            </Button>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default SearchPage;
