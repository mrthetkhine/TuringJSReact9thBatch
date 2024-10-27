"use client";
import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import HelloWorld, {Child} from "@/app/components/HelloWorld";
import SimpleJsx from "@/app/components/SimpleJsx";
import Greeting from "@/app/components/Greeting";
import Profile from "@/app/components/Profile";
import ContainerDemo from "@/app/components/ContainerDemo";
import CustomDiv from "@/app/components/CustomDiv";
import {bold, red} from "next/dist/lib/picocolors";
import {Border} from "@/app/components/Border";
import User from "@/app/components/conditional-rendering/User";
import JsxInput from "@/app/components/JsxInput";
import ListDemo from "@/app/components/ListDemo";
import EventDemo from "@/app/components/EventDemo";
import CustomButton from "@/app/components/CustomButton";
import AnotherPage from "@/app/components/AnotherPage";
import Counter from "@/app/components/Counter";
import ImmutableState from "@/app/components/ImmutableState";
import BatchUpdate from "@/app/components/BatchUpdate";
import ListUpdate from "@/app/components/ListUpdate";
import MovingDot from "@/app/components/MovingDot";
import DeepObjectState from "@/app/components/DeepObjectState";
import CustomTab from "@/app/components/CustomTab";
import FormDemo from "@/app/components/form/FormDemo";
import FormDemoTwo from "@/app/components/form/FormDemoTwo";
import TodoContainer from "@/app/components/todos/TodoContainer";

export default function Home() {
    let profile1 = {
        url :"https://randomuser.me/api/portraits/women/26.jpg",
        name : "User 1"
    };
    let profile2 ={
        url :"https://randomuser.me/api/portraits/women/28.jpg",
        name : "User 2"
    }
    let size = {
        width:120,
        height:50,
    };
    let items = [
        {
            id: 1,
            title: 'Todo 1'
        },
        {
            id :2,
            title: 'Todo 2'
        }
    ];
  return (
    <div className={styles.page}>
        <main className={styles.main}>
            Welcome to Next.js
            {/* <HelloWorld/>
        <HelloWorld/>

          <Child/>*/}
            {/* <SimpleJsx/>*/}
            {/* <HelloWorld/>*/}
            {/* <Greeting message={"Hi"}/>
          <Greeting message={"Good evening"}/>*/}
           {/* <Profile profile={profile1}/>
            <Profile profile={{
                url :"https://randomuser.me/api/portraits/women/28.jpg",
                name : "User 2"
            }}/>*/}
            {/*<ContainerDemo {...size}/>*/}
            {/*<CustomDiv style={{
                color:'red',
            width:'100%'
            }} className={'profile'}></CustomDiv>*/}
            {/*<Border>
                <Profile profile={profile1}/>
            </Border>
            <Border>
                <h1>Hello</h1>
                <h2>Another</h2>
            </Border>*/}
            {/*<User admin/>
            <User admin={false}/>*/}
           {/* <JsxInput element={<User admin/> }/>*/}

            {/*<ListDemo todos={items}/>*/}
            {/*<EventDemo/>*/}
            {/*<AnotherPage/>*/}
           {/* <Counter/>
            <Counter/>
            <Counter/>*/}
           {/* <ImmutableState/>*/}
            {/*<BatchUpdate/>*/}
            {/*<ListUpdate/>*/}
            {/*<MovingDot/>*/}
           {/* <DeepObjectState/>*/}
           {/* <CustomTab headers={["Tab1", "Tab2", "Tab3"]}>
                <div style={{
                    color:'red'
                }}>Page 1</div>
                <div>Page 2</div>
                <div>Page 3</div>
            </CustomTab>*/}
           {/* <FormDemo/>*/}
           {/* <FormDemoTwo/>*/}
            <TodoContainer/>
        </main>

    </div>
  );
}
