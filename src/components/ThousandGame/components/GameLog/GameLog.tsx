import {useContext, useEffect, useState} from "react";
import {PlayersDataStateContext} from "../InitialGameStore/components/PlayersDataStore/PlayersDataStore.tsx";
import type {PlayersDataStateType} from "../InitialGameStore/components/PlayersDataStore/types.ts";

// const gameLogs = []

export function GameLog() {

    const checkContextPlayer = useContext(PlayersDataStateContext)

    // const [lastTurnInfo, setLastTurnInfo] = useState<PlayersDataStateType>({checkContextPlayer.playersDataState})
    //
    // useEffect(() => {
    //     const checkedPlayer = (checkContextPlayer.playersDataState.activePlayer === "firstPlayer") ? "secondPlayer" : "firstPlayer";
    //     const anotherPlayer = checkContextPlayer.playersDataState.activePlayer;
        if
    //
    // }, [checkContextPlayer])

    return (
        <div>
            Люблю {checkContextPlayer.playersDataState[checkContextPlayer.playersDataState.activePlayer].name} каждую секунду
        </div>
    )
}