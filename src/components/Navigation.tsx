import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="bg-game-dark border-b border-gray-700 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-2xl">🎮</div>
          <h1 className="text-2xl font-oswald font-bold text-white">GameHub</h1>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="border-game-purple text-game-purple hover:bg-game-purple hover:text-white"
          >
            Войти
          </Button>
          <Button className="bg-game-purple hover:bg-game-purple/90">
            Регистрация
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
