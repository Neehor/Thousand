import {createContext, type PropsWithChildren, useState} from "react";
import type {contextPlayerDataType, PlayersDataStateType, Player} from "./types.ts";
import {START_ZONE} from "../../../../constants.ts";

/* init players context*/
export const PlayersDataStateContext = createContext<contextPlayerDataType | null>(null);
export const initPlayersDataState: PlayersDataStateType = {
    firstPlayer: {name: "player1", score: 0, boundaryPoints: START_ZONE, countRedZone: 0},
    secondPlayer: {name: "player2", score: 0, boundaryPoints: START_ZONE, countRedZone: 0},
    activePlayer: "firstPlayer"
}

export function PlayersDataStore({children}: PropsWithChildren) {
    const [playersDataState, setPlayersDataState] = useState(initPlayersDataState)

    function handlePlayersDataState(activePlayerState?: Partial<Player> | undefined,
                                    inActivePlayerState?: Partial<Player> | undefined ,
                                    setActivePlayer?: boolean | undefined ) {
        setPlayersDataState((prevState) => {
            const newState = {...prevState}
            const inActivePlayer = (prevState.activePlayer === "firstPlayer") ? "secondPlayer" : "firstPlayer";
            const activePlayer = prevState.activePlayer
            console.log(arguments)
            if (activePlayerState) {
                newState[activePlayer] = {
                    ...newState[activePlayer],
                    ...activePlayerState
                }
            }
            if (inActivePlayerState) {
                newState[inActivePlayer] = {
                    ...newState[inActivePlayer],
                    ...inActivePlayerState
                }
            }
            if (setActivePlayer) newState.activePlayer = inActivePlayer
            return newState;
        })
    }

    const contextPlayerData = {
        playersDataState: playersDataState,
        setPlayersDataState: handlePlayersDataState
    }


    return (
        <PlayersDataStateContext value={contextPlayerData}>
            {children}
        </PlayersDataStateContext>
    )
}
