import Image from "next/image";
import Pyramid from "../../UI/Pyramid/Pyramid";
import FeaturesItems from "./FeaturesItems";
import hexagone from "@/public/vectors/hegzagone-box.png";

export default function Features() {
  return (
    <section className="container">
      <Pyramid />

      <ul className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-12 ">
        <FeaturesItems />
        <div className="flex justify-center items-center lg:hidden">
          <Image src={hexagone} alt="hex" width={70} height={38} />
        </div>
        <FeaturesItems />
        <div className="flex justify-center items-center lg:hidden">
          <Image src={hexagone} alt="hex" width={70} height={38} />
        </div>
        <FeaturesItems />
        <div className="flex justify-center items-center lg:hidden">
          <Image src={hexagone} alt="hex" width={70} height={38} />
        </div>
        <div className="hidden justify-center items-center xl:flex">
          <Image src={hexagone} alt="hex" width={70} height={38} />
        </div>
        <div className="hidden justify-center items-center xl:flex">
          <Image src={hexagone} alt="hex" width={70} height={38} />
        </div>
        <div className="hidden justify-center items-center xl:flex">
          <Image src={hexagone} alt="hex" width={70} height={38} />
        </div>
        <FeaturesItems />
        <div className="flex justify-center items-center lg:hidden">
          <Image src={hexagone} alt="hex" width={70} height={38} />
        </div>
        <FeaturesItems />
        <div className="flex justify-center items-center lg:hidden">
          <Image src={hexagone} alt="hex" width={70} height={38} />
        </div>
        <FeaturesItems />

        <div className="hidden justify-center items-center xl:flex">
          <Image src={hexagone} alt="hex" width={70} height={38} />
        </div>
        <div className="hidden justify-center items-center xl:flex">
          <Image src={hexagone} alt="hex" width={70} height={38} />
        </div>
        <div className="hidden justify-center items-center xl:flex">
          <Image src={hexagone} alt="hex" width={70} height={38} />
        </div>
      </ul>
    </section>
  );
}
