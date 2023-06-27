import { BsArrowReturnRight } from "react-icons/bs";

interface HistoryBubbleProps {
  question: String;
  answer: String;
  type: number;
}

const HistoryBubble = ({ question, answer, type }: HistoryBubbleProps) => {
  const typeMap = new Map<number, string>();
  typeMap.set(1, "LZW Compression");
  typeMap.set(2, "LZW Decompression");
  typeMap.set(3, "Other");
  return (
    <div className="w-full h-fit flex flex-col gap-2 p-5">
      <div
        className={
          "w-full bg-slate-400 rounded-md p-3 hover:scale-[1.01] transition-all"
        }
      >
        <div className="font-semibold">{typeMap.get(type)}</div>
        <div>{question}</div>
      </div>
      <div className="flex flex-row justify-start w-full">
        <div className="p-3">
          <BsArrowReturnRight size={20} />
        </div>

        <div
          className={
            "w-full bg-slate-600 rounded-md p-3 hover:scale-[1.01] transition-all"
          }
        >
          <div className="font-semibold">Answer</div>
          <div>{answer}</div>
        </div>
      </div>
    </div>
  );
};

export default HistoryBubble;
