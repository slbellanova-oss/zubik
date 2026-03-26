import { PageLayout, StarRating } from "@/components/Layout";
import dentistsTeam from "@/assets/dentists-team.png";
import { Link } from "react-router-dom";

const doctors = [
  {
    name: "Иванова Елена Сергеевна",
    role: "Стоматолог-терапевт, главный врач",
    experience: "Стаж 15 лет",
    desc: "Специализируется на эстетической реставрации и эндодонтическом лечении. Постоянный участник международных конференций.",
  },
  {
    name: "Петрова Ольга Александровна",
    role: "Стоматолог-хирург, имплантолог",
    experience: "Стаж 12 лет",
    desc: "Эксперт в области имплантации и костной пластики. Сертифицирована компаниями Straumann и Nobel Biocare.",
  },
  {
    name: "Сидорова Мария Игоревна",
    role: "Детский стоматолог",
    experience: "Стаж 8 лет",
    desc: "Находит подход к каждому ребёнку. Специалист по лечению молочных зубов и профилактике кариеса у детей.",
  },
  {
    name: "Козлова Анна Дмитриевна",
    role: "Стоматолог-ортопед",
    experience: "Стаж 10 лет",
    desc: "Мастер протезирования — от виниров до сложных конструкций на имплантатах. Работает с цифровыми технологиями CAD/CAM.",
  },
];

const Doctors = () => (
  <PageLayout>
    <section className="bg-navy text-navy-foreground py-20 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-4">
        <h1 className="font-heading font-extrabold text-4xl lg:text-5xl">Наши врачи</h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
          Опытные специалисты, которые заботятся о вашей улыбке каждый день.
        </p>
      </div>
    </section>

    {/* Team photo */}
    <section className="py-12 px-6">
      <div className="max-w-3xl mx-auto flex justify-center">
        <img src={dentistsTeam} alt="Команда клиники Зубик" width={500} height={500} loading="lazy" className="rounded-2xl shadow-xl" />
      </div>
    </section>

    {/* Doctor cards */}
    <section className="py-8 px-6 pb-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {doctors.map((doc) => (
          <div key={doc.name} className="bg-secondary/30 rounded-2xl p-6 border border-lime/10 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-lime/20 flex items-center justify-center text-2xl">👩‍⚕️</div>
              <div>
                <h3 className="font-heading font-bold text-foreground">{doc.name}</h3>
                <p className="text-sm text-lime font-semibold">{doc.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <StarRating />
              <span className="text-sm text-muted-foreground">{doc.experience}</span>
            </div>
            <p className="text-sm text-muted-foreground">{doc.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-lime py-10 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="font-heading font-extrabold text-2xl text-lime-foreground">Запишитесь к нужному специалисту</h2>
        <Link to="/appointment" className="inline-block border-2 border-lime-foreground text-lime-foreground font-bold text-sm px-6 py-3 rounded-full hover:bg-lime-foreground hover:text-lime transition">
          Записаться на приём
        </Link>
      </div>
    </section>
  </PageLayout>
);

export default Doctors;
