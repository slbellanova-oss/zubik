import { PageLayout, StarRating, Bubble } from "@/components/Layout";
import appleBraces from "@/assets/apple-braces.png";
import toothCharacter from "@/assets/tooth-character.png";
import dentistsTeam from "@/assets/dentists-team.png";
import happyChild from "@/assets/happy-child.png";
import toothBulb from "@/assets/tooth-bulb.png";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="bg-navy text-navy-foreground py-12 px-6 lg:px-12 relative overflow-hidden">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <StarRating />
          <span className="text-sm font-medium opacity-80">Отлично, 5 звезд!</span>
        </div>
        <h1 className="font-heading font-extrabold text-4xl lg:text-5xl leading-tight">
          Комплексная Забота о Вашей Улыбке в Сысерти
        </h1>
        <p className="text-lg opacity-80 max-w-md">
          Современные методы, безболезненное лечение для всей семьи.
        </p>
      </div>
      <div className="relative flex justify-center">
        <img src={appleBraces} alt="Яблоко с брекетами" width={420} height={420} className="relative z-10 drop-shadow-2xl" />
        <Bubble className="absolute top-4 right-4 z-20 animate-float">Ваши брекеты — наша забота!</Bubble>
        <Bubble className="absolute bottom-20 right-0 z-20 animate-float-delayed">Профессионалы!</Bubble>
        <Bubble className="absolute bottom-4 left-4 z-20 animate-float-slow">Профессиональное оборудование</Bubble>
      </div>
    </div>
  </section>
);

const MissionSection = () => (
  <section className="bg-navy text-navy-foreground py-16 px-6 lg:px-12">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
      <div className="space-y-4">
        <StarRating />
        <h2 className="font-heading font-extrabold text-3xl lg:text-4xl leading-tight">
          Ваше Здоровье,<br />Наша Миссия
        </h2>
      </div>
      <div className="relative flex justify-center">
        <img src={dentistsTeam} alt="Команда стоматологов" width={400} height={400} loading="lazy" className="rounded-2xl relative z-10" />
        <img src={toothBulb} alt="" width={80} height={80} loading="lazy" className="absolute -bottom-4 right-4 z-20 animate-float" />
        <Bubble className="absolute top-4 left-0 z-20 animate-float-delayed">Новые технологии — наша забота!</Bubble>
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section className="bg-background py-16 px-6 lg:px-12">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
      <div className="relative flex justify-center">
        <img src={toothCharacter} alt="Зубик-персонаж" width={350} height={350} loading="lazy" className="drop-shadow-xl" />
        <Bubble className="absolute top-0 left-0 animate-float">Новые технологии — наша забота!</Bubble>
        <Bubble className="absolute top-0 right-0 animate-float-delayed">Профессионалы!</Bubble>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <StarRating />
        </div>
      </div>
      <div className="space-y-4">
        {[
          { icon: "🦷", label: "Лечение зубов" },
          { icon: "🏥", label: "Хирургия стоматологическая" },
          { icon: "🔩", label: "Имплантация" },
          { icon: "🦷", label: "Протезирование" },
        ].map((service) => (
          <div key={service.label} className="flex items-center gap-4 bg-secondary/50 rounded-xl px-5 py-4 border border-lime/20">
            <span className="text-2xl">{service.icon}</span>
            <span className="font-heading font-bold text-foreground">{service.label}</span>
          </div>
        ))}
        <Link 
          to="/services" 
          className="mt-4 inline-block border-2 border-foreground text-foreground font-bold text-sm px-6 py-3 rounded-full hover:bg-foreground hover:text-background transition"
          onMouseEnter={() => window.dispatchEvent(new CustomEvent('cursor-hover-on'))}
          onMouseLeave={() => window.dispatchEvent(new CustomEvent('cursor-hover-off'))}
        >
          Узнать больше
        </Link>
      </div>
    </div>
  </section>
);

const FamilyBanner = () => (
  <section className="bg-lime py-10 px-6 lg:px-12">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h2 className="font-heading font-extrabold text-2xl lg:text-3xl text-lime-foreground leading-tight">
          Забота о развитии<br />вашей семьи в Сысерти
        </h2>
        <p className="text-lime-foreground/70 mt-2">Мы понимаем, как важно здоровье вашей семьи...</p>
      </div>
      <Link 
        to="/about" 
        className="border-2 border-lime-foreground text-lime-foreground font-bold text-sm px-6 py-3 rounded-full hover:bg-lime-foreground hover:text-lime transition whitespace-nowrap"
        onMouseEnter={() => window.dispatchEvent(new CustomEvent('cursor-hover-on'))}
        onMouseLeave={() => window.dispatchEvent(new CustomEvent('cursor-hover-off'))}
      >
        Узнать больше
      </Link>
    </div>
  </section>
);

const KidsSection = () => (
  <section className="bg-background py-16 px-6 lg:px-12">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <div className="flex justify-center">
        <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-lime shadow-xl">
          <img src={happyChild} alt="Счастливый ребёнок" width={600} height={600} loading="lazy" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="space-y-4">
        <StarRating />
        <p className="text-sm font-bold text-lime uppercase tracking-wider">Новая улыбка вашего ребенка</p>
        <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-foreground leading-tight">
          Забота о развитии<br />с малых лет
        </h2>
        <p className="text-muted-foreground max-w-md">
          Забота по развитию и благополучию ваших детей.
        </p>
        <Link 
          to="/services" 
          className="inline-block border-2 border-foreground text-foreground font-bold text-sm px-6 py-3 rounded-full hover:bg-foreground hover:text-background transition"
          onMouseEnter={() => window.dispatchEvent(new CustomEvent('cursor-hover-on'))}
          onMouseLeave={() => window.dispatchEvent(new CustomEvent('cursor-hover-off'))}
        >
          Узнать больше
        </Link>
      </div>
    </div>
  </section>
);

const Index = () => (
  <PageLayout>
    <HeroSection />
    <MissionSection />
    <ServicesSection />
    <FamilyBanner />
    <KidsSection />
  </PageLayout>
);

export default Index;
