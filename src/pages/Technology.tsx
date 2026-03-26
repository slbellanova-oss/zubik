import { PageLayout, Bubble } from "@/components/Layout";
import toothCharacter from "@/assets/tooth-character.png";
import { Link } from "react-router-dom";
import { Scan, Microscope, Sparkles, MonitorSmartphone, ShieldCheck, Zap } from "lucide-react";

const techs = [
  { icon: Scan, title: "3D-томография (КЛКТ)", desc: "Точная диагностика за 15 секунд — минимальная лучевая нагрузка, максимальная информативность." },
  { icon: Microscope, title: "Дентальный микроскоп", desc: "Увеличение до 25x для ювелирно точного лечения каналов и реставраций." },
  { icon: MonitorSmartphone, title: "Цифровые оттиски", desc: "Интраоральный сканер вместо слепочных масс — комфортно и быстро." },
  { icon: Sparkles, title: "Лазерная стоматология", desc: "Безболезненное лечение дёсен, стерилизация каналов и отбеливание." },
  { icon: ShieldCheck, title: "Стерилизация класса B", desc: "Автоклавы нового поколения — 100% стерильность инструментов." },
  { icon: Zap, title: "Безболезненная анестезия", desc: "Карпульные и компьютерные системы подачи анестетика — вы ничего не почувствуете." },
];

const Technology = () => (
  <PageLayout>
    <section className="bg-navy text-navy-foreground py-20 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-4">
        <h1 className="font-heading font-extrabold text-4xl lg:text-5xl">Технологии</h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
          Мы используем передовое оборудование, чтобы лечение было точным, безопасным и комфортным.
        </p>
      </div>
    </section>

    {/* Mascot section */}
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="relative">
          <img src={toothCharacter} alt="Зубик" width={250} height={250} loading="lazy" className="drop-shadow-lg" />
          <Bubble className="absolute -top-2 -right-4 animate-float">Профессиональное оборудование</Bubble>
        </div>
        <div className="space-y-3 text-center md:text-left">
          <h2 className="font-heading font-extrabold text-2xl text-foreground">Инновации для вашей улыбки</h2>
          <p className="text-muted-foreground">
            Клиника «Зубик» оснащена по последнему слову техники. Цифровые технологии позволяют нам проводить диагностику и лечение быстрее, точнее и комфортнее.
          </p>
        </div>
      </div>
    </section>

    {/* Tech grid */}
    <section className="py-8 px-6 pb-16">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {techs.map((t) => (
          <div key={t.title} className="bg-secondary/30 rounded-2xl p-6 border border-lime/10 space-y-3 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-lime/20 flex items-center justify-center">
              <t.icon className="w-6 h-6 text-lime" />
            </div>
            <h3 className="font-heading font-bold text-foreground">{t.title}</h3>
            <p className="text-sm text-muted-foreground">{t.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-lime py-10 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="font-heading font-extrabold text-2xl text-lime-foreground">Убедитесь сами — запишитесь на приём</h2>
        <Link to="/appointment" className="inline-block border-2 border-lime-foreground text-lime-foreground font-bold text-sm px-6 py-3 rounded-full hover:bg-lime-foreground hover:text-lime transition">
          Записаться
        </Link>
      </div>
    </section>
  </PageLayout>
);

export default Technology;
