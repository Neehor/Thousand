import {ActionBar} from "./components/ActionBar";
import {GameBoardVM} from "./components/GameBoardVM";
import {GameLog} from "./components/GameLog";
import {RedZoneBar} from "./components/RedZoneBar";
import {PlayerPanel} from "./components/PlayerPanel";
import {InitialGameStore} from "./components/InitialGameStore";
import {CheckValues} from "./components/CheckValues";
import {RulesModal} from "./components/RulesModal";

export function ThousandGame() {
    return (
        <div className="thousand">
            <InitialGameStore>
                <div className="topPanel">
                    <PlayerPanel/>
                    <GameLog/>
                </div>
                <div id="supportWrapper" className="supportWrapper">
                    <RedZoneBar/>
                    <RulesModal/>
                </div>
                <GameBoardVM/>
                <ActionBar/>
                <CheckValues/>
            </InitialGameStore>
        </div>)
}
