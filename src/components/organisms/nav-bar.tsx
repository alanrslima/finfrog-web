import { MenuItem } from "../molecules/menu-item";
import { Profile } from "../molecules/profile";

export function NavBar() {
  return (
    <nav className="border-r-[1px] py-16 px-4 gap-8 border-border w-[320px] flex flex-col h-full bg-card">
      <div className="flex flex-col gap-2">
        <MenuItem iconName="chart-bar" text="Dashboard" selected />
        <MenuItem iconName="credit-card" text="Transações" />
        <MenuItem iconName="chart-bar" text="Minhas contas" />
        <MenuItem iconName="goal" text="Objetivos" />
      </div>
    </nav>
  );
}
