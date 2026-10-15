import {useStageDataStateContext} from "../InitialGameStore/components/StageDataStore";

export function GameBoardVM() {
    const checkContextStage = useStageDataStateContext();

    //Todo: Change to component function
    //     newState.firstPlayer = {...initPlayersDataState.firstPlayer, name: prevState.firstPlayer.name}
    //     newState.secondPlayer = {...initPlayersDataState.secondPlayer, name: prevState.secondPlayer.name}
    //     newState.activePlayer = "firstPlayer"
    // }

    return (
        <div>
            Люблю Марию больше {checkContextStage.stageDataState.availableDice} жизней
        </div>
    )
}