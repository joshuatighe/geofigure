import { ThemeSwitcher } from "@/components/theme-switcher";
import { GameCard } from "@/features/game/components/GameCard";

const GeoHunter = () => {
  return (
    <>
      <div className="fixed right-0 top-0 px-8 py-8">
        <ThemeSwitcher />
      </div>
      <div className="flex-1 flex flex-col items-center">
        <GameCard />
      </div>
    </>
  );
};

export default GeoHunter;
