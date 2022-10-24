const numbers = [10,30,40]
console.log(numbers.reduce((acc, num)=>{return acc+num}, 100))
// 3항에 초기값(100)을 줄 수 있다.

// 1. 배열에 담긴 중복된 이름을 {'이름': 수} 형태의 object로 반환하세요.

const names = ['harry', 'aiden', 'julie', 'julie', 'edward']

// answer
const newObj = names.reduce((acc, name)=>{
  if (name in acc) {
    acc[name] += 1
  } else {
    acc[name] = 1
  }
  return acc
}, {})

console.log(newObj)