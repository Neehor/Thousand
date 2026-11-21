import {useStageDataStateContext} from "../InitialGameStore/components/StageDataStore";
import {usePlayersDataStateContext} from "../InitialGameStore/components/PlayersDataStore";
import styles from "./GameBoardVM.module.css"

export function GameBoardVM() {
    const stageDataState = useStageDataStateContext();
    const playersDataState = usePlayersDataStateContext();


    return (
        <div className={styles.gameDesk}>
            {stageDataState.stageDataState.stageState === "start" && (
                <div className={styles.startView}>
                    Thousand Game
                </div>
            )}
            {stageDataState.stageDataState.stageState === "win" && (
                <div>
                    It was a great game!
                    The {playersDataState.playersDataState[playersDataState.playersDataState.activePlayer].name} achieved
                    an amazing victory! Do you want a rematch?
                </div>
            )}
            {(stageDataState.stageDataState.stageState === "pass" || stageDataState.stageDataState.stageState === "inGame")
                && (<>

                            {stageDataState.stageDataState.droppedDice.map((number, index) => (
                                <img
                                    src={`dices/bx-dice-${number}.svg`}
                                    key={index + 210}
                                    alt={`Dice ${number}`}
                                />))
                            }
                            {stageDataState.stageDataState.gameCombination.map((number, index) => (
                                <img
                                    src={`dices/bx-dice-${number}-win.svg`}
                                    key={index + 105}
                                    alt={`Dice ${number}`}
                                />))
                            }
                    </>
                )}
        </div>
    )
}
