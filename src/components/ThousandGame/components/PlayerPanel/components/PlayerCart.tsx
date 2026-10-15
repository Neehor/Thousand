import {useState} from "react";


export function PlayerCart({player, isActive, onBlure}) {

    const [inputValue, setInputValue] = useState(player.name);
    return (
        <section>
            <input value={inputValue}
                   readOnly={!isActive}
                   onChange={(e) => setInputValue(e.target.value)}
                // onBlur={() => onBlure({name:inputValue})}
                   onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                       if (e.key === "Enter") {
                           onBlure({name: inputValue})
                           e.currentTarget.blur()
                       }
                   }}/>
            <span>{player.score}</span>
        </section>
    )
}