var score = 0;
var ques_id = 0;
const NUMBER_OF_TEST = 10;

var StartButton = document.getElementById('StartTestButton');
var Reveal = document.getElementById('Reveal');
var TestTile = document.getElementById('TestTitle');
var TestQues = document.getElementById('TestQuestion');
var Score = document.getElementById('Score');
var Congrats = document.getElementById('Congrats');
var notes = ['C','C#','Db','D','D#','Eb','E','Fb','E#','F','F#','Gb','G','G#','Ab','A','A#','Bb','B','Cb'];
const map_notes = {
    'C'     :0, 
    'C#'    :1, 
    'Db'    :1, 
    'D'     :2, 
    'D#'    :3, 
    'Eb'    :3, 
    'E'     :4, 
    'Fb'    :4,
    'E#'    :5,
    'F'     :5,
    'F#'    :6,
    'Gb'    :6,
    'G'     :7,
    'G#'    :8,
    'Ab'    :8,
    'A'     :9,
    'A#'    :10,
    'Bb'    :10,
    'B'     :11,
    'Cb'    :11
};

// HELPER FUNCTIONS //
function RevealAnswer(answer) {
    Reveal.innerHTML = '<p style="margin:2px">The answer is '+answer+'</p>'
    + '<button onclick="score+=1;StartTest()" style="margin:10px">I got it RIGHT!!!</button>'
    + '<button onclick="StartTest()">Ohno I got it WRONG...</button>';
}
function StopTest() {
    Congrats.innerHTML = '<p style="font-size:40px;margin:2px">Congratulation! '+score+'/'+NUMBER_OF_TEST+'</p>';
    TestTile.innerHTML = "";
    TestQues.innerHTML = "";
    Reveal.innerHTML = "";
    Score.innerHTML = "";
    StartButton.innerHTML = '<button onclick="TestInit()">Start Over</button>';
    return;
}
function QuesGen() {
    var i1 = Math.floor(Math.random() * 20);
    var i2 = (Math.floor(Math.random() * 19) + i1);
    var Over = i2 > 19;
    i2 = i2 % 20; 
    return {q:notes[i1] + ' - ' + notes[i2], ans:Math.abs(map_notes[notes[i2]]-map_notes[notes[i1]] + Over*12)};
}

function TestInit() {
    StartButton.innerHTML = "";
    Congrats.innerHTML = '';
    score = 0;
    ques_id = 1;
    StartTest();
}

function StartTest() {
    if (ques_id > NUMBER_OF_TEST) {
        StopTest();
        return;
    }
    var question = QuesGen();
    TestTile.innerHTML = '<h1>Question Number ' + ques_id +'</h1>';
    TestQues.innerHTML = '<p style="font-size:40px;margin:2px">' + question.q + '</p>';
    Reveal.innerHTML = '<button onclick="RevealAnswer(' + question.ans + ')">Reveal Answer</button>';
    Score.innerHTML = '<li>Score: ' + score + '</li><li>Question: ' + ques_id + '/' + NUMBER_OF_TEST +'</li>';
    ques_id += 1;
}

