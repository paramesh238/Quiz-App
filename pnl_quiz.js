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
    
    correct++;
    document.getElementById("pc_score").innerHTML = correct;
    document.getElementById("opt1").style.backgroundColor = "green";
    document.getElementById("opt2").disabled = true;
    document.getElementById("opt3").disabled = true;
    document.getElementById("opt4").disabled = true;
}
function score_count2() {
    correct++;
    document.getElementById("pc_score").innerHTML = correct;
    document.getElementById("opt2").style.backgroundColor = "green";
    document.getElementById("opt1").disabled = true;
    document.getElementById("opt3").disabled = true;
    document.getElementById("opt4").disabled = true;
    
}
function score_count3() {
    correct++;
    document.getElementById("pc_score").innerHTML = correct;
    document.getElementById("opt3").style.backgroundColor = "green";
    document.getElementById("opt1").disabled = true;
    document.getElementById("opt2").disabled = true;
    document.getElementById("opt4").disabled = true;
}
function score_count4() {
    correct++;
    document.getElementById("pc_score").innerHTML = correct;
    document.getElementById("opt4").style.backgroundColor = "green";
    document.getElementById("opt1").disabled = true;
    document.getElementById("opt2").disabled = true;
    document.getElementById("opt3").disabled = true;
}
// score_cur-n() for count of wrongly answered questions
function score_cur1() {
    wrong++;
    document.getElementById("pc_score").innerHTML = correct;
    document.getElementById("opt1").style.backgroundColor = "red";
    document.getElementById("opt2").disabled = true;
    document.getElementById("opt3").disabled = true;
    document.getElementById("opt4").disabled = true;
}
function score_cur2() {
    wrong++;
    document.getElementById("pc_score").innerHTML = correct;
    document.getElementById("opt2").style.backgroundColor = "red";
    document.getElementById("opt1").disabled = true;
    document.getElementById("opt3").disabled = true;
    document.getElementById("opt4").disabled = true;
}
function score_cur3() {
    wrong++;
    document.getElementById("pc_score").innerHTML = correct;
    document.getElementById("opt3").style.backgroundColor = "red";
    document.getElementById("opt1").disabled = true;
    document.getElementById("opt2").disabled = true;
    document.getElementById("opt4").disabled = true;
}
function score_cur4() {
    wrong++;
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

//pc quiz questions

// profit and loss quiz questions

function re_c() {
    switch(n) {
        case 0 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "1. The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:";
            document.getElementById("opt1").innerHTML = "15";
            document.getElementById("opt2").innerHTML = "16";
            document.getElementById("opt3").innerHTML = "18";
            document.getElementById("opt4").innerHTML = "25";
            document.getElementById("opt1").addEventListener("click", score_cur1);
            document.getElementById("opt2").addEventListener("click", score_count2);
            document.getElementById("opt3").addEventListener("click", score_cur3);
            document.getElementById("opt4").addEventListener("click", score_cur4);
            break;
        case 1 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "2. In a certain store, the profit is 320% of the cost. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is the profit?";
            document.getElementById("opt1").innerHTML = "30%";
            document.getElementById("opt2").innerHTML = "70%";
            document.getElementById("opt3").innerHTML = "100%";
            document.getElementById("opt4").innerHTML = "250%";
            document.getElementById("opt1").addEventListener("click", score_cur1);
            document.getElementById("opt2").addEventListener("click", score_count2);
            document.getElementById("opt3").addEventListener("click", score_cur3);
            document.getElementById("opt4").addEventListener("click", score_cur4);
            break;
        case 2 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "3. A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?";
            document.getElementById("opt1").innerHTML = "3";
            document.getElementById("opt2").innerHTML = "4";
            document.getElementById("opt3").innerHTML = "5";
            document.getElementById("opt4").innerHTML = "6";
            document.getElementById("opt1").addEventListener("click", score_cur1);
            document.getElementById("opt2").addEventListener("click", score_cur2);
            document.getElementById("opt3").addEventListener("click", score_count3);
            document.getElementById("opt4").addEventListener("click", score_cur4);
            break;
        case 3 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "4. A man buys a cycle for Rs. 1400 and sells it at a loss of 15%. What is the selling price of the cycle?";
            document.getElementById("opt1").innerHTML = "1090";
            document.getElementById("opt2").innerHTML = "1160";
            document.getElementById("opt3").innerHTML = "1190";
            document.getElementById("opt4").innerHTML = "1202";
            document.getElementById("opt1").addEventListener("click", score_cur1);
            document.getElementById("opt2").addEventListener("click", score_cur2);
            document.getElementById("opt3").addEventListener("click", score_count3);
            document.getElementById("opt4").addEventListener("click", score_cur4);
            break;
        case 4 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "5. Sam purchased 20 dozens of toys at the rate of Rs. 375 per dozen. He sold each one of them at the rate of Rs. 33. What was his percentage profit?";
            document.getElementById("opt1").innerHTML = "3.5";
            document.getElementById("opt2").innerHTML = "4.5";
            document.getElementById("opt3").innerHTML = "5.6";
            document.getElementById("opt4").innerHTML = "6.5";
            document.getElementById("opt1").addEventListener("click", score_cur1);
            document.getElementById("opt2").addEventListener("click", score_cur2);
            document.getElementById("opt3").addEventListener("click", score_count3);
            document.getElementById("opt4").addEventListener("click", score_cur4);
            break;
        case 5 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "6. On selling 17 balls at Rs. 720, there is a loss equal to the cost price of 5 balls. The cost price of a ball is:";
            document.getElementById("opt1").innerHTML = "45";
            document.getElementById("opt2").innerHTML = "50";
            document.getElementById("opt3").innerHTML = "55";
            document.getElementById("opt4").innerHTML = "60";
            document.getElementById("opt1").addEventListener("click", score_cur1);
            document.getElementById("opt2").addEventListener("click", score_cur2);
            document.getElementById("opt3").addEventListener("click", score_cur3);
            document.getElementById("opt4").addEventListener("click", score_count4);
            break;
        case 6 :document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "7. When a plot is sold for Rs. 18,700, the owner loses 15%. At what price must that plot be sold in order to gain 15%? ";
            document.getElementById("opt1").innerHTML = "21,000";
            document.getElementById("opt2").innerHTML = "22,500";
            document.getElementById("opt3").innerHTML = "25,300";
            document.getElementById("opt4").innerHTML = "25,800";
            document.getElementById("opt1").addEventListener("click", score_cur1);
            document.getElementById("opt2").addEventListener("click", score_cur2);
            document.getElementById("opt3").addEventListener("click", score_count3);
            document.getElementById("opt4").addEventListener("click", score_cur4);
            break;
        case 7 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "8. A trader mixes 26 kg of rice at Rs. 20 per kg with 30 kg of rice of other variety at Rs. 36 per kg and sells the mixture at Rs. 30 per kg. His profit percent is:";
            document.getElementById("opt1").innerHTML = "No profit, no loss";
            document.getElementById("opt2").innerHTML = "5%";
            document.getElementById("opt3").innerHTML = "8%";
            document.getElementById("opt4").innerHTML = "10%";
            document.getElementById("opt1").addEventListener("click", score_cur1);
            document.getElementById("opt2").addEventListener("click", score_count2);
            document.getElementById("opt3").addEventListener("click", score_cur3);
            document.getElementById("opt4").addEventListener("click", score_cur4);
            break;
        case 8 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "9. A trader sells 85 m of cloth for Rs. 8,925 at the profit of Rs. 15/m of cloth. What is the cost price of 1 m of cloth?";
            document.getElementById("opt1").innerHTML = "Rs.84";
            document.getElementById("opt2").innerHTML = "Rs.90";
            document.getElementById("opt3").innerHTML = "Rs.96";
            document.getElementById("opt4").innerHTML = "Rs.102";
            document.getElementById("opt1").addEventListener("click", score_cur1);
            document.getElementById("opt2").addEventListener("click", score_count2);
            document.getElementById("opt3").addEventListener("click", score_cur3);
            document.getElementById("opt4").addEventListener("click", score_cur4);
            break;
        case 9 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("next_question").style.display = "none";
            document.getElementById("pc_quiz_submit").style.display = "block";
            document.getElementById("question").innerHTML = "10. By selling an article at Rs. 800, a shopkeeper makes a profit of 25%. At what price should he sell the article so as to make a loss of 25%?";
            document.getElementById("opt1").innerHTML = "Rs.460";
            document.getElementById("opt2").innerHTML = "Rs.480";
            document.getElementById("opt3").innerHTML = "Rs.500";
            document.getElementById("opt4").innerHTML = "Rs.520";
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