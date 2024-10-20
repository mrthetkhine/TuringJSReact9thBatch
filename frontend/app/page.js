import Image from "next/image";
import styles from "./page.module.css";
import HelloWorld, {Child} from "@/app/components/HelloWorld";
import SimpleJsx from "@/app/components/SimpleJsx";
import Greeting from "@/app/components/Greeting";
import Profile from "@/app/components/Profile";
import ContainerDemo from "@/app/components/ContainerDemo";
import CustomDiv from "@/app/components/CustomDiv";
import {red} from "next/dist/lib/picocolors";
import {Border} from "@/app/components/Border";
import User from "@/app/components/conditional-rendering/User";
import JsxInput from "@/app/components/JsxInput";
import ListDemo from "@/app/components/ListDemo";
import EventDemo from "@/app/components/EventDemo";

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
            <EventDemo/>
        </main>

    </div>
  );
}
