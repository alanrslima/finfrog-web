import { ReactNode } from "react";

export type CardProps = {
  children: ReactNode;
};

export function Card(props: CardProps) {
  return <section className="bg-card p-7 rounded-md">{props.children}</section>;
}

export function CardHeader() {
  return <div></div>;
}
