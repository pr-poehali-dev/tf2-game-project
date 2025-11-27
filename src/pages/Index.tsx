import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const classes = [
  { name: 'Scout', icon: 'Zap', color: 'bg-red-500', description: 'Быстрый класс с двойным прыжком', health: 125 },
  { name: 'Soldier', icon: 'Rocket', color: 'bg-orange-500', description: 'Универсальный боец с ракетницей', health: 200 },
  { name: 'Pyro', icon: 'Flame', color: 'bg-red-600', description: 'Поджигатель с огнеметом', health: 175 },
  { name: 'Demoman', icon: 'Bomb', color: 'bg-gray-700', description: 'Взрывник с гранатометом', health: 175 },
  { name: 'Heavy', icon: 'Target', color: 'bg-red-700', description: 'Танк с миниганом', health: 300 },
  { name: 'Engineer', icon: 'Wrench', color: 'bg-yellow-600', description: 'Строитель турелей', health: 125 },
  { name: 'Medic', icon: 'Heart', color: 'bg-blue-400', description: 'Целитель команды', health: 150 },
  { name: 'Sniper', icon: 'Crosshair', color: 'bg-yellow-500', description: 'Снайпер дальнего боя', health: 125 },
  { name: 'Spy', icon: 'Eye', color: 'bg-gray-600', description: 'Шпион с маскировкой', health: 125 },
];

const weapons = [
  { name: 'Scattergun', class: 'Scout', rarity: 'stock', damage: '6x10' },
  { name: 'Rocket Launcher', class: 'Soldier', rarity: 'stock', damage: '90' },
  { name: 'Flamethrower', class: 'Pyro', rarity: 'stock', damage: '6.8/tick' },
  { name: 'Minigun', class: 'Heavy', rarity: 'stock', damage: '9-54' },
  { name: 'Sniper Rifle', class: 'Sniper', rarity: 'stock', damage: '50-150' },
  { name: 'Sandman', class: 'Scout', rarity: 'unique', damage: '35' },
];

const craftRecipes = [
  { 
    result: 'Scrap Metal', 
    ingredients: ['Любое оружие x2'], 
    description: 'Базовый металл для крафта' 
  },
  { 
    result: 'Reclaimed Metal', 
    ingredients: ['Scrap Metal x3'], 
    description: 'Средний уровень металла' 
  },
  { 
    result: 'Refined Metal', 
    ingredients: ['Reclaimed Metal x3'], 
    description: 'Высший уровень металла' 
  },
  { 
    result: 'Class Token', 
    ingredients: ['Оружие класса x3'], 
    description: 'Токен для крафта оружия класса' 
  },
  { 
    result: 'Random Weapon', 
    ingredients: ['Scrap Metal x1', 'Class Token x1'], 
    description: 'Случайное оружие выбранного класса' 
  },
];

const maps = [
  { name: '2Fort', type: 'CTF', players: '24' },
  { name: 'Dustbowl', type: 'CP', players: '24' },
  { name: 'Badwater', type: 'PL', players: '24' },
  { name: 'Hightower', type: 'PL', players: '24' },
];

