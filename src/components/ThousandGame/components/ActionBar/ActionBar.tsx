import {ThrowDice} from "./components/ThrowDice";
import {StagePoints} from "./components/StagePoints";
import {SaveScoreVM} from "./components/SaveScoreVM";
import {PassTheTurn} from "./components/PassTheTurn";
import {Rematch} from "./components/Rematch";
import {usePlayersDataStateContext} from "../InitialGameStore/components/PlayersDataStore";
import {useStageDataStateContext} from "../InitialGameStore/components/StageDataStore";
import styles from "./ActionBar.module.css";

export function ActionBar() {

    const stageDataState = useStageDataStateContext();
    const playersDataState = usePlayersDataStateContext();
console.log('stageDataState',stageDataState)
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
        <div className={styles.container}>
            {(() => {
                switch (stageDataState.stageDataState.stageState) {
                    case "start":
                        return (
                            <ThrowDice stageDataState={stageDataState} playersDataState={playersDataState}/>
                        )
                    case "inGame":
                        return (<>
                                <ThrowDice
                                    stageDataState={stageDataState}
                                    playersDataState={playersDataState}
                                />
                                <StagePoints points={stageDataState.stageDataState.stagePoints}/>
                                <SaveScoreVM
                                    points={stageDataState.stageDataState.stagePoints}
                                    setStageDataState={stageDataState.setStageDataState}
                                    playersDataState={playersDataState}
                                />
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