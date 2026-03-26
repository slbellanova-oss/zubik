import { PageLayout, StarRating } from "@/components/Layout";
import dentistsTeam from "@/assets/dentists-team.png";
import toothCharacter from "@/assets/tooth-character.png";
import { Link } from "react-router-dom";
import { Heart, Shield, Users, Award } from "lucide-react";

const values = [
  { icon: Heart, title: "Забота", desc: "Индивидуальный подход к каждому пациенту — от малышей до пожилых." },
  { icon: Shield, title: "Безопасность", desc: "Стерильность, современные протоколы и сертифицированные материалы." },
  { icon: Users, title: "Команда", desc: "Врачи с опытом более 10 лет, постоянное повышение квалификации." },
  { icon: Award, title: "Качество", desc: "Гарантия на все виды работ, прозрачное ценообразование." },
];

const About = () => (
  <PageLayout>
    {/* Hero */}
    <section className="bg-navy text-navy-foreground py-20 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <StarRating />
        <h1 className="font-heading font-extrabold text-4xl lg:text-5xl leading-tight">
          О клинике «Зубик»
        </h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
          Мы — семейная стоматология в Сысерти, где каждый пациент чувствует себя как дома. Работаем с 2015 года и заботимся о здоровье тысяч улыбок.
        </p>
      </div>
    </section>

    {/* Values */}
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading font-extrabold text-3xl text-foreground text-center mb-12">Наши ценности</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-secondary/50 rounded-2xl p-6 border border-lime/20 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-lime/20 flex items-center justify-center mx-auto">
                <v.icon className="w-6 h-6 text-lime" />
              </div>
              <h3 className="font-heading font-bold text-foreground">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Team preview */}
    <section className="bg-navy text-navy-foreground py-16 px-6">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="font-heading font-extrabold text-3xl leading-tight">Наша команда</h2>
          <p className="opacity-80">
            В клинике работают опытные стоматологи-терапевты, хирурги, ортопеды и детские специалисты. Мы постоянно обучаемся и внедряем лучшие мировые практики.
          </p>
          <Link to="/doctors" className="inline-block bg-lime text-lime-foreground font-bold text-sm px-6 py-3 rounded-full hover:brightness-110 transition">
            Познакомиться с врачами
          </Link>
        </div>
        <div className="flex justify-center">
          <img src={dentistsTeam} alt="Команда" width={400} height={400} loading="lazy" className="rounded-2xl" />
        </div>
      </div>
    </section>

    {/* Mascot CTA */}
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <img src={toothCharacter} alt="Зубик" width={200} height={200} loading="lazy" className="drop-shadow-lg" />
        <div className="space-y-4 text-center md:text-left">
          <h2 className="font-heading font-extrabold text-2xl text-foreground">Готовы позаботиться о вашей улыбке?</h2>
          <p className="text-muted-foreground">Запишитесь на бесплатную консультацию прямо сейчас!</p>
          <Link to="/appointment" className="inline-block bg-lime text-lime-foreground font-bold text-sm px-6 py-3 rounded-full hover:brightness-110 transition">
            Записаться на приём
          </Link>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default About;
