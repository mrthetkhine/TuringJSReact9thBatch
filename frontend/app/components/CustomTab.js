import {useState} from "react";
import './CustomTab.css';
import classNames from 'classnames';
function TabHeader({onClick,header,activeTab}) {

    const tabHeaderClass = classNames({
        'custom-tab-header': true,
        'active': activeTab,
    });

    return <span
        onClick={onClick}
        className={tabHeaderClass}>
                {header}
    </span>;
}

export default function CustomTab({headers,children}) {
    console.log('Header ',headers);

    const [activeTab,setActiveTab] = useState(0);
    const tabHeaderClick = (index)=>{
        console.log('Click index ',index);
        setActiveTab(index);
    }
    return (<div>
        {
            headers.map((header,index)=><TabHeader
                key={index}
                activeTab={activeTab== index}
                onClick={() => tabHeaderClick(index)}
                header={header}/>)
        }
        <div className={'custom-tab-body'}>
            {children[activeTab]}
        </div>
    </div>)
}