tasks = [
    {"id":1707450491497,"name":"Last","due":"2024-02-12","do":"2027-02-08","done":false},
    {"id":1707450689554,"name":"Second","due":"0001-01-01","do":"2026-02-02","done":false},
    {"id":1707450689554,"name":"First","due":"0001-01-01","do":"2026-02-01","done":false}
]

//print tasks before sorting
console.log("Before sorting")
console.log(tasks);

//function to sort tasks by "do" field
function sortByDate(a, b) {
    const dateA = new Date(a.do);
    const dateB = new Date(b.do);
    return dateA - dateB;
}

//sort
tasks.sort(sortByDate);
console.log("After sorting")
console.log(tasks);