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
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DrSarah",
      username: "Dr. Sarah Chen",
      handle: "@dr_chen",
      timestamp: "2h",
      content:
        "Just completed a successful minimally invasive cardiac procedure! Amazing to see how new technologies are improving patient outcomes. #Cardiology #MedicalInnovation",
      images: [
        "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&auto=format&fit=crop&q=60",
      ],
      likes: 324,
      shares: 82,
      comments: 45,
      specialty: "Cardiology",
      hospital: "Metropolitan Heart Center",
      verified: true,
    },
    {
      id: "2",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DrJames",
      username: "Dr. James Wilson",
      handle: "@drwilson_neuro",
      timestamp: "4h",
      content:
        "Fascinating case study: Successfully treated a rare neurological condition using a combination of traditional and cutting-edge therapies. Always learning! #Neurology #MedicalResearch",
      images: [
        "https://images.unsplash.com/photo-1559757175-7b21e7afdd2b?w=800&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&auto=format&fit=crop&q=60",
      ],
      likes: 289,
      shares: 112,
      comments: 78,
      specialty: "Neurology",
      hospital: "Central Neuroscience Institute",
      verified: true,
    },
    {
      id: "3",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DrEmily",
      username: "Dr. Emily Rodriguez",
      handle: "@dr_rodriguez",
      timestamp: "6h",
      content:
        "Important reminder: Flu season is approaching! Schedule your vaccination appointment. Prevention is always better than cure. 💉 #PublicHealth #FluPrevention",
      images: [
        "https://images.unsplash.com/photo-1576765974026-d0aa7fe5b62f?w=800&auto=format&fit=crop&q=60",
      ],
      likes: 445,
      shares: 256,
      comments: 93,
      specialty: "Family Medicine",
      hospital: "Community Health Center",
      verified: true,
    },
  ]);

  const handleTweet = (content: string, images: string[]) => {
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
      images,
    };
    setTweets([newTweet, ...tweets]);
    setIsComposeOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onSearch={handleSearch} />

      <main className="flex w-full max-w-7xl mx-auto">
        <aside className="hidden md:block sticky top-16 h-[calc(100vh-4rem)]">
          <Sidebar
            activeItem="Home"
            onTweetClick={() => setIsComposeOpen(true)}
          />
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
                {[
                  "#COVID19Updates",
                  "#MedicalResearch",
                  "#PublicHealth",
                  "#HealthcareTech",
                  "#PatientCare",
                ].map((topic) => (
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
