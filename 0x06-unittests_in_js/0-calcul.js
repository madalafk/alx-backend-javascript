function calculateNumber(a, b) {
    const NumA = Math.round(a);
    const NumB = Math.round(b);
    const NumC = NumA + NumB;
    return NumC;
}

module.exports = calculateNumber;
