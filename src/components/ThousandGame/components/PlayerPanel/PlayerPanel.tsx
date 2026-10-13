import {useContext, useState} from "react";
import {StageDataStateContext} from "../InitialGameStore/components/StageDataStore/StageDataStore.tsx";
import {PlayersDataStateContext} from "../InitialGameStore/components/PlayersDataStore/PlayersDataStore.tsx";


export function PlayerPanel(){

    const checkContextStage = useContext(StageDataStateContext)
    const checkContextPlayer = useContext(PlayersDataStateContext)
    const randomDice = {availableDice:Math.floor(Math.random() * 5) + 1}
    const initValue = checkContextPlayer?.playersDataState[checkContextPlayer.playersDataState.activePlayer].name


    const [inputValue, setInputValue] = useState(initValue);

    return (
        <div>
            PlayerPanel
            <button onClick={() => {checkContextStage?.setStageDataState(randomDice)}} > {checkContextStage?.stageDataState.availableDice}</button>
            <input value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)}
                   onBlur={() => checkContextPlayer?.setPlayersDataState({name:inputValue})}
                   onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                       if (e.key === "Enter") {
                           checkContextPlayer?.setPlayersDataState(undefined,undefined,true)
                           e.currentTarget.blur()
                       }
                   }} />
        </div>
    )
}