var cikl = [];
function task() {
  var n;
  var name;
  n = prompt("Введите количество записей");
  for (var i = 0; i < n; i++) {
    name = prompt("Введите " + (i+1) + " имя");
	cikl.push(name);
  }
  console.log(cikl);
}