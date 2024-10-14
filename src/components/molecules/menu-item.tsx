import clsx from "clsx";
import { Icon, IconName } from "../atoms/icon";

export type MenuItemProps = {
  selected?: boolean;
  text: string;
  iconName: IconName;
  isOpen?: boolean;
};

export function MenuItem(props: MenuItemProps) {
  return (
    <a
      className={clsx(
        "flex transition-all text-sm items-center rounded-md text-card-foreground gap-2 font-bold py-3 px-3",
        {
          "text-primary-foreground bg-primary": props.selected,
          "hover:opacity-70": !props.selected,
        }
      )}
      href="#"
    >
      <Icon size={20} name={props.iconName} />
      <span className={clsx({ hidden: !props.isOpen, flex: props.isOpen })}>
        {props.text}
      </span>
    </a>
  );
}
