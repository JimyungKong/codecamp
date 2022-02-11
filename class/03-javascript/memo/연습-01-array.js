const classmates = ['지명','상준','시윤']
// undefined
classmates
// (3) ['지명', '상준', '시윤']
classmates[1]
// '상준'
classmates.includes("해리")
// false
classmates.push("해리")
// 4
classmates.includes("해리")
// true
classmates.pop()
// '해리'
classmates
// (3) ['지명', '상준', '시윤']
classmates.length
// 3


const developer=['맥북','아이패드','애플워치','아이폰','에어팟']
// undefined
developer
// (5) ['맥북', '아이패드', '애플워치', '아이폰', '에어팟']
console.index(3)
// VM988:1 Uncaught TypeError: console.index is not a function
    // at <anonymous>:1:9
// (anonymous) @ VM988:1
developer[2]
// '애플워치'
const dream=["커리어점프","성공","할수있다"]
// undefined
developer.concat(dream)
// (8) ['맥북', '아이패드', '애플워치', '아이폰', '에어팟', '커리어점프', '성공', '할수있다']
developer.push(dream)
// 6


