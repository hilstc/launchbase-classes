// Strings declaration::

// const name = "Carla"
// const name2 = 'Diego'
// const name3 = `Valeska and ${name}`

// Checking variable type:
// console.log(typeof name);


// Find the average of the grades of each class and send a message with the result.

const classA = [
    {
        name: "Mayk",
        grade: 9.8
    },
    {
        name: "Diego",
        grade: 10
    },
    {
        name: "John",
        grade: 2
    },
    {
        name: "One More Student",
        grade: 10
    }
]

const classB = [
    {
        name: "Ana",
        grade: 10
    },
    {
        name: "Maria",
        grade: 10
    },
    {
        name: "Joana",
        grade: 0
    },
    {
        name: "New Student",
        grade: 5
    }
]

function calculateAverage(students) {
    let sum = 0

    for (let i = 0; i < students.length; i++) {
        sum += students[i].grade
    }
    const average = sum / students.length
    return average
}

function sendMessage(average, nameOfClass) {
    if (average > 5) {
        console.log(`Class ${nameOfClass}'s average: ${average}. Congratulations!`)
    } else {
        console.log(`Class ${nameOfClass}'s average was lower than 5.`)
    }
}

function markAsFlunked(student) {
    student.flunked = false
    if (student.grade < 5) {
        student.flunked = true
    }
}

function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`The student ${student.name} has flunked!`)

    }
}

function flunkedStudents(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendFlunkedMessage(student)
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'A')
sendMessage(average2, 'B')

flunkedStudents(classA)
flunkedStudents(classB)






