import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { countries } from "@/data/mockData";
import Icon from "@/components/ui/icon";

const Dashboard = () => {
  const [postData, setPostData] = useState({
    content: "",
    country: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement post creation logic
    console.log("New post:", postData);
    // Reset form
    setPostData({ content: "", country: "" });
    alert("Пост создан!");
  };

  // Mock current user data
  const currentUser = {
    username: "ShadowHunter",
    level: 45,
    country: "Россия",
    countryFlag: "🇷🇺",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-game-dark border-b border-gray-700 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="text-2xl">🎮</div>
            <h1 className="text-2xl font-oswald font-bold text-white">
              GameHub
            </h1>
          </Link>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-white">
              <span>{currentUser.countryFlag}</span>
              <span className="font-medium">{currentUser.username}</span>
              <span className="text-game-purple text-sm">
                Lv.{currentUser.level}
              </span>
            </div>
            <Button variant="outline" className="border-gray-600 text-gray-300">
              Выйти
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* User Profile Card */}
          <div className="lg:col-span-1">
            <Card className="bg-card border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Icon name="User" size={20} />
                  <span>Профиль</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-6xl mb-2">🎮</div>
                  <h3 className="text-xl font-bold text-white">
                    {currentUser.username}
                  </h3>
                  <p className="text-gray-400">Уровень {currentUser.level}</p>
                  <div className="flex items-center justify-center space-x-2 mt-2">
                    <span className="text-2xl">{currentUser.countryFlag}</span>
                    <span className="text-gray-300">{currentUser.country}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-gray-700">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Посты:</span>
                    <span className="text-white">12</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Лайки:</span>
                    <span className="text-white">156</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Рейтинг:</span>
                    <span className="text-game-purple">★ 4.8</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Create Post Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Icon name="PenTool" size={20} />
                  <span>Создать пост</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="content" className="text-gray-300">
                      Расскажите о своих игровых достижениях
                    </Label>
                    <Textarea
                      id="content"
                      value={postData.content}
                      onChange={(e) =>
                        setPostData({ ...postData, content: e.target.value })
                      }
                      className="bg-background border-gray-600 text-white min-h-[120px]"
                      placeholder="Поделитесь своими успехами, найдите товарищей по команде, обсудите стратегии..."
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="country" className="text-gray-300">
                      Страна (опционально)
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        setPostData({ ...postData, country: value })
                      }
                    >
                      <SelectTrigger className="bg-background border-gray-600 text-white">
                        <SelectValue placeholder="Выберите страну или оставьте пустым" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country.code} value={country.name}>
                            {country.flag} {country.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex space-x-3 pt-2">
                    <Button
                      type="submit"
                      className="bg-game-purple hover:bg-game-purple/90 flex-1"
                    >
                      <Icon name="Send" size={16} className="mr-2" />
                      Опубликовать
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="border-gray-600 text-gray-300"
                      onClick={() => setPostData({ content: "", country: "" })}
                    >
                      Очистить
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <Link to="/">
                <Button
                  variant="outline"
                  className="w-full border-gray-600 text-gray-300"
                >
                  <Icon name="Home" size={16} className="mr-2" />
                  Лента постов
                </Button>
              </Link>
              <Button
                variant="outline"
                className="w-full border-gray-600 text-gray-300"
              >
                <Icon name="Users" size={16} className="mr-2" />
                Найти игроков
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
