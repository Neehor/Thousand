import {useContext} from "react";
import {PlayersDataStateContext} from "../PlayersDataStore";

export const usePlayersDataStateContext = () => {
    const context = useContext(PlayersDataStateContext);
    if (!context) {
        throw new Error('usePlayersDataStateContext must be used within provider');
    }
    return context;
}
