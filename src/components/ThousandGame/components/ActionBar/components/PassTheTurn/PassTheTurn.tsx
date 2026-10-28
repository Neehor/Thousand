import {initStageDataState} from "../../../InitialGameStore/components/StageDataStore/StageDataStore";
import type {StageDataStateType} from "../../../InitialGameStore/components/StageDataStore/types";
import type {
    contextPlayerDataType, Player
} from "../../../InitialGameStore/components/PlayersDataStore/types";
import {SCORE_DEDUCTION_VALUE} from "../../../../constants.ts";
import {updateBoundaryPoints} from "../commons/updateBoundaryPoints.ts";

type PassTheTurnPropsType = {
    points:number
    setStageDataState: (stageData: StageDataStateType) => void;
    contextPlayerData: contextPlayerDataType;
}

function checkEndScore (playerData:Player,points:number){
    let result = {
        countRedZone:0,
        score: points? playerData.score - SCORE_DEDUCTION_VALUE : playerData.score
    }
    if (playerData.countRedZone !== 0){
        if(playerData.countRedZone === 3){
            result.countRedZone= 0;
            result.score = playerData.score - SCORE_DEDUCTION_VALUE;
            result = {...result,...updateBoundaryPoints(result.score)}
        }else {
            result.countRedZone= ++playerData.countRedZone;
        }
    }
    return result;
}

export function PassTheTurn(props:PassTheTurnPropsType) {
    const {points,setStageDataState, contextPlayerData} = props;
    const activePlayerData = contextPlayerData.playersDataState[contextPlayerData.playersDataState.activePlayer]


    return (
        <button onClick={() => {
            contextPlayerData.setPlayersDataState({...checkEndScore(activePlayerData,points)},undefined,true);
            setStageDataState(initStageDataState);
        }}>
            PassTheTurn
        </button>
    )
}