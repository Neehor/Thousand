import {createContext, type PropsWithChildren, useState} from "react";
import type {
    contextPlayerDataType,
    PlayersDataStateType,
    Player,
    overtakenPlayerState,
    overtakenPlayerStateType
} from "./types.ts";
import {playersName, START_ZONE} from "../../../../constants.ts";

/* init players context*/
export const PlayersDataStateContext = createContext<contextPlayerDataType | null>(null);
export const initPlayersDataState: Partial<PlayersDataStateType> = {
    firstPlayer: {name: "player1", score: 0, boundaryPoints: START_ZONE, countRedZone: 0},
    secondPlayer: {name: "player2", score: 0, boundaryPoints: START_ZONE, countRedZone: 0},
    activePlayer: "firstPlayer"
}

export function PlayersDataStore({children}: PropsWithChildren) {
    const [playersDataState, setPlayersDataState] = useState(initPlayersDataState)

    function handlePlayersDataState(activePlayerState?: Partial<Player> | undefined,
                                    overtakenPlayerState?: overtakenPlayerStateType | undefined,
                                    setActivePlayer?: boolean | undefined) {
        setPlayersDataState((prevState) => {
            const newState = {...prevState}
            // const inActivePlayer = (prevState.activePlayer === "firstPlayer") ? "secondPlayer" : "firstPlayer";
            const activePlayer = prevState.activePlayer

            if (activePlayerState) {
                newState[activePlayer] = {
                    ...newState[activePlayer],
                    ...activePlayerState
                }
            }

            if (overtakenPlayerState) {
                newState[overtakenPlayerState.name] = {
                    ...newState[overtakenPlayerState.name],
                    ...overtakenPlayerState.overtakenPlayerState
                }
            }

            // if (inActivePlayerState) {
            //     newState[inActivePlayer] = {
            //         ...newState[inActivePlayer],
            //         ...inActivePlayerState
            //     }
            // }
            // if (setActivePlayer) newState.activePlayer = inActivePlayer
            if (setActivePlayer) {
                const index = playersName.findIndex((value) => playersDataState.activePlayer === value)
                if (playersDataState[playersName[index + 1]] && index !== 5) newState.activePlayer = playersName[index + 1];
                else newState.activePlayer = playersName[0]
            }
            console.log(newState)
            return newState;
        })
    }

    function addPlayerToPlayersDataState() {
        let id: number
        const newPlayer = playersName.find((value, index) => {
            id = index;
            return !playersDataState[value]
        })
        if (newPlayer) setPlayersDataState(prevState => ({
            ...prevState,
            [newPlayer]: {name: `player${++id}`, score: 0, boundaryPoints: START_ZONE, countRedZone: 0}
        }))
    }

    const contextPlayerData = {
        playersDataState: playersDataState,
        setPlayersDataState: handlePlayersDataState,
        addPlayerToPlayersDataState: addPlayerToPlayersDataState
    }


    return (
        <PlayersDataStateContext value={contextPlayerData}>
            {children}
        </PlayersDataStateContext>
    )
}
