import { Outlet } from "react-router";
import LayoutHeader from "@/components/LayoutHeader";

function App() {
  return (
    <>
      <LayoutHeader />

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
