let req = prompt("Enter which task you want");
let todo = [];

while (true) {
  if (req === "quit") {
    console.log("breaking App");
    break;
  }
  if (req === "list") {
    console.log("------------");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("----------");
  } else if (req === "add") {
    let task = prompt("Enter data");
    todo.push(task);
    console.log("task Added");
  } else if (req === "delete") {
    let idx = prompt("please inter the task indx");
    todo.splice(idx, 1);
    console.log("task deleted");
  } else {
    console.log("Wrong request");
  }
  req = prompt("Enter which task you want");
}
