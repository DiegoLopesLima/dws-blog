import { Icon } from "@iconify/react";
import { useMemo } from "react";
import { useFilterContext } from "@/providers/FilterProvider";
import Button from "../Button";
import styles from "./index.module.scss";

enum Order {
  Asc = "asc",
  Desc = "desc",
}

const orderOptionsLabelMap: Record<Order, string> = {
  [Order.Asc]: "Newest first",
  [Order.Desc]: "Oldest first",
};

function OrderByButton() {
  const { filterOrder, setFilterOrder } = useFilterContext();

  const orderLabel = useMemo(() => {
    return orderOptionsLabelMap[filterOrder];
  }, [filterOrder]);

  const handleClickButton = () => {
    setFilterOrder(filterOrder === Order.Asc ? Order.Desc : Order.Asc);
  };

  return (
    <Button variant="ghost" onClick={handleClickButton}>
      <span className={styles["order-by-button-label"]}>Sort by:</span>

      {orderLabel}

      <Icon icon="pepicons-pop:sort" />
    </Button>
  );
}

export default OrderByButton;
