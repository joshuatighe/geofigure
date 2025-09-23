import { LucideGithub } from "lucide-react";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { countries } from "@/data/countries";
import { GameCard } from "@/features/game/components/GameCard";

const GeoHunter = () => {
  const country = countries.find((country) => country.name === "France");

  return (
    <>
      <div className="fixed right-4 top-4">
        <ThemeSwitcher />
      </div>
      <div className="flex-1 flex flex-col items-center">
        <GameCard
          name={country?.name || ""}
          emoji={country?.emoji || ""}
          score={0}
          highScore={0}
        />
      </div>
      <div className="fixed right-4 bottom-4">
        <Link
          href="https://github.com/joshuatighe/geofigure"
          className="hidden md:block"
        >
          <LucideGithub />
        </Link>
      </div>
    </>
  );
};

export default GeoHunter;
