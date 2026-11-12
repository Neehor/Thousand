import {usePlayersDataStateContext} from "../InitialGameStore/components/PlayersDataStore";
import {useStageDataStateContext} from "../InitialGameStore/components/StageDataStore";
import {useLayoutEffect, useState} from "react";
import styles from "./DevPanel.module.css";
import {createPortal} from "react-dom";


const svgIconDevLog = <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M2.1165 10.9168C2.1165 6.05714 6.05607 2.11757 10.9158 2.11757C15.7755 2.11757 19.715 6.05714 19.715 10.9168C19.715 15.7766 15.7755 19.7161 10.9158 19.7161C6.05607 19.7161 2.1165 15.7766 2.1165 10.9168Z"
        fill="white"/>
    <path
        d="M10.9165 0.833984C5.357 0.833984 0.833984 5.357 0.833984 10.9165C0.834993 16.477 5.358 21 10.9165 21C16.476 21 20.999 16.477 21 10.9165C21 5.357 16.477 0.833984 10.9165 0.833984ZM10.9165 18.9835C6.4701 18.9835 2.85149 15.3649 2.85049 10.9165C2.85049 6.4691 6.4691 2.85049 10.9165 2.85049C15.3649 2.85049 18.9835 6.4691 18.9835 10.9165C18.9825 15.3649 15.3639 18.9835 10.9165 18.9835Z"
        fill="#333333"/>
    <path
        d="M10.7953 14.6131C12.8341 14.6131 14.4922 12.955 14.4922 10.9162C14.4922 8.87731 12.8341 7.21924 10.7953 7.21924C8.75643 7.21924 7.09836 8.87731 7.09836 10.9162C7.09836 12.955 8.75643 14.6131 10.7953 14.6131ZM10.7953 9.0677C11.7971 9.0677 12.6437 9.9143 12.6437 10.9162C12.6437 11.918 11.7971 12.7646 10.7953 12.7646C9.79341 12.7646 8.94682 11.918 8.94682 10.9162C8.94682 9.9143 9.79341 9.0677 10.7953 9.0677Z"
        fill="#333333"/>
    <path
        d="M2.33396 14.7388L3.25819 16.3377C3.74895 17.1852 4.93012 17.5031 5.78133 17.0124L6.27025 16.7296C6.80495 17.1502 7.39449 17.4959 8.02259 17.7573V18.31C8.02259 19.3294 8.85162 20.1585 9.87105 20.1585H11.7195C12.7389 20.1585 13.568 19.3294 13.568 18.31V17.7573C14.1958 17.4959 14.7853 17.1505 15.3203 16.7305L15.8092 17.0133C16.6623 17.5031 17.8407 17.1871 18.3333 16.3377L19.2566 14.7397C19.5015 14.3152 19.568 13.8108 19.4413 13.3374C19.3146 12.864 19.0052 12.4602 18.581 12.2147L18.1143 11.9448C18.2135 11.2633 18.2135 10.5709 18.1143 9.88934L18.581 9.61947C19.005 9.37383 19.3143 8.97004 19.4409 8.49667C19.5676 8.02331 19.5013 7.51903 19.2566 7.09447L18.3333 5.49648C17.8425 4.64619 16.6623 4.32733 15.8092 4.81994L15.3203 5.10276C14.7856 4.68215 14.1961 4.33638 13.568 4.07501V3.52232C13.568 2.5029 12.7389 1.67386 11.7195 1.67386H9.87105C8.85162 1.67386 8.02259 2.5029 8.02259 3.52232V4.07501C7.39471 4.33642 6.80521 4.68185 6.27025 5.10183L5.78133 4.81902C4.92734 4.32825 3.74803 4.64619 3.25726 5.49555L2.33396 7.09355C2.08902 7.51804 2.02259 8.02241 2.14927 8.49585C2.27595 8.96929 2.58537 9.37308 3.00957 9.61854L3.4763 9.88842C3.3767 10.5696 3.3767 11.2617 3.4763 11.943L3.00957 12.2129C2.5855 12.4587 2.27622 12.8626 2.14957 13.3361C2.02291 13.8097 2.08922 14.3141 2.33396 14.7388ZM5.40794 12.1897C5.30358 11.7732 5.25051 11.3455 5.2499 10.9162C5.2499 10.4892 5.30351 10.0603 5.40702 9.64257C5.45576 9.44786 5.43973 9.24257 5.36135 9.05779C5.28297 8.87301 5.14651 8.7188 4.97263 8.61853L3.93472 8.01778L4.8571 6.41978L5.91535 7.03162C6.08792 7.13148 6.28824 7.17268 6.48621 7.14901C6.68419 7.12535 6.86915 7.03811 7.01333 6.90038C7.63859 6.30569 8.39259 5.86322 9.21669 5.60739C9.406 5.54959 9.57175 5.43255 9.68955 5.27349C9.80734 5.11443 9.87097 4.92175 9.87105 4.72382V3.52232H11.7195V4.72382C11.7196 4.92175 11.7832 5.11443 11.901 5.27349C12.0188 5.43255 12.1846 5.54959 12.3739 5.60739C13.1978 5.86359 13.9517 6.30601 14.5772 6.90038C14.7216 7.03784 14.9065 7.1249 15.1044 7.14855C15.3023 7.17221 15.5025 7.13119 15.6752 7.03162L16.7325 6.42071L17.6568 8.0187L16.6179 8.61853C16.4442 8.71892 16.3078 8.87313 16.2294 9.05788C16.1511 9.24263 16.1349 9.44786 16.1835 9.64257C16.2871 10.0603 16.3407 10.4892 16.3407 10.9162C16.3407 11.3422 16.2871 11.7711 16.1826 12.1897C16.1341 12.3846 16.1504 12.5899 16.2289 12.7746C16.3074 12.9594 16.444 13.1135 16.6179 13.2138L17.6558 13.8136L16.7335 15.4116L15.6752 14.8007C15.5027 14.7007 15.3023 14.6594 15.1043 14.6831C14.9063 14.7067 14.7213 14.7941 14.5772 14.9319C13.952 15.5266 13.198 15.9691 12.3739 16.2249C12.1846 16.2827 12.0188 16.3998 11.901 16.5588C11.7832 16.7179 11.7196 16.9106 11.7195 17.1085L11.7214 18.31H9.87105V17.1085C9.87097 16.9106 9.80734 16.7179 9.68955 16.5588C9.57175 16.3998 9.406 16.2827 9.21669 16.2249C8.39275 15.9687 7.63883 15.5263 7.01333 14.9319C6.86943 14.7937 6.68435 14.7062 6.48619 14.6826C6.28803 14.6591 6.08761 14.7009 5.91535 14.8016L4.85803 15.4135L3.9338 13.8155L4.97263 13.2138C5.14657 13.1135 5.28313 12.9594 5.36167 12.7746C5.4402 12.5899 5.45645 12.3846 5.40794 12.1897Z"
        fill="#333333"/>
</svg>

// @ts-ignore
export function DevPanel(props) {
    const {element} = props;
    const checkContextStage = useStageDataStateContext();
    const checkContextPlayer = usePlayersDataStateContext();
    const [showToolsSection, setShowToolsSection] = useState<boolean>(false);
    const [elementPortal, setElementPortal] = useState<Element>();

    useLayoutEffect(() => {
        setElementPortal(element.current)
    }, [])

    return (
        <div className={styles.containerPanel}>
            {elementPortal && createPortal(
                <button
                    onClick={() => setShowToolsSection((prevState) => !prevState)}
                    className={styles.imageButton}
                >
                    {svgIconDevLog}
                </button>, elementPortal
            )}

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
                            <strong>ActivePlayer:</strong> {checkContextPlayer.playersDataState.activePlayer}
                        </li>
                    </ul>
                </section>
                <section className={styles.imageSection}>
                    <button
                        style={{height: "75px", width: "75px"}}
                        onClick={() => checkContextPlayer.setPlayersDataState({score: 295, boundaryPoints: 0})}
                    > Go to red zone
                    </button>
                    <button
                        style={{height: "75px", width: "75px"}}
                        onClick={() => checkContextPlayer.setPlayersDataState({score: 975, boundaryPoints: 0})}
                    > Go to end of the game
                    </button>
                </section>
            </div>}
        </div>
    )
}
