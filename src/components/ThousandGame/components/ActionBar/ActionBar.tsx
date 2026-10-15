import {useContext} from "react";
import {StageDataStateContext} from "../InitialGameStore/components/StageDataStore/StageDataStore.tsx";
import {PlayersDataStateContext} from "../InitialGameStore/components/PlayersDataStore/PlayersDataStore.tsx";
import {ThrowDice} from "./components/ThrowDice";
import {StagePoints} from "./components/StagePoints";
import {SaveScoreVM} from "./components/SaveScoreVM";
import {PassTheTurn} from "./components/PassTheTurn";
import {Rematch} from "./components/Rematch";

export function ActionBar() {

    const stageDataState = useContext(StageDataStateContext);
    const playersDataState = useContext(PlayersDataStateContext);

    // const actionBarContent = () => {
    //     switch (stageDataState.stageDataState.stageState) {
    //         case "start":
    //             return (
    //                 <ThrowDice/>
    //             )
    //         case "inGame":
    //             return (<>
    //                     <ThrowDice/>
    //                     <StagePoints/>
    //                     <SaveScoreVM/>
    //                 </>
    //             )
    //         case "pass":
    //             return (
    //                 <PassTheTurn/>
    //             )
    //         case "win":
    //             return (
    //                 <Rematch/>
    //             )
    //     }
    // }
    return (
        <div>
            {(() => {
                switch (stageDataState.stageDataState.stageState) {
                    case "start":
                        return (
                            <ThrowDice stageDataState={stageDataState} playersDataState={playersDataState}/>
                        )
                    case "inGame":
                        return (<>
                                <ThrowDice stageDataState={stageDataState} playersDataState={playersDataState}/>
                                <StagePoints points={stageDataState.stageDataState.stagePoints}/>
                                <SaveScoreVM points={stageDataState.stageDataState.stagePoints} setStageDataState={stageDataState.setStageDataState} playersDataState={playersDataState}/>
                            </>
                        )
                    case "pass":
                        return (
                            <PassTheTurn setStageDataState={stageDataState.setStageDataState} playersDataState={playersDataState}/>
                        )
                    case "win":
                        return (
                            <Rematch setStageDataState={stageDataState.setStageDataState} playersDataState={playersDataState}/>
                        )
                }
            })()}
        </div>
    )
}