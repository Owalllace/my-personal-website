const ellmnt = document.getElementById("date");
const startDate = "10/15/2023";
var todaysDate = Date.now;

function datediff(first, second) {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
}
function calculateDateDifference(startDate) {
    const startDateObject = new Date(startDate);
    const todaysDateObject = new Date();
    const timeDifference = todaysDateObject - startDateObject;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 *24));
    return daysDifference;
}
function dateDisplay(e) {
    e.classList.add("change");
    ellmnt.innerText = "Days: " + calculateDateDifference(startDate);
}
function dateRemove(e) {
    e.classList.remove("change");
    ellmnt.innerText = "";
}
