import {usePlayersDataStateContext} from "../../../InitialGameStore/components/PlayersDataStore";

export function ThrowDice() {
    // todo: test pass the turn (delete it)
    const checkContextPlayer = usePlayersDataStateContext()

    const passTheTurn = () => {
        checkContextPlayer?.setPlayersDataState(undefined,undefined,true)
    }

    return (
        <button onClick={passTheTurn}>
            ThrowDice
        </button>
    )
}