import { CircleSmall, Search } from "lucide-react";

const TopNavBar = (): React.JSX.Element => {
  return (
    <nav className="m-4 flex items-center justify-between border-b-2 border-gray-400 pb-4">
      <div className="flex items-center">
        <div className="flex translate-y-[8px]">
          <CircleSmall size={18} className="translate-x-[8px]" />
          <CircleSmall size={18} className="-translate-y-[10px]" />
          <CircleSmall size={18} className="-translate-x-[8px]" />
        </div>
        <span className="text-2xl">Ponder</span>
      </div>
      <div className="flex items-center">
        <button className="w-fit rounded-lg border-2 p-2">
          <Search />
        </button>
        <input
          type="search"
          className="h-[40px] w-[200px] rounded-lg border-2"
        ></input>
      </div>
    </nav>
  );
};

export default TopNavBar;
