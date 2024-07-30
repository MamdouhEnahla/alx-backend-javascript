/**
 * return array of objects who are located in a specific city* */
export default function getStudentsByLocation(students, city) {
    // Check if the input is an array
    if (!Array.isArray(students)) {
        return [];
    }

    // Use filter to get students by location
    return students.filter(student => student.location === city);
}
