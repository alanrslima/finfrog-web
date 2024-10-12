import React from "react";

export type HeadlineProps = {
  title: string;
  description?: string;
};

export function Headline(props: HeadlineProps) {
  return (
    <div>
      <h1 className="text-card-foreground font-semibold text-2xl">
        {props.title}
      </h1>
      <span className="text-secondary-foreground">{props.description}</span>
    </div>
  );
}
