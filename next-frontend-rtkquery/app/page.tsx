import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import Welcome from "@/app/components/welcome/Welcome";

export default function IndexPage() {
  return (<div>
    {/*<Counter />*/}
    <Welcome/>
    </div>);
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
