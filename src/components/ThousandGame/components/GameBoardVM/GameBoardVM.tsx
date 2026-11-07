import {useStageDataStateContext} from "../InitialGameStore/components/StageDataStore";
import {usePlayersDataStateContext} from "../InitialGameStore/components/PlayersDataStore";

export function GameBoardVM() {
    const stageDataState = useStageDataStateContext();
    const playersDataState = usePlayersDataStateContext();


    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            border: '1px solid black',
            height: "130px",
            marginBottom: "10px",
        }}>
            {stageDataState.stageDataState.stageState === "win" && (
                <div>
                    It was a great game! The {playersDataState.playersDataState[playersDataState.playersDataState.activePlayer].name} achieved an amazing victory! Do you want a rematch?
                </div>
            )}
            {(stageDataState.stageDataState.stageState === "pass" || stageDataState.stageDataState.stageState === "inGame")
                && (<>
                        <div>
                            {stageDataState.stageDataState.droppedDice.map((number, index) => (
                                <img
                                    src={`/${number}.png`}
                                    key={index + 25}
                                    width={120}
                                    height={120}
                                    alt={`Dice ${number}`}
                                />))
                            }
                        </div>
                        <div
                            style={{border: '1px solid black'}}>
                            {stageDataState.stageDataState.gameCombination.map((number, index) => (
                                <img
                                    src={`/${number}.png`}
                                    key={index + 50}
                                    width={120}
                                    height={120}
                                    alt={`Dice ${number}`}
                                />))}
                        </div>
                    </>
                )}
        </div>
    )
}