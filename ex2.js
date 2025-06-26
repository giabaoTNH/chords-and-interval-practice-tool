
/* Scales ----------------------------
CMaj scale: C   D   E   F   G   A   B
DMaj scale: D   E   F#  G   A   B   C#
EMaj scale: E   F#  G#  A   B   C#   D#
FMaj scale: F   G   A   Bb  C   D   E
GMaj scale: G   A   B   C   D   E   F#
AMaj scale: A   B   C#  D   E   F#  G#
BMaj scale: B   C#  D#  E   F#  G#  A
--------------------------------------*/

// Create the question bank by hand

questionBank = [
    // C as the lower note
    {q:"C-C#", typeOfInterval:"Augmented unison", semitones:"1"},
    {q:"C-C", typeOfInterval:"Perfect unison (or) Pefect octave", semitones:"0 (or) 12"},
    {q:"C-Db", typeOfInterval:"Minor second", semitones:"1"},
    {q:"C-D", typeOfInterval:"Major second", semitones:"2"},
    {q:"C-D#", typeOfInterval:"Augmented second", semitones:"3"},
    {q:"C-Eb", typeOfInterval:"Minor third", semitones:'3'},
    {q:'C-E', typeOfInterval:'Major third', semitones:'4'},
    {q:"C-E#", typeOfInterval:'Augmented third', semitones:'5'},
    {q:'C-F', typeOfInterval:'Perfect forth', semitones:'5'},
    {q:'C-Fb', typeOfInterval:'Diminished forth', semitones:'4'},
    {q:'C-F#', typeOfInterval:'Augmented forth (Evil >:3)', semitones:'6'},
    {q:'C-Gb', typeOfInterval:'Diminished fifth (Evil >:3)', semitones:'6'},
    {q:'C-G', typeOfInterval:'Perfect fifth', semitones:'7'},
    {q:'C-G#', typeOfInterval:'Augmented fifth', semitones:'8'},
    {q:'C-Ab', typeOfInterval:'Minor sixth', semitones:'8'},
    {q:'C-A', typeOfInterval:'Major sixth', semitones:'9'},
    {q:'C-A#', typeOfInterval:'Augmented sixth', semitones:'10'},
    {q:'C-Bb', typeOfInterval:'Minor seventh', semitones:'10'},
    {q:'C-B', typeOfInterval:'Major seventh', semitones:'11'},
    {q:'C-B#', typeOfInterval:'Augmented seventh', semitones:'12'},
    {q:'C-Cb', typeOfInterval:'Diminished octave', semitones:'11'},

    // D as the lower note
    {q:'D-D#', typeOfInterval:'Augmented unison', semitones:'1'},
    {q:'D-D', typeOfInterval: 'Perfect unison (or) Pefect octave', semitones:'0 (or) 12'},
    {q:'D-Db', typeOfInterval:'Diminished octave', semitones:'11'},
    {q:'D-Eb', typeOfInterval:'Minor second', semitones:'1'},
    {q:'D-E', typeOfInterval:'Major second', semitones:'2'},
    {q:'D-E#', typeOfInterval:'Augmented second', semitones:'3'},
    {q:'D-Fb', typeOfInterval:'Diminished third', semitones:'2'},
    {q:'D-F', typeOfInterval:'Minor third', semitones:'3'},
    {q:'D-F#', typeOfInterval:'Major third', semitones:'4'},
    {q:'D-Gb', typeOfInterval:'Diminished forth', semitones:'4'},
    {q:'D-G', typeOfInterval:'Perfect forth', semitones:'5'},
    {q:'D-G#', typeOfInterval:'Augmented forth', semitones:'6'},
    {q:'D-Ab', typeOfInterval:'Diminished fifth', semitones:'6'},
    {q:'D-A', typeOfInterval:'Perfect fifth', semitones:'7'},
    {q:'D-A#', typeOfInterval:'Augmented fifth', semitones:'8'},
    {q:'D-Bb', typeOfInterval:'Minor sixth', semitones:'8'},
    {q:'D-B', typeOfInterval:'Major sixth', semitones:'9'},
    {q:'D-B#', typeOfInterval:'Augmented sixth', semitones:'10'},
    {q:'D-Cb', typeOfInterval:'Diminished seventh', semitones:'9'},
    {q:'D-C', typeOfInterval:'Minor seventh', semitones:'10'},
    {q:'D-C#', typeOfInterval:'Major seventh', semitones:'11'},

    // E as the lower note
    {q:'E-Eb', typeOfInterval:'Diminished octave', semitones:'11'},
    {q:'E-E', typeOfInterval:'Perfect unison (or) Perfect octave', semitones:'0 (or) 12'},
    {q:'E-E#', typeOfInterval:'Augmented unison', semitones:'1'},
    {q:'E-Fb', typeOfInterval:'Diminished second', semitones:'0'},
    {q:'E-F', typeOfInterval:'Minor second', semitones:'1'},
    {q:'E-F#', typeOfInterval:'Major second', semitones:'2'},
    {q:'E-Gb', typeOfInterval:'Diminished third', semitones:'2'},
    {q:'E-G', typeOfInterval:'Minor third', semitones:'3'},
    {q:'E-G#', typeOfInterval:'Major third', semitones:'4'},
    {q:'E-Ab', typeOfInterval:'Diminished forth', semitones:'4'},
    {q:'E-A', typeOfInterval:'Perfect forth', semitones:'5'},
    {q:'E-A#', typeOfInterval:'Augmented forth (Evil >:3)', semitones:'6'},
    {q:'E-Bb', typeOfInterval:'Diminished fifth ((Evil >:3)', semitones:'6'},
    {q:'E-B', typeOfInterval:'Perfect fifth', semitones:'7'}, 
    {q:'E-B#', typeOfInterval:'Augmented fifth', semitones:'8'},
    {q:'E-Cb', typeOfInterval:'Diminished sixth', semitones:'7'},
    {q:'E-C', typeOfInterval:'Minor sixth', semitones:'8'},
    {q:'E-C#', typeOfInterval:'Major sixth', semitones:'9'},
    {q:'E-Db', typeOfInterval:'Diminished seventh', semitones:'9'},
    {q:'E-D', typeOfInterval:'Minor seventh', semitones:'10'},
    {q:'E-D#', typeOfInterval:'Major seventh', semitones:'11'},
    
    // F as the lower note
    {q:'F-Fb', typeOfInterval:'Diminished octave', semitones:'11'},
    {q:'F-F', typeOfInterval:'Perfect unison (or) Perfect octave', semitones:'0 (or) 12'},
    {q:'F-F#', typeOfInterval:'Augmented unison', semitones:'1'},
    {q:'F-Gb', typeOfInterval:'Minor second', semitones:'1'},
    {q:'F-G', typeOfInterval:'Major second', semitones:'2'},
    {q:'F-G#', typeOfInterval:'Augmented second', semitones:'3'},
    {q:'F-Ab', typeOfInterval:'Minor third', semitones:'3'},
    {q:'F-A', typeOfInterval:'Major third', semitones:'4'},
    {q:'F-A#', typeOfInterval:'Augmented third', semitones:'5'},
    {q:'F-Bb', typeOfInterval:'Perfect forth', semitones:'5'},
    {q:'F-B', typeOfInterval:'Augmented forth (Evil >:3)', semitones:'6'},
    {q:'F-Cb', typeOfInterval:'Diminished fifth (Evil >:3)', semitones:'6'},
    {q:'F-C', typeOfInterval:'Perfect fifth', semitones:'7'},
    {q:'F-C#', typeOfInterval:'Augmented fifth', semitones:'8'},
    {q:'F-Db', typeOfInterval:'Minor sixth', semitones:'8'},
    {q:'F-D', typeOfInterval:'Major sixth', semitones:'9'},
    {q:'F-D#', typeOfInterval:'Augmented sixth', semitones:'10'},
    {q:'F-Eb', typeOfInterval:'Minor seventh', semitones:'10'},
    {q:'F-E', typeOfInterval:'Major seventh', semitones:'11'},
    {q:'F-E#', typeOfInterval:'Augmented seventh', semitones:'12'},

    // G as the lower note
    {q:'G-Gb', typeOfInterval:'Diminished octave', semitones:'11'},
    {q:'G-G', typeOfInterval:'Perfect unison (or) Perfect octave', semitones:'0 (or) 12'},
    {q:'G-G#', typeOfInterval:'Augmented unison', semitones:'1'},
    {q:'G-Ab', typeOfInterval:'Minor second', semitones:'1'},
    {q:'G-A', typeOfInterval:'Major second', semitones:'2'},
    {q:'G-A#', typeOfInterval:'Augmented second', semitones:'3'},
    {q:'G-Bb', typeOfInterval:'Minor third', semitones:'3'},
    {q:'G-B', typeOfInterval:'Major third', semitones:'4'},
    {q:'G-B#', typeOfInterval:'Augmented third', semitones:'5'},
    {q:'G-Cb', typeOfInterval:'Diminished forth', semitones:'4'},
    {q:'G-C', typeOfInterval:'Perfect forth', semitones:'5'},
    {q:'G-C#', typeOfInterval:'Augmented forth (Evil >:3)', semitones:'6'},
    {q:'G-Db', typeOfInterval:'Diminished fifth (Evil >:3)', semitones:'6'},
    {q:'G-D', typeOfInterval:'Perfect fifth', semitones:'7'},
    {q:'G-D#', typeOfInterval:'Augmented fifth', semitones:'8'},
    {q:'G-Eb', typeOfInterval:'Minor sixth', semitones:'8'},
    {q:'G-E', typeOfInterval:'Major sixth', semitones:'9'},
    {q:'G-E#', typeOfInterval:'Augmented sixth', semitones:'10'},
    {q:'G-Fb', typeOfInterval:'Diminished seventh', semitones:'9'},
    {q:'G-F', typeOfInterval:'Minor seventh', semitones:'10'},
    {q:'G-F#', typeOfInterval:'Major seventh', semitones:'11'},

    // A as the lower note
    {q:'A-Ab', typeOfInterval:'Diminished octave', semitones:'11'},
    {q:'A-A', typeOfInterval:'Perfect unison (or) Perfect octave', semitones:'0 (or) 12'},
    {q:'A-A#', typeOfInterval:'Augmented unison', semitones:'1'},
    {q:'A-Bb', typeOfInterval:'Minor second', semitones:'1'},
    {q:'A-B', typeOfInterval:'Major second', semitones:'2'},
    {q:'A-B#', typeOfInterval:'Augmented second', semitones:'3'},
    {q:'A-Cb', typeOfInterval:'Diminished third', semitones:'2'},
    {q:'A-C', typeOfInterval:'Minor third', semitones:'3'},
    {q:'A-C#', typeOfInterval:'Major third', semitones:'4'},
    {q:'A-Db', typeOfInterval:'Diminished forth', semitones:'4'},
    {q:'A-D', typeOfInterval:'Perfect forth', semitones:'5'},
    {q:'A-D#', typeOfInterval:'Augmented forth (There\\\'s no way you like this shit, this is absolute EVIL!!!! >:3)', semitones:'6'},
    {q:'A-Eb', typeOfInterval:'Diminished fifth (There\\\'s no way you like this shit, this is absolute EVIL!!!! >:3)', semitones:'6'},
    {q:'A-E', typeOfInterval:'Perfect fifth', semitones:'7'},
    {q:'A-Fb', typeOfInterval:'Diminished sixth', semitones:'7'},
    {q:'A-F', typeOfInterval:'Minor sixth', semitones:'8'},
    {q:'A-F#', typeOfInterval:'Major sixth', semitones:'9'},
    {q:'A-Gb', typeOfInterval:'Diminished seventh', semitones:'9'},
    {q:'A-G', typeOfInterval:'Minor seventh', semitones:'10'},
    {q:'A-G#', typeOfInterval:'Major seventh', semitones:'11'},

    // B as the lower note
    {q:'B-Bb', typeOfInterval:'Diminished octave', semitones:'11'},
    {q:'B-B', typeOfInterval:'Perfect unison (or) perfect octave', semitones:'0 (or) 12'},
    {q:'B-B#', typeOfInterval:'Augmented unison', semitones:'1'},
    {q:'B-Cb', typeOfInterval:'Diminished second', semitones:'0'},
    {q:'B-C', typeOfInterval:'Minor second', semitones:'1'},
    {q:'B-C#', typeOfInterval:'Major second', semitones:'2'},
    {q:'B-Db', typeOfInterval:'Diminished third', semitones:'2'},
    {q:'B-D', typeOfInterval:'Minor third', semitones:'3'},
    {q:'B-D#',typeOfInterval:'Major third', semitones:'4'},
    {q:'B-Eb', typeOfInterval:'Diminished forth', semitones:'4'},
    {q:'B-E', typeOfInterval:'Perfect forth', semitones:'5'},
    {q:'B-F', typeOfInterval:'Diminished fifth (Evil >:3)', semitones:'6'},
    {q:'B-F#', typeOfInterval:'Perfect fifth', semitones:'7'},
    {q:'B-Gb', typeOfInterval:'Diminished sixth', semitones:'7'},
    {q:'B-G', typeOfInterval:'Minor sixth', semitones:'8'},
    {q:'B-G#', typeOfInterval:'Major sixth', semitones:'9'},
    {q:'B-Ab', typeOfInterval:'Minor seventh', semitones:'10'},
    {q:'B-A', typeOfInterval:'Major seventh', semitones:'11'}

];
// Shuffle the question bank


const evilImage = 'assets/evil_image.jpg';
const evilImageCredit = 'Wolfrox on Devian'

var score = 0;
var ques_id = 0;
const NUMBER_OF_TEST = 32;

var StartButton = document.getElementById('StartTestButton');
var Reveal = document.getElementById('Reveal');
var TestTile = document.getElementById('TestTitle');
var TestQues = document.getElementById('TestQuestion');
var Score = document.getElementById('Score');
var Congrats = document.getElementById('Congrats');

// HELPER FUNCTIONS //
function RevealAnswer(answer, semitones) {
    if (semitones === '6') {
        Reveal.innerHTML = '<p style="margin:2px">Answer: <p style="font-size:48px; margin:2px">'+answer+'</p></p>'
        + '<img src="' + evilImage + '" alt="Evil Furry Femboy by '+evilImageCredit+'" style="width:200px">'
        + '<p>Art by '+evilImageCredit+'</p>'
        + '<button onclick="score+=1;StartTest()" style="margin:10px">I got it RIGHT!!!</button>'
        + '<button onclick="StartTest()">Ohno I got it WRONG...</button>';
    }
    else {
        Reveal.innerHTML = '<p style="margin:2px">Answer: <p style="font-size:48px; margin:2px">'+answer+'</p></p>'
        // + '<img scr="' + evilImage + '" alt="Evil Furry Femboy by '+evilImageCredit+'">'
        // + '<p>Art by '+evilImageCredit+'</p>'
        + '<button onclick="score+=1;StartTest()" style="margin:10px">I got it RIGHT!!!</button>'
        + '<button onclick="StartTest()">Ohno I got it WRONG...</button>';
    
    }
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
    return questionBank[ques_id];
}

function TestInit() {
    questionBank.sort(() => Math.random() - 0.5);
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
    Reveal.innerHTML = '<button onclick="RevealAnswer(\'' + question.typeOfInterval + '\',\'' +question.semitones +'\')">Reveal Answer</button>';
    Score.innerHTML = '<li>Score: ' + score + '</li><li>Question: ' + ques_id + '/' + NUMBER_OF_TEST +'</li>';
    ques_id += 1;
}

