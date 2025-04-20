import { CircleSmall } from "lucide-react";

const TopNavBar = () => {
  return (
    <nav className="m-4 flex items-center justify-between border-b-2 border-gray-400">
      <div>
        <div className="flex">
          <CircleSmall />
          <CircleSmall />
          <CircleSmall />
        </div>
        <span className="text-2xl">Ponder</span>
      </div>
      <input type="search" className="w-[200px] rounded-lg border-2"></input>
    </nav>
  );
};

export default TopNavBar;
