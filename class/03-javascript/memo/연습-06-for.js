let students = ["철수", "영희", "해리", "도비", "무늬", "로이", "로사"]
// undefined
for(let i = 0; i < students.length; i++) {
    console.log(students [i] +" 님 안녕하세요?")
}
// VM2645:2 철수 님 안녕하세요?
// VM2645:2 영희 님 안녕하세요?
// VM2645:2 해리 님 안녕하세요?
// VM2645:2 도비 님 안녕하세요?
// VM2645:2 무늬 님 안녕하세요?
// VM2645:2 로이 님 안녕하세요?
// VM2645:2 로사 님 안녕하세요?
// undefined
let persons = [
  {name: '철수', age:18},
  {name: '영희', age:22},
  {name: '도우너', age:5},
  {name: '말포이', age:14},
  {name: '도비', age:3},
]
// undefined
for(let n = 0; n < persons.length; n++) {

    if(persons[n].age > 18) {
        console.log(persons[n].name + ' 님은 성인입니다.')
    } else {
        console.log(persons[n].name + '님은 미성년자입니다')
    }
    
}
// VM3426:6 철수님은 미성년자입니다
// VM3426:4 영희 님은 성인입니다.
// VM3426:6 도우너님은 미성년자입니다
// VM3426:6 말포이님은 미성년자입니다
// VM3426:6 도비님은 미성년자입니다
// undefined


const fruits = [
    { number: 1, title: "레드향"},
    { number: 2, title: "샤인머스켓"},
    { number: 3, title: "산청딸기"},
    { number: 4, title: "한라봉"},
    { number: 5, title: "사과"},
    { number: 6, title: "애플망고"},
    { number: 7, title: "딸기"},
    { number: 8, title: "천혜향"},
    { number: 9, title: "과일선물세트"},
    { number: 10, title: "귤"},
    ]
    // undefined
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i].number +" "+fruits[i].title)
    }
    // VM3924:2 1 레드향
    // VM3924:2 2 샤인머스켓
    // VM3924:2 3 산청딸기
    // VM3924:2 4 한라봉
    // VM3924:2 5 사과
    // VM3924:2 6 애플망고
    // VM3924:2 7 딸기
    // VM3924:2 8 천혜향
    // VM3924:2 9 과일선물세트
    // VM3924:2 10 귤
    // undefined
    for (let i = 1; i < fruits.length; i++) {
        console.log(fruits[i].number +" "+fruits[i].title)
    }
    // VM4019:2 2 샤인머스켓
    // VM4019:2 3 산청딸기
    // VM4019:2 4 한라봉
    // VM4019:2 5 사과
    // VM4019:2 6 애플망고
    // VM4019:2 7 딸기
    // VM4019:2 8 천혜향
    // VM4019:2 9 과일선물세트
    // VM4019:2 10 귤
    // undefined