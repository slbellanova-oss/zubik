import { PageLayout } from "@/components/Layout";
import { Link } from "react-router-dom";

const priceCategories = [
  {
    title: "Лечение зубов",
    items: [
      { name: "Консультация стоматолога", price: "Бесплатно" },
      { name: "Лечение кариеса", price: "от 3 500 ₽" },
      { name: "Лечение пульпита (1 канал)", price: "от 5 000 ₽" },
      { name: "Художественная реставрация", price: "от 6 000 ₽" },
      { name: "Профессиональная гигиена", price: "от 4 000 ₽" },
    ],
  },
  {
    title: "Хирургия",
    items: [
      { name: "Удаление зуба (простое)", price: "от 2 000 ₽" },
      { name: "Удаление зуба (сложное)", price: "от 5 000 ₽" },
      { name: "Удаление зуба мудрости", price: "от 7 000 ₽" },
      { name: "Пластика уздечки", price: "от 4 000 ₽" },
    ],
  },
  {
    title: "Имплантация",
    items: [
      { name: "Имплантат (Корея)", price: "от 25 000 ₽" },
      { name: "Имплантат (Швейцария)", price: "от 45 000 ₽" },
      { name: "Синус-лифтинг", price: "от 20 000 ₽" },
      { name: "Костная пластика", price: "от 15 000 ₽" },
    ],
  },
  {
    title: "Протезирование",
    items: [
      { name: "Коронка металлокерамика", price: "от 12 000 ₽" },
      { name: "Коронка из циркония", price: "от 20 000 ₽" },
      { name: "Винир (E-max)", price: "от 25 000 ₽" },
      { name: "Съёмный протез", price: "от 18 000 ₽" },
    ],
  },
];

const Prices = () => (
  <PageLayout>
    <section className="bg-navy text-navy-foreground py-20 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-4">
        <h1 className="font-heading font-extrabold text-4xl lg:text-5xl">Цены</h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
          Прозрачное ценообразование — без скрытых доплат. Точную стоимость определяет врач на консультации.
        </p>
      </div>
    </section>

    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        {priceCategories.map((cat) => (
          <div key={cat.title}>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-lime rounded-full" />
              {cat.title}
            </h2>
            <div className="bg-secondary/30 rounded-2xl overflow-hidden border border-lime/10">
              {cat.items.map((item, i) => (
                <div
                  key={item.name}
                  className={`flex items-center justify-between px-6 py-4 ${i !== cat.items.length - 1 ? "border-b border-lime/10" : ""}`}
                >
                  <span className="text-foreground font-medium">{item.name}</span>
                  <span className="font-heading font-bold text-lime whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-lime py-10 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="font-heading font-extrabold text-2xl text-lime-foreground">
          Первичная консультация — бесплатно!
        </h2>
        <p className="text-lime-foreground/70">Запишитесь и узнайте точную стоимость вашего лечения.</p>
        <Link to="/appointment" className="inline-block border-2 border-lime-foreground text-lime-foreground font-bold text-sm px-6 py-3 rounded-full hover:bg-lime-foreground hover:text-lime transition">
          Записаться на приём
        </Link>
      </div>
    </section>
  </PageLayout>
);

export default Prices;
