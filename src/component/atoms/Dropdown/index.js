import React, { useState } from "react";
import useClickOutside from "../../../hooks/useClickOutside";
import { Icon } from "@iconify/react";

function Label({ id, type, label, customLabel, className }) {
  const typeLabel = type || "";
  const labelStyle = `whitespace-nowrap ${className}`;

  switch (typeLabel) {
    case "label":
      return (
        <p className={labelStyle} data-testid={`dropdown-label-${id}`}>
          {label}
        </p>
      );

    case "label-icon":
      return (
        <>
          <p className={labelStyle} data-testid={`dropdown-label-${id}`}>
            {label}
          </p>
          <Icon icon="tabler:chevron-down" width={20} height={20} />
        </>
      );

    case "custom":
      return customLabel;

    default:
      break;
  }
}

function Dropdown({
  id,
  children,
  option,
  width,
  position = "bl",
  menuStyle = "border",
  holdMenuOpen = false,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const elmDropdown = useClickOutside(() => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  });

  const optionLabel = { ...option, id };

  // base style dropdown
  let dropdownStyle = "absolute bg-white z-10 rounded";
  const inlineStyle = {};

  // set width dropdown
  if (width) inlineStyle.minWidth = width;

  // set postion
  if (position === "bl") dropdownStyle += " top-[calc(100%+6px)] left-0";
  if (position === "br") dropdownStyle += " top-[calc(100%+6px)] right-0";
  if (position === "tl") dropdownStyle += " bottom-[calc(100%+6px)] left-0";
  if (position === "tr") dropdownStyle += " bottom-[calc(100%+6px)] right-0";

  // dropdown menu style
  if (menuStyle === "border") dropdownStyle += " border border-gray2";
  if (menuStyle === "shadow")
    dropdownStyle += " shadow-[0px_1px_8px_0px_rgba(0,_0,_0,_0.25)]";

  // trigger style
  let triggerMenu = "cursor-pointer";
  if (option.type === "label-icon")
    triggerMenu += " flex items-center gap-[6px]";

  const handleOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative" ref={elmDropdown}>
      <div
        className={triggerMenu}
        id={`dropdown-${id}`}
        data-testid={`dropdown-${id}`}
        onClick={() => handleOpen()}
        onKeyDown={() => handleOpen()}
        role="presentation"
      >
        <Label {...optionLabel} />
      </div>
      {menuOpen && (
        <div
          id={`dropdown-menu-${id}`}
          data-testid={`dropdown-menu-${id}`}
          className={dropdownStyle}
          style={inlineStyle}
          onClick={() => !holdMenuOpen && setMenuOpen(false)}
          onKeyDown={() => !holdMenuOpen && setMenuOpen(false)}
          role="presentation"
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
