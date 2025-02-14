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
  onTweet?: (content: string, images: string[]) => void;
}

const ComposeTweetModal = ({
  open = true,
  onClose = () => {},
  onTweet = () => {},
}: ComposeTweetModalProps) => {
  const [content, setContent] = React.useState("");
  const [images, setImages] = React.useState<string[]>([]);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleTweet = () => {
    onTweet(content, images);
    setContent("");
    setImages([]);
    onClose();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file),
      );
      setImages([...images, ...newImages]);
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-white sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Share Medical Update</DialogTitle>
        </DialogHeader>

        <div className="flex gap-4 p-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=current" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <Textarea
              placeholder="Share your medical insights, research, or updates..."
              className="min-h-[150px] border-none text-xl focus-visible:ring-0"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            {images.length > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-2">
                {images.map((img, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={img}
                      alt="Uploaded content"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-1 right-1 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => removeImage(index)}
                    >
                      ×
                    </Button>
                  </div>
                ))}
              </div>
            )}
            <div className="border-t mt-4 pt-4">
              <div className="flex items-center gap-4 text-primary">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={images.length >= 4}
                >
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
