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
    const MAX_AVAILABLE_DICE = 5;

    const getAvailableDice = (prevAvailableDice: number, gameCombinationLength: number) => {
        const result = prevAvailableDice - gameCombinationLength;

         if(result > 0) {
             return result
         } else {
             return MAX_AVAILABLE_DICE;
         }
    }

    const getGameCombination = (prevGameCombination: number[],newGameCombination:number[]) => {
        if(prevGameCombination.length === MAX_AVAILABLE_DICE) {
            return newGameCombination;
        } else {
            return prevGameCombination.concat(newGameCombination);
        }
    }

    const getSetRandomDice = () => {
        stageDataState.setStageDataState({
            droppedDice: randomDiceCombination.droppedDice,
            gameCombination: getGameCombination(stageDataState.stageDataState.gameCombination,randomDiceCombination.interimDiceCombination),
            stagePoints: checkResultTurn.newStagePoints,
            stageState: checkResultTurn.newStageState,
            availableDice: getAvailableDice(stageDataState.stageDataState.availableDice,randomDiceCombination.interimDiceCombination.length)
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