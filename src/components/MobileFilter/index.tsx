import { Icon } from "@iconify/react";
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from "@/components/Dropdown";

function MobileFilter() {
  const handleClick = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Dropdown>
        <DropdownTrigger variant="outline">
          <span>Trigger</span>

          <Icon icon="mdi:chevron-down" />
        </DropdownTrigger>

        <DropdownContent>
          <DropdownItem onClick={() => handleClick("Item 1")}>Item 1</DropdownItem>

          <DropdownItem onClick={() => handleClick("Item 2")}>Item 2</DropdownItem>

          <DropdownItem onClick={() => handleClick("Item 3")}>Item 3</DropdownItem>

          <DropdownItem onClick={() => handleClick("Item 4")}>Item 4</DropdownItem>

          <DropdownItem onClick={() => handleClick("Item 5")}>Item 5</DropdownItem>
        </DropdownContent>
      </Dropdown>
    </div>
  );
}

export default MobileFilter;
