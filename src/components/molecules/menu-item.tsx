import clsx from "clsx";
import { Icon } from "../atoms/icon";

export type MenuItemProps = {
  selected?: boolean;
  text: string;
};

export function MenuItem(props: MenuItemProps) {
  return (
    <a
      className={clsx(
        "flex transition-all items-center text-gray-500 gap-2 rounded-md font-semibold py-2 px-4",
        {
          "border-green-300 border-x border-y text-gray-950 bg-green-50":
            props.selected,
          "hover:bg-green-50": !props.selected,
        }
      )}
      href="#"
    >
      <Icon name="chart-bar" />
      {props.text}
    </a>
  );
}
