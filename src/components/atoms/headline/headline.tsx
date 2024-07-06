import { HeadlineProps } from "./headline.types";
import clsx from "clsx";

export function Headline({ title, centralized, subTitle }: HeadlineProps) {
  return (
    <div className="flex flex-col gap-1">
      <h1
        className={clsx("font-bold text-2xl dark:text-white", {
          "text-center": centralized,
        })}
      >
        {title}
      </h1>
      {subTitle && (
        <p
          className={clsx("text-sm dark:text-gray-light", {
            "text-center": centralized,
          })}
        >
          {subTitle}
        </p>
      )}
    </div>
  );
}
