import {FIRST_RED_ZONE, SECOND_RED_ZONE} from "../../../../constants";

export const updateBoundaryPoints = (score: number) => {
    let boundaryPoints = 0;

    if (score > FIRST_RED_ZONE.start && score < FIRST_RED_ZONE.end) {
        boundaryPoints = FIRST_RED_ZONE.end - score;
    }

    if (score > SECOND_RED_ZONE.start && score < SECOND_RED_ZONE.end) {
        boundaryPoints = SECOND_RED_ZONE.end - score;
    }

    return {boundaryPoints: boundaryPoints,countRedZone: boundaryPoints? 1: 0};
}
