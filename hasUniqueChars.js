// Write your code below
hasUniqueCharacters = (givenWord) => {
    for(i = 0; i < givenWord.length; i++){
        if (givenWord.indexOf(givenWord[i]) !== givenWord.lastIndexOf(givenWord[i])) {
            return false
        } 
    }
    return true
}

console.log(hasUniqueCharacters('Macey'))
console.log(hasUniqueCharacters('Shannon'))


console.log(hasUniqueCharacters('abcdefg'))
console.log(hasUniqueCharacters('aaaaaa'))

hasUniqueCharacters = (str) => {
    return new Set(str).size == str.length;
}

console.log(hasUniqueCharacters('Macey'))
console.log(hasUniqueCharacters('Shannon'))

console.log(hasUniqueCharacters('abcdefghijlmnop'))
console.log(hasUniqueCharacters('aaabbbcccdddeeefffgggg'))


