var minSwaps = function (s: string): number {
  let imbalance = 0;
  let swaps = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "[") {
      imbalance++;
    } else {
      imbalance--;
    }

    // If imbalance goes negative, we need a swap
    if (imbalance < 0) {
      swaps++;
      // After a swap, we assume the imbalance is temporarily fixed
      imbalance = 1;
    }
  }

  return swaps;
};
