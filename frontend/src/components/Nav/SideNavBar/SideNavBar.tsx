import { BrainCircuit, Plane } from "lucide-react";
import SideNavBarButton from "./SideNavBarButton";

const SideNavBar = (): React.JSX.Element => {
  return (
    <nav className="flex h-full w-[80px] flex-col justify-center overflow-auto border-r-2 border-gray-400 p-4">
      <div className="flex flex-col items-center justify-center gap-y-2">
        <SideNavBarButton
          icon={<Plane />}
          label="Plane"
          active={false}
          onClick={() => {
            console.log("Plane button.");
          }}
        />
        <SideNavBarButton
          icon={<BrainCircuit />}
          label="brain"
          active={true}
          onClick={() => {
            console.log("hello");
          }}
        />
        <SideNavBarButton
          icon={<Plane />}
          label="Plane"
          active={false}
          onClick={() => {
            console.log("Plane button.");
          }}
        />
        <SideNavBarButton
          icon={<BrainCircuit />}
          label="brain"
          active={true}
          onClick={() => {
            console.log("hello");
          }}
        />
        <SideNavBarButton
          icon={<Plane />}
          label="Plane"
          active={false}
          onClick={() => {
            console.log("Plane button.");
          }}
        />
        <SideNavBarButton
          icon={<BrainCircuit />}
          label="brain"
          active={true}
          onClick={() => {
            console.log("hello");
          }}
        />
      </div>
    </nav>
  );
};

export default SideNavBar;
