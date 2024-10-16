import QAItem from "./QAItem";

export default function QAList({ faq }: { faq: any }) {
  return (
    <ul className="flex w-full justify-start items-start flex-col gap-4 mobile-medium:gap-3">
      <QAItem faq={faq} />
      <QAItem faq={faq} />
      <QAItem faq={faq} />
      <QAItem faq={faq} />
      <QAItem faq={faq} />
      <QAItem faq={faq} />
      <QAItem faq={faq} />
      <QAItem faq={faq} />
      <QAItem faq={faq} />
      {/* {faq.map((faq, index: number) => (
        <QAItem key={index} faq={faq} />
      ))} */}
    </ul>
  );
}
