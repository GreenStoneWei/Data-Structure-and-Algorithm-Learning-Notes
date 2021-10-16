function deckRevealedIncreasing(deck: number[]): number[] {
  if (deck.length < 2) {
    return deck
  }
  const sorted = deck.sort((a, b) => b - a) // 從最後一個開始拿
  const result = []

  for (const card of sorted) {
    if (result.length < 2) {
      result.unshift(card)
      continue
    }
    result.unshift(result.pop())
    result.unshift(card)
  }
  return result
}
