import FAQ from "@/app/components/templates/home/FAQ/FAQ";
import ExplSec from "@/app/components/templates/pricing/ExplanationSec/ExplSec";
import HeroSec from "@/app/components/templates/pricing/HeroSec/HeroSec";

export default function PricingPage() {
  return (
    <main>
      <HeroSec />
      <ExplSec />
      <FAQ className="lg:mt-0" />
    </main>
  );
}
