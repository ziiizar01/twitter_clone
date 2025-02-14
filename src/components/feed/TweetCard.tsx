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
  likes?: number;
  retweets?: number;
  replies?: number;
}

const TweetCard = ({
  avatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=default",
  username = "John Doe",
  handle = "@johndoe",
  timestamp = "1h",
  content = "This is a sample tweet showing what the card looks like with some default content. It demonstrates the layout and styling of the tweet card component.",
  likes = 42,
  retweets = 12,
  replies = 5,
}: TweetCardProps) => {
  return (
    <Card className="p-4 hover:bg-gray-50 transition-colors cursor-pointer border-b bg-white">
      <div className="flex space-x-4">
        <Avatar className="w-12 h-12">
          <AvatarImage src={avatar} alt={username} />
          <AvatarFallback>{username[0]}</AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="font-bold">{username}</span>
            <span className="text-gray-500">{handle}</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500">{timestamp}</span>
          </div>

          <p className="mt-2 text-gray-900">{content}</p>

          <div className="flex justify-between mt-4 max-w-md">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-blue-500"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              {replies}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-green-500"
            >
              <Repeat2 className="w-4 h-4 mr-2" />
              {retweets}
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
