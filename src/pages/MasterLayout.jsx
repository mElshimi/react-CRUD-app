import { Outlet } from "react-router-dom";
import Headers from "../components/Headers";

export default function MasterLayout() {
  return (
    <>
      <main className="min-h-screen dark:bg-gray-900">
        <Headers />
        <Outlet />
      </main>
    </>
  );
}
