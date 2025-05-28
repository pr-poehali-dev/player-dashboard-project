import { Post } from "@/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), {
    addSuffix: true,
    locale: ru,
  });

  return (
    <Card className="bg-card border-gray-700 hover:border-game-purple/50 transition-all duration-300 animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-game-purple to-game-blue flex items-center justify-center text-white font-bold">
              {post.author.username[0]}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-rubik font-semibold text-white">
                  {post.author.username}
                </span>
                <span className="text-xl">{post.author.countryFlag}</span>
                <span className="text-xs bg-game-purple px-2 py-1 rounded text-white">
                  Lvl {post.author.level}
                </span>
              </div>
              <p className="text-sm text-gray-400">{post.author.country}</p>
            </div>
          </div>
          <span className="text-xs text-gray-500">{timeAgo}</span>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-gray-200 mb-4 leading-relaxed">{post.content}</p>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-red-400 hover:bg-red-400/10"
          >
            ❤️ {post.likes}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-game-blue hover:bg-game-blue/10"
          >
            💬 {post.comments}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostCard;
