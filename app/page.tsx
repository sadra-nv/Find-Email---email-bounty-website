import FAQ from "./components/templates/home/FAQ/FAQ";
import SelectHome from "./components/templates/home/SelectHome/SelectHome";

export default function Home() {
  return (
    <div className="mt-40 relative z-30">
        <SelectHome></SelectHome>
        <FAQ></FAQ>
    </div>
  );
}
