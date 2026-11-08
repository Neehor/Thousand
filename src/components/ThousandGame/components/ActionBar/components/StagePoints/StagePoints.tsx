import styles from "./StagePonts.module.css"

type StagePointsPropsType = {
    points: number
}
export function StagePoints(props:StagePointsPropsType){
    const {points} = props;

    return (
        <span className={styles.stagePoints}>
            {points} POINTS
        </span>
    )
}
