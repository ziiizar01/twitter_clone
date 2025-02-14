import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search, Feather } from "lucide-react";

interface HeaderProps {
  onSearch?: (searchTerm: string) => void;
}

const Header = ({ onSearch = () => {} }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Feather className="h-8 w-8 text-[#1DA1F2]" />
        </div>

        <div className="flex-1 px-4 md:px-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              className="w-full bg-gray-100 pl-10 focus-visible:ring-[#1DA1F2]"
              placeholder="Search doctors, hospitals, or medical topics"
              type="search"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:flex" onClick={() => {}}>
            Sign in
          </Button>
          <Button
            className="bg-[#1DA1F2] hover:bg-[#1a8cd8]"
            onClick={() => {}}
          >
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
