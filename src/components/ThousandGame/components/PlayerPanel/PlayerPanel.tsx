import {PlayerCard} from "./components/PlayerCard";
import styles from "./PlayerPanel.module.css";
import {usePlayersDataStateContext} from "../InitialGameStore/components/PlayersDataStore";

export function PlayerPanel() {
    const contextPlayerData = usePlayersDataStateContext();


    return (
        <section className={`${styles.playerPanel}`}>
            <PlayerCard
                player={contextPlayerData.playersDataState.firstPlayer}
                isActive={contextPlayerData.playersDataState.activePlayer === "firstPlayer"}
                setPlayersDataState={contextPlayerData.setPlayersDataState}
            />
            <PlayerCard
                player={contextPlayerData.playersDataState.secondPlayer}
                isActive={contextPlayerData.playersDataState.activePlayer === "secondPlayer"}
                setPlayersDataState={contextPlayerData.setPlayersDataState}
            />
        </section>
    )
}
