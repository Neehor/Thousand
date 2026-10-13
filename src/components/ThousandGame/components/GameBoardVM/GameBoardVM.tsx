import {useContext} from "react";
import {StageDataStateContext} from "../InitialGameStore/components/StageDataStore/StageDataStore.tsx";

export function GameBoardVM() {
    const checkContextStage = useContext(StageDataStateContext)

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