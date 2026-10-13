
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
    setPlayersDataState: (activePlayerState: Partial<PlayerDataType> | undefined,
                          inActivePlayerState: Partial<PlayerDataType> | undefined,
                          setActivePlayer: boolean | undefined) => void
}
