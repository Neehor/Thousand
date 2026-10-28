import {usePlayersDataStateContext} from "../InitialGameStore/components/PlayersDataStore";
import {useStageDataStateContext} from "../InitialGameStore/components/StageDataStore";

export function CheckValues() {
    const checkContextStage = useStageDataStateContext();
    const checkContextPlayer = usePlayersDataStateContext();


    return (
        <div style={{ display: "flex"}}>
            <section>
                <header>firstPlayer</header>
                <ul>
                    {Object.entries(checkContextPlayer.playersDataState.firstPlayer).map(([key, value]) => (
                        <li key={key}>
                            <strong>{key}:</strong> {String(value)}
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <header>secondPlayer</header>
                <ul>
                    {Object.entries(checkContextPlayer.playersDataState.secondPlayer).map(([key, value]) => (
                        <li key={key}>
                            <strong>{key}:</strong> {String(value)}
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <header>StageState</header>
                <ul>
                    {Object.entries(checkContextStage.stageDataState).map(([key, value]) => (
                        <li key={key}>
                            <strong>{key}:</strong> {String(value)}
                        </li>
                    ))}
                    <li key={"2321"}> <strong>ActivePlayer:</strong> {checkContextPlayer.playersDataState.activePlayer} </li>
                </ul>
            </section>
            <button onClick={() => checkContextPlayer.setPlayersDataState({score:970})} > click </button>
        </div>
    )
}