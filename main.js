
// get today's date, split it into an array to get the right order and format
let date = new Date();

var day = date.getDay();
var dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

let stringDate = date.toDateString();
let splitDate = stringDate.split(" ");
let newDateFormat = dayList[day] + " " + splitDate[2] + " of " + splitDate[1] + " " + splitDate[3];
document.getElementById('date').innerHTML = "Today is " + newDateFormat;

// get time
  var hour = date.getHours();
  var minute = date.getMinutes();
  var prepand = (hour >= 12)? " PM ":" AM ";
  
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';
  } 
  else
  { 
  hour=12;
  prepand=' PM';
  } 
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  } 

// console.log(hour + "." + minute + " " + prepand );
let newTimeFormat = hour + "." + minute + " " + prepand;
document.getElementById('time').innerHTML = newTimeFormat;


// tasks
var tasks = [
    {   
        "id": 1,
        "day": "Monday",
        "time": "08:00",
        "description": "Laugh to Your Heart’s Content" 
    },
    {   
        "id": 2,
        "day": "Monday",
        "time": "11:00",
        "description": "Dance Like No One’s Watching" 
    },
    {   
        "id": 3,
        "day": "Monday",
        "time": "16:00",
        "description": "Make Dinner for homeless guy" 
    },
    {   
        "id": 4,
        "day": "Tuesday",
        "time": "07:00",
        "description": "Change Your Morning Routine" 
    },
    {   
        "id": 5,
        "day": "Tuesday",
        "time": "10:00",
        "description": "Go People Watching" 
    },
    {   
        "id": 6,
        "day": "Tuesday",
        "time": "18:00",
        "description": "Do Something Stupid" 
    },
    {   
        "id": 7,
        "day": "Wednesday",
        "time": "08:00",
        "description": "Sing in the Shower" 
    },
    {   
        "id": 8,
        "day": "Wednesday",
        "time": "13:00",
        "description": "Listen to Nature Sounds" 
    },
    {   
        "id": 9,
        "day": "Wednesday",
        "time": "15:00",
        "description": "Join a Club" 
    },
    {   
        "id": 10,
        "day": "Thursday",
        "time": "06:00",
        "description": "Strike a Pose" 
    },
    {   
        "id": 11,
        "day": "Thursday",
        "time": "09:00",
        "description": " Challenge Yourself" 
    },
    {   
        "id": 12,
        "day": "Thursday",
        "time": "20:00",
        "description": "Reconnect with an Old Friend" 
    },
    {   
        "id": 13,
        "day": "Friday",
        "time": "09:00",
        "description": "Learn a Joke" 
    },
    {   
        "id": 14,
        "day": "Friday",
        "time": "12:00",
        "description": "Become an Expert" 
    },
    {   
        "id": 15,
        "day": "Friday",
        "time": "19:00",
        "description": "Take a Class" 
    },
    {   
        "id": 16,
        "day": "Saturday",
        "time": "07:00",
        "description": "Change Your Look" 
    },
    {   
        "id": 17,
        "day": "Saturday",
        "time": "12:00",
        "description": "Excite Your Palate" 
    },
    {   
        "id": 18,
        "day": "Saturday",
        "time": "21:00",
        "description": "Begin a Diary" 
    },
    {   
        "id": 19,
        "day": "Sunday",
        "time": "10:00",
        "description": "Embrace Your Curiosity" 
    },
    {   
        "id": 20,
        "day": "Sunday",
        "time": "11:00",
        "description": "Pretend to Be a Tourist" 
    },
    {   
        "id": 21,
        "day": "Sunday",
        "time": "17:00",
        "description": "Drive Away with No Destination in Mind" 
    }
]


//looping through the tasks to find where today's day = task's day
for ( i = 0; i < tasks.length ; i++ ){
    if(tasks[i].day === dayList[day]){

        var taskTime = tasks[i].time;
        var taskDesc = tasks[i].description;
//creating a template for tasks
        var todayTemp = '<div></div>'
//adding each task into the template
        $('#todayTasks').append(todayTemp).append(taskTime + " : " + taskDesc)
    }

}


for ( i = 0; i < tasks.length ; i++ ){
    // tomorrow's tasks - adding +1 to today's day
    if(tasks[i].day === dayList[day+1]){
        var taskTime = tasks[i].time;
        var taskDesc = tasks[i].description;
//creating a template for tasks
        var nextTemp = '<div></div>'
//adding each task into the tmeplate
        $('#upcomingTasks').append(nextTemp).append(taskTime + " : " + taskDesc)
    }

}



// changing the title
document.getElementById("btnTitle").addEventListener("click", function(){
    let newTitle = document.getElementById('title').value;
    document.title = newTitle;
  });

//change colors

function changeColor(el) {
    document.body.style.backgroundColor = el.value;
  }
/* 
document.getElementById("btnNewTask").addEventListener("click", function(){
    let newTask = document.getElementById('newTask').value;

    document.getElementById('upcomingTasks').innerHTML = newTask;
  });
*/



  





