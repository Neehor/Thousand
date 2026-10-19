import {ThrowDice} from "./components/ThrowDice";
import {StagePoints} from "./components/StagePoints";
import {SaveScore} from "./components/SaveScore";
import {PassTheTurn} from "./components/PassTheTurn";
import {Rematch} from "./components/Rematch";
import {usePlayersDataStateContext} from "../InitialGameStore/components/PlayersDataStore";
import {useStageDataStateContext} from "../InitialGameStore/components/StageDataStore";
import styles from "./ActionBar.module.css";

export function ActionBar() {
    const stageDataState = useStageDataStateContext();
    const playersDataState = usePlayersDataStateContext();
    console.log('stageDataState', stageDataState);

    return (
        <div className={styles.container}>
            {(() => {
                switch (stageDataState.stageDataState.stageState) {
                    case "start":
                        return (
                            <ThrowDice
                                contextStageData={stageDataState}
                                contextPlayerData={playersDataState}
                            />
                        )
                    case "inGame":
                        return (
                            <>
                                <ThrowDice
                                    contextStageData={stageDataState}
                                    contextPlayerData={playersDataState}
                                />
                                <StagePoints points={stageDataState.stageDataState.stagePoints}/>
                                <SaveScore
                                    points={stageDataState.stageDataState.stagePoints}
                                    setStageDataState={stageDataState.setStageDataState}
                                    contextPlayerData={playersDataState}
                                />
                            </>
                        )
                    case "pass":
                        return (
                            <PassTheTurn
                                points={stageDataState.stageDataState.stagePoints}
                                setStageDataState={stageDataState.setStageDataState}
                                contextPlayerData={playersDataState}
                            />
                        )
                    case "win":
                        return (
                            <Rematch
                                setStageDataState={stageDataState.setStageDataState}
                                contextPlayerData={playersDataState}
                            />
                        )
                }
            })()}
        </div>
    )
}