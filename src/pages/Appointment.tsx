import { PageLayout } from "@/components/Layout";
import toothBulb from "@/assets/tooth-bulb.png";
import { useState } from "react";
import { Phone, Clock, MapPin } from "lucide-react";

const Appointment = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout>
      <section className="bg-navy text-navy-foreground py-20 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="font-heading font-extrabold text-4xl lg:text-5xl">Запись на приём</h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Заполните форму — мы перезвоним и подберём удобное время.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="bg-lime/10 border border-lime/30 rounded-2xl p-8 text-center space-y-4">
                <img src={toothBulb} alt="" width={80} height={80} className="mx-auto" />
                <h2 className="font-heading font-bold text-2xl text-foreground">Спасибо за заявку!</h2>
                <p className="text-muted-foreground">Мы свяжемся с вами в течение 30 минут в рабочее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Ваше имя</label>
                  <input
                    type="text"
                    required
                    placeholder="Иван Иванов"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-lime"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Телефон</label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (___) ___-__-__"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-lime"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Услуга</label>
                  <select
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-lime"
                  >
                    <option value="">Выберите услугу</option>
                    <option>Лечение зубов</option>
                    <option>Хирургия</option>
                    <option>Имплантация</option>
                    <option>Протезирование</option>
                    <option>Эстетическая стоматология</option>
                    <option>Детская стоматология</option>
                    <option>Другое</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Комментарий</label>
                  <textarea
                    rows={3}
                    placeholder="Опишите вашу проблему или пожелания..."
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-lime resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-lime text-lime-foreground font-bold text-sm px-6 py-3.5 rounded-full hover:brightness-110 transition"
                >
                  Записаться на приём
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <h2 className="font-heading font-bold text-2xl text-foreground">Контакты</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-lime/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-lime" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Адрес</p>
                  <p className="text-sm text-muted-foreground">г. Сысерть, ул. Коммуны, д. 25</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-lime/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-lime" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Телефон</p>
                  <p className="text-sm text-muted-foreground">+7 (34374) 0-00-00</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-lime/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-lime" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Режим работы</p>
                  <p className="text-sm text-muted-foreground">Пн-Пт: 9:00 — 20:00</p>
                  <p className="text-sm text-muted-foreground">Сб: 9:00 — 15:00</p>
                  <p className="text-sm text-muted-foreground">Вс: выходной</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-secondary/50 rounded-2xl h-48 flex items-center justify-center border border-lime/10">
              <p className="text-muted-foreground text-sm">🗺️ Карта — г. Сысерть, ул. Коммуны, 25</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Appointment;
