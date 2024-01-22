import { Icon } from "@iconify/react";
import "./style.css";
import { cn } from "../../../lib/utils";

function InputSelector({ type, options, className }) {
  let element;

  switch (type) {
    case "text":
    case "number":
      element = <input className={cn(className)} type={type} {...options} />;
      break;

    case "textarea":
      element = <textarea className={cn(className)} {...options} />;
      break;
    default:
      break;
  }

  return element;
}

export default function InputBuilder({
  id,
  label,
  type,
  options,
  icon,
  className,
}) {
  return (
    <div
      className={cn(
        "input-wrapper",
        icon?.icon ? "flex items-center" : "",
        className
      )}
    >
      {icon?.icon && (
        <Icon
          className="absolute z-[1] left-[16px]"
          color="#909090"
          icon={icon.icon}
          width={30}
          height={30}
        />
      )}
      {label && <label htmlFor={id}>{label}</label>}
      <InputSelector
        type={type}
        options={{ ...options, id }}
        className={icon?.icon ? "!pl-[52px]" : ""}
      />
    </div>
  );
}
