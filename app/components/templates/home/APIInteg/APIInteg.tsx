import APICode from "./APICode";
import APIPic from "./APIPic";

export default function APIInteg() {
  return (
    <section className="container">
      <div className="grid-cols-1 grid lg:grid-cols-2 gap-16  w-full h-full text-neutral-100">
        <APIPic />
        <APICode />
      </div>
    </section>
  );
}
