import { ReactNode } from "react";
import { HiChartBar } from "react-icons/hi";

export type IconName = "chart-bar";

export type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
};

export function Icon(props: IconProps) {
  const mapper: { [key in IconName]: ReactNode } = {
    "chart-bar": <HiChartBar {...props} />,
  };

  return mapper[props.name];
}
