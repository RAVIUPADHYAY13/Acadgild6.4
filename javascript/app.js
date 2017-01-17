var employee1 = { 
	name: "Shubham", 
	age: 21,
	salary: 60000, 
	address: { 
		city: "New Delhi", 
		state: "Delhi", 
		pin: 110045 },
	}
	
var employee2 = { 
	name: "Mohit", 
	age: 50,
	salary: 80000, 
	address: { 
		city: "Bengaluru", 
		state: "Karnataka", 
		pin: 200060 },
	}

var employee3 = { 
	name: "Raman", 
	age: 21,
	salary: 500000, 
	address: { 
		city: "Kuru", 
		state: "Karnataka", 
		pin: 290019 },
	}

var employee4 = { 
	name: "Shweta", 
	age: 20,
	salary: 40000, 
	address: { 
		city: "Mohali", 
		state: "Punjab", 
		pin: 922110 },
	}

var employee5 = { 
	name: "Vikas Sharma", 
	age: 40,
	salary: 220000, 
	address: { 
		city: "Shimla", 
		state: "Himachal Pradesh", 
		pin: 112201 },
	}

	
var employees = [employee1, employee2, employee3, employee4, employee5];

for (var emp in employees) {
console.log("Employee " + emp + " Details :-");
console.log("Name : "+ employees[emp]['name'] + ", Age : "+ employees[emp]['age'] +", Salary : " + employees[emp]['salary'] );
console.log("Address:: " );
console.log("City : " + employees[emp].address.city);
console.log("State : " + employees[emp].address.state);
console.log("Pincode : " + employees[emp].address.pin);
console.log("\r");
}