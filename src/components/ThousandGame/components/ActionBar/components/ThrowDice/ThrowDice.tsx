import {getCombination} from "./utils/getCombination.ts";
import {getRandomDice} from "./utils/getRandomDice.ts";
import type {contextPlayerDataType} from "../../../InitialGameStore/components/PlayersDataStore/types.ts";
import type {contextStageDataType, StageState} from "../../../InitialGameStore/components/StageDataStore/types.ts";

type ThrowDiceType = {
    contextStageData: contextStageDataType,
    contextPlayerData: contextPlayerDataType
}

type resultType = {
    newStageState: StageState
    newStagePoints: number
}

function checkResultTurnFunc(newStagePoints: number, stagePoints: number, score: number) {
    const futurePoints = newStagePoints + stagePoints + score;
    const result: resultType = {
        newStageState: (newStagePoints) ? "inGame" : "pass",
        newStagePoints: (newStagePoints) ? stagePoints + newStagePoints : 0
    }
    if (futurePoints === 1000) result.newStageState = "win";
    if (futurePoints > 1000) {
        result.newStageState = "pass"
        result.newStagePoints = newStagePoints + stagePoints

    }
    return result
}

export function ThrowDice(props: ThrowDiceType) {
    // todo: test pass the turn (delete it)
    const {contextStageData, contextPlayerData} = props;
    const randomDiceCombination = getCombination(getRandomDice(contextStageData.stageDataState.availableDice));
    const checkResultTurn = checkResultTurnFunc(
        randomDiceCombination.newStagePoints,
        contextStageData.stageDataState.stagePoints,
        contextPlayerData.playersDataState[contextPlayerData.playersDataState.activePlayer].score
    )
    const MAX_AVAILABLE_DICE = 5;

    const getAvailableDice = (prevAvailableDice: number, gameCombinationLength: number) => {
        const result = prevAvailableDice - gameCombinationLength;

        if (result > 0) {
            return result
        } else {
            return MAX_AVAILABLE_DICE;
        }
    }

    const getGameCombination = (prevGameCombination: number[], newGameCombination: number[]) => {
        if (prevGameCombination.length === MAX_AVAILABLE_DICE) {
            return newGameCombination;
        } else {
            return prevGameCombination.concat(newGameCombination);
        }
    }

    const getSetRandomDice = () => {
        contextStageData.setStageDataState({
            droppedDice: randomDiceCombination.droppedDice,
            gameCombination: getGameCombination(contextStageData.stageDataState.gameCombination, randomDiceCombination.interimDiceCombination),
            stagePoints: checkResultTurn.newStagePoints,
            stageState: checkResultTurn.newStageState,
            availableDice: getAvailableDice(contextStageData.stageDataState.availableDice, randomDiceCombination.interimDiceCombination.length)
        });
    }

    return (
        <button onClick={getSetRandomDice}>
            ThrowDice
        </button>
    )
}
