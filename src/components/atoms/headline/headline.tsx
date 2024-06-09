import { HeadlineProps } from "./headline.types";

export function Headline({ title, centralized, subTitle }: HeadlineProps) {
  return (
    <div className="flex flex-col gap-1">
      <h1
        className={`font-bold text-2xl dark:text-white ${
          centralized && "text-center"
        }`}
      >
        {title}
      </h1>
      {subTitle && (
        <p
          className={`text-sm dark:text-gray-light ${
            centralized && "text-center"
          }`}
        >
          {subTitle}
        </p>
      )}
    </div>
  );
}
