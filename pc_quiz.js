
// document.getElementById("opt1").innerHTML = "Hello";
var n = 0;
// total no.of questions
var total_quest = 10;
// to count the corrected answers
var correct = 0;
// to count the wrong answers
var wrong = 0;

// initial call of switch case by manually
if(n == 0){
    re_c();
}

function score_count1() {
    
    correct += 1;
    document.getElementById("pc_score").innerHTML = correct;
    document.getElementById("opt1").style.backgroundColor = "green";
    document.getElementById("opt2").disabled = true;
    document.getElementById("opt3").disabled = true;
    document.getElementById("opt4").disabled = true;
}
function score_count2() {
    correct += 1;
    document.getElementById("pc_score").innerHTML = correct;
    document.getElementById("opt2").style.backgroundColor = "green";
    document.getElementById("opt1").disabled = true;
    document.getElementById("opt3").disabled = true;
    document.getElementById("opt4").disabled = true;
    
}
function score_count3() {
    correct += 1;
    document.getElementById("pc_score").innerHTML = correct;
    document.getElementById("opt3").style.backgroundColor = "green";
    document.getElementById("opt1").disabled = true;
    document.getElementById("opt2").disabled = true;
    document.getElementById("opt4").disabled = true;
}
function score_count4() {
    correct += 1;
    document.getElementById("pc_score").innerHTML = correct;
    document.getElementById("opt4").style.backgroundColor = "green";
    document.getElementById("opt1").disabled = true;
    document.getElementById("opt2").disabled = true;
    document.getElementById("opt3").disabled = true;
}
// score_cur-n() for count of wrongly answered questions
function score_cur1() {
    wrong += 1;
    // document.getElementById("pc_score").innerHTML = correct;
    document.getElementById("opt1").style.backgroundColor = "red";
    document.getElementById("opt2").disabled = true;
    document.getElementById("opt3").disabled = true;
    document.getElementById("opt4").disabled = true;
}
function score_cur2() {
    wrong += 1;
    // document.getElementById("pc_score").innerHTML = correct;
    document.getElementById("opt2").style.backgroundColor = "red";
    document.getElementById("opt1").disabled = true;
    document.getElementById("opt3").disabled = true;
    document.getElementById("opt4").disabled = true;
}
function score_cur3() {
    wrong += 1;
    // document.getElementById("pc_score").innerHTML = correct;
    document.getElementById("opt3").style.backgroundColor = "red";
    document.getElementById("opt1").disabled = true;
    document.getElementById("opt2").disabled = true;
    document.getElementById("opt4").disabled = true;
}
function score_cur4() {
    wrong += 1;
    // document.getElementById("pc_score").innerHTML = correct;
    document.getElementById("opt4").style.backgroundColor = "red";
    document.getElementById("opt1").disabled = true;
    document.getElementById("opt2").disabled = true;
    document.getElementById("opt3").disabled = true;
}

// for count next que button clicks & display count
function pc_ctr() {
    n += 1;
    reset_btn();
    re_c();
    document.getElementById("ds_ctr").innerHTML = "Count" + n ;
}

// to set the selected button
function reset_btn() {
    document.getElementById("opt1").style.backgroundColor = "white";
    document.getElementById("opt2").style.backgroundColor = "white";
    document.getElementById("opt3").style.backgroundColor = "white";
    document.getElementById("opt4").style.backgroundColor = "white";
    document.getElementById("opt1").disabled = false;
    document.getElementById("opt2").disabled = false;
    document.getElementById("opt3").disabled = false;
    document.getElementById("opt4").disabled = false;   
}

//code for timer 
var start_timer = new Date();
var end_timer = 900000;
// for(var i = )

//pc quiiz questions

function re_c() {
    switch(n) {
        case 0 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = " 1. Two pipes A and B can fill a cistern in 37(1/2) minutes and 45 minutes respectively. Both pipes are opened. The cistern will be filled in just half an hour, if the B is turned off after:";
            document.getElementById("opt1").innerHTML = "5 min.";
            document.getElementById("opt2").innerHTML = "9 min.";
            document.getElementById("opt3").innerHTML = "10 min.";
            document.getElementById("opt4").innerHTML = "15 min.";
            document.getElementById("opt1").addEventListener("click", score_cur1);
            document.getElementById("opt2").addEventListener("click", score_count2);
            document.getElementById("opt3").addEventListener("click", score_cur3);
            document.getElementById("opt4").addEventListener("click", score_cur4);
            break;
        case 1 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "2. Two pipes can fill a tank in 20 and 24 minutes respectively and a waste pipe can empty 3 gallons per minute. All the three pipes working together can fill the tank in 15 minutes. The capacity of the tank is:";
            document.getElementById("opt1").innerHTML = "60 gallons";
            document.getElementById("opt2").innerHTML = "100 gallons";
            document.getElementById("opt3").innerHTML = "120 gallons";
            document.getElementById("opt4").innerHTML = "180 gallons";
            document.getElementById("opt1").addEventListener("click", score_cur1);
            document.getElementById("opt2").addEventListener("click", score_cur2);
            document.getElementById("opt3").addEventListener("click", score_count3);
            document.getElementById("opt4").addEventListener("click", score_cur4);
            break;
        case 2 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "3. A tank is filled in 5 hours by three pipes A, B and C. The pipe C is twice as fast as B and B is twice as fast as A. How much time will pipe A alone take to fill the tank?";
            document.getElementById("opt1").innerHTML = "20 hours";
            document.getElementById("opt2").innerHTML = "25 hours";
            document.getElementById("opt3").innerHTML = "35 hours";
            document.getElementById("opt4").innerHTML = "Cannot be determined";
            document.getElementById("opt1").addEventListener("click", score_cur1);
            document.getElementById("opt2").addEventListener("click", score_cur2);
            document.getElementById("opt3").addEventListener("click", score_count3);
            document.getElementById("opt4").addEventListener("click", score_cur4);
            break;
        case 3 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "4. Two pipes A and B together can fill a cistern in 4 hours. Had they been opened separately, then B would have taken 6 hours more than A to fill the cistern. How much time will be taken by A to fill the cistern separately?";
            document.getElementById("opt1").innerHTML = "1 hour";
            document.getElementById("opt2").innerHTML = "2 hours";
            document.getElementById("opt3").innerHTML = "6 hours";
            document.getElementById("opt4").innerHTML = "8 hours";
            document.getElementById("opt1").addEventListener("click", score_cur1);
            document.getElementById("opt2").addEventListener("click", score_cur2);
            document.getElementById("opt3").addEventListener("click", score_count3);
            document.getElementById("opt4").addEventListener("click", score_cur4);
            break;
        case 4 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "5. Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both the pipes are used together, then how long will it take to fill the tank?";
            document.getElementById("opt1").innerHTML = "12 min";
            document.getElementById("opt2").innerHTML = "15 min";
            document.getElementById("opt3").innerHTML = "25 min";
            document.getElementById("opt4").innerHTML = "50 min";
            document.getElementById("opt1").addEventListener("click", score_count1);
            document.getElementById("opt2").addEventListener("click", score_cur2);
            document.getElementById("opt3").addEventListener("click", score_cur3);
            document.getElementById("opt4").addEventListener("click", score_cur4);
            break;
        case 5 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "6. Two pipes A and B can fill a tank in 15 minutes and 20 minutes respectively. Both the pipes are opened together but after 4 minutes, pipe A is turned off. What is the total time required to fill the tank?";
            document.getElementById("opt1").innerHTML = "10 min. 20 sec.";
            document.getElementById("opt2").innerHTML = "11 min. 45 sec.";
            document.getElementById("opt3").innerHTML = "12 min. 30 sec.";
            document.getElementById("opt4").innerHTML = "14 min. 40 sec.";
            document.getElementById("opt1").addEventListener("click", score_cur1);
            document.getElementById("opt2").addEventListener("click", score_cur2);
            document.getElementById("opt3").addEventListener("click", score_cur3);
            document.getElementById("opt4").addEventListener("click", score_count4);
            break;
        case 6 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "7. One pipe can fill a tank three times as fast as another pipe. If together the two pipes can fill the tank in 36 minutes, then the slower pipe alone will be able to fill the tank in:";
            document.getElementById("opt1").innerHTML = "81 min.";
            document.getElementById("opt2").innerHTML = "108 min.";
            document.getElementById("opt3").innerHTML = "144 min.";
            document.getElementById("opt4").innerHTML = "192 min.";
            document.getElementById("opt1").addEventListener("click", score_cur1);
            document.getElementById("opt2").addEventListener("click", score_cur2);
            document.getElementById("opt3").addEventListener("click", score_count3);
            document.getElementById("opt4").addEventListener("click", score_cur4);
            break;
        case 7 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "8. A tap can fill a tank in 6 hours. After half the tank is filled, three more similar taps are opened. What is the total time taken to fill the tank completely?";
            document.getElementById("opt1").innerHTML = "3 hrs 15 min";
            document.getElementById("opt2").innerHTML = "3 hrs 45 min";
            document.getElementById("opt3").innerHTML = "4 hrs";
            document.getElementById("opt4").innerHTML = "4 hrs 15 min";
            document.getElementById("opt1").addEventListener("click", score_cur1);
            document.getElementById("opt2").addEventListener("click", score_count2);
            document.getElementById("opt3").addEventListener("click", score_cur3);
            document.getElementById("opt4").addEventListener("click", score_cur4);
            break;
        case 8 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "9. Three pipes A, B and C can fill a tank in 6 hours. After working at it together for 2 hours, C is closed and A and B can fill the remaining part in 7 hours. The number of hours taken by C alone to fill the tank is:";
            document.getElementById("opt1").innerHTML = "10";
            document.getElementById("opt2").innerHTML = "12";
            document.getElementById("opt3").innerHTML = "14";
            document.getElementById("opt4").innerHTML = "16";
            document.getElementById("opt1").addEventListener("click", score_cur1);
            document.getElementById("opt2").addEventListener("click", score_cur2);
            document.getElementById("opt3").addEventListener("click", score_count3);
            document.getElementById("opt4").addEventListener("click", score_cur4);
            break;
        case 9 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("next_question").style.display = "none";
            document.getElementById("pc_quiz_submit").style.display = "block";
            document.getElementById("question").innerHTML = "10. A large tanker can be filled by two pipes A and B in 60 minutes and 40 minutes respectively. How many minutes will it take to fill the tanker from empty state if B is used for half the time and A and B fill it together for the other half?";
            document.getElementById("opt1").innerHTML = "15 min";
            document.getElementById("opt2").innerHTML = "20 min";
            document.getElementById("opt3").innerHTML = "27.5 min";
            document.getElementById("opt4").innerHTML = "30 min";
            document.getElementById("opt1").addEventListener("click", score_cur1);
            document.getElementById("opt2").addEventListener("click", score_cur2);
            document.getElementById("opt3").addEventListener("click", score_cur3);
            document.getElementById("opt4").addEventListener("click", score_count4);
            //case 9 code after submit then cal results
            break;
            
    
    }
}

function store_val(){
    //store correct & wrong values in local storage
    var res_correct = correct.toString();
    localStorage.setItem("res_correct", res_correct);
    var res_wrong = wrong.toString();
    localStorage.setItem("res_wrong", res_wrong);
}

// script to calculate timer for quiz
var rem_time = 902000;
var stop;
function s(){
	stop = setInterval(d, 1000);
    if(rem_time >= 1000){
		setTimeout(d, 1000);
        rem_time -= 1000;
        function d(){
			document.getElementById("timer").innerHTML = "Time : " + "<b>" + "00:" + Math.round(((rem_time / 1000) / 60)) + "</b>";
            // store current time taken in local storage
            var s = Math.round(((rem_time / 1000) / 60));
            s = 15 - s;
            var time_taken = s.toString() ;
            localStorage.setItem("total_time", time_taken);
            // console.log(rem_time) ;
            }
		}else{
			var stop = setInterval(d, 1000);
            clearInterval(stop);
        }
    }
setInterval(s, 1000);