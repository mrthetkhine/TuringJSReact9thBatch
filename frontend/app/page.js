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
import ProductList from "@/app/components/productlist/ProductList";
import DifferentPosition from "./components/reconciliation/DifferentPosition";
import SamePosition from "./components/reconciliation/SamePosition";
import DifferentComponent from "./components/reconciliation/DifferentComponent";
import DifferentPositionReset from "./components/reconciliation/DifferentPositionReset";
import DifferentKey from "./components/reconciliation/DifferentKey";
import KeyWithIndexProblem from "./components/reconciliation/KeyWithIndexProblem";
import KeyWithId from "./components/reconciliation/KeyWithId";
import CounterWithReducer from "./components/reducer/CounterWithReducer";
import TodoWithReducer from "./components/reducer/TodoWithReducer";
import WhyContext from "./components/context/WhyContext";
import ThemeComponent from "./components/context/ThemeComponent";
import TodoWithContext from "./components/context/TodoWithContext";
import RefProblem from "./components/ref/RefProblem";
import FocusInput from "./components/ref/FocusInput";
import ReactProblem from "./components/ref/ReactProblem";
import DatePicker from "./components/ref/DatePicker";
import VideoPlayerEffectDemo from "./components/effect/EffectDemo";
import EffectDemo from "./components/effect/EffectDemo";
import EffectExactOnce from "./components/effect/EffectExactOnce";
import EffectCycle from "./components/effect/EffectCycle";
import EffectCleanUp from "./components/effect/EffectCleanUp";
import CleanUpDemo from "./components/effect/CleanUpDemo";
import TodoFetch from "./components/hook/TodoFetch";
import ClassComponentDemo from "./components/ClassComponentDemo";
import HookDemo from "./components/hook/HookDemo";
import LoadUser from "./components/hook/LoadUser";
import FetchUser from "./components/hook/FetchUser";
import FormikSimpleExample from "./components/form/FormikSimpleExample";
import FormWithValidation from "./components/form/FormWithValidation";
import FormikBasicExample from "./components/form/FormikBasicExample";
import RenderPropertyProblem from "./components/design-pattern/RenderPropertyProblem";
import RenderProperty from "./components/design-pattern/RenderProperty";
import CustomFormik from "./components/form/CustomFormik";
import React from "react";
import CustomFormikDemo from "./components/form/CustomFormikDemo";
import ErrorBoundary from "./components/error/ErrorBoundary";
import Table from "./components/fragement/Table";
import PortalDemo from "./components/PortalDemo";
import CallBackProblem from "./components/callback/CallBackProblem";
import UseMemoDemo from "./components/UseMemoDemo";
import CustomLayout from "./components/design-pattern/CustomLayout";
import CustomLayoutDemo from "./components/design-pattern/CustomLayoutDemo";
import ComponentWithLogger from "./components/design-pattern/hoc/ComponentWithLogger";
import FetchDemoWithPattern from "./components/hook/FetchDemoWithPattern";
import HocDemo from "./components/design-pattern/hoc/HocDemo";

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
           {/* <TodoContainer/>*/}
           {/* <ProductList/>*/}
            {/*<DifferentPosition/>*/}
           {/* <SamePosition/>*/}
           {/* <DifferentComponent/>*/}
           {/* <DifferentPositionReset/>*/}
           {/* <DifferentKey/>*/}
           {/* <KeyWithIndexProblem/>*/}
            {/*<KeyWithId/>*/}
           {/* <CounterWithReducer/>*/}
           {/* <TodoWithReducer/>*/}
           {/* <WhyContext/>*/}
          {/*  <ThemeComponent/>*/}

            {/*<RefProblem/>*/}
           {/* <FocusInput/>*/}
          {/*  <ReactProblem/>*/}
          {/*  <DatePicker/>*/}
           {/* <VideoPlayerEffectDemo/>*/}
           {/* <EffectDemo/>*/}
          {/*  <EffectExactOnce/>*/}
          {/*  <EffectCycle/>*/}
           {/* <EffectCleanUp/>*/}
           {/* <CleanUpDemo/>*/}
            {/*<TodoFetch/>*/}
           {/* <ClassComponentDemo/>*/}
           {/* <HookDemo/>*/}
           {/* <LoadUser/>*/}
           {/* <CustomHookDemo/>*/}
           {/* <CounterWithReducer/>
             <TodoWithContext/>*/}
          {/*  <FormikSimpleExample/>*/}
           {/* <FormWithValidation/>*/}
           {/* <FormikBasicExample/>*/}
          {/*  <RenderPropertyProblem/>*/}
            {/*<RenderProperty >
                {(position)=>{
                    return <div>
                        <div> Position x {position.x}</div>
                        <div> Position y {position.y}</div>
                    </div>
                }}
            </RenderProperty>*/}
            {/*<CustomFormikDemo/>*/}
            {/*<ErrorBoundary fallback={<p>Something went wrong</p>}>
                <Greeting message={123}/>
            </ErrorBoundary>*/}
           {/* <Table/>*/}
            {/*<PortalDemo/>*/}
           {/* <CallBackProblem/>*/}
            {/*<UseMemoDemo/>*/}
           {/* <CustomLayoutDemo/>*/}
            {/*<ComponentWithLogger/>*/}
           {/* <FetchDemoWithPattern/>*/}
            <HocDemo/>
        </main>

    </div>
  );
}
