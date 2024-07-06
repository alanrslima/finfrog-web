import { Header, Headline, SideBar } from "@/components";
import { DefaultLayoutProps } from "./default-layout.types";

export function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Header />
      <div className="flex overflow-hidden flex-1">
        <SideBar />
        <div className="flex px-[24px] mx-auto flex-col max-w-[1626px] flex-1">
          <Headline
            title="Transações"
            subTitle="Confira as suas transações ao passar do tempo"
          />
          {props.children}
        </div>
      </div>
    </div>
  );
}
