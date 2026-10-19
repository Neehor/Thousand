import type {StageDataStateType} from "../../../InitialGameStore/components/StageDataStore/types.ts";
import type {contextPlayerDataType} from "../../../InitialGameStore/components/PlayersDataStore/types.ts";
import {initStageDataState} from "../../../InitialGameStore/components/StageDataStore/StageDataStore.tsx";
import {initPlayersDataState} from "../../../InitialGameStore/components/PlayersDataStore/PlayersDataStore.tsx";

type PassTheTurnPropsType = {
    setStageDataState: (stageData: StageDataStateType) => void;
    contextPlayerData: contextPlayerDataType;
}

export function Rematch(props: PassTheTurnPropsType) {
    const {setStageDataState, contextPlayerData} = props;
    const activePlayer = contextPlayerData.playersDataState.activePlayer;
    const inactivePlayer = activePlayer !== 'firstPlayer' ? 'firstPlayer' : 'secondPlayer';
    const activePlayerState = activePlayer !== 'firstPlayer';


    return (
        <button onClick={()=>{
            contextPlayerData.setPlayersDataState(
                {...initPlayersDataState[activePlayer],name:contextPlayerData.playersDataState[activePlayer].name},
                {...initPlayersDataState[inactivePlayer],name:contextPlayerData.playersDataState[inactivePlayer].name},
                activePlayerState
                );
            setStageDataState(initStageDataState)
        }}>
            Do you want a rematch?
        </button>
    )
}