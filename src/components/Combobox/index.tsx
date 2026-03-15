import { Icon, loadIcons } from "@iconify/react";
import { clsx } from "clsx";
import { useState } from "react";
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from "../Dropdown";
import styles from "./index.module.scss";

export type ComboboxOption = {
  label: string;
  value: unknown;
};

export type ComboboxProps = {
  label: string;
  options: ComboboxOption[];
  value?: ComboboxOption[];
  onChange?: (value: ComboboxOption[]) => void;
};

loadIcons(["mdi:check"]);

function Combobox({ label = "Select an option", options, value = [], onChange }: ComboboxProps) {
  const [selectedOptions, setSelectedOptions] = useState<ComboboxOption[]>(value);

  const handleSelectOption = (option: ComboboxOption) => {
    setSelectedOptions((state) => {
      if (state.includes(option)) {
        return state.filter((selectedOption) => selectedOption.value !== option.value);
      }

      return [...state, option];
    });

    onChange?.(selectedOptions);
  };

  return (
    <Dropdown closeOnSelect={false}>
      <DropdownTrigger variant="outline">
        <span className={styles["combobox-label"]}>
          {selectedOptions.length > 0 ? selectedOptions.map((option) => option.label).join(", ") : label}
        </span>

        <Icon icon="mdi:chevron-down" />
      </DropdownTrigger>

      <DropdownContent>
        {options.map((option) => (
          <DropdownItem
            key={option.label}
            onClick={() => handleSelectOption(option)}
            className={clsx(styles["combobox-option"], {
              [styles["combobox-option-selected"]]: selectedOptions.includes(option),
            })}
          >
            <Icon icon="mdi:check" className={styles["combobox-option-icon"]} />

            {option.label}
          </DropdownItem>
        ))}
      </DropdownContent>
    </Dropdown>
  );
}

export default Combobox;
