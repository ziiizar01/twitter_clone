import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ImageIcon, SmileIcon, CalendarIcon } from "lucide-react";

interface ComposeTweetModalProps {
  open?: boolean;
  onClose?: () => void;
  onTweet?: (content: string) => void;
}

const ComposeTweetModal = ({
  open = true,
  onClose = () => {},
  onTweet = () => {},
}: ComposeTweetModalProps) => {
  const [content, setContent] = React.useState("");

  const handleTweet = () => {
    onTweet(content);
    setContent("");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-white sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Compose Tweet</DialogTitle>
        </DialogHeader>

        <div className="flex gap-4 p-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=current" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <Textarea
              placeholder="What's happening?"
              className="min-h-[150px] border-none text-xl focus-visible:ring-0"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            <div className="border-t mt-4 pt-4">
              <div className="flex items-center gap-4 text-primary">
                <Button variant="ghost" size="icon">
                  <ImageIcon className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <SmileIcon className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <CalendarIcon className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter>
          <div className="flex items-center justify-between w-full">
            <span className="text-sm text-gray-500">
              {280 - content.length} characters remaining
            </span>
            <Button
              onClick={handleTweet}
              disabled={!content.trim() || content.length > 280}
              className="bg-primary hover:bg-primary/90"
            >
              Tweet
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ComposeTweetModal;
