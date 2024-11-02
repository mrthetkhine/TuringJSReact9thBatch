import { useState } from 'react';
import Counter from "../Counter";
import {Border} from "../Border";

export default function DifferentComponent() {
    const [isPaused, setIsPaused] = useState(false);
    return (
        <div>
            {isPaused ? (
                <p>See you later!</p>
            ) : (
                <Border>
                    <Counter />
                </Border>

            )}
            <label>
                <input
                    type="checkbox"
                    checked={isPaused}
                    onChange={e => {
                        setIsPaused(e.target.checked)
                    }}
                />
                Take a break
            </label>
        </div>
    );
}