function capitalizeName(name) {
    return {
        name: name.charAt(0).toUpperCase() + name.slice(1)
    }
}

function showStudentList() {
    const submitForm = {};
    const studentsInput = [
        {
            "name": "perry",
            "lastname": "abernon",
            "pet": "lucy"
        },
        {
            "name": "dulcinea",
            "lastname": "blisse",
            "pet": "loree"
        },
        {
            "name": null,
            "lastname": "rese",
            "pet": "cathyleen"
        },
        {
            "name": "florie",
            "lastname": undefined,
            "pet": "lindie"
        }
    ];

    const students = studentsInput.map(function (student) {
        return {
            ...student,
            name: capitalizeName(student.name)
        }
    });

    const hobbies = submitForm.map(function (student) {
        return student.hobby;
    })

    console.log(students);
    console.log(hobbies);
}

showStudentList();