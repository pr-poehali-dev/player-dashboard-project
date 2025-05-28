import { useState } from "react";
import Navigation from "@/components/Navigation";
import PostCard from "@/components/PostCard";
import CountryFilter from "@/components/CountryFilter";
import { mockPosts } from "@/data/mockData";

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const filteredPosts = selectedCountry
    ? mockPosts.filter((post) => post.author.country === selectedCountry)
    : mockPosts;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-oswald font-bold text-white mb-4">
            Игровое сообщество
          </h2>
          <p className="text-gray-400 text-lg">
            Делитесь своими достижениями с игроками со всего мира
          </p>
        </div>

        <CountryFilter
          selectedCountry={selectedCountry}
          onCountrySelect={setSelectedCountry}
        />

        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎮</div>
            <p className="text-gray-400 text-lg">
              Пока нет постов от игроков из {selectedCountry}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
