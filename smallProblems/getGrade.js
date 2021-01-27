/*
I wanted to take in as many arguments as possible,
and I wanted to give the students their percetage
as well. I really wanted to leave the getLetterGrade
as its own function, but I had to put it in
the scope of the other function in order to
reference the percentage. How could I have
done that?
*/

function getGrade(grades) {
    let totalGrades = 0;
    for(let i = 0; i < grades.length; i++) {
        totalGrades += grades[i];
    }

    return getLetterGrade(totalGrades / grades.length);

    function getLetterGrade(num) {
        switch (true) {
            case num >= 90:
                return `You got an A. Great job. Your average grade is ${(totalGrades / grades.length).toFixed(0)}`;
            case num < 90 && num >= 80:
                return `You got a B. Good job. Your average grade is ${(totalGrades / grades.length).toFixed(0)}`;

            case num < 80 && num >= 70:
                return `You got a C. That's ok. Your average grade is ${(totalGrades / grades.length).toFixed(0)}`;

            case num < 70 && num >= 60:
                return `You got a D. I think you have to work a little harder. Your average grade is ${(totalGrades / grades.length).toFixed(0)}`;

            case num < 60:
                return `You got an F. Your average grade is ${(totalGrades / grades.length).toFixed(0)}. I think you should start thinking about another profession. I hear they're hiring for a pet food taster!`;

            default:
                return `Not a number.`
            }
        }
}
let student1 = [95, 90, 93, 86, 68, 86, 86, 86];
let student2 = [50, 50, 95, 67, 89, 89, 89];
let student3 = [50, 50, 40, 67];

console.log(getGrade(student1));
console.log(getGrade(student2));
console.log(getGrade(student3));
