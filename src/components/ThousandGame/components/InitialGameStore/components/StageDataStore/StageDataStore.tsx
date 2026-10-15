import {createContext, type PropsWithChildren, useState} from "react";
import type {contextStageDataType, StageDataStateType} from "./types.ts";

export const StageDataStateContext = createContext<contextStageDataType | null>(null)
const initStageDataState: StageDataStateType = {
    droppedDice:[],
    gameCombination:[],
    availableDice:5,
    stagePoints:0,
    stageState:"start"
}

export function StageDataStore({children}:PropsWithChildren) {
    const [stageDataState, setStageDataState] = useState(initStageDataState)

    function handleSetStageDataState(newState:Partial<StageDataStateType>) {
        setStageDataState((prevState) => {
            return {...prevState, ...newState}
        });
    }

    const contextObject = {
        stageDataState: stageDataState,
        setStageDataState: handleSetStageDataState
    }


    return (
        <StageDataStateContext value={contextObject}>
            {children}
        </StageDataStateContext>
    )
}
