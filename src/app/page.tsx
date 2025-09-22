import { ThemeSwitcher } from "@/components/theme-switcher";
import { countries } from "@/data/countries";
import { GameCard } from "@/features/game/components/GameCard";

const GeoHunter = () => {
  const country = countries.find((country) => country.name === "France");

  return (
    <>
      <div className="fixed right-0 top-0 px-8 py-8">
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
    </>
  );
};

export default GeoHunter;
