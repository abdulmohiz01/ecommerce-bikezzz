import Image from "next/image";
import Hero from "@/components/ui/Hero";

// export const metadata = {
//   title: 'Skylark',
//   description: 'Homepage'
// }

import { PopularBikes } from "@/components/PopularBikes";
export default function Home() {
  return (
    <main>
      <Hero />
      <PopularBikes />

    </main>
  );
}
