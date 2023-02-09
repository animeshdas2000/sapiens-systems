import { UnauthenticatedNav } from "./top";
import Sidebar from "./Sidebar";
export default function Layout({ token, children }: any) {
  return (
    <>
      <header>
        <UnauthenticatedNav />
      </header>

      <main>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div style={{ margin: "10px 20px" }}>{children}</div>
        </div>
      </main>
    </>
  );
}
