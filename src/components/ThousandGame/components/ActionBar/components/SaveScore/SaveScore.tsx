import type {StageDataStateType} from "../../../InitialGameStore/components/StageDataStore/types";
import type {contextPlayerDataType} from "../../../InitialGameStore/components/PlayersDataStore/types";

type SaveScorePropsType = {
    points: number;
    setStageDataState: (stageData: StageDataStateType) => void;
    contextPlayerData: contextPlayerDataType;
}
export function SaveScore(props:SaveScorePropsType) {
    const {points, setStageDataState, contextPlayerData} = props;
const boundaryPointsOfActivePlayer = contextPlayerData.playersDataState[contextPlayerData.playersDataState.activePlayer].boundaryPoints;


    return (
        <button
            disabled={points < boundaryPointsOfActivePlayer}
        >
            Save Score
        </button>
    )
}