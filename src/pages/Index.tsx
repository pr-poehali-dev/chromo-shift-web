import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const worlds = [
    {
      name: 'Кристальные пустоши',
      image: 'https://cdn.poehali.dev/projects/ab22a301-c328-47d0-a533-8fba8c1a89e2/files/a2372442-f010-4ff6-bb8b-21b273755c6d.jpg',
      description: 'Мир кристаллов и биолюминесценции'
    },
    {
      name: 'Неоновый мегаполис',
      image: 'https://cdn.poehali.dev/projects/ab22a301-c328-47d0-a533-8fba8c1a89e2/files/1a62eca5-8c8a-49a5-8c32-fe48e6ddf48c.jpg',
      description: 'Киберпанк город будущего'
    },
    {
      name: 'Портал измерений',
      image: 'https://cdn.poehali.dev/projects/ab22a301-c328-47d0-a533-8fba8c1a89e2/files/57bb9b82-1f2b-4f12-9784-1b04b1ef4af1.jpg',
      description: 'Врата между мирами'
    }
  ];

  const features = [
    {
      icon: 'Layers',
      title: 'Магический лифт',
      description: 'Путешествуйте между измерениями с помощью таинственного лифта'
    },
    {
      icon: 'Zap',
      title: 'Динамичный геймплей',
      description: 'Быстрые перемещения, головоломки и сражения в разных локациях'
    },
    {
      icon: 'Globe',
      title: 'Уникальные миры',
      description: 'Каждый мир имеет свою физику, визуальный стиль и загадки'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                <Icon name="Briefcase" size={20} className="text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">Chromo Shift</span>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'gameplay', 'gallery', 'download'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'gameplay' && 'Геймплей'}
                  {section === 'gallery' && 'Галерея'}
                  {section === 'download' && 'Скачать'}
                </button>
              ))}
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Download" size={16} className="mr-2" />
              Скачать
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-semibold mb-6 text-foreground leading-tight">
              Chromo Shift
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Войдите в таинственный лифт и путешествуйте сквозь измерения в неизведанные миры
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
                <Icon name="Play" size={18} className="mr-2" />
                Начать игру
              </Button>
              <Button size="lg" variant="outline" className="px-8 border-border hover:bg-muted">
                <Icon name="Youtube" size={18} className="mr-2" />
                Трейлер
              </Button>
            </div>
          </div>
          
          <div className="mt-16">
            <img
              src="https://cdn.poehali.dev/projects/ab22a301-c328-47d0-a533-8fba8c1a89e2/files/badbbc59-b156-4854-8406-3531a8ba7265.jpg"
              alt="Chromo Shift Elevator"
              className="rounded-lg shadow-lg w-full max-w-4xl mx-auto border border-border animate-scale-in"
            />
          </div>
        </div>
      </section>

      <section id="gameplay" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-3 text-foreground">Геймплей</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Инновационная механика перемещения между мирами
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-md animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded bg-primary/10 flex items-center justify-center mb-6">
                    <Icon name={feature.icon as any} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Путешествуйте на лифте</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground text-sm">Нажимайте кнопки лифта для перемещения между мирами</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground text-sm">Открывайте новые этажи и измерения</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground text-sm">Решайте головоломки для доступа к секретным уровням</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground text-sm">Каждый этаж — новое измерение с уникальными правилами</span>
                </li>
              </ul>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/files/e3834ee4-aeff-4f8a-974e-c736dfc3a637.png"
                alt="Elevator Gameplay"
                className="rounded-lg shadow-lg border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-3 text-foreground">Галерея миров</h2>
          <p className="text-center text-muted-foreground mb-16">
            Откройте для себя уникальные измерения
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {worlds.map((world, index) => (
              <Card 
                key={index}
                className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all group hover:shadow-md animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={world.image}
                    alt={world.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{world.name}</h3>
                  <p className="text-muted-foreground text-sm">{world.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="download" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-semibold mb-6 text-foreground animate-fade-in">
              Готовы начать путешествие?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Скачайте Chromo Shift и откройте порталы в бесконечную мультивселенную
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap mb-12 animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
                <Icon name="MonitorPlay" size={20} className="mr-2" />
                Windows
              </Button>
              <Button size="lg" variant="outline" className="px-8 border-border hover:bg-muted">
                <Icon name="Laptop" size={20} className="mr-2" />
                macOS
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="p-6 bg-card rounded-lg border border-border">
                <div className="text-3xl font-semibold text-foreground mb-2">50+</div>
                <div className="text-muted-foreground text-sm">Уникальных миров</div>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <div className="text-3xl font-semibold text-foreground mb-2">200+</div>
                <div className="text-muted-foreground text-sm">Головоломок</div>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <div className="text-3xl font-semibold text-foreground mb-2">∞</div>
                <div className="text-muted-foreground text-sm">Приключений</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border bg-muted/20">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <Icon name="Briefcase" size={16} className="text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold text-foreground">Chromo Shift</span>
          </div>
          <p className="text-muted-foreground text-sm mb-4">© 2024 Chromo Shift. Все миры защищены порталами.</p>
          <div className="flex gap-6 justify-center">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Twitter" size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Youtube" size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="MessageCircle" size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;