export function getCombination(interimDiceCombination: Array<number>) {
    const droppedDice:number[] = [];
    const interimGameCombination:number[] = [];
    let newStagePoints:number = 0;

    function switchEntireTurn(interimDiceCombinationSecond:number[]) {
        function checkDice(checkedDice: number) {
            if (checkedDice > 1){
            let firstCount = 0;
            for (let i = checkedDice -1; i >= 0; i--) {
                if (interimDiceCombinationSecond[checkedDice] === interimDiceCombinationSecond[i]) firstCount++
            }
            if (firstCount >= 2) {
                if (firstCount === 2 )newStagePoints += ((interimDiceCombinationSecond[checkedDice] === 1)? interimDiceCombinationSecond[checkedDice]*10 : interimDiceCombinationSecond[checkedDice]) *10;
                if (firstCount === 3 )newStagePoints += ((interimDiceCombinationSecond[checkedDice] === 1)? interimDiceCombinationSecond[checkedDice]*10 : interimDiceCombinationSecond[checkedDice]) * (firstCount+1) *10;
                if (firstCount === 4 )newStagePoints += ((interimDiceCombinationSecond[checkedDice] === 1)? interimDiceCombinationSecond[checkedDice]*10 : interimDiceCombinationSecond[checkedDice]) *100;
                for (let i = 0; i <= firstCount; i++) {
                    interimGameCombination.push(interimDiceCombinationSecond[checkedDice]);
                }
                return switchEntireTurn(interimDiceCombinationSecond.filter(item => item !== interimDiceCombinationSecond[checkedDice]))
            }}
            if (interimDiceCombinationSecond[checkedDice] !== 5 && interimDiceCombinationSecond[checkedDice] !== 1) droppedDice.push(interimDiceCombinationSecond[checkedDice]);
            else if (interimDiceCombinationSecond[checkedDice] === 5) {
                interimGameCombination.push(interimDiceCombinationSecond[checkedDice])
                newStagePoints += interimDiceCombinationSecond[checkedDice];
            } else {
                interimGameCombination.push(interimDiceCombinationSecond[checkedDice])
                newStagePoints += interimDiceCombinationSecond[checkedDice] * 10;
            }
            return switchEntireTurn(interimDiceCombinationSecond.slice(0, -1));
        }
        if ((interimDiceCombinationSecond.length -1)>=0){
        checkDice(interimDiceCombinationSecond.length -1)}
    }
    switchEntireTurn(interimDiceCombination)

    return {
        droppedDice:droppedDice,
        interimDiceCombination:interimGameCombination,
        newStagePoints:newStagePoints
    }
}