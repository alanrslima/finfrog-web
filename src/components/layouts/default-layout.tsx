import React, { ReactNode } from "react";
import { NavBar } from "../organisms/nav-bar";

type DefaultLayoutProps = {
  children: ReactNode;
};

export function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <div className="h-dvh w-dvw overflow-hidden flex flex-col">
      <header className="h-[32px]">header</header>
      <div className="flex flex-1">
        <NavBar />
        <div className="flex-1 overflow-y-scroll bg-background">
          <main className="w-full max-w-[1280px] h-full mx-auto bg-blue-400">
            {props.children}
          </main>
        </div>
      </div>
    </div>
  );
}
