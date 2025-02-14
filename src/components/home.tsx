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

  const handleTweet = (content: string) => {
    // Implement tweet posting functionality here
    console.log("New tweet:", content);
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
