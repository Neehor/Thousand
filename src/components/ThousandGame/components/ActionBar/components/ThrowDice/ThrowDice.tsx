import {getCombination} from "./utils/getCombination.ts";
import {getRandomDice} from "./utils/getRandomDice.ts";

export function ThrowDice(props) {
    // todo: test pass the turn (delete it)
    const {stageDataState, playersDataState} = props;

    const randomDice = getCombination(getRandomDice(stageDataState.stageDataState.availableDice));


    const getSetRandomDice = () => {
        stageDataState.setStageDataState({droppedDice: randomDice.droppedDice,gameCombination:randomDice.interimDiceCombination,stagePoints:randomDice.newStagePoints});
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