import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Heart, MessageCircle, Repeat2, Share } from "lucide-react";
import { Card } from "../ui/card";

interface TweetCardProps {
  avatar?: string;
  username?: string;
  handle?: string;
  timestamp?: string;
  content?: string;
  images?: string[];
  likes?: number;
  shares?: number;
  comments?: number;
  specialty?: string;
  hospital?: string;
  verified?: boolean;
}

const TweetCard = ({
  avatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=default",
  username = "John Doe",
  handle = "@johndoe",
  timestamp = "1h",
  content = "This is a sample tweet showing what the card looks like with some default content. It demonstrates the layout and styling of the tweet card component.",
  images = [],
  likes = 42,
  shares = 12,
  comments = 5,
  specialty = "General Medicine",
  hospital = "Central Hospital",
  verified = false,
}: TweetCardProps) => {
  return (
    <Card className="p-4 hover:bg-gray-50 transition-colors cursor-pointer border-b bg-white">
      <div className="flex space-x-4">
        <Avatar className="w-12 h-12">
          <AvatarImage src={avatar} alt={username} />
          <AvatarFallback>{username[0]}</AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="font-bold">{username}</span>
              {verified && (
                <svg
                  className="w-4 h-4 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.707 6.707l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L9 10.586l3.293-3.293a1 1 0 011.414 1.414z" />
                </svg>
              )}
              <span className="text-gray-500">{handle}</span>
              <span className="text-gray-500">·</span>
              <span className="text-gray-500">{timestamp}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <span className="font-medium text-blue-600">{specialty}</span>
              <span className="mx-2">·</span>
              <span>{hospital}</span>
            </div>
          </div>

          <p className="mt-2 text-gray-900">{content}</p>

          {images && images.length > 0 && (
            <div
              className={`mt-3 grid gap-2 ${images.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}
            >
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Tweet content"
                  className="w-full rounded-lg object-cover"
                  style={{ height: images.length === 1 ? "300px" : "200px" }}
                />
              ))}
            </div>
          )}

          <div className="flex justify-between mt-4 max-w-md">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-blue-500"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              {comments}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-green-500"
            >
              <Repeat2 className="w-4 h-4 mr-2" />
              {shares}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-red-500"
            >
              <Heart className="w-4 h-4 mr-2" />
              {likes}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-blue-500"
            >
              <Share className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TweetCard;
