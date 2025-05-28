import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log("Login attempt:", formData);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="text-4xl mb-2">🎮</div>
          <h1 className="text-3xl font-oswald font-bold text-white">GameHub</h1>
          <p className="text-gray-400 mt-2">Добро пожаловать обратно!</p>
        </div>

        <Card className="bg-card border-gray-700">
          <CardHeader>
            <CardTitle className="text-white text-center">
              Вход в аккаунт
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="username" className="text-gray-300">
                  Имя пользователя
                </Label>
                <Input
                  id="username"
                  type="text"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  className="bg-background border-gray-600 text-white"
                  placeholder="Введите имя пользователя"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-gray-300">
                  Пароль
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="bg-background border-gray-600 text-white"
                  placeholder="Введите пароль"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-game-purple hover:bg-game-purple/90"
              >
                Войти
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Нет аккаунта?{" "}
                <Link
                  to="/register"
                  className="text-game-purple hover:underline"
                >
                  Зарегистрироваться
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
