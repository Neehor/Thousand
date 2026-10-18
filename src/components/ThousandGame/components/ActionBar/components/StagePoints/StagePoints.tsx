type StagePointsPropsType = {
    points: number
}
export function StagePoints(props:StagePointsPropsType){
    const {points} = props;

    return (
        <span>
            {points} points
        </span>
    )
}
