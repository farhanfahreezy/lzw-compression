import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import LZWC from "./pages/lzwc/LZWC";
import LZWD from "./pages/lzwd/LZWD";
import History from "./pages/history/History";

const App = () => {
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden bg-slate-500 text-slate-100 justify-start items-center font-poppins">
      <div className="flex flex-row w-full justify-center py-10">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<LZWC />} />
        <Route path="/lzwd" element={<LZWD />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
};

export default App;
