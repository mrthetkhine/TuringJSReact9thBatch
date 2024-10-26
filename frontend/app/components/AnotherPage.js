"use client"
import CustomButton from "@/app/components/CustomButton";
import ContextMenuEventDemo from "@/app/components/ContextMenuEventDemo";

export default function AnotherPage() {
    return (<div>
       {/* <CustomButton handler={(event)=>console.log('Event ',event)}>

        </CustomButton>*/}
        <ContextMenuEventDemo/>
    </div>)

}