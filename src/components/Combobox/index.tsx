import { Icon, loadIcons } from "@iconify/react";
import { clsx } from "clsx";
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
  const selectedOptions = value;

  const handleSelectOption = (option: ComboboxOption) => {
    const next = selectedOptions.some((selectedOption) => selectedOption.value === option.value)
      ? selectedOptions.filter((selectedOption) => selectedOption.value !== option.value)
      : [...selectedOptions, option];

    onChange?.(next);
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
            key={option.value as string}
            onClick={() => handleSelectOption(option)}
            className={clsx(styles["combobox-option"], {
              [styles["combobox-option-selected"]]: selectedOptions.some(
                (selectedOption) => selectedOption.value === option.value,
              ),
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
