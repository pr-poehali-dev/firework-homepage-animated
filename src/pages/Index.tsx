import Fireworks from "@/components/Fireworks";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      <Fireworks />
      
      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 text-white animate-fade-in">Праздничное агентство</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
            Организация незабываемых праздников и мероприятий любой сложности
          </p>
          <div className="mt-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover-scale">
              Заказать праздник
            </Button>
          </div>
        </div>
      </div>
      
      {/* Services Section */}
      <div className="relative z-10 bg-black/50 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Наши услуги</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-none text-white hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Cake" size={24} />
                  <span>Дни рождения</span>
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Организация ярких и запоминающихся дней рождения
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Мы создадим незабываемый день рождения с индивидуальным сценарием, 
                  профессиональными ведущими и яркими декорациями.
                </p>
                <Button variant="default" className="bg-purple-500 hover:bg-purple-600 text-white">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-none text-white hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Heart" size={24} />
                  <span>Свадьбы</span>
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Организация свадебных торжеств любой сложности
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  От камерных церемоний до масштабных торжеств — мы продумаем каждую деталь, 
                  чтобы ваш день был идеальным.
                </p>
                <Button variant="outline" className="border-white text-white hover:bg-white/20">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-none text-white hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Building" size={24} />
                  <span>Корпоративы</span>
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Организация корпоративных мероприятий и тимбилдингов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Повысьте командный дух и отметьте успехи компании с нашими уникальными сценариями 
                  для корпоративных праздников.
                </p>
                <Button variant="outline" className="border-white text-white hover:bg-white/20">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="relative z-10 py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Почему выбирают нас</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
            <div className="flex gap-4 items-start mb-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <Icon name="Star" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Уникальные сценарии</h3>
                <p className="text-gray-300">
                  Мы разрабатываем индивидуальные сценарии для каждого мероприятия, 
                  учитывая все пожелания клиента.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
            <div className="flex gap-4 items-start mb-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <Icon name="Users" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Профессиональная команда</h3>
                <p className="text-gray-300">
                  Наши ведущие, аниматоры и организаторы — профессионалы с многолетним опытом работы.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
            <div className="flex gap-4 items-start mb-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <Icon name="Clock" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Соблюдение сроков</h3>
                <p className="text-gray-300">
                  Мы ценим ваше время и гарантируем точное соблюдение всех договоренностей.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
            <div className="flex gap-4 items-start mb-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <Icon name="Award" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Высокое качество</h3>
                <p className="text-gray-300">
                  Безупречная организация и внимание к деталям на всех этапах подготовки и проведения.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover-scale">
            Связаться с нами
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
