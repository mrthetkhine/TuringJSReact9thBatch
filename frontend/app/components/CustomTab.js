import {useState} from "react";
import './CustomTab.css';
export default function CustomTab({headers,children}) {
    console.log('Header ',headers);

    const [activeTab,setActiveTab] = useState(0);
    const tabHeaderClick = (index)=>{
        console.log('Click index ',index);
        setActiveTab(index);
    }
    return (<div>
        {
            headers.map((header,index)=><span
                onClick={()=>tabHeaderClick(index)}
                key={index}
                className={'custom-tab-header'}>
                {header}
            </span>)
        }
        <div className={'custom-tab-body'}>
            {children[activeTab]}
        </div>
    </div>)
}