"use client";
import clsx from "clsx";
import { MenuItem } from "../molecules/menu-item";
import { IconName } from "../atoms/icon";
import { useState } from "react";

type NavItemProps = {
  iconName: IconName;
  text: string;
};

const navItems: NavItemProps[] = [
  { iconName: "chart-bar", text: "Dashboard" },
  { iconName: "credit-card", text: "Transações" },
  { iconName: "credit-card", text: "Minhas contas" },
  { iconName: "goal", text: "Objetivos" },
];

export type NavBarProps = {
  isOpen?: boolean;
};

export function NavBar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav
      className={clsx(
        "border-r-[1px] py-16 px-4 gap-8 border-border transition-all flex flex-col h-full bg-card",
        {
          "w-[320px]": isOpen,
          "w-fit": !isOpen,
        }
      )}
    >
      <div className="flex flex-col gap-2">
        <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
        {navItems?.map((item) => (
          <MenuItem
            isOpen={isOpen}
            key={item.text}
            iconName={item.iconName}
            text={item.text}
            selected={item.text === "Dashboard"}
          />
        ))}
      </div>
    </nav>
  );
}
