import {useEffect, useState} from "react";
import type {PlayersDataStateType} from "../InitialGameStore/components/PlayersDataStore/types.ts";
import {usePlayersDataStateContext} from "../InitialGameStore/components/PlayersDataStore";
import styles from "./GameLog.module.css"

const gameLogs: string[] = []

export function GameLog() {
    const checkContextPlayer = usePlayersDataStateContext();
    const [previousTurnInfo, setPreviousTurnInfo] = useState<PlayersDataStateType>(checkContextPlayer.playersDataState);

    useEffect(() => {
        const checkedPlayer = (checkContextPlayer.playersDataState.activePlayer === "firstPlayer") ? "secondPlayer" : "firstPlayer";
        const anotherPlayer = checkContextPlayer.playersDataState.activePlayer;
        const lastTurnCP = checkContextPlayer.playersDataState[checkedPlayer];
        const previousTurnCP = previousTurnInfo[checkedPlayer];
        const lastTurnAP = checkContextPlayer.playersDataState[anotherPlayer];
        const previousTurnAP = previousTurnInfo[anotherPlayer];

        // Determine why the player lost points. One of the following applies:
        // The player failed on the final attempt to exit Red zone or

        //  1. The player exceeded 1000 points (over the score limit).
        if (previousTurnCP.score > lastTurnCP.score &&
            !(previousTurnAP.score > lastTurnAP.score) &&
            !(previousTurnCP.countRedZone === 3 && (lastTurnCP.countRedZone === 1 || lastTurnCP.countRedZone === 0))
        ) {
            gameLogs.push(`${previousTurnCP.name} was rolling over 1000`)
        }

        // message about failed attempts to exit from red zone
        if(lastTurnCP.score < previousTurnCP.score &&
            previousTurnCP.countRedZone === 3 ) {
            gameLogs.push(`${lastTurnCP.name} failed attempts to exit Red zone`);
        }

        // 2. The player was overtaking
        if (previousTurnAP.score > lastTurnAP.score) {
            gameLogs.push(`${previousTurnAP.name} was overtaken by ${previousTurnCP.name}`);
        }

        if (previousTurnCP.score > lastTurnCP.score) {
            gameLogs.push(`${previousTurnCP.name} fell by 50 points`)
        }

        if (previousTurnAP.score > lastTurnAP.score) {
            gameLogs.push(`${previousTurnAP.name} fell by 50 points`)
        }


        /* messages about red zones */
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


        /* re-entered in red zone */
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


        /* messages to enter the game when players get > 65 points */
        if (previousTurnCP.score === 0 && lastTurnCP.score > 0) {
            gameLogs.push(`${previousTurnCP.name} enter to the game`);
        }

        /* message about new game of current players */
        if (previousTurnCP.score > 0 && lastTurnCP.score === 0) {
            gameLogs.length = 0;
            gameLogs.push(`Start new game!`)
        }
        setPreviousTurnInfo(checkContextPlayer.playersDataState);
    }, [checkContextPlayer])


    return (
        <div className={styles.gameLog}>
            <h2 className={styles.title}>Game Log</h2>
            <div className={styles.containerLog}>
                <ul className={styles.list}>
                    {gameLogs.map((log, index) => (<li key={index}>{log}</li>))}
                </ul>
            </div>
        </div>
    )
}