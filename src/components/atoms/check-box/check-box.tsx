import { CheckBoxProps } from "./check-box.types";

export function CheckBox({ label, onChange, ...props }: CheckBoxProps) {
  function handleOnChange() {
    onChange(!props.checked);
  }

  return (
    <button
      type="button"
      role="checkbox"
      onClick={handleOnChange}
      className="flex items-center border-none cursor-pointer gap-2 "
      aria-checked={props.checked}
    >
      <input
        {...props}
        type="checkbox"
        aria-checked={props.checked}
        checked={props.checked}
        className="hidden overflow-hidden whitespace-nowrap"
        onChange={handleOnChange}
      />
      <label
        className={`rounded-md cursor-pointer border-gray-light ${
          props.checked && "bg-green-dark border-green-dark"
        } border-2 flex w-7 h-7`}
      />
      <div className="flex flex-1">{label()}</div>
    </button>
  );
}
