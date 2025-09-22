export type Country = {
  name: string;
  emoji: string;
  rankings: {
    hdi: number;
    gdpPerCapita: number;
    population: number;
    pollution: number;
    crimeRate: number;
    area: number;
  };
};
