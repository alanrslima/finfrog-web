import { AlertContentProps } from "./alert-content.types";

export function AlertContent(props: AlertContentProps) {
  return (
    <div
      role="alert"
      className="rounded border-s-4 border-red-500 bg-red-50 p-4 dark:bg-red-950"
    >
      {props.title && (
        <strong className="block mb-2 font-medium text-red-800 dark:text-red-100">
          {props.title}
        </strong>
      )}
      <p className="text-sm text-red-700 dark:text-red-100">
        {props.description}
      </p>
    </div>
  );
}
