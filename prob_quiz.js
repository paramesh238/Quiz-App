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
    correct += 1;;
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
    document.getElementById("pc_score").innerHTML = correct;
    document.getElementById("opt1").style.backgroundColor = "red";
    document.getElementById("opt2").disabled = true;
    document.getElementById("opt3").disabled = true;
    document.getElementById("opt4").disabled = true;
}
function score_cur2() {
    wrong += 1;
    document.getElementById("pc_score").innerHTML = correct;
    document.getElementById("opt2").style.backgroundColor = "red";
    document.getElementById("opt1").disabled = true;
    document.getElementById("opt3").disabled = true;
    document.getElementById("opt4").disabled = true;
}
function score_cur3() {
    wrong += 1;
    document.getElementById("pc_score").innerHTML = correct;
    document.getElementById("opt3").style.backgroundColor = "red";
    document.getElementById("opt1").disabled = true;
    document.getElementById("opt2").disabled = true;
    document.getElementById("opt4").disabled = true;
}
function score_cur4() {
    wrong += 1;
    document.getElementById("pc_score").innerHTML = correct;
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

// probability quiz questions

function re_c() {
    switch(n) {
        case 0 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "1. Tickets numbered 1 to 20 are mixed up and then a ticket is drawn at random. What is the probability that the ticket drawn has a number which is a multiple of 3 or 5?";
            document.getElementById("opt1").innerHTML = "1/2";
            document.getElementById("opt2").innerHTML = "2/5";
            document.getElementById("opt3").innerHTML = "8/15";
            document.getElementById("opt4").innerHTML = "9/20";
            document.getElementById("opt1").addEventListener("click", score_cur1);
            document.getElementById("opt2").addEventListener("click", score_cur2);
            document.getElementById("opt3").addEventListener("click", score_cur3);
            document.getElementById("opt4").addEventListener("click", score_count4);
            break;
        case 1 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "2. A bag contains 2 red, 3 green and 2 blue balls. Two balls are drawn at random. What is the probability that none of the balls drawn is blue?";
            document.getElementById("opt1").innerHTML = "10/21";
            document.getElementById("opt2").innerHTML = "11/21";
            document.getElementById("opt3").innerHTML = "2/7";
            document.getElementById("opt4").innerHTML = "5/7";
            document.getElementById("opt1").addEventListener("click", score_count1);
            document.getElementById("opt2").addEventListener("click", score_cur2);
            document.getElementById("opt3").addEventListener("click", score_cur3);
            document.getElementById("opt4").addEventListener("click", score_cur4);
            break;
        case 2 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "3. In a box, there are 8 red, 7 blue and 6 green balls. One ball is picked up randomly. What is the probability that it is neither red nor green?";
            document.getElementById("opt1").innerHTML = "1/3";
            document.getElementById("opt2").innerHTML = "3/4";
            document.getElementById("opt3").innerHTML = "7/21";
            document.getElementById("opt4").innerHTML = "9/21";
            document.getElementById("opt1").addEventListener("click", score_count1);
            document.getElementById("opt2").addEventListener("click", score_cur2);
            document.getElementById("opt3").addEventListener("click", score_cur3);
            document.getElementById("opt4").addEventListener("click", score_cur4);
            break;
        case 3 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "4. What is the probability of getting a sum 9 from two throws of a dice?";
            document.getElementById("opt1").innerHTML = "1/6";
            document.getElementById("opt2").innerHTML = "1/8";
            document.getElementById("opt3").innerHTML = "1/9";
            document.getElementById("opt4").innerHTML = "1/12";
            document.getElementById("opt1").addEventListener("click", score_cur1);
            document.getElementById("opt2").addEventListener("click", score_cur2);
            document.getElementById("opt3").addEventListener("click", score_count3);
            document.getElementById("opt4").addEventListener("click", score_cur4);
            break;
        case 4 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "5. Three unbiased coins are tossed. What is the probability of getting at most two heads?";
            document.getElementById("opt1").innerHTML = "3/4";
            document.getElementById("opt2").innerHTML = "1/4";
            document.getElementById("opt3").innerHTML = "3/8";
            document.getElementById("opt4").innerHTML = "7/8";
            document.getElementById("opt1").addEventListener("click", score_cur1);
            document.getElementById("opt2").addEventListener("click", score_cur2);
            document.getElementById("opt3").addEventListener("click", score_cur3);
            document.getElementById("opt4").addEventListener("click", score_count4);
            break;
        case 5 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "6. Two dice are thrown simultaneously. What is the probability of getting two numbers whose product is even?";
            document.getElementById("opt1").innerHTML = "1/2";
            document.getElementById("opt2").innerHTML = "3/4";
            document.getElementById("opt3").innerHTML = "3/8";
            document.getElementById("opt4").innerHTML = "5/16";
            document.getElementById("opt1").addEventListener("click", score_cur1);
            document.getElementById("opt2").addEventListener("click", score_count2);
            document.getElementById("opt3").addEventListener("click", score_cur3);
            document.getElementById("opt4").addEventListener("click", score_cur4);
            break;
        case 6 :
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "7. In a class, there are 15 boys and 10 girls. Three students are selected at random. The probability that 1 girl and 2 boys are selected, is:";
            document.getElementById("opt1").innerHTML = "21/46";
            document.getElementById("opt2").innerHTML = "25/117";
            document.getElementById("opt3").innerHTML = "1/50";
            document.getElementById("opt4").innerHTML = "3/25";
            document.getElementById("opt1").addEventListener("click", score_count1);
            document.getElementById("opt2").addEventListener("click", score_cur2);
            document.getElementById("opt3").addEventListener("click", score_cur3);
            document.getElementById("opt4").addEventListener("click", score_cur4);
            break;
        case 7 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "8. In a lottery, there are 10 prizes and 25 blanks. A lottery is drawn at random. What is the probability of getting a prize?";
            document.getElementById("opt1").innerHTML = "1/10";
            document.getElementById("opt2").innerHTML = "2/5";
            document.getElementById("opt3").innerHTML = "2/7";
            document.getElementById("opt4").innerHTML = "5/7";
            document.getElementById("opt1").addEventListener("click", score_cur1);
            document.getElementById("opt2").addEventListener("click", score_cur2);
            document.getElementById("opt3").addEventListener("click", score_count3);
            document.getElementById("opt4").addEventListener("click", score_cur4);
            break;
        case 8 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "9. From a pack of 52 cards, two cards are drawn together at random. What is the probability of both the cards being kings?";
            document.getElementById("opt1").innerHTML = "1/15";
            document.getElementById("opt2").innerHTML = "25/57";
            document.getElementById("opt3").innerHTML = "35/256";
            document.getElementById("opt4").innerHTML = "1/221";
            document.getElementById("opt1").addEventListener("click", score_cur1);
            document.getElementById("opt2").addEventListener("click", score_cur2);
            document.getElementById("opt3").addEventListener("click", score_cur3);
            document.getElementById("opt4").addEventListener("click", score_count4);
            break;
        case 9 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("next_question").style.display = "none";
            document.getElementById("pc_quiz_submit").style.display = "block";
            document.getElementById("question").innerHTML = "10. Two dice are tossed. The probability that the total score is a prime number is:";
            document.getElementById("opt1").innerHTML = "1/6";
            document.getElementById("opt2").innerHTML = "5/12";
            document.getElementById("opt3").innerHTML = "1/2";
            document.getElementById("opt4").innerHTML = "7/9";
            document.getElementById("opt1").addEventListener("click", score_cur1);
            document.getElementById("opt2").addEventListener("click", score_count2);
            document.getElementById("opt3").addEventListener("click", score_cur3);
            document.getElementById("opt4").addEventListener("click", score_cur4);
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
			document.getElementById("timer").innerHTML = "Time : " + "<b>" +"00:" + Math.round(((rem_time / 1000) / 60)) + "</b>";
            // store current time taken in local storage
            var s = Math.round(((rem_time / 1000) / 60));
            s = 15 - s;
            var time_taken = s.toString();
            localStorage.setItem("total_time", time_taken);
            // console.log(rem_time) ;
            }
		}else{
			var stop = setInterval(d, 1000);
            clearInterval(stop);
        }
    }
setInterval(s, 1000);