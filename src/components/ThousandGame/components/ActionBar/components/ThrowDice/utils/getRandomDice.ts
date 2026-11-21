export function getRandomDice (availableDice: number) {
    const interimDiceCombination = [];
    for (let i = 0; i < availableDice; i++) {
        interimDiceCombination.push(Math.floor(Math.random() * 6) + 1);
    }
    return interimDiceCombination;
}
