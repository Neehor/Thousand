import {useEffect, useState} from "react";
import type {PlayersDataStateType} from "../InitialGameStore/components/PlayersDataStore/types.ts";
import {usePlayersDataStateContext} from "../InitialGameStore/components/PlayersDataStore";
import styles from "./GameLog.module.css"

const gameLogs: string[] = []

export function GameLog() {

    const checkContextPlayer = usePlayersDataStateContext()


    const [lastTurnInfo, setLastTurnInfo] = useState<PlayersDataStateType>(checkContextPlayer.playersDataState)

    useEffect(() => {
        const checkedPlayer = (checkContextPlayer.playersDataState.activePlayer === "firstPlayer") ? "secondPlayer" : "firstPlayer";
        const anotherPlayer = checkContextPlayer.playersDataState.activePlayer;

        if (lastTurnInfo[checkedPlayer].score > checkContextPlayer.playersDataState[checkedPlayer].score && !(lastTurnInfo[anotherPlayer].score > checkContextPlayer.playersDataState[anotherPlayer].score) && !(lastTurnInfo[checkedPlayer].countRedZone === 3 && (checkContextPlayer.playersDataState[checkedPlayer].countRedZone === 1 || checkContextPlayer.playersDataState[checkedPlayer].countRedZone === 0))) gameLogs.push(`${lastTurnInfo[checkedPlayer].name} was rolling over 1000`)
        if (lastTurnInfo[anotherPlayer].score > checkContextPlayer.playersDataState[anotherPlayer].score) gameLogs.push(`${lastTurnInfo[anotherPlayer].name} was overtaken by ${lastTurnInfo[checkedPlayer].name}, causing him to drop 50 points.`)
        if (lastTurnInfo[checkedPlayer].score > checkContextPlayer.playersDataState[checkedPlayer].score) gameLogs.push(`${lastTurnInfo[checkedPlayer].name} fell by 50 points`)
        if (lastTurnInfo[checkedPlayer].countRedZone !== checkContextPlayer.playersDataState[checkedPlayer].countRedZone) {
            if (checkContextPlayer.playersDataState[checkedPlayer].countRedZone === 0) gameLogs.push(`${lastTurnInfo[checkedPlayer].name} left the Red Zone`);
            if (lastTurnInfo[checkedPlayer].countRedZone === 0) gameLogs.push(`${lastTurnInfo[checkedPlayer].name} enter to Red Zone and needs to roll a ${checkContextPlayer.playersDataState[checkedPlayer].boundaryPoints} to get out`)
        }
        if (lastTurnInfo[anotherPlayer].countRedZone !== checkContextPlayer.playersDataState[anotherPlayer].countRedZone) {
            if (checkContextPlayer.playersDataState[anotherPlayer].countRedZone === 0) gameLogs.push(`${lastTurnInfo[anotherPlayer].name} left the Red Zone`);
            if (lastTurnInfo[anotherPlayer].countRedZone === 0) gameLogs.push(`${lastTurnInfo[anotherPlayer].name} enter to Red Zone and needs to roll a ${checkContextPlayer.playersDataState[anotherPlayer].boundaryPoints} to get out`)
        }
        if (lastTurnInfo[checkedPlayer].boundaryPoints > 0 && checkContextPlayer.playersDataState[checkedPlayer].boundaryPoints > 0 && lastTurnInfo[checkedPlayer].boundaryPoints !== checkContextPlayer.playersDataState[checkedPlayer].boundaryPoints) gameLogs.push(`${lastTurnInfo[checkedPlayer].name} re-entered the Red Zone and needs to roll a ${checkContextPlayer.playersDataState[checkedPlayer].boundaryPoints} to get out`);
        if (lastTurnInfo[anotherPlayer].boundaryPoints > 0 && checkContextPlayer.playersDataState[anotherPlayer].boundaryPoints > 0 && lastTurnInfo[anotherPlayer].boundaryPoints !== checkContextPlayer.playersDataState[anotherPlayer].boundaryPoints) gameLogs.push(`${lastTurnInfo[anotherPlayer].name} re-entered the Red Zone and needs to roll a ${checkContextPlayer.playersDataState[anotherPlayer].boundaryPoints} to get out`);
        if (lastTurnInfo[checkedPlayer].score === 0 && checkContextPlayer.playersDataState[checkedPlayer].score > 0) gameLogs.push(`${lastTurnInfo[checkedPlayer].name} enter to the game`);
        if (lastTurnInfo[checkedPlayer].score > 0 && checkContextPlayer.playersDataState[checkedPlayer].score === 0) {
            gameLogs.length = 0;
            gameLogs.push(`Start new game!`)
        }
        setLastTurnInfo(checkContextPlayer.playersDataState);
    }, [checkContextPlayer])


    return (
        <div className={styles.containerLog}>
            <ul>
                {gameLogs.map((log, index) => (<li key={index}>{log}</li>)
                )}
            </ul>
        </div>
    )
}