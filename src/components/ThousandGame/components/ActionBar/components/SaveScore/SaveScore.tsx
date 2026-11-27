import type {StageDataStateType} from "../../../InitialGameStore/components/StageDataStore/types";
import type {
    contextPlayerDataType,
    PlayersDataStateType
} from "../../../InitialGameStore/components/PlayersDataStore/types";
import {playersName, SCORE_DEDUCTION_VALUE} from "../../../../constants";
import {initStageDataState} from "../../../InitialGameStore/components/StageDataStore/StageDataStore";
import type {Player} from "../../../InitialGameStore/components/PlayersDataStore/types";
import {updateBoundaryPoints} from "../commons/updateBoundaryPoints";
import {GameButton} from "../commons/GameButton";

type SaveScorePropsType = {
    points: number;
    setStageDataState: (stageData: StageDataStateType) => void;
    contextPlayerData: contextPlayerDataType;
}

export function SaveScore(props: SaveScorePropsType) {
    const {points, setStageDataState, contextPlayerData} = props;
    const activePlayer = contextPlayerData.playersDataState[contextPlayerData.playersDataState.activePlayer];
    // const inActivePlayer = contextPlayerData.playersDataState.activePlayer !== 'firstPlayer' ? contextPlayerData.playersDataState['firstPlayer'] : contextPlayerData.playersDataState['secondPlayer'];
    const boundaryPointsOfActivePlayer = activePlayer.boundaryPoints;
    const futurePoints = points + activePlayer.score;

    const isInactiveOvertaken = (futurePoints: number, activePlayerScore: number, inActivePlayer: Player) => {
        if (activePlayerScore <= inActivePlayer.score && !(inActivePlayer.countRedZone === 0 && inActivePlayer.boundaryPoints)) {
            return futurePoints > inActivePlayer.score;
        }
    }

    const getOvertakenPlayer = (futurePoints: number, activePlayerScore: number, contextPlayerData: contextPlayerDataType) => {
        let overtakenPlayer;
        let overtakenPlayerScore = 0;
        for (const inactivePlayer of playersName) {
            if (contextPlayerData.playersDataState[inactivePlayer] && inactivePlayer !== contextPlayerData.playersDataState.activePlayer) {
                if (isInactiveOvertaken(futurePoints, activePlayerScore, contextPlayerData.playersDataState[inactivePlayer])) {
                    if (contextPlayerData.playersDataState[inactivePlayer].score > overtakenPlayerScore) {
                        overtakenPlayer = inactivePlayer;
                        overtakenPlayerScore = contextPlayerData.playersDataState[inactivePlayer].score;
                    }
                }
            }
        }
        return overtakenPlayer ? overtakenPlayer : null
    }

    const updatePlayersData = () => {
        let overtakenPlayer = getOvertakenPlayer(futurePoints,activePlayer.score,contextPlayerData)
        if (overtakenPlayer) {
            contextPlayerData.setPlayersDataState(
                {
                    score: futurePoints,
                    ...updateBoundaryPoints(futurePoints)
                },
                {
                    name:overtakenPlayer,
                    overtakenPlayerState:{score: contextPlayerData.playersDataState[overtakenPlayer].score - SCORE_DEDUCTION_VALUE,
                    ...updateBoundaryPoints(contextPlayerData.playersDataState[overtakenPlayer].score - SCORE_DEDUCTION_VALUE)}
                },
                true
            )
                // if (isInactiveOvertaken(futurePoints, activePlayer.score, inActivePlayer)) {
        //     contextPlayerData.setPlayersDataState(
        //         {
        //             score: futurePoints,
        //             ...updateBoundaryPoints(futurePoints)
        //         },
        //         {
        //             score: inActivePlayer.score - SCORE_DEDUCTION_VALUE,
        //             ...updateBoundaryPoints(inActivePlayer.score - SCORE_DEDUCTION_VALUE)
        //         },
        //         true
        //     )
        } else {
            contextPlayerData.setPlayersDataState(
                {
                    score: futurePoints,
                    ...updateBoundaryPoints(futurePoints)
                },
                undefined,
                true
            )
        }
    }

    const onClickHandler = () => {
        updatePlayersData();
        setStageDataState(initStageDataState);
    }


    return (
        <GameButton
            title={"SAVE SCORE"}
            onClick={onClickHandler}
            disabled={points < boundaryPointsOfActivePlayer}
        />
    )
}
