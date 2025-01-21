import { getHeroQueries } from "@/lib/services/home/HeroSection/getHeroQueries";
import HeroSearch from "./HeroSearch";

export default async function SearchSecContainer() {
  const queriesData = await getHeroQueries();

  if (!queriesData) return;

  return (
    <div className="container h-full pt-36 lg:pt-64">
      <HeroSearch queriesData={queriesData} />
    </div>
  );
}
