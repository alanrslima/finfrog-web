import { ReactElement } from "react";
import { Icon } from "../atoms/icon";

export type StatGroupProps = {
  children: ReactElement<typeof Stat> | Array<ReactElement<typeof Stat>>;
};

export const StatGroup: React.FC<StatGroupProps> = ({
  children,
}: StatGroupProps) => {
  return (
    <section className="flex bg-card border-[1px] justify-between rounded-md">
      {children}
    </section>
  );
};

export type StatProps = {
  value: string;
};

export const Stat = (props: StatProps) => {
  return (
    <div className="flex p-4 items-center flex-1 gap-4">
      <div className="bg-accent px-6 py-3 rounded-lg">
        <Icon name="chart-bar" size={24} />
      </div>
      <div className="flex flex-col">
        <span className="text-sm">Total authorized shares</span>
        <strong className="text-xl">R$ 405,00</strong>
      </div>
    </div>
  );
};
