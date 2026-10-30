import {useEffect, useState} from "react";
import type {PlayersDataStateType} from "../InitialGameStore/components/PlayersDataStore/types.ts";
import {usePlayersDataStateContext} from "../InitialGameStore/components/PlayersDataStore";
import styles from "./GameLog.module.css"

const gameLogs: string[] = []

export function GameLog() {

    const checkContextPlayer = usePlayersDataStateContext()


    const [previousTurnInfo, setPreviousTurnInfo] = useState<PlayersDataStateType>(checkContextPlayer.playersDataState)

    useEffect(() => {
        const checkedPlayer = (checkContextPlayer.playersDataState.activePlayer === "firstPlayer") ? "secondPlayer" : "firstPlayer";
        const anotherPlayer = checkContextPlayer.playersDataState.activePlayer;
        const lastTurnCP = checkContextPlayer.playersDataState[checkedPlayer]
        const previousTurnCP = previousTurnInfo[checkedPlayer]
        const lastTurnAP = checkContextPlayer.playersDataState[anotherPlayer]
        const previousTurnAP = previousTurnInfo[anotherPlayer]

        if (
            previousTurnCP.score > lastTurnCP.score &&
            !(previousTurnAP.score > lastTurnAP.score) &&
            !(previousTurnCP.countRedZone === 3 &&
                (lastTurnCP.countRedZone === 1 || lastTurnCP.countRedZone === 0))
        ) {
            gameLogs.push(`${previousTurnCP.name} was rolling over 1000`)
        }

        if (previousTurnAP.score > lastTurnAP.score) {
            gameLogs.push(`${previousTurnAP.name} was overtaken by ${previousTurnCP.name}, causing him to drop 50 points.`)
        }

        if (previousTurnCP.score > lastTurnCP.score) {
            gameLogs.push(`${previousTurnCP.name} fell by 50 points`)
        }

        if (previousTurnCP.countRedZone !== lastTurnCP.countRedZone) {
            if (lastTurnCP.countRedZone === 0) {
                gameLogs.push(`${previousTurnCP.name} left the Red Zone`);
            }

            if (previousTurnCP.countRedZone === 0) {
                gameLogs.push(`${previousTurnCP.name} enter to Red Zone and needs to roll a ${lastTurnCP.boundaryPoints} to get out`)
            }
        }

        if (previousTurnAP.countRedZone !== lastTurnAP.countRedZone) {
            if (lastTurnAP.countRedZone === 0) {
                gameLogs.push(`${previousTurnAP.name} left the Red Zone`);
            }

            if (previousTurnAP.countRedZone === 0) {
                gameLogs.push(`${previousTurnAP.name} enter to Red Zone and needs to roll a ${lastTurnAP.boundaryPoints} to get out`)
            }
        }

        if (
            previousTurnCP.boundaryPoints > 0 &&
            lastTurnCP.boundaryPoints > 0 &&
            previousTurnCP.boundaryPoints !== lastTurnCP.boundaryPoints
        ) {
            gameLogs.push(`${previousTurnCP.name} re-entered the Red Zone and needs to roll a ${lastTurnCP.boundaryPoints} to get out`);
        }

        if (
            previousTurnAP.boundaryPoints > 0 &&
            lastTurnAP.boundaryPoints > 0 &&
            previousTurnAP.boundaryPoints !== lastTurnAP.boundaryPoints
        ) {
            gameLogs.push(`${previousTurnAP.name} re-entered the Red Zone and needs to roll a ${lastTurnAP.boundaryPoints} to get out`);
        }

        if (previousTurnCP.score === 0 && lastTurnCP.score > 0) {
            gameLogs.push(`${previousTurnCP.name} enter to the game`);
        }

        if (previousTurnCP.score > 0 && lastTurnCP.score === 0) {
            gameLogs.length = 0;
            gameLogs.push(`Start new game!`)
        }
        setPreviousTurnInfo(checkContextPlayer.playersDataState);
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