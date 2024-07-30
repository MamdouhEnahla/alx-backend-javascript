/**
 * Retrieves the sum of ids of a list of students.
 */
export default function getStudentIdsSum(students) {
    // Check if the input is an array
    if (!Array.isArray(students)) {
        return 0;
    }

    // Use reduce to sum the ids
    return students.reduce((sum, student) => sum + student.id, 0);
}
