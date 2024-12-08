"use client";
import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import Profile from "@/app/components/Profile";
import CallbackDemo from "@/app/components/CallbackDemo";
import ContextDemo from "@/app/components/context/ContextDemo";
import OldComponent from "@/app/components/OldComponent";
import CounterWithReducer from "@/app/components/reducer/CounterWithReducer";
import ChildrenDemo from "@/app/components/ChildrenDemo";
import TodoWithReducer from "@/app/components/todos/TodoWithReducer";
import TodoProblem from '@/app/components/query/TodoProblem';
import TodoCount from '@/app/components/query/TodoCount';

export default function IndexPage() {

  const profile ={
    name:"Some Name",
    image:"https://randomuser.me/api/portraits/women/8.jpg"
  }
  return (<div>
    <Counter />
    {/*<Profile profile={profile}/>*/}
    {/*<CallbackDemo/>*/}
    {/*<ContextDemo/>*/}
    {/*<OldComponent/>*/}
    {/*<CounterWithReducer/>*/}
   {/* <ChildrenDemo>
        <h1>This is child</h1>
    </ChildrenDemo>*/}
   {/* <TodoWithReducer/>*/}
    <TodoCount/>
    
  </div>);
}

