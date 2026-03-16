import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router";
import LayoutHeader from "@/components/LayoutHeader";
import FilterProvider from "@/providers/FilterProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FilterProvider>
        <LayoutHeader />

        <Outlet />
      </FilterProvider>
    </QueryClientProvider>
  );
}

export default App;
