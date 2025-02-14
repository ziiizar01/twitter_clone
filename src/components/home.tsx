import React, { useState } from "react";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import TweetFeed from "./feed/TweetFeed";
import ComposeButton from "./tweet/ComposeButton";
import ComposeTweetModal from "./tweet/ComposeTweetModal";

const Home = () => {
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    // Implement search functionality here
  };

  const [tweets, setTweets] = useState([
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
  ]);

  const handleTweet = (content: string) => {
    const newTweet = {
      id: Date.now().toString(),
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=current",
      username: "Current User",
      handle: "@currentuser",
      timestamp: "now",
      content,
      likes: 0,
      retweets: 0,
      replies: 0,
    };
    setTweets([newTweet, ...tweets]);
    setIsComposeOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onSearch={handleSearch} />

      <main className="flex w-full max-w-7xl mx-auto">
        <aside className="hidden md:block sticky top-16 h-[calc(100vh-4rem)]">
          <Sidebar activeItem="Home" />
        </aside>

        <div className="flex-1 min-h-[calc(100vh-4rem)] border-x border-gray-200">
          <TweetFeed
            tweets={tweets}
            onLoadMore={() => {
              // Implement load more functionality here
              console.log("Loading more tweets...");
            }}
          />
        </div>

        <div className="hidden lg:block w-[350px]">
          {/* Right sidebar - could be used for trends, who to follow, etc */}
          <div className="sticky top-16 p-4">
            <div className="rounded-xl bg-gray-50 p-4">
              <h2 className="font-bold text-xl mb-4">What's happening</h2>
              <div className="space-y-4">
                {/* Placeholder trending topics */}
                {["#Trending1", "#Trending2", "#Trending3"].map((topic) => (
                  <div
                    key={topic}
                    className="cursor-pointer hover:bg-gray-100 p-2 rounded"
                  >
                    <p className="font-medium">{topic}</p>
                    <p className="text-sm text-gray-500">50.4K Tweets</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <ComposeButton onClick={() => setIsComposeOpen(true)} />

      <ComposeTweetModal
        open={isComposeOpen}
        onClose={() => setIsComposeOpen(false)}
        onTweet={handleTweet}
      />
    </div>
  );
};

export default Home;
