
export type PlayersDataStateType = {
    firstPlayer:Player,
    secondPlayer:Player,
    thirdPlayer?:Player,
    fourthPlayer?:Player,
    fifthPlayer?:Player,
    sixthPlayer?:Player,
    activePlayer:PlayerKey}

export type Player = {
    name:string,
    score:number,
    boundaryPoints:number,
    countRedZone:number
}

export type PlayerKey =
    | "firstPlayer"
    | "secondPlayer"
    | "thirdPlayer"
    | "fourthPlayer"
    | "fifthPlayer"
    | "sixthPlayer";

export type overtakenPlayerStateType = {
    name: string,
    overtakenPlayerState:Partial<Player>
}

export type contextPlayerDataType = {
    playersDataState: Partial<PlayersDataStateType>,
    setPlayersDataState: (activePlayerState?: Partial<Player>,
                          inActivePlayerState?: Partial<Player>,
                          setActivePlayer?: boolean | undefined) => void,
    addPlayerToPlayersDataState: () => void
}
