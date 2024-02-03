var tips = ["Take breaks during study sessions to stay refreshed.",
			  "Create a study schedule and stick to it.",
			  "Use mnemonic devices to remember information.",
			  "Teach the material to someone else to reinforce learning.",
			  "Practice active reading by summarizing key points.",
			  "Stay organized with notes and materials.",
			  "Join study groups to discuss and reinforce concepts.",
			  "Get a good night's sleep before exams.",
			  "Use flashcards for quick review.",
			  "Stay hydrated and maintain a healthy lifestyle for better focus.",
			  "Use online resources and educational apps to supplement learning.",
			  "Set realistic goals for each study session."];
function randomTip() {
  var random = Math.floor(Math.random() * tips.length);
  var tip = tips[random];
  document.getElementById("tipdisplay").innerHTML = tip;
}

let pomodoro = document.getElementById("25");

  let short = document.getElementById("short-timer");
  let long = document.getElementById("long-timer");
  let cTimer = null;

  function showDefaultTimer() {
    pomodoro.style.display = "block";
    short.style.display = "none";
    long.style.display = "none";
  }

  showDefaultTimer();

  function hideAll() {
    let timers = document.querySelectorAll(".timer-display");
    timers.forEach((timer) => (timer.style.display = "none"));
  }

  document
    .getElementById("pomodoro-session")
    .addEventListener("click", function () {
      hideAll();

      pomodoro.style.display = "block";
      cTimer = pomodoro;
    });
  document
    .getElementById("short-break")
    .addEventListener("click", function () {
      hideAll();

      short.style.display = "block";
      cTimer = short;
    });
  document
    .getElementById("long-break")
    .addEventListener("click", function () {
      hideAll();

      long.style.display = "block";
      cTimer = long;
    });

  let timeRange = null;

  function startTimer(timerdisplay) {
    if (timeRange) {
      clearInterval(timeRange);
    }

    timerDuration = timerdisplay
      .getAttribute("data-duration")
      .split(":")[0];
    console.log(timerDuration);

    let milliseconds = timerDuration * 60 * 1000;
    let recordTime = Date.now() + milliseconds;

    timeRange = setInterval(function () {
      const timeRemaining = new Date(recordTime - Date.now());
      if (timeRemaining<=0){
        clearInterval(timeRange);
        return "Time finished";

      } else {
        const minutes = timeRemaining.getMinutes();
        const seconds = Math.floor(timeRemaining / 1000) % 60;
        const formattedTime = `${minutes}:${seconds}`;
        console.log(formattedTime);
        timerdisplay.innerHTML = formattedTime;
        
      }
    }, 1000);
  }

  document.getElementById("start").addEventListener("click", function () {
    if (cTimer) {
        startTimer(cTimer);
        document.getElementById("timer-message").style.display = "none"; 
    } else {
        document.getElementById("timer-message").style.display = "block";
    }
});

  document.getElementById("stop").addEventListener("click", function () {
    if (cTimer) {
      clearInterval(timeRange);
    }
  });

  document.getElementById("start").addEventListener("click", function () {
    if (cTimer) {
        startTimer(cTimer);
        document.getElementById("timer-message").style.display = "none"; 
    } else {
        document.getElementById("timer-message").style.display = "block";
    }
});

  document.getElementById("stop").addEventListener("click", function () {
    if (cTimer) {//stop the timer when clicking 'stop'
      clearInterval(timeRange);
    }
  });


document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}

var category = 'happiness'
$.ajax({
	method: 'GET',
	url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
	headers: { 'X-Api-Key': '13l78fq1f0aQm//Cccj9Pg==dwlFKVpxWXnWWiHk'},
	contentType: 'application/json',
	success: function(result) {
		console.log(result);
	},
	error: function ajaxError(jqXHR) {
		console.error('Error: ', jqXHR.responseText);
	}
});