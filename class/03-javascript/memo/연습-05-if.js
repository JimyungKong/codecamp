if( 1+1 === 2 ) {
    console.log("that's right!")
} else { 
    console.log("that's wrong")
       }
// VM464:2 that's right!
// undefined
if( 1+1 === 3 ) {
    console.log("that's right!")
} else { 
    console.log("that's wrong")
       }
// VM473:4 that's wrong
// undefined
const pw1= "123"
// undefined
const pw2= "345"
// undefined
if(pw1 === pw2) {
    alert ("right")
} else {
    alert("what?")
}
// undefined


const profile = {
    name : "철수",
    age : 12,
    school : "다람쥐초등학교"
}
// undefined
if (prfile.age >= 20) {
    console.log("성인입니다.")
} else if ( 8<= profile.age <=19) {
    console.log ("학생입니다.")
} else (7>= profile.age) {
    console.log ("어린이입니다.)
}
// VM1679:5 Uncaught SyntaxError: Unexpected token '{'
if (prfile.age >= 20) {
    console.log("성인입니다.")
} else if ( 8<= profile.age <=19) {
    console.log ("학생입니다.")
} else (7>= profile.age) {
    console.log ("어린이입니다.")
}
// VM1690:5 Uncaught SyntaxError: Unexpected token '{'
// 7>= profile.age
// false
if (prfile.age >= 20) {
    console.log("성인입니다.")
} else if ( 8<= profile.age <=19) {
    console.log ("학생입니다.")
} else {
    console.log ("어린이입니다.")
}
// VM1810:1 Uncaught ReferenceError: prfile is not defined
    // at <anonymous>:1:1
// (anonymous) @ VM1810:1
if (profile.age >= 20) {
    console.log("성인입니다.")
} else if ( 8<= profile.age <=19) {
    console.log ("학생입니다.")
} else{
    console.log ("어린이입니다.")
}
// VM1847:4 학생입니다.
// undefined

if (profile.age >= 20) {
    console.log("성인입니다.")
} else if ( profile.age >= 8 && profile.age <= 19 ) {
    console.log ("학생입니다.")
} else {
    console.log ("어린이입니다.")
}
// VM2038:4 학생입니다.
// undefined
if (profile.age >= 20) {
    console.log("성인입니다.")
} else if ( profile.age >= 8 ) {
    console.log ("학생입니다.")
} else {
    console.log ("어린이입니다.")
}
// VM2067:4 학생입니다.
// undefined