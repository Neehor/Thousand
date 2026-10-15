
export type PlayersDataStateType = {
    firstPlayer:PlayerDataType,
    secondPlayer:PlayerDataType,
    activePlayer:"firstPlayer"|"secondPlayer"}

export type PlayerDataType = {
    name:string,
    score:number,
    boundaryPoints:number,
    countRedZone:number
}

export type contextPlayerDataType = {
    playersDataState: PlayersDataStateType,
    setPlayersDataState: (activePlayerState?: Partial<PlayerDataType>,
                          inActivePlayerState?: Partial<PlayerDataType>,
                          setActivePlayer?: boolean | undefined) => void
}
