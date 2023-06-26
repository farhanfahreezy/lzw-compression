import { useState, useEffect } from "react";
import NavbarButton from "./NavbarButton";

const Navbar = () => {
  const [selected, setSelected] = useState(0);

  const navbarItem = [
    { key: 0, text: "LZW Compression", dest: "/" },
    { key: 1, text: "LZW Decompression", dest: "/lzwd" },
    { key: 2, text: "History", dest: "/history" },
  ];
  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {navbarItem.map((navbar) => {
        return (
          <NavbarButton
            key={navbar.key}
            id={navbar.key}
            text={navbar.text}
            dest={navbar.dest}
            selected={selected}
            setSelected={setSelected}
          />
        );
      })}
      {/* <button
        className="hover:scale-[1.05] transition"
        onClick={() => {
          setSelected(0);
        }}
      >
        <Link to="/">LZW Compression</Link>
      </button>
      <button
        className="hover:scale-[1.05] transition"
        onClick={() => {
          setSelected(1);
        }}
      >
        <Link to="/lzwd">LZW Decompression</Link>
      </button>
      <button
        className="hover:scale-[1.05] transition"
        onClick={() => {
          setSelected(2);
        }}
      >
        <Link to="/history">History</Link>
      </button> */}
    </div>
  );
};

export default Navbar;
