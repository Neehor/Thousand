import type {PropsWithChildren} from "react";
import {PlayersDataStore} from "./components/PlayersDataStore";
import {StageDataStore} from "./components/StageDataStore";

export function InitialGameStore({children}: PropsWithChildren) {
    return (
        <PlayersDataStore>
            <StageDataStore>
                {children}
            </StageDataStore>
        </PlayersDataStore>
    )
}
