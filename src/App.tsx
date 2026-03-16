import { Outlet } from "react-router";
import LayoutHeader from "@/components/LayoutHeader";
import FilterProvider from "@/providers/FilterProvider";

function App() {
  return (
    <FilterProvider>
      <LayoutHeader />

      <Outlet />
    </FilterProvider>
  );
}

export default App;
