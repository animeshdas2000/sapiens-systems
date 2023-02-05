import { UnauthenticatedNav } from "./top";

export default function Layout({ token, children }: any) {
  return (
    <>
      <header>
        <UnauthenticatedNav />
      </header>
      <main>
        <div>
          <>{children}</>
        </div>
      </main>
    </>
  );
}
