import Image from "next/image";
import Pyramid from "../../UI/Pyramid/Pyramid";
import FeaturesItems from "./FeaturesItems";
import hexagone from "@/public/vectors/hegzagone-box.png";
import featurePic1 from "@/public/icons/features-icon-1.png";
import featurePic2 from "@/public/icons/feature-icon-2.png";
import featurePic3 from "@/public/icons/feature-icon-3.png";
import featurePic4 from "@/public/icons/feature-icon-4.png";
import featurePic5 from "@/public/icons/feature-icon-5.png";
import featurePic6 from "@/public/icons/feature-icon-6.png";

export default function Features() {
  return (
    <section className="container">
      <Pyramid className="-translate-y-16 lg:-translate-y-28" />

      <ul className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 ">
        <FeaturesItems
          title="Collect Email"
          text="Collect email leads from anywhere online, from company websites to Google search results to LinkedIn."
        >
          <Image
            width={35}
            height={27}
            src={featurePic1}
            placeholder="blur"
            alt="Collect Email"
          />
        </FeaturesItems>
        <div className="flex justify-center items-center lg:hidden">
          <Image src={hexagone} alt="hex" width={70} height={38} />
        </div>
        <FeaturesItems
          title="Email Finder"
          text="Type a name, get a verified email address. Our high match rate helps you get the most from your lists."
        >
          <Image
            width={43}
            height={46}
            src={featurePic2}
            placeholder="blur"
            alt="Email Finder"
          />
        </FeaturesItems>
        <div className="flex justify-center items-center lg:hidden">
          <Image src={hexagone} alt="hex" width={70} height={38} />
        </div>
        <FeaturesItems
          title="Collect Email"
          text="Find the best person to contact from a company name or website."
        >
          <Image
            width={37}
            height={37}
            src={featurePic3}
            placeholder="blur"
            alt="Collect Email"
          />
        </FeaturesItems>
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
        <FeaturesItems
          title="API Ready"
          text="Just change the endpoint and see your own data loaded within seconds."
        >
          <Image
            width={50}
            height={50}
            src={featurePic4}
            placeholder="blur"
            alt="API Ready"
          />
        </FeaturesItems>
        <div className="flex justify-center items-center lg:hidden">
          <Image src={hexagone} alt="hex" width={70} height={38} />
        </div>
        <FeaturesItems
          title="Excellent Support"
          text="An easy-to-follow doc with lots of references and code examples."
        >
          <Image
            width={34}
            height={38}
            src={featurePic5}
            placeholder="blur"
            alt="Excellent Support"
          />
        </FeaturesItems>
        <div className="flex justify-center items-center lg:hidden">
          <Image src={hexagone} alt="hex" width={70} height={38} />
        </div>
        <FeaturesItems
          title="Well Documented"
          text="An easy-to-follow doc with lots of references and code examples."
        >
          <Image
            width={28}
            height={40}
            src={featurePic6}
            placeholder="blur"
            alt="Well Documented"
          />
        </FeaturesItems>
      </ul>
    </section>
  );
}
