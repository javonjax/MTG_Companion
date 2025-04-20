import { Tooltip } from "@mantine/core";

interface NavbarLinkProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const SideNavBarButton = ({
  icon,
  label,
  active,
  onClick,
}: NavbarLinkProps): React.JSX.Element => {
  return (
    <Tooltip label={label} position="right">
      <button
        onClick={onClick}
        className={`w-fit rounded-xl border-2 border-black p-2 text-[4px] hover:bg-gray-300 ${active ? "bg-amber-200" : ""}`}
      >
        {icon}
      </button>
    </Tooltip>
  );
};

export default SideNavBarButton;
