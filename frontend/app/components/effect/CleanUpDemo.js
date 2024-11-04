import Counter from "../Counter";
import {useState} from "react";
import EffectCleanUp from "./EffectCleanUp";

export default function CleanUpDemo()
{
    const [showB, setShowB] = useState(true);
    return (
        <div>

            {showB && <EffectCleanUp />}
            <label>
                <input
                    type="checkbox"
                    checked={showB}
                    onChange={e => {
                        setShowB(e.target.checked)
                    }}
                />
                Render the second counter
            </label>
        </div>
    );
}