obj = {
	name: 'Akash',
	age: 20,
	college: 'SRMIST',
	print: () => {
		console.log(obj.name);
		console.log(obj.age);
		console.log(obj.college);
	},
	Gender: 'Male',
};
obj.print();
obj.age = 21; // pass/call by reference
obj.print();
console.log(obj['Gender']);
const key = 'Gender';
console.log(obj[key]); // because it is variable there are no single/double quotes
