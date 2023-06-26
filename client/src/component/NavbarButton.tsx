import { Link } from "react-router-dom";

interface NavbarButtonProps {
  id: number;
  text: string;
  dest: string;
  selected: number;
  setSelected: (id: number) => void;
}

const NavbarButton = ({
  id,
  text,
  dest,
  selected,
  setSelected,
}: NavbarButtonProps) => {
  return (
    <button
      className={
        selected === id
          ? "hover:scale-[1.05] transition bg-slate-400 rounded-md py-1 px-2"
          : "hover:scale-[1.05] transition"
      }
      key={id}
      onClick={() => {
        setSelected(id);
      }}
    >
      <Link to={dest}>{text}</Link>
    </button>
  );
};

export default NavbarButton;
