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
// for(var i = )

//pc quiz questions

// age calculation quiz questions

function re_c() {
    switch(n) {
        case 0 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "1. The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?";
            document.getElementById("opt1").innerHTML = "4 years";
            document.getElementById("opt2").innerHTML = "8 years";
            document.getElementById("opt3").innerHTML = "10 years";
            document.getElementById("opt4").innerHTML = "None of these";
            document.getElementById("opt1").addEventListener("click", score_count1);
            document.getElementById("opt2").addEventListener("click", score_cur2);
            document.getElementById("opt3").addEventListener("click", score_cur3);
            document.getElementById("opt4").addEventListener("click", score_cur4);
            break;
        case 1 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "2. A father said to his son, 'I was as old as you are at the present at the time of your birth'. If the father's age is 38 years now, the son's age five years back was:";
            document.getElementById("opt1").innerHTML = "14 years";
            document.getElementById("opt2").innerHTML = "19 years";
            document.getElementById("opt3").innerHTML = "33 years";
            document.getElementById("opt4").innerHTML = "38 years";
            document.getElementById("opt1").addEventListener("click", score_count1);
            document.getElementById("opt2").addEventListener("click", score_cur2);
            document.getElementById("opt3").addEventListener("click", score_cur3);
            document.getElementById("opt4").addEventListener("click", score_cur4);
            break;
        case 2 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "3. A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?";
            document.getElementById("opt1").innerHTML = "7";
            document.getElementById("opt2").innerHTML = "8";
            document.getElementById("opt3").innerHTML = "9";
            document.getElementById("opt4").innerHTML = "10";
            document.getElementById("opt1").addEventListener("click", score_cur1);
            document.getElementById("opt2").addEventListener("click", score_cur2);
            document.getElementById("opt3").addEventListener("click", score_cur3);
            document.getElementById("opt4").addEventListener("click", score_count4);
            break;
        case 3 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "4. Present ages of Sameer and Anand are in the ratio of 5 : 4 respectively. Three years hence, the ratio of their ages will become 11 : 9 respectively. What is Anand's present age in years?";
            document.getElementById("opt1").innerHTML = "24";
            document.getElementById("opt2").innerHTML = "27";
            document.getElementById("opt3").innerHTML = "40";
            document.getElementById("opt4").innerHTML = "Cannot be determined";
            document.getElementById("opt1").addEventListener("click", score_count1);
            document.getElementById("opt2").addEventListener("click", score_cur2);
            document.getElementById("opt3").addEventListener("click", score_cur3);
            document.getElementById("opt4").addEventListener("click", score_cur4);
            break;
        case 4 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "5. A man is 24 years older than his son. In two years, his age will be twice the age of his son. The present age of his son is:";
            document.getElementById("opt1").innerHTML = "14 years";
            document.getElementById("opt2").innerHTML = "22 years";
            document.getElementById("opt3").innerHTML = "18 years";
            document.getElementById("opt4").innerHTML = "20 years";
            document.getElementById("opt1").addEventListener("click", score_cur1);
            document.getElementById("opt2").addEventListener("click", score_count2);
            document.getElementById("opt3").addEventListener("click", score_cur3);
            document.getElementById("opt4").addEventListener("click", score_cur4);
            break;
        case 5 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "6. Six years ago, the ratio of the ages of Kunal and Sagar was 6 : 5. Four years hence, the ratio of their ages will be 11 : 10. What is Sagar's age at present?";
            document.getElementById("opt1").innerHTML = "16 years";
            document.getElementById("opt2").innerHTML = "18 years";
            document.getElementById("opt3").innerHTML = "20 years";
            document.getElementById("opt4").innerHTML = "Cannot be determined";
            document.getElementById("opt1").addEventListener("click", score_count1);
            document.getElementById("opt2").addEventListener("click", score_cur2);
            document.getElementById("opt3").addEventListener("click", score_cur3);
            document.getElementById("opt4").addEventListener("click", score_cur4);
            break;
        case 6 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "7. The sum of the present ages of a father and his son is 60 years. Six years ago, father's age was five times the age of the son. After 6 years, son's age will be:";
            document.getElementById("opt1").innerHTML = "12 years";
            document.getElementById("opt2").innerHTML = "14 years";
            document.getElementById("opt3").innerHTML = "18 years";
            document.getElementById("opt4").innerHTML = "20 years";
            document.getElementById("opt1").addEventListener("click", score_cur1);
            document.getElementById("opt2").addEventListener("click", score_cur2);
            document.getElementById("opt3").addEventListener("click", score_cur3);
            document.getElementById("opt4").addEventListener("click", score_count4);
            break;
        case 7 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "8. At present, the ratio between the ages of Arun and Deepak is 4 : 3. After 6 years, Arun's age will be 26 years. What is the age of Deepak at present ?";
            document.getElementById("opt1").innerHTML = "12 years";
            document.getElementById("opt2").innerHTML = "15 years";
            document.getElementById("opt3").innerHTML = "19 and half";
            document.getElementById("opt4").innerHTML = "21 years";
            document.getElementById("opt1").addEventListener("click", score_cur1);
            document.getElementById("opt2").addEventListener("click", score_count2);
            document.getElementById("opt3").addEventListener("click", score_cur3);
            document.getElementById("opt4").addEventListener("click", score_cur4);
            break;
        case 8 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("pc_quiz_submit").style.display = "none";
            document.getElementById("question").innerHTML = "9. Ayesha's father was 38 years of age when she was born while her mother was 36 years old when her brother four years younger to her was born. What is the difference between the ages of her parents?";
            document.getElementById("opt1").innerHTML = "2 years";
            document.getElementById("opt2").innerHTML = "4 years";
            document.getElementById("opt3").innerHTML = "6 years";
            document.getElementById("opt4").innerHTML = "8 years";
            document.getElementById("opt1").addEventListener("click", score_cur1);
            document.getElementById("opt2").addEventListener("click", score_cur2);
            document.getElementById("opt3").addEventListener("click", score_count3);
            document.getElementById("opt4").addEventListener("click", score_cur4);
            break;
        case 9 :
            document.getElementById("qno_b").innerHTML = n + 1;
            document.getElementById("next_question").style.display = "none";
            document.getElementById("pc_quiz_submit").style.display = "block";
            document.getElementById("question").innerHTML = "10. A person's present age is two-fifth of the age of his mother. After 8 years, he will be one-half of the age of his mother. How old is the mother at present?";
            document.getElementById("opt1").innerHTML = "32 years";
            document.getElementById("opt2").innerHTML = "36 years";
            document.getElementById("opt3").innerHTML = "40 years";
            document.getElementById("opt4").innerHTML = "48 years";
            document.getElementById("opt1").addEventListener("click", score_cur1);
            document.getElementById("opt2").addEventListener("click", score_cur2);
            document.getElementById("opt3").addEventListener("click", score_count3);
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