import {getCombination} from "./utils/getCombination.ts";
import {getRandomDice} from "./utils/getRandomDice.ts";

function checkResultTurnFunc(newStagePoints, stagePoints, score, redZoneCount) {
    const futurePoints = newStagePoints + stagePoints + score;
    const result = {
        newStageState: (newStagePoints) ? "inGame" : "pass",
        newStagePoints: (newStagePoints) ? stagePoints + newStagePoints : 0
    }
    if (newStagePoints) {
        if (redZoneCount === 3) {
            result.newStagePoints = -50;
        }
    } else {
        if (futurePoints === 1000) result.newStageState = "win";
        if (futurePoints > 1000) {
            result.newStageState = "pass"
            result.newStagePoints = -50
        }
    }
    return result
}

export function ThrowDice(props) {
    // todo: test pass the turn (delete it)
    const {stageDataState, playersDataState} = props;
    const randomDiceCombination = getCombination(getRandomDice(stageDataState.stageDataState.availableDice));
    const checkResultTurn = checkResultTurnFunc(randomDiceCombination.newStagePoints, stageDataState.stageDataState.stagePoints, playersDataState.playersDataState[playersDataState.playersDataState.activePlayer].score, playersDataState.playersDataState[playersDataState.playersDataState.activePlayer].countRedZone)


    const getSetRandomDice = () => {
        stageDataState.setStageDataState({
            droppedDice: randomDiceCombination.droppedDice,
            gameCombination: [...stageDataState.stageDataState.gameCombination,...randomDiceCombination.interimDiceCombination],
            stagePoints: checkResultTurn.newStagePoints,
            stageState: checkResultTurn.newStageState,
            availableDice: stageDataState.stageDataState.availableDice - randomDiceCombination.interimDiceCombination.length
        });
    }


    // const passTheTurn = () => {
    //     playersDataState.setPlayersDataState(undefined,undefined,true)
    // }

    return (
        <button onClick={getSetRandomDice}>
            ThrowDice
        </button>
    )
}