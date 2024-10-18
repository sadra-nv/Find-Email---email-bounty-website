import Image from "next/image";
import Circle from "../../UI/Circle/Circle";
import pic from "@/public/images/particle-3d-ball.png";

export default function HowTo() {
  return (
    <section className="container relative">
      <div className="h-[190px] md:h-[400px] w-full flex justify-center items-end relative z-20">
        <Image
          src={pic}
          alt="particle-3d-ball"
          width={62}
          height={62}
          placeholder="blur"
        />
      </div>
      <Circle />
      <div className="h-[400px] w-full bg-highlight-med relative z-20"></div>
    </section>
  );
}
