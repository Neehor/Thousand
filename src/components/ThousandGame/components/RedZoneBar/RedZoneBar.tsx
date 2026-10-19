import {usePlayersDataStateContext} from "../InitialGameStore/components/PlayersDataStore";

export function RedZoneBar() {
    const contextPlayerData = usePlayersDataStateContext();
    const countRedZone = contextPlayerData.playersDataState[contextPlayerData.playersDataState.activePlayer].countRedZone;

    return (
        <>
            {countRedZone !== 0 && (
                <div style={{display: "flex", justifyContent: "center"}}>
                    <img src="/pngwing.com.png" style={{opacity: countRedZone > 1 ? 1 : 0.5}} width={40} height={40}/>
                    <img src="/pngwing.com.png" style={{opacity: countRedZone > 2 ? 1 : 0.5}} width={40} height={40}/>
                    <img src="/pngwing.com.png" style={{opacity: 0.5}} width={40} height={40}/>
                </div>
            )}
        </>
    )
}