import { MenuItem } from "../menu-item";

export function SideBar() {
  let array = Array.from({ length: 500 });

  return (
    <nav className="flex flex-col overflow-y-scroll w-[296px] bg-surface">
      {array.map((item, index) => (
        <MenuItem key={index} />
      ))}
    </nav>
  );
}
