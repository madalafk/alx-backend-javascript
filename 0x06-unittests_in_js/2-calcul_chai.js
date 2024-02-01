function calculateNumber(type, a, b) {
    const NumA = Math.round(a);
    const NumB = Math.round(b);
    let NumC = 0;
    switch (type) {
    case 'SUM':
	NumC = NumA + NumB;
	break;
    case 'SUBTRACT':
	NumC = NumA - NumB;
	break;
    case 'DIVIDE':
      if (NumB === 0) {
            NumC = "Error";
      } else {
            NumC = NumA / NumB;
      }
      break;
    }
    return NumC;
}

module.exports = calculateNumber;
