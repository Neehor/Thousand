import {usePlayersDataStateContext} from "../InitialGameStore/components/PlayersDataStore";
import {IconRedZone} from "./components/IconRedZone";

export function RedZoneBar() {
    const contextPlayerData = usePlayersDataStateContext();
    const countRedZone = contextPlayerData.playersDataState[contextPlayerData.playersDataState.activePlayer].countRedZone;

    return (
        <div className="redZoneBar">
            {countRedZone !== 0 && (
                <div style={{display: "flex", justifyContent: "center"}}>
                    <IconRedZone />
                    <IconRedZone showDice={!(countRedZone > 2)}/>
                    <IconRedZone showDice={!(countRedZone > 1)}/>
                </div>
            )}
        </div>
    )
}