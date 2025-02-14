import React from "react";
import { Button } from "../ui/button";
import { Pencil } from "lucide-react";

interface ComposeButtonProps {
  onClick?: () => void;
}

const ComposeButton = ({ onClick = () => {} }: ComposeButtonProps) => {
  return (
    <Button
      className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-[#1DA1F2] hover:bg-[#1a91da] shadow-lg flex items-center justify-center p-0"
      onClick={onClick}
    >
      <Pencil className="h-6 w-6 text-white" />
    </Button>
  );
};

export default ComposeButton;
