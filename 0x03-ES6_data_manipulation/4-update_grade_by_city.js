/**
 * Updates the grades of a list of students in a given city.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
    return students
        .filter(student => student.location === city)
        .map(student => {
            const gradeObj = newGrades.find(grade => grade.studentId === student.id);
            return {
                ...student,
                grade: gradeObj ? gradeObj.grade : 'N/A'
            };
        });
}
