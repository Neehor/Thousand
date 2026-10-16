export function getCombination(interimDiceCombination: Array<number>) {
    const droppedDice = [];
    const interimGameCombination = [];
    let newStagePoints = 0;

    function switchEntireTurn(interimDiceCombinationSecond) {
        switch (interimDiceCombinationSecond.length) {
            case 5:
                let firstCount = 0;
                for (let i = 3; i >= 0; i--) {
                    if (interimDiceCombinationSecond[4] === interimDiceCombinationSecond[i]) firstCount++
                }
                if (firstCount >= 3) {
                    newStagePoints += interimDiceCombinationSecond[4] * firstCount;
                    for (let i = 0; i < firstCount; i++) {
                        interimGameCombination.push(interimDiceCombinationSecond[4]);
                    }
                    return switchEntireTurn(interimDiceCombinationSecond.filter(item => item !== interimDiceCombinationSecond[4]))
                }
                if (interimDiceCombinationSecond[4] !== 5 && interimDiceCombinationSecond[4] !== 1) droppedDice.push(interimDiceCombinationSecond[4]);
                else if (interimDiceCombinationSecond[4] === 5) {
                    interimGameCombination.push(interimDiceCombinationSecond[4])
                    newStagePoints += interimDiceCombinationSecond[4];
                } else {
                    interimGameCombination.push(interimDiceCombinationSecond[4])
                    newStagePoints += interimDiceCombinationSecond[4] * 10;
                }
            case 4:
                let secondCount = 0;
                for (let i = 2; i >= 0; i--) {
                    if (interimDiceCombinationSecond[3] === interimDiceCombinationSecond[i]) firstCount++
                }
                if (secondCount >= 3) {
                    newStagePoints += interimDiceCombinationSecond[3] * secondCount;
                    for (let i = 0; i < secondCount; i++) {
                        interimGameCombination.push(interimDiceCombinationSecond[3]);
                    }
                    return switchEntireTurn(interimDiceCombinationSecond.filter(item => item !== interimDiceCombinationSecond[3]))
                }
                if (interimDiceCombinationSecond[3] !== 5 && interimDiceCombinationSecond[3] !== 1) droppedDice.push(interimDiceCombinationSecond[3]);
                else if (interimDiceCombinationSecond[3] === 5) {
                    interimGameCombination.push(interimDiceCombinationSecond[3])
                    newStagePoints += interimDiceCombinationSecond[3];
                } else {
                    interimGameCombination.push(interimDiceCombinationSecond[3])
                    newStagePoints += interimDiceCombinationSecond[3] * 10;
                }
            case 3:
                let thirdCount = 0;
                for (let i = 1; i >= 0; i--) {
                    if (interimDiceCombinationSecond[2] === interimDiceCombinationSecond[i]) thirdCount++
                }
                if (thirdCount >= 3) {
                    newStagePoints += interimDiceCombinationSecond[2] * thirdCount;
                    for (let i = 0; i < thirdCount; i++) {
                        interimGameCombination.push(interimDiceCombinationSecond[2]);
                    }
                    return switchEntireTurn(interimDiceCombinationSecond.filter(item => item !== interimDiceCombinationSecond[2]))
                }
                if (interimDiceCombinationSecond[2] !== 5 && interimDiceCombinationSecond[2] !== 1) droppedDice.push(interimDiceCombinationSecond[2]);
                else if (interimDiceCombinationSecond[2] === 5) {
                    interimGameCombination.push(interimDiceCombinationSecond[2])
                    newStagePoints += interimDiceCombinationSecond[2];
                } else {
                    interimGameCombination.push(interimDiceCombinationSecond[2])
                    newStagePoints += interimDiceCombinationSecond[2] * 10;
                }
            case 2:
                if (interimDiceCombinationSecond[1] !== 5 && interimDiceCombinationSecond[1] !== 1) droppedDice.push(interimDiceCombinationSecond[1]);
                else if (interimDiceCombinationSecond[1] === 5) {
                    interimGameCombination.push(interimDiceCombinationSecond[1])
                    newStagePoints += interimDiceCombinationSecond[1];
                } else {
                    interimGameCombination.push(interimDiceCombinationSecond[1])
                    newStagePoints += interimDiceCombinationSecond[1] * 10;
                }
            case 1:
                if (interimDiceCombinationSecond[0] !== 5 && interimDiceCombinationSecond[0] !== 1) droppedDice.push(interimDiceCombinationSecond[0]);
                else if (interimDiceCombinationSecond[0] === 5) {
                    interimGameCombination.push(interimDiceCombinationSecond[0])
                    newStagePoints += interimDiceCombinationSecond[0];
                } else {
                    interimGameCombination.push(interimDiceCombinationSecond[0])
                    newStagePoints += interimDiceCombinationSecond[0] * 10;
                }
        }
    }
    switchEntireTurn(interimDiceCombination)

    return {
        droppedDice:droppedDice,
        interimDiceCombination:interimDiceCombination,
        newStagePoints:newStagePoints
    }
}