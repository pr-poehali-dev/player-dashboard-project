import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { countries } from "@/data/mockData";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Пароли не совпадают!");
      return;
    }
    // TODO: Implement registration logic
    console.log("Registration attempt:", formData);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="text-4xl mb-2">🎮</div>
          <h1 className="text-3xl font-oswald font-bold text-white">GameHub</h1>
          <p className="text-gray-400 mt-2">Присоединяйтесь к сообществу!</p>
        </div>

        <Card className="bg-card border-gray-700">
          <CardHeader>
            <CardTitle className="text-white text-center">
              Регистрация
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
                  placeholder="Придумайте никнейм"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-300">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-background border-gray-600 text-white"
                  placeholder="Введите email"
                  required
                />
              </div>

              <div>
                <Label htmlFor="country" className="text-gray-300">
                  Страна
                </Label>
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, country: value })
                  }
                >
                  <SelectTrigger className="bg-background border-gray-600 text-white">
                    <SelectValue placeholder="Выберите страну" />
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
                  placeholder="Придумайте пароль"
                  required
                />
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="text-gray-300">
                  Подтвердите пароль
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                  className="bg-background border-gray-600 text-white"
                  placeholder="Повторите пароль"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-game-purple hover:bg-game-purple/90"
              >
                Создать аккаунт
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Уже есть аккаунт?{" "}
                <Link to="/login" className="text-game-purple hover:underline">
                  Войти
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
