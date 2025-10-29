import { Outlet } from "react-router-dom";
import { Dock } from "./Dock";
import { CommandMenu } from "./CommandMenu";
import { Footer } from "./Footer";
import { ThemeToggle } from "./ThemeToggle";

export function Layout() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <ThemeToggle />
      <CommandMenu />
      
      <main className="flex-1 pb-24">
        <Outlet />
      </main>
      
      <Footer />
      <Dock />
    </div>
  );
}
