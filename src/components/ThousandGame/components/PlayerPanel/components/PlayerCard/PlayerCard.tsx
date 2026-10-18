import {useState} from "react";
import styles from "./PlayerCard.module.css";
import type {Player} from "../../../InitialGameStore/components/PlayersDataStore/types";
import type {contextPlayerDataType} from "../../../InitialGameStore/components/PlayersDataStore/types";

type PlayerCardPropsType = {
    player: Player;
    isActive: boolean;
    setPlayersDataState: contextPlayerDataType["setPlayersDataState"];
}

export function PlayerCard(props: PlayerCardPropsType) {
    const {player, isActive, setPlayersDataState} = props;
    const [inputValue, setInputValue] = useState(player.name);

    const onBlurHandler = () => {
        if (!isActive) return;
        if (inputValue) {
            setPlayersDataState({name: inputValue})
        } else {
            setInputValue(player.name)
        }
    }


    return (
        <article className={`${styles.card} ${isActive ? styles.active : ''}`}>
            <input value={inputValue}
                   readOnly={!isActive}
                   onChange={(e) => setInputValue(e.target.value)}
                   onBlur={onBlurHandler}
                   onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                       if (e.key === "Enter") {
                           e.currentTarget.blur()
                       }
                   }}/>
            <span>Score:{player.score}</span>
        </article>
    )
}
