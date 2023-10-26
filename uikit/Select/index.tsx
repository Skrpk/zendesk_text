import React from "react";
import * as RadixSelect from "@radix-ui/react-select";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import * as styles from "./select.css";

interface DropdownOption {
  name: string;
  value: string;
}

interface DropdownProps {
  options: DropdownOption[];
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

const Select: React.FC<DropdownProps> = ({
  options,
  value,
  placeholder,
  onChange,
  ...rest
}) => {
  const currentValue = value ?? "";

  return (
    <RadixSelect.Root onValueChange={onChange} value={currentValue} {...rest}>
      <RadixSelect.Trigger className={styles.trigger}>
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon>
          <ChevronDownIcon />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content position="popper">
          <RadixSelect.Viewport className={styles.viewport}>
            {options.map((option) => (
              <RadixSelect.Item
                className={styles.item}
                value={option.value}
                key={option.value}
              >
                <RadixSelect.ItemText>{option.name}</RadixSelect.ItemText>
                <RadixSelect.ItemIndicator />
              </RadixSelect.Item>
            ))}
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
};

export default Select;