export default function Index() {
  const [selectedRecipe, setSelectedRecipe] = useState('');
  const [craftQuantity, setCraftQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-background">
      <header className="tf2-border border-t-0 border-x-0 bg-primary text-primary-foreground py-6 tf2-shadow">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-black tracking-tight">TEAM FORTRESS 2</h1>
          <p className="text-xl font-semibold mt-2 opacity-90">Фан-сайт легендарного шутера</p>
        </div>
      </header>

      <nav className="tf2-border border-t-0 border-x-0 bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex gap-1 py-2 overflow-x-auto">
            {['Главная', 'Классы', 'Оружие', 'Карты', 'Обновления', 'Сообщество', 'Гайды', 'Галерея'].map((item) => (
              <Button 
                key={item} 
                variant="ghost" 
                className="font-bold whitespace-nowrap hover:bg-primary hover:text-primary-foreground"
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 space-y-16">
        <section className="text-center space-y-4">
          <div className="inline-block tf2-border tf2-shadow bg-secondary text-secondary-foreground px-8 py-4 hover-lift cursor-pointer">
            <h2 className="text-4xl font-black">9 КЛАССОВ</h2>
            <p className="text-lg font-semibold">Выбери свой стиль игры!</p>
          </div>
        </section>

        <section id="classes">
          <h2 className="text-4xl font-black mb-8 text-center">🎯 КЛАССЫ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((cls) => (
              <Card 
                key={cls.name} 
                className="tf2-border tf2-shadow hover-lift p-6 bg-card cursor-pointer"
              >
                <div className={`${cls.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 tf2-border tf2-shadow`}>
                  <Icon name={cls.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-black mb-2">{cls.name}</h3>
                <p className="text-muted-foreground font-semibold mb-3">{cls.description}</p>
                <Badge variant="outline" className="font-bold">HP: {cls.health}</Badge>
              </Card>
            ))}
          </div>
        </section>

        <section id="craft" className="bg-accent/10 tf2-border tf2-shadow p-8 rounded-lg">
          <h2 className="text-4xl font-black mb-8 text-center">🔧 КАЛЬКУЛЯТОР КРАФТА</h2>
          
          <Tabs defaultValue="calculator" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="calculator" className="font-bold text-lg">Калькулятор</TabsTrigger>
              <TabsTrigger value="recipes" className="font-bold text-lg">Рецепты</TabsTrigger>
            </TabsList>

            <TabsContent value="calculator" className="space-y-6">
              <Card className="tf2-border p-6 bg-card">
                <div className="space-y-4">
                  <div>
                    <label className="font-bold mb-2 block">Выберите рецепт:</label>
                    <Select value={selectedRecipe} onValueChange={setSelectedRecipe}>
                      <SelectTrigger className="tf2-border font-semibold">
                        <SelectValue placeholder="Выберите предмет для крафта" />
                      </SelectTrigger>
                      <SelectContent>
                        {craftRecipes.map((recipe) => (
                          <SelectItem key={recipe.result} value={recipe.result} className="font-semibold">
                            {recipe.result}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="font-bold mb-2 block">Количество:</label>
                    <Input 
                      type="number" 
                      min="1" 
                      value={craftQuantity} 
                      onChange={(e) => setCraftQuantity(Number(e.target.value))}
                      className="tf2-border font-semibold"
                    />
                  </div>

                  {selectedRecipe && (
                    <div className="tf2-border tf2-shadow bg-secondary/20 p-4 rounded">
                      <h3 className="font-black text-xl mb-3">Требуется материалов:</h3>
                      {craftRecipes.find(r => r.result === selectedRecipe)?.ingredients.map((ing, idx) => (
                        <div key={idx} className="flex items-center gap-2 mb-2">
                          <Icon name="Package" size={20} />
                          <span className="font-semibold">{ing} × {craftQuantity}</span>
                        </div>
                      ))}
                      <p className="text-sm text-muted-foreground font-semibold mt-3">
                        {craftRecipes.find(r => r.result === selectedRecipe)?.description}
                      </p>
                    </div>
                  )}

                  <Button className="w-full tf2-border tf2-shadow font-black text-lg h-12 hover-lift">
                    <Icon name="Hammer" size={20} className="mr-2" />
                    КРАФТИТЬ
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="recipes" className="space-y-4">
              {craftRecipes.map((recipe) => (
                <Card key={recipe.result} className="tf2-border p-6 bg-card hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground w-12 h-12 rounded flex items-center justify-center tf2-border flex-shrink-0">
                      <Icon name="Hammer" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-black mb-2">{recipe.result}</h3>
                      <p className="text-sm text-muted-foreground font-semibold mb-3">{recipe.description}</p>
                      <div className="space-y-1">
                        {recipe.ingredients.map((ing, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <Icon name="ArrowRight" size={16} />
                            <span className="font-semibold">{ing}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </section>

        <section id="weapons">
          <h2 className="text-4xl font-black mb-8 text-center">🔫 ОРУЖИЕ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {weapons.map((weapon, idx) => (
              <Card key={idx} className="tf2-border tf2-shadow hover-lift p-5 bg-card">
                <div className="flex items-start gap-3">
                  <div className="bg-destructive text-destructive-foreground w-10 h-10 rounded flex items-center justify-center tf2-border">
                    <Icon name="Sword" size={20} />
                  </div>
                  <div>
                    <h3 className="font-black text-lg">{weapon.name}</h3>
                    <p className="text-sm text-muted-foreground font-semibold">{weapon.class}</p>
                    <div className="flex gap-2 mt-2">
                      <Badge variant="secondary" className="font-bold">{weapon.rarity}</Badge>
                      <Badge variant="outline" className="font-bold">DMG: {weapon.damage}</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="maps">
          <h2 className="text-4xl font-black mb-8 text-center">🗺️ КАРТЫ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {maps.map((map) => (
              <Card key={map.name} className="tf2-border tf2-shadow hover-lift p-6 bg-card">
                <div className="flex items-center gap-4">
                  <div className="bg-secondary text-secondary-foreground w-16 h-16 rounded-lg flex items-center justify-center tf2-border">
                    <Icon name="Map" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black">{map.name}</h3>
                    <div className="flex gap-2 mt-2">
                      <Badge className="font-bold">{map.type}</Badge>
                      <Badge variant="outline" className="font-bold">
                        <Icon name="Users" size={14} className="mr-1" />
                        {map.players}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center tf2-border tf2-shadow bg-primary text-primary-foreground p-12 rounded-lg">
          <h2 className="text-4xl font-black mb-4">ПРИСОЕДИНЯЙСЯ К СООБЩЕСТВУ!</h2>
          <p className="text-xl font-semibold mb-6 opacity-90">Миллионы игроков по всему миру</p>
          <Button size="lg" variant="secondary" className="tf2-border tf2-shadow font-black text-lg hover-lift">
            <Icon name="Users" size={24} className="mr-2" />
            ИГРАТЬ БЕСПЛАТНО
          </Button>
        </section>
      </main>

      <footer className="tf2-border border-b-0 border-x-0 bg-card text-card-foreground py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="font-bold text-lg">🎮 Team Fortress 2 Fan Site</p>
          <p className="text-sm text-muted-foreground font-semibold mt-2">Неофициальный фан-сайт. Все права на игру принадлежат Valve Corporation.</p>
        </div>
      </footer>
    </div>
  );
}
