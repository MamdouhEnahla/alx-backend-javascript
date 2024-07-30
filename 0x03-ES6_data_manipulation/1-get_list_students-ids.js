export default function getListStudentIds(students) {
    if (!Array.isArray(students)) {
        return [];
    }

    const listIds =  students.map(student => student.id);
    return listIds;
}

