import Pyramid from "../../UI/Pyramid/Pyramid";
import FeaturesItems from "./FeaturesItems";

export default function Features() {
  return (
    <section className="container">
      <Pyramid />

      <ul className="grid grid-cols-3 gap-4 mt-12">
        <FeaturesItems />
        <FeaturesItems />
        <FeaturesItems />
      </ul>
    </section>
  );
}
