const quizData = [
    {
        question:"1. which type of permit has a red border and an 'H' on written top",
        a:"Cold Work Permit",
        b:"Hot Work Permit",
        c:"Radiography Permit",
        d:"None",
        correct:"b",
    },
    {
        question:"2. Who completes the box number 6 in Permit to work written'I herebye delegate authority to the permit controller and prescibed isolations are in place...'",
        a:"Electrical authority",
        b:"Worksite Supervisor",
        c:"Permit Authority",
        d:"Permit Controller",
        correct:"c",
    },
    {
        question:"3.A work Permit has a number of duplicate copies for distribution. INCLUDING the orginal copy, how many copies are there",
        a:"One",
        b:"Two",
        c:"Three",
        d:"As many as required",
        correct:"c",
    },
    {
        question:"4. Which copy of permit is displayed at the worksite",
        a:"Original copy",
        b:"Copy One",
        c:"Copy two",
        d:"None",
        correct:"a",
    },
    {
        question:"5. Which certificate is used to Coordinate mechanical and electrical isolations and de-isolation",
        a:"Radiography work permit",
        b:"De-isolation for test certificate",
        c:"Preparation/re-installment certificate(PRC)",
        d:"Cold work permit",
        correct:"c",
    },
    {
        question:"6. Entry into a confined space required a confined space entry certificate and associated certificates",
        a:"False",
        b:"True",
        c:"Sometimes",
        d:"only at night",
        correct:"b",
    },
    {
        question:"7. what is P&ID",
        a:"Pipe",
        b:"Diagram",
        c:"Piping and instrumentation Diagram",
        d:"pipeline and insulation Diagram",
        correct:"c",
    },
  
    {
        question:"8. Which certificate is required for activities that involve testing of high voltage circuits",
        a:"De-isolation for test certificates",
        b:"Preparation/Re-instatement certificate",
        c:"Electrical Work certificate",
        d:"Excavation certificate",
        correct: "c",
   },
    {
        question:"9. Where is copy one of the Work Permit located",
        a:"Safety Department",
        b:"Control room",
        c:"Permit Authority's Office",
        d:"Worksite",
        correct:"b",
    },
    {
        question:"10. in which Box on the work-Permit are the initial gas test results recorded",
        a:"Box 9",
        d:"Box 6",
        c:"Box 7",
        b:"Box 8",
        correct:"c",
    },
    {
        question:"11. What is the maximum number of days a Cold Work Permit is valid for?",
        a:"14 Consecutive days",
        b:"7 Consecutive days",
        c:"Two Shifts",
        d:"One Shift ",
        correct:"a",
    },
    {
        question:"12. Only one permit can be used to perfom work without control work permit which one is it?",
        a:"Confined space certificate",
        b:"Electrical work Certificate",
        c:"NO Certificate can be used without a controlling work permit",
        d:"Preparation/Re-instatement certificate",
        correct:"c",
    },
    {
        question:"13. What is used to record the entry of all personnel entering s confined space?",
        a:"PRC",
        b:"Confined space Entry Logsheet",
        c:"Confined space Entry Certificate",
        d: "Work Permit ",
        correct:"b",
    },
    {
        question:"14. What is used to identify isolations on specific pieces of plant and equipment",
        a:"De-isolation Test certificate",
        b:"Preparation/Reinstatement certificate",
        c:"Isolation Tags",
        d:"Excavation certificate",
        correct:"c",
    },
]

const quiz= document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl= document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz ()
function loadQuiz(){
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}
function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected (){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer= answerEl.id}
        })
        return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer){
        if(answer ===  quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length) {
            loadQuiz()
        }else{
            quiz.innerHTML =`
            <h2>You answered ${Math.round(score/quizData.length*100)}% questions correctly 
            </h2>
            <button onclick="location.reload()">Reload</button>
            <button onclick="location.href ='https://quiz-mainpage.vercel.app/';">Back</button>
            `
        }
        
    }
})