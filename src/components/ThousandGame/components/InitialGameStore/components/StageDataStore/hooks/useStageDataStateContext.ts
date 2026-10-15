import {useContext} from "react";
import {StageDataStateContext} from "../StageDataStore";

export const useStageDataStateContext = () => {
    const ctx = useContext(StageDataStateContext);
    if(!ctx) {
        throw new Error("useStageDataStateContext must be used within provider");
    }
    return ctx;
}
