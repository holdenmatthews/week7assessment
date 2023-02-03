// Sum Zero
// Runtime of O(n^2) because it is dependent on the length of nums and has to run through the rest of the array for every item in the array.
// Space complexity of O(n) because it is dependent on how many items are in the nums array.

const addToZero = (nums) => {
    let answer = false
    for (let i = 0; i < nums.length; i++) {
        for (let k = i + 1; k < nums.length; k++) {
            if (nums[i] + nums[k] === 0) {
                answer = true
            } else {
                continue
            }
        }
    }
    return answer
}

// console.log(addToZero([1, 2, 3]))
// console.log(addToZero([1, 2, 3, -2]))

// Unique Characters
// Runtime of O(n) because it is dependent on string.length
// Space complexity of O(n) because it is dependent on how many letters are in the string.

const hasUniqueChars = (string) => {
    let letters = []
    for (let i = 0; i < string.length; i++) {
        if (!letters.includes(string[i])) {
            letters.push(string[i])
        }
    }
    if (letters.join('') === string) {
        return true
    } else {
        return false
    }
}

// console.log(hasUniqueChars('Monday'))
// console.log(hasUniqueChars('Moonday'))

// Pangram Sentence
// Runtime of O(n) because it is dependent on the length of the string passed in to isPangram.
// Space complexity of O(n) because it is dependent on how many characters are in the string.

const isPangram = (string) => {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    string = string.toLowerCase()
    for (let i = 0; i < alphabet.length; i++) {
        for (let k = 0; k < string.length; k++) {
            if (alphabet[i] === string[k]) {
                alphabet.splice(i, 1)
            }
        }
    }
    if (alphabet === []) {
        return true
    } else {
        return false
    }
}

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// console.log(isPangram("I like cats, but not mice."))

// Longest Word
// Runtime of O(n) because it is dependent on the length of the words array.
// Space complexity of O(n) because it is dependent on the length of the words array.

const findLongestWord = (words) => {
    let longestWord = ""
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i]
        }
    }
    return longestWord.length
}

// console.log(findLongestWord(['hi', 'hello']))