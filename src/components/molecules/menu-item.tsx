import clsx from "clsx";
import { Icon, IconName } from "../atoms/icon";

export type MenuItemProps = {
  selected?: boolean;
  text: string;
  iconName: IconName;
};

export function MenuItem(props: MenuItemProps) {
  return (
    <a
      className={clsx(
        "flex transition-all items-center rounded-md pl-6 text-card-foreground gap-2 font-semibold py-3 px-4",
        {
          "text-primary-foreground bg-primary": props.selected,
          "hover:opacity-70": !props.selected,
        }
      )}
      href="#"
    >
      <Icon size={20} name={props.iconName} />
      {props.text}
    </a>
  );
}
