const englishScores = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
}

class Scrabble {
  constructor(word, scores = englishScores) {
    this.scores = scores
    this.word = word
  }

  score() {
    let runningTotal = 0
    let scoreKey = []

    if (!this.word) {
      return 0
    }

    for (let i = 0; i < this.word.length; i++) {
      const letter = this.word[i].toUpperCase()
      for (let j = 0; j < Object.values(this.scores).length; j++) {
        if (Object.values(this.scores)[j].includes(letter)) {
          scoreKey = Object.values(this.scores)[j]
          for (let score in this.scores) {
            if (this.scores[score] === scoreKey) {
              if (this.word[i - 1] === '{' && this.word[i + 1] === '}') {
                score *= 2
              }
              if (this.word[i - 1] === '[' && this.word[i + 1] === ']') {
                score *= 3
              }
              runningTotal += Number(score)
            }
          }
        }
      }
    }
    if (this.word[0] === '{' && this.word[this.word.length - 1] === '}') {
      return runningTotal * 2
    }
    if (this.word[0] === '[' && this.word[this.word.length - 1] === ']') {
      return runningTotal * 3
    }
    return runningTotal
  }
}

module.exports = Scrabble
