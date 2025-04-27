const fs = require('fs');
const path = require('path');

//obtain paths to status.txt and pipe.txt
const statusPath = path.join(__dirname, 'status.txt');
const pipePath = path.join(__dirname, 'pipe.txt');

let tasks = [
    {
        "do": "2024-01-03",
        "task": "task 3"
    },
    {
        "do": "2024-01-02",
        "task": "task 2"
    },
    {
        "do": "2024-01-01",
        "task": "task 1"
    }
]

console.log("Tasks before sorting:\n", tasks);
console.log("Writing unsorted tasks to pipe.txt...\n")
console.log("Writing \"ready\" to status.txt...");

//write tasks to pipe.txt
fs.writeFileSync(pipePath, JSON.stringify(tasks));

//write ready to status.txt
fs.writeFileSync(statusPath, 'ready');

//wait for status.txt to contain "done"
console.log("Waiting for status.txt to contain \"done\"...");
let status = fs.readFileSync(statusPath, 'utf8');
while(status != "done"){
    status = fs.readFileSync(statusPath, 'utf8');
}

//once status.txt contains "done"
//pipe.txt should contain sorted tasks
let pipe = fs.readFileSync(pipePath, 'utf8'); //read in tasks
let sortedTasks = JSON.parse(pipe); //JSONify tasks

console.log("Received sorted tasks from pipe.txt:\n", sortedTasks);