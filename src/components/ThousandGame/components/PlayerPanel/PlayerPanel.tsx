import {PlayerCard} from "./components/PlayerCard";
import styles from "./PlayerPanel.module.css";
import {usePlayersDataStateContext} from "../InitialGameStore/components/PlayersDataStore";
import {playersName} from "../../constants.ts";

export function PlayerPanel() {
    const contextPlayerData = usePlayersDataStateContext();


    return (
        <section className={`${styles.playerPanel}`}>
            {playersName.map(playerName => {
                if (contextPlayerData.playersDataState[playerName]) {
                    return <PlayerCard
                        player={contextPlayerData.playersDataState[playerName]}
                        isActive={contextPlayerData.playersDataState.activePlayer === playerName}
                        setPlayersDataState={contextPlayerData.setPlayersDataState}
                    />
                }
            })}
            {/*<PlayerCard*/}
            {/*    player={contextPlayerData.playersDataState.firstPlayer}*/}
            {/*    isActive={contextPlayerData.playersDataState.activePlayer === "firstPlayer"}*/}
            {/*    setPlayersDataState={contextPlayerData.setPlayersDataState}*/}
            {/*/>*/}
            {/*<PlayerCard*/}
            {/*    player={contextPlayerData.playersDataState.secondPlayer}*/}
            {/*    isActive={contextPlayerData.playersDataState.activePlayer === "secondPlayer"}*/}
            {/*    setPlayersDataState={contextPlayerData.setPlayersDataState}*/}
            {/*/>*/}
            {/*{contextPlayerData.playersDataState.thirdPlayer && <PlayerCard*/}
            {/*    player={contextPlayerData.playersDataState.thirdPlayer}*/}
            {/*    isActive={contextPlayerData.playersDataState.activePlayer === "thirdPlayer"}*/}
            {/*    setPlayersDataState={contextPlayerData.setPlayersDataState}*/}
            {/*/>}*/}
            {/*{contextPlayerData.playersDataState.fourthPlayer && <PlayerCard*/}
            {/*    player={contextPlayerData.playersDataState.fourthPlayer}*/}
            {/*    isActive={contextPlayerData.playersDataState.activePlayer === "fourthPlayer"}*/}
            {/*    setPlayersDataState={contextPlayerData.setPlayersDataState}*/}
            {/*/>}*/}
            {/*{contextPlayerData.playersDataState.fifthPlayer && <PlayerCard*/}
            {/*    player={contextPlayerData.playersDataState.fifthPlayer}*/}
            {/*    isActive={contextPlayerData.playersDataState.activePlayer === "fifthPlayer"}*/}
            {/*    setPlayersDataState={contextPlayerData.setPlayersDataState}*/}
            {/*/>}*/}
            {/*{contextPlayerData.playersDataState.sixthPlayer && <PlayerCard*/}
            {/*    player={contextPlayerData.playersDataState.sixthPlayer}*/}
            {/*    isActive={contextPlayerData.playersDataState.activePlayer === "sixthPlayer"}*/}
            {/*    setPlayersDataState={contextPlayerData.setPlayersDataState}*/}
            {/*/>}*/}

            {/*{!contextPlayerData.playersDataState.thirdPlayer && <button onClick={contextPlayerData.addPlayerToPlayersDataState}> + </button>}*/}
            {!contextPlayerData.playersDataState.sixthPlayer &&
                <button onClick={contextPlayerData.addPlayerToPlayersDataState}> + </button>}
        </section>
    )
}
