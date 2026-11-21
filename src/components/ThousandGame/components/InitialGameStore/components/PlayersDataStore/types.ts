
export type PlayersDataStateType = {
    firstPlayer:Player,
    secondPlayer:Player,
    activePlayer:"firstPlayer"|"secondPlayer"}

export type Player = {
    name:string,
    score:number,
    boundaryPoints:number,
    countRedZone:number
}

export type contextPlayerDataType = {
    playersDataState: PlayersDataStateType,
    setPlayersDataState: (activePlayerState?: Partial<Player>,
                          inActivePlayerState?: Partial<Player>,
                          setActivePlayer?: boolean | undefined) => void
}
