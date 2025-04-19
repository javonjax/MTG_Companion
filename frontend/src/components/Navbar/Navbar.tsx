import { CircleSmall } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="mx-auto flex w-full max-w-7xl items-center justify-between p-4">
      <div className="flex items-center">
        <div className="flex">
          <CircleSmall />
          <CircleSmall />
          <CircleSmall />
        </div>
        <span className="text-2xl">Ponder</span>
      </div>
    </nav>
  );
};

export default Navbar;
