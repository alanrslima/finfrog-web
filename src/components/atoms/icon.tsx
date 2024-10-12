import { ReactNode } from "react";
import { FiTarget, FiBarChart, FiCreditCard, FiPlus } from "react-icons/fi";

export type IconName = "chart-bar" | "goal" | "credit-card" | "plus";

export type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
};

export function Icon(props: IconProps) {
  const mapper: { [key in IconName]: ReactNode } = {
    "chart-bar": <FiBarChart {...props} />,
    goal: <FiTarget {...props} />,
    "credit-card": <FiCreditCard {...props} />,
    plus: <FiPlus {...props} />,
  };

  return mapper[props.name];
}
