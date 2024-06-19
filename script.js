var student ={
	name: "vishnu"
}
Object.prototype.getKeys=function() {
	return Object.keys(this);
}
console.log(student.getKeys())