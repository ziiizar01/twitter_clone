import React from "react";
import { Home, User, MessageCircle, Settings } from "lucide-react";
import { Button } from "../ui/button";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem = ({ icon, label, active = false }: NavItemProps) => (
  <Button
    variant="ghost"
    className={`w-full justify-start text-xl gap-4 px-4 ${active ? "font-bold" : ""}`}
  >
    {icon}
    {label}
  </Button>
);

interface SidebarProps {
  activeItem?: string;
  onTweetClick?: () => void;
}

const Sidebar = ({ activeItem = "Home", onTweetClick }: SidebarProps) => {
  const navItems = [
    { icon: <Home className="w-6 h-6" />, label: "Home" },
    { icon: <MessageCircle className="w-6 h-6" />, label: "Messages" },
    { icon: <User className="w-6 h-6" />, label: "Profile" },
    { icon: <Settings className="w-6 h-6" />, label: "Settings" },
  ];

  return (
    <div className="w-[275px] h-full p-4 border-r bg-white">
      <div className="flex flex-col gap-2">
        {/* Navigation Items */}
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={activeItem === item.label}
          />
        ))}

        {/* Tweet Button */}
        <Button
          className="mt-4 bg-[#1DA1F2] text-white hover:bg-[#1a8cd8] rounded-full"
          onClick={onTweetClick}
        >
          Tweet
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
