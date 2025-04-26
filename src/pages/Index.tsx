import Fireworks from "@/components/Fireworks";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
      <Fireworks />
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl font-bold mb-6 text-white animate-fade-in">Добро пожаловать!</h1>
        <p className="text-xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
          Ваш проект теперь с праздничным салютом!
        </p>
        <div className="mt-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover-scale">
            Начать работу
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
