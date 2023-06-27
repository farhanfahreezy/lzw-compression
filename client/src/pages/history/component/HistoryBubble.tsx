import { BsArrowReturnRight } from "react-icons/bs";

interface HistoryBubbleProps {
  isQuestion: boolean;
  dialog: String;
  type: number;
}

const HistoryBubble = ({ isQuestion, dialog, type }: HistoryBubbleProps) => {
  const typeMap = new Map<number, string>();
  typeMap.set(1, "LZW Compression");
  typeMap.set(2, "LZW Decompression");
  typeMap.set(3, "Other");
  return (
    <div className="w-full h-fit flex flex-row">
      {isQuestion ? (
        ""
      ) : (
        <div className="pt-3 pl-3">
          <BsArrowReturnRight size={20} />
        </div>
      )}
      <div
        className={
          isQuestion
            ? "w-full bg-slate-400 rounded-md p-3 mb-2.5 hover:scale-[1.01] transition-all"
            : "w-full ml-5 bg-slate-600 rounded-md p-3 mb-5 hover:scale-[1.01] transition-all"
        }
      >
        <div className="font-semibold">
          {isQuestion ? typeMap.get(type) : "Answer"}
        </div>
        <div>{dialog}</div>
      </div>
    </div>
  );
};

export default HistoryBubble;
