import React, { useEffect, useState } from "react";
import TweetCard from "./TweetCard";
import { ScrollArea } from "../ui/scroll-area";

interface Tweet {
  id: string;
  avatar: string;
  username: string;
  handle: string;
  timestamp: string;
  content: string;
  likes: number;
  retweets: number;
  replies: number;
}

interface TweetFeedProps {
  tweets?: Tweet[];
  onLoadMore?: () => void;
}

const defaultTweets: Tweet[] = [
  {
    id: "1",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
    username: "Alice Johnson",
    handle: "@alice_j",
    timestamp: "2h",
    content:
      "Just launched my new project! Super excited to share it with everyone. #coding #webdev",
    likes: 124,
    retweets: 32,
    replies: 15,
  },
  {
    id: "2",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob",
    username: "Bob Smith",
    handle: "@bobsmith",
    timestamp: "4h",
    content: "Beautiful day for a coffee and some coding ☕️ #developerlife",
    likes: 89,
    retweets: 12,
    replies: 8,
  },
  {
    id: "3",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carol",
    username: "Carol White",
    handle: "@carol_codes",
    timestamp: "6h",
    content:
      "Just solved that tricky bug that&apos;s been bothering me for days! The solution was so simple in the end 😅",
    likes: 245,
    retweets: 56,
    replies: 23,
  },
];

const TweetFeed = ({
  tweets = defaultTweets,
  onLoadMore = () => {},
}: TweetFeedProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
    if (scrollHeight - scrollTop <= clientHeight * 1.5 && !isLoading) {
      setIsLoading(true);
      onLoadMore();
      setTimeout(() => setIsLoading(false), 1000); // Simulate loading delay
    }
  };

  return (
    <div className="w-full h-full bg-white border-x border-gray-200">
      <ScrollArea className="h-full" onScroll={handleScroll}>
        <div className="flex flex-col gap-4 p-4">
          {tweets.map((tweet) => (
            <TweetCard
              key={tweet.id}
              avatar={tweet.avatar}
              username={tweet.username}
              handle={tweet.handle}
              timestamp={tweet.timestamp}
              content={tweet.content}
              images={tweet.images}
              likes={tweet.likes}
              retweets={tweet.retweets}
              replies={tweet.replies}
            />
          ))}
          {isLoading && (
            <div className="p-4 text-center text-gray-500">
              Loading more tweets...
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TweetFeed;
