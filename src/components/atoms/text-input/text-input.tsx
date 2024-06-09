import { TextInputProps } from "./text-input.types";

export function TextInput({ label, error, ...props }: TextInputProps) {
  return (
    <div className="flex flex-col gap-1 box-border">
      <label
        htmlFor={props.id}
        className="text-dark dark:text-white text-sm font-semibold"
      >
        {label}
      </label>
      <input
        className={`${
          error && "border-red-600"
        } p-4 text-sm border-gray-light border-[1px] rounded-md dark:bg-dark dark:border-gray outline-green-dark`}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-600 font-semibold mt-1">{error}</span>
      )}
    </div>
  );
}
