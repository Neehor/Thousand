import {ActionBar} from "./components/ActionBar";
import {GameBoardVM} from "./components/GameBoardVM";
import {GameLog} from "./components/GameLog";
import {RedZoneBar} from "./components/RedZoneBar";
import {PlayerPanel} from "./components/PlayerPanel";
import {InitialGameStore} from "./components/InitialGameStore";
import {DevPanel} from "./components/DevPanel";
import {RulesModal} from "./components/RulesModal";
import styles from "./ThousandGame.module.css";
import {useRef} from "react";

export function ThousandGame() {
    const portalDevLog = useRef(null);

    return (
        <div className={styles.thousand}>
            <InitialGameStore>
                <div className={styles.topPanel}>
                    <PlayerPanel/>
                    <GameLog/>
                </div>
                <div className={styles.supportWrapper}>
                    <div ref={portalDevLog}></div>
                    <RedZoneBar/>
                    <RulesModal/>
                </div>
                <GameBoardVM/>
                <ActionBar/>
                <DevPanel element={portalDevLog}/>
            </InitialGameStore>
        </div>
    )
}
