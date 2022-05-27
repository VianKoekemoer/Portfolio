var todayDate = document.getElementById("todaysdate");
var todoButton = document.getElementById("whattodo");

// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);

var thisMonth = document.getElementById("thismonth");
var monthTodoButton = document.getElementById("monthtodo");

monthTodoButton.addEventListener("click", displayMonthlyActivity);
// create a new Date object
var d = new Date();

// call the displayDate() function
displayDate();

function displayDate() {
    todayDate.innerHTML = d.toDateString();
}

function displayActivity() {
    // find out the day of the week.
    var dayOfWeek = d.getDay();

    /* set a variable, called youShould, with a different
       string based on what day of the week it is. */
    var youShould;

    switch (dayOfWeek) {
        case 0:
            youShould = "Just relax in bed";
            break;
        case 1:
            youShould = "Get up! Get to work!";
            break;
        case 2:
            youShould = "Just do it!";
            break;
        case 3:
            youShould = "Halfway there!";
            break;
        case 4:
            youShould = "Not Friday but still nice";
            break;
        case 5:
            youShould = "Enjoy this beautiful day";
            break;
        case 6:
            youShould = "Be active and get things done";
            break;
        default:
            youShould = "Hmm. This is not right";
            break;
    }

    // output the value of youShould into the thingToDo div    
    document.getElementById("thingToDo").innerHTML = youShould;
}

displayMonth();

function displayMonth(){
    var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    thisMonth.innerHTML = month[d.getMonth()]
}

function displayMonthlyActivity() {
    var monthTheYear = d.getMonth();

    /* set a variable, called youShould, with a different
       string based on what day of the week it is. */
    var youCan;

    switch (monthTheYear) {
        case 0:
            youCan = "Follow new year plan";
            break;
        case 1:
            youCan = "Month of love";
            break;
        case 2:
            youCan = "Year flying past";
            break;
        case 3:
            youCan = "April fools";
            break;
        case 4:
            youCan = "May you have a nice month";
            break;
        case 5:
            youCan = "halway there champ";
            break;
        case 6:
            youCan = "Not so cold now";
            break;
        case 7:
            youCan = "Lucky number 8";
            break;
        case 8:
            youCan = "Spring break time";
            break;
        case 9:
            youCan = "Halloween";
            break;
        case 10:
            youCan = "so close";
            break;
        case 11:
            youCan = "Mary Chistmas";
            break;
        default:
            youCan = "Hmm. Not a month";
            break;

    }

    // output the value of youCan into the thingToDo div    
    document.getElementById("thingToDoThisMonth").innerHTML = youCan;

}