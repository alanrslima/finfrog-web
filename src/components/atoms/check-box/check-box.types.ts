import { ReactNode } from "react";

export type CheckBoxProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "onChange"
> & {
  onChange: (checked: boolean) => void;
  label: () => JSX.Element;
};
