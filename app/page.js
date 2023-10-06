import Image from 'next/image'
import Hero from "./components/hero";
import Trending from "./components/trending";
import Genders from "./components/gender";
import Offer from "./components/offer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Trending />
      <Genders />
      <Offer />
    </main>
  );
}
