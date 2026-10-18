import {initStageDataState} from "../../../InitialGameStore/components/StageDataStore/StageDataStore";
import type {StageDataStateType} from "../../../InitialGameStore/components/StageDataStore/types";
import type {contextPlayerDataType} from "../../../InitialGameStore/components/PlayersDataStore/types";

type PassTheTurnPropsType = {
    setStageDataState: (stageData: StageDataStateType) => void;
    contextPlayerData: contextPlayerDataType;
}

export function PassTheTurn(props:PassTheTurnPropsType) {
    const {setStageDataState, contextPlayerData} = props;

    return (
        <button onClick={() => {
            contextPlayerData.setPlayersDataState(undefined,undefined,true);
            setStageDataState(initStageDataState);
        }}>
            PassTheTurn
        </button>
    )
}