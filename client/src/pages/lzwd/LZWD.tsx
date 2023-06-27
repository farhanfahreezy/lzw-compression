import axios from "axios";
import { useState } from "react";
import { BiSolidCopy } from "react-icons/bi";
import { BsFillSendFill } from "react-icons/bs";

interface HistoryData {
  question: string;
  type: number;
}

const LZWD = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const sendQuestion = async () => {
    const historyData: HistoryData = {
      question: value,
      type: 2,
    };
    try {
      const response = await axios.post(
        "http://localhost:5174/sendQuestion",
        historyData
      );
      setResult(response.data.answer);
    } catch (error) {
      console.error("Failed to save history:", error);
    }
  };
  return (
    <div className="flex flex-col w-full max-w-[800px] h-full p-5 items-center">
      <div className="text-[48px]">LZW Decompression</div>
      <div className="relative my-3 w-full h-fit">
        <textarea
          value={value}
          onChange={onChange}
          placeholder="Write Something Here..."
          className="p-5 rounded-md outline-none text-black h-[200px] w-full ring-0 resize-none"
        />
        <button
          className="w-fit h-fit p-2 bg-slate-400 rounded-md right-[5px] bottom-[12px] absolute hover:scale-[1.05] transition peer"
          onClick={sendQuestion}
        >
          <BsFillSendFill size={24} />
        </button>
        <div className="absolute p-2 right-[5px] bottom-[-28px] opacity-0 peer-hover:opacity-100 peer-hover:bottom-[-38px] rounded-md bg-slate-300 text-slate-900 transition-all 0.3s">
          send
        </div>
      </div>
      <div className="flex-row w-full justify-center items-center">
        <div className="text-[36px]">Result</div>
        <div className="bg-white w-full min-h-[100px] rounded-md relative">
          <button className="w-fit h-fit p-2 bg-slate-400 rounded-md right-[5px] top-[5px] absolute hover:scale-[1.05] transition peer">
            <BiSolidCopy size={24} />
          </button>
          <div className="absolute p-2 right-[5px] top-[-35px] opacity-0 peer-hover:opacity-100 peer-hover:top-[-45px] rounded-md bg-slate-300 text-slate-900 transition-all 0.3s">
            copy to clipboard
          </div>
          <div className=" text-black p-5 w-full pr-[50px]">{result}</div>
        </div>
      </div>
    </div>
  );
};

export default LZWD;
