export function getCombination(interimDiceCombination: Array<number>) {
    console.log(interimDiceCombination);
    const droppedDice = [];
    const interimGameCombination = [];
    let newStagePoints = 0;

    function switchEntireTurn(interimDiceCombinationSecond) {
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
        // switch (interimDiceCombinationSecond.length) {
        //     case 5:
        //         let firstCount = 0;
        //         for (let i = 3; i >= 0; i--) {
        //             if (interimDiceCombinationSecond[4] === interimDiceCombinationSecond[i]) firstCount++
        //         }
        //         if (firstCount >= 2) {
        //             if (firstCount === 2 )newStagePoints += ((interimDiceCombinationSecond[4] === 1)? interimDiceCombinationSecond[4]*10 : interimDiceCombinationSecond[4]) *10;
        //             if (firstCount === 3 )newStagePoints += ((interimDiceCombinationSecond[4] === 1)? interimDiceCombinationSecond[4]*10 : interimDiceCombinationSecond[4]) * firstCount *10;
        //             if (firstCount === 4 )newStagePoints += ((interimDiceCombinationSecond[4] === 1)? interimDiceCombinationSecond[4]*10 : interimDiceCombinationSecond[4]) *100;
        //             for (let i = 0; i <= firstCount; i++) {
        //                 interimGameCombination.push(interimDiceCombinationSecond[4]);
        //             }
        //             return switchEntireTurn(interimDiceCombinationSecond.filter(item => item !== interimDiceCombinationSecond[4]))
        //         }
        //         if (interimDiceCombinationSecond[4] !== 5 && interimDiceCombinationSecond[4] !== 1) droppedDice.push(interimDiceCombinationSecond[4]);
        //         else if (interimDiceCombinationSecond[4] === 5) {
        //             interimGameCombination.push(interimDiceCombinationSecond[4])
        //             newStagePoints += interimDiceCombinationSecond[4];
        //         } else {
        //             interimGameCombination.push(interimDiceCombinationSecond[4])
        //             newStagePoints += interimDiceCombinationSecond[4] * 10;
        //         }
        //     case 4:
        //         let secondCount = 0;
        //         for (let i = 2; i >= 0; i--) {
        //             if (interimDiceCombinationSecond[3] === interimDiceCombinationSecond[i]) secondCount++
        //         }
        //         if (secondCount >= 2) {
        //             if (secondCount === 2 )newStagePoints += ((interimDiceCombinationSecond[3] === 1)? interimDiceCombinationSecond[3]*10 : interimDiceCombinationSecond[3]) *10;
        //             if (secondCount === 3 )newStagePoints += ((interimDiceCombinationSecond[3] === 1)? interimDiceCombinationSecond[3]*10 : interimDiceCombinationSecond[3]) * secondCount *10;
        //             for (let i = 0; i < secondCount; i++) {
        //                 interimGameCombination.push(interimDiceCombinationSecond[3]);
        //             }
        //             return switchEntireTurn(interimDiceCombinationSecond.filter(item => item !== interimDiceCombinationSecond[3]))
        //         }
        //         if (interimDiceCombinationSecond[3] !== 5 && interimDiceCombinationSecond[3] !== 1) droppedDice.push(interimDiceCombinationSecond[3]);
        //         else if (interimDiceCombinationSecond[3] === 5) {
        //             interimGameCombination.push(interimDiceCombinationSecond[3])
        //             newStagePoints += interimDiceCombinationSecond[3];
        //         } else {
        //             interimGameCombination.push(interimDiceCombinationSecond[3])
        //             newStagePoints += interimDiceCombinationSecond[3] * 10;
        //         }
        //     case 3:
        //         let thirdCount = 0;
        //         for (let i = 1; i >= 0; i--) {
        //             if (interimDiceCombinationSecond[2] === interimDiceCombinationSecond[i]) thirdCount++
        //         }
        //         if (thirdCount >= 2) {
        //             newStagePoints += ((interimDiceCombinationSecond[2] === 1)? interimDiceCombinationSecond[2]*10 : interimDiceCombinationSecond[2]) *10;
        //             for (let i = 0; i < thirdCount; i++) {
        //                 interimGameCombination.push(interimDiceCombinationSecond[2]);
        //             }
        //             return switchEntireTurn(interimDiceCombinationSecond.filter(item => item !== interimDiceCombinationSecond[2]))
        //         }
        //         if (interimDiceCombinationSecond[2] !== 5 && interimDiceCombinationSecond[2] !== 1) droppedDice.push(interimDiceCombinationSecond[2]);
        //         else if (interimDiceCombinationSecond[2] === 5) {
        //             interimGameCombination.push(interimDiceCombinationSecond[2])
        //             newStagePoints += interimDiceCombinationSecond[2];
        //         } else {
        //             interimGameCombination.push(interimDiceCombinationSecond[2])
        //             newStagePoints += interimDiceCombinationSecond[2] * 10;
        //         }
        //     case 2:
        //         if (interimDiceCombinationSecond[1] !== 5 && interimDiceCombinationSecond[1] !== 1) droppedDice.push(interimDiceCombinationSecond[1]);
        //         else if (interimDiceCombinationSecond[1] === 5) {
        //             interimGameCombination.push(interimDiceCombinationSecond[1])
        //             newStagePoints += interimDiceCombinationSecond[1];
        //         } else {
        //             interimGameCombination.push(interimDiceCombinationSecond[1])
        //             newStagePoints += interimDiceCombinationSecond[1] * 10;
        //         }
        //     case 1:
        //         if (interimDiceCombinationSecond[0] !== 5 && interimDiceCombinationSecond[0] !== 1) droppedDice.push(interimDiceCombinationSecond[0]);
        //         else if (interimDiceCombinationSecond[0] === 5) {
        //             interimGameCombination.push(interimDiceCombinationSecond[0])
        //             newStagePoints += interimDiceCombinationSecond[0];
        //         } else {
        //             interimGameCombination.push(interimDiceCombinationSecond[0])
        //             newStagePoints += interimDiceCombinationSecond[0] * 10;
        //         }
        // }
        // switch (interimDiceCombinationSecond.length) {
        //     case 5:
        //         checkDice(4)
        //         break;
        //     case 4:
        //         checkDice(3)
        //         break;
        //     case 3:
        //         checkDice(2)
        //         break;
        //     case 2:
        //         checkDice(1)
        //         break;
        //     case 1:
        //         checkDice(0)
        //         break;
        // }
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