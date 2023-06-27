import axios from "axios";
import { useEffect, useState } from "react";
import HistoryBubble from "./component/HistoryBubble";

interface HistoryList {
  question: string;
  answer: string;
  type: number;
  timestamp: Date;
}

const History = () => {
  const [historyList, setHistoryList] = useState<HistoryList[]>();

  useEffect(() => {
    fetchHistoryList();
  }, []);

  async function fetchHistoryList() {
    axios
      .get(
        "https://lzw-compression-pcluyvrgo-farhanfahreezy.vercel.app/getHistory/"
      )
      .then((res) => {
        console.log("Getting History");
        setHistoryList(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="flex flex-col w-full max-w-[800px] p-5 items-center overflow-y-auto mb-5">
      {historyList !== undefined ? (
        historyList!.map((history) => {
          return (
            <HistoryBubble
              key={history.timestamp.toString()}
              question={history.question}
              answer={history.answer}
              type={history.type}
            />
          );
        })
      ) : (
        <div>No History</div>
      )}
    </div>
  );
};

export default History;
