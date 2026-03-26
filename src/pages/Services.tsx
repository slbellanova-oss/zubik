import { PageLayout } from "@/components/Layout";
import toothCharacter from "@/assets/tooth-character.png";
import { Link } from "react-router-dom";

const services = [
  {
    icon: "🦷",
    title: "Лечение зубов",
    desc: "Лечение кариеса, пульпита, периодонтита. Современные пломбировочные материалы и безболезненная анестезия.",
    details: ["Лечение кариеса", "Лечение пульпита", "Реставрация зубов", "Эндодонтическое лечение"],
  },
  {
    icon: "🏥",
    title: "Хирургия стоматологическая",
    desc: "Удаление зубов любой сложности, операции на дёснах, пластика уздечки.",
    details: ["Удаление зубов", "Удаление зубов мудрости", "Пластика уздечки", "Резекция верхушки корня"],
  },
  {
    icon: "🔩",
    title: "Имплантация",
    desc: "Установка имплантатов ведущих мировых производителей с пожизненной гарантией.",
    details: ["Одноэтапная имплантация", "Двухэтапная имплантация", "Синус-лифтинг", "Костная пластика"],
  },
  {
    icon: "🦷",
    title: "Протезирование",
    desc: "Коронки, мосты, съёмные и несъёмные протезы из лучших материалов.",
    details: ["Коронки из циркония", "Металлокерамика", "Виниры", "Съёмные протезы"],
  },
  {
    icon: "✨",
    title: "Эстетическая стоматология",
    desc: "Отбеливание, виниры, реставрация — для идеальной улыбки.",
    details: ["Отбеливание зубов", "Установка виниров", "Художественная реставрация", "Гигиеническая чистка"],
  },
  {
    icon: "👶",
    title: "Детская стоматология",
    desc: "Бережное лечение молочных и постоянных зубов у детей от 1 года.",
    details: ["Лечение молочных зубов", "Герметизация фиссур", "Серебрение", "Ортодонтия для детей"],
  },
];

const Services = () => (
  <PageLayout>
    <section className="bg-navy text-navy-foreground py-20 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-4">
        <h1 className="font-heading font-extrabold text-4xl lg:text-5xl">Наши услуги</h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
          Полный спектр стоматологических услуг для всей семьи — от профилактики до сложной хирургии.
        </p>
      </div>
    </section>

    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s) => (
          <div key={s.title} className="bg-background rounded-2xl border border-lime/20 p-6 space-y-4 hover:shadow-lg transition-shadow">
            <span className="text-4xl">{s.icon}</span>
            <h3 className="font-heading font-bold text-xl text-foreground">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
            <ul className="space-y-1">
              {s.details.map((d) => (
                <li key={d} className="text-sm text-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime flex-shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="bg-lime py-12 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img src={toothCharacter} alt="" width={80} height={80} loading="lazy" />
          <div>
            <h2 className="font-heading font-extrabold text-2xl text-lime-foreground">Не нашли нужную услугу?</h2>
            <p className="text-lime-foreground/70">Позвоните нам — мы подберём оптимальное лечение!</p>
          </div>
        </div>
        <Link to="/appointment" className="border-2 border-lime-foreground text-lime-foreground font-bold text-sm px-6 py-3 rounded-full hover:bg-lime-foreground hover:text-lime transition whitespace-nowrap">
          Записаться
        </Link>
      </div>
    </section>
  </PageLayout>
);

export default Services;
