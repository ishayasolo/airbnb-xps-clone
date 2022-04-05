import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";

import "./App.css";
import { data } from "./data"

export const App = () => {
  const cardData = data.map(item => (
      <Card
        key={item.id}
        {...item}
      />
    )
  )

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card-data">
        {cardData}
        {cardData}
      </section>
      <Footer />
    </div>
  );
}