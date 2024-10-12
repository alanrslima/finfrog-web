import React, { ReactNode } from "react";
import { NavBar } from "../organisms/nav-bar";
import { Header } from "../molecules/header";

type DefaultLayoutProps = {
  children: ReactNode;
};

export function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <div className="h-dvh w-dvw overflow-hidden flex flex-col">
      <div className="flex flex-1">
        <NavBar />
        <div className="flex-1 bg-background overflow-y-scroll">
          <Header />
          <main className="w-full p-6 max-w-[1280px] mx-auto">
            {props.children}
          </main>
        </div>
      </div>
    </div>
  );
}
