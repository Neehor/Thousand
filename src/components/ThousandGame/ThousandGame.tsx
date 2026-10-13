import {ActionBar} from "./components/ActionBar";
import {GameBoardVM} from "./components/GameBoardVM";
import {GameLog} from "./components/GameLog";
import {RedZoneBar} from "./components/RedZoneBar";
import {PlayerPanel} from "./components/PlayerPanel";
import {InitialGameStore} from "./components/InitialGameStore";


export function ThousandGame() {
    return (
        <InitialGameStore>
            <PlayerPanel />
            <GameLog />
            <RedZoneBar />
            <GameBoardVM />
            <ActionBar />
        </InitialGameStore>
    )
}