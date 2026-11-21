export type StageState = 'start' | 'win' | 'pass' | 'inGame';

export type StageDataStateType = {
    droppedDice: number[];
    gameCombination: number[];
    availableDice: number;
    stagePoints: number;
    stageState: StageState;
}

export type contextStageDataType = {
    stageDataState: StageDataStateType,
    setStageDataState: (stageData: StageDataStateType) => void
}
