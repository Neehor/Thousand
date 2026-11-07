import {usePlayersDataStateContext} from "../InitialGameStore/components/PlayersDataStore";
import {useStageDataStateContext} from "../InitialGameStore/components/StageDataStore";
import {useEffect, useState} from "react";
import styles from "../RulesModal/RulesModal.module.css";
import {createPortal} from "react-dom";

export function CheckValues() {
    const checkContextStage = useStageDataStateContext();
    const checkContextPlayer = usePlayersDataStateContext();
    const [showToolsSection, setShowToolsSection] = useState<boolean>(false);
    const [element, setElement] = useState<Element | null>(null);

    useEffect(() => {
        setElement(document.querySelector('.supportButton'));
    }, []);


    return (<div style={{ marginTop: "8px" }}>
    {element && createPortal(<button onClick={() => setShowToolsSection((prevState)=>!prevState)} className={styles.imageButton}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_353_66)">
                        <path d="M11.0007 20.1663C13.5319 20.1663 15.8236 19.1403 17.4824 17.4815C19.1413 15.8226 20.1673 13.531 20.1673 10.9997C20.1673 8.46839 19.1413 6.17672 17.4824 4.51786C15.8236 2.85902 13.5319 1.83301 11.0007 1.83301C8.46937 1.83301 6.1777 2.85902 4.51884 4.51786C2.86 6.17672 1.83398 8.46839 1.83398 10.9997C1.83398 13.531 2.86 15.8226 4.51884 17.4815C6.1777 19.1403 8.46937 20.1663 11.0007 20.1663Z" fill="white" stroke-width="2" stroke-linejoin="round" stroke="#333333"/>
                        <path d="M11 13.1195V11.2861C12.5188 11.2861 13.75 10.0549 13.75 8.53613C13.75 7.01735 12.5188 5.78613 11 5.78613C9.48122 5.78613 8.25 7.01735 8.25 8.53613" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="#333333"/>
                        <path d="M10.9993 17.2448C11.6322 17.2448 12.1452 16.7318 12.1452 16.099C12.1452 15.4661 11.6322 14.9531 10.9993 14.9531C10.3665 14.9531 9.85352 15.4661 9.85352 16.099C9.85352 16.7318 10.3665 17.2448 10.9993 17.2448Z" fill-rule="evenodd" clip-rule="evenodd" fill="#333333"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_353_66">
                            <rect width="22" height="22" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </button>,element)}
            {showToolsSection && <div style={{display: "flex"}}>
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
                        <li key={"2321"}>
                            <strong>ActivePlayer:</strong> {checkContextPlayer.playersDataState.activePlayer} </li>
                    </ul>
                </section>
                <button onClick={() => checkContextPlayer.setPlayersDataState({score: 970})}> click</button>
            </div>}
        </div>
    )
}