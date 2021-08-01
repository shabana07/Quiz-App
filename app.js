var userValue = document.getElementById('user');
var email = document.getElementById('email');
var form = document.getElementById('startQuiz');
var verifiBtn = document.getElementById('start');
var body = document.getElementById('body');
var select = document.getElementById('select');
function submit() {

    if (userValue.value == '' || email.value == '') {
        alert('Please ! complete your form');
    } else {
        verifiBtn.classList.remove('hide');
        form.classList.add('hide');
        firstName.innerHTML = userValue.value;
        userEmail.innerHTML = email.value;
    }
}
var second = document.getElementById('second');
var minute = document.getElementById('minute');
var timer;
var min = 2;
var sec = 60;
function countdown() {
    var seconds = 59;
    function tick() {
      var time = document.getElementById("counter");
      seconds--;
      counter.innerHTML =
        "0:" + (seconds < 10 ? "0" : "") + String(seconds);
      if (seconds > 0) {
        setTimeout(tick, 1000);
      } else {
        document.getElementById("verifiBtn").innerHTML = `
            <div class="Btn" id="ResendBtn">
                <button type="submit">Resend</button>
            </div>
        `;
        document.getElementById("counter").innerHTML = "";
      }
    }
    tick();
  }
  countdown();
function startQuiz(){
    start.classList.add('hide');
    select.classList.remove('hide');
}

var quesArr = [
    {
        ques: "What is 855x3 ?",
        option: {
            a: '2,555',
            b: '2,463',
            c: '2,565',
        },
        ans: '2,565'
    },
    {
        ques: "What is 60+60 ?",
        option: {
            a: '100',
            b: '130',
            c: '120',
        },
        ans: '120'
    },
    {
        ques: "What is 90x1 ?",
        option: {
            a: '160',
            b: '90',
            c: '150',
        },
        ans: '90'
    }
]
var question = document.getElementById('question');
var option = document.getElementsByClassName('option');
var next = document.getElementById('next');
var final = document.getElementById('final');
var result = document.getElementById('result');
var points = document.getElementById('points');
var count = 0;
function displayQues() {
    question.innerHTML = quesArr[count].ques;
    option[0].innerHTML = quesArr[count].option.a;
    option[1].innerHTML = quesArr[count].option.b;
    option[2].innerHTML = quesArr[count].option.c;
}
displayQues();
function nextQues() {
    if (!(count == quesArr.length- 1)) {
        count++
        displayQues()
    } else {
        final.classList.remove('hide');
        next.classList.add('hide');
    }
    for (var i = 0; i < option.length; i++) {
        option[i].classList.remove('disable');
        option[i].classList.remove('wrong');
        option[i].classList.remove('correct');
    }
}
for (var i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "work(this)")
}
var score = 0;
var counter = 0;
function work(a) {
    
    if (a.innerHTML === quesArr[counter].ans) {
        a.classList.add('correct')
        console.log(a.innerHTML);
        console.log(quesArr[counter].ans);
        score = score+10;
        console.log(score);
    } else {
        a.classList.add('wrong')
        console.log(a.innerHTML);
        console.log(quesArr[counter].ans);
    }
    for (var i = 0; i < option.length; i++) {
        option[i].classList.add('disable')
    }
    counter++
}
// result
function finalResult(){
    result.classList.remove('hide');
    body.classList.add('hide');
    // if(score >= 30){
    //     points.innerHTML = userValue.value + " your score is  " + score  + " / 30 "
    // }else{
    //     points.innerHTML = userValue.value + " your score is  " + score  + " / 30 "
    // }
    console.log(points.innerHTML,score);
    points.innerHTML = 'score'
}