import HowToBtn from "./HowToBtn";

export default function HowToItem({
  title,
  text,
  btn1,
  btn2,
}: {
  title: string;
  text: string;
  btn1: string;
  btn2?: string;
}) {
  return (
    <div className="text-neutral-100  flex flex-col justify-center items-start">
      <h2 className="font-bold text-base md:text-xl mb-3">{title}</h2>
      <p className="mb-6 text-xs md:text-base">{text}</p>
      <div className="flex justify-center items-center gap-2 md:gap-4">
        <HowToBtn>{btn1}</HowToBtn>
        {btn2 && <HowToBtn>{btn2}</HowToBtn>}
      </div>
    </div>
  );
}
