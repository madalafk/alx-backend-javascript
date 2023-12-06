// an interface named Student should accept the elements: firstName(string), lastName(string), age(number), and location(string)
// Create two students, and create an array named studentsList containing the two variables
// with Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
// Each row contains first name of the student and the location

// Define the Student interface
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

// Create two student objects 
const firstStudent: Student = {
	firstName: "Framk",
	lastName: "Kaziputa",
	age: 33,
	location: "Lilongwe"
}

const secondStudent: Student = {
	firstName: "Hannah",
	lastName: "Ngalande",
	age: 27,
	location: "Blantyre"
}

// Create an array of students
const studentsList = [firstStudent, secondStudent];

const table = document.getElementById('studentTable') as HTMLTableElement;

// Create a new row for each student and append it to the table
studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})
