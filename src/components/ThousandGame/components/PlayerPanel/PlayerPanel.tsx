import {PlayerCard} from "./components/PlayerCard";
import styles from "./PlayerPanel.module.css";
import {usePlayersDataStateContext} from "../InitialGameStore/components/PlayersDataStore";

export function PlayerPanel() {
    const checkContextPlayer = usePlayersDataStateContext();


    return (
        <section className={`${styles.playerPanel}`}>
            <PlayerCard
                player={checkContextPlayer.playersDataState.firstPlayer}
                isActive={checkContextPlayer.playersDataState.activePlayer === "firstPlayer"}
                setPlayersDataState={checkContextPlayer.setPlayersDataState}
            />
            <PlayerCard
                player={checkContextPlayer.playersDataState.secondPlayer}
                isActive={checkContextPlayer.playersDataState.activePlayer === "secondPlayer"}
                setPlayersDataState={checkContextPlayer.setPlayersDataState}
            />
        </section>
    )
}
