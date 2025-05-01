import Fireworks from "@/components/Fireworks";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      <Fireworks />
      
      {/* Hero Section */}
      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center justify-center py-48 md:py-60">
        <div className="text-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 md:mb-10 text-white animate-fade-in">Праздничное агентство</h1>
          <p className="text-xl md:text-3xl text-gray-300 mb-10 md:mb-16 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
            Организация незабываемых праздников и мероприятий любой сложности
          </p>
          <div className="mt-10 md:mt-16 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Button className="bg-primary text-primary-foreground px-6 md:px-10 py-4 md:py-6 text-lg md:text-2xl rounded-lg font-medium hover-scale">
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
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
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
                <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-none text-white hover-scale">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
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
                <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-none text-white hover-scale">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
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
                <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg flex items-start space-x-4 hover-scale">
            <div className="bg-purple-400/30 p-4 rounded-full">
              <Icon name="FileText" className="text-white" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Уникальные сценарии</h3>
              <p className="text-gray-300">Мы разрабатываем индивидуальные сценарии для каждого мероприятия, учитывая все пожелания клиента.</p>
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg flex items-start space-x-4 hover-scale">
            <div className="bg-purple-400/30 p-4 rounded-full">
              <Icon name="Users" className="text-white" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Профессиональная команда</h3>
              <p className="text-gray-300">Наши ведущие, аниматоры и организаторы — профессионалы с многолетним опытом работы.</p>
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg flex items-start space-x-4 hover-scale">
            <div className="bg-purple-400/30 p-4 rounded-full">
              <Icon name="Clock" className="text-white" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Соблюдение сроков</h3>
              <p className="text-gray-300">Мы ценим ваше время и гарантируем точное соблюдение всех договоренностей.</p>
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg flex items-start space-x-4 hover-scale">
            <div className="bg-purple-400/30 p-4 rounded-full">
              <Icon name="Award" className="text-white" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Высокое качество</h3>
              <p className="text-gray-300">Безупречная организация и внимание к деталям на всех этапах подготовки и проведения.</p>
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
