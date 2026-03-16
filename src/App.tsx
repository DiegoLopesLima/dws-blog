import { NuqsAdapter } from "nuqs/adapters/react";
import { Outlet } from "react-router";
import LayoutHeader from "@/components/LayoutHeader";
import FilterProvider from "@/providers/FilterProvider";

function App() {
  return (
    <NuqsAdapter>
      <FilterProvider>
        <LayoutHeader />

        <Outlet />
      </FilterProvider>
    </NuqsAdapter>
  );
}

export default App;
