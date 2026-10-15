import {useContext} from "react";
import {PlayersDataStateContext} from "../InitialGameStore/components/PlayersDataStore/PlayersDataStore.tsx";
import {PlayerCart} from "./components";
import {StageDataStateContext} from "../InitialGameStore/components/StageDataStore/StageDataStore.tsx";


export function PlayerPanel() {

    const checkContextStage = useContext(StageDataStateContext)
    const checkContextPlayer = useContext(PlayersDataStateContext)
    // const randomDice = {availableDice:Math.floor(Math.random() * 5) + 1}
    // const initValue = checkContextPlayer?.playersDataState[checkContextPlayer.playersDataState.activePlayer].name
    //
    //
    // const [inputValue, setInputValue] = useState(initValue);

    return (
        // <div>
        //     PlayerPanel
        //     <button onClick={() => {checkContextStage?.setStageDataState(randomDice)}} > {checkContextStage?.stageDataState.availableDice}</button>
        //     <button onClick={() => {checkContextPlayer?.setPlayersDataState(undefined,undefined,true)}} > changeActivePlayer</button>
        //     <input value={inputValue}
        //            onChange={(e) => setInputValue(e.target.value)}
        //            onBlur={() => checkContextPlayer?.setPlayersDataState({countRedZone:inputValue})}
        //            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
        //                if (e.key === "Enter") {
        //                    checkContextPlayer?.setPlayersDataState(undefined,undefined,true)
        //                    e.currentTarget.blur()
        //                }
        //            }} />
        // </div>
        <div className="player-panel">
            <PlayerCart player={checkContextPlayer.playersDataState.firstPlayer}
                        isActive={checkContextPlayer.playersDataState.activePlayer === "firstPlayer"}
                        onBlure={checkContextPlayer.setPlayersDataState}/>
            <button onClick={() => {
                checkContextPlayer?.setPlayersDataState(undefined, undefined, true)
            }}> changeActivePlayer
            </button>
            <button onClick={() => {checkContextStage?.setStageDataState({stageState:"inGame"})}} > {checkContextStage?.stageDataState.stageState}</button>
            <PlayerCart player={checkContextPlayer.playersDataState.secondPlayer}
                        isActive={checkContextPlayer.playersDataState.activePlayer === "secondPlayer"}
                        onBlure={checkContextPlayer.setPlayersDataState}/>
        </div>
    )
}