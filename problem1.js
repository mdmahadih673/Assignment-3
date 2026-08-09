// to do My name is Rafi. I am 18 years old. I am learning JavaScript.
// The input is not an object, or
// The object does not contain the name, age, or course properties.

const student = { name: "Rafi", age: 18, course: "JavaScript" }


function studentIntroduction(student) {
    if (typeof student != "object" || student === null || Array.isArray(student)) {
        return "Invalid"
    }
    if (!("name" in student) || !("age" in student) || !("course" in student)) {
        return "Invalid"
    }
    return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}`
}



console.log(studentIntroduction(student));

