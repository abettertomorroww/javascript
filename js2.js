var db = [];
var uniqueId = 0;

document.addEventListener("DOMContentLoaded", function () {
  	document.getElementById("createuser").addEventListener("click", createuserByText);
	document.getElementById("createuser").addEventListener("click", putLastInCombobox);
	document.getElementById("removeuser").addEventListener("click", removeuserByCombo);
});

function createuserByText(event) {
    var name = document.getElementById('name').value;
    createPerson(name);
}


function putLastInCombobox(event) {
    var user = db[db.length-1];
	var box = document.getElementById("list");
	var option = document.createElement("option");
	option.value = user.id;
	option.text = user.name;
	box.add(option);
}

function removeuserByCombo(event) {
	var list = document.getElementById("list");
	var id = list.value;
	list.remove(list.selectedIndex);
	removePerson(id);
}

function createPerson(name) {
	var user = {};
	user.id = uniqueId;
	user.name = name;
	uniqueId++;
	db.push(user);
	return user;
}

function printuser(id) {
	formatPrint(db.find(function (user) {
		if (user.id == id)
			return user;
		}))
}

function removeuser(id) {
	var index = db.findIndex(function (user) {
		if (user.id == id)
		return true;
	});
	db.splice(index, 1);
}

function formatPrint(user) {
	console.log("id:" + user.id + " name:" + user.name);
}

function printList() {
	db.forEach(function (user) {
		formatPrint(user);  
	});
}