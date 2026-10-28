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
            width: "700px",
            height: "130px"
        }}>
            {stageDataState.stageDataState.stageState === "win" && (
                <div> {playersDataState.playersDataState[playersDataState.playersDataState.activePlayer].name}
                    , этот раунд был сложным, но Вы справились
                    на абсолютно милейшую победную ноту.
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