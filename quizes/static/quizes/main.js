console.log('hello world')

const modalBtns = [...document.getElementsByClassName('modal-button')]
const modalBody = document.getElementById('modal-body-confirm')
const startBtn = document.getElementById('start-button')
const url = window.location.href
console.log(modalBtns)

modalBtns.forEach(modalBtn =>modalBtn.addEventListener('click',()=>{
   const pk= modalBtn.getAttribute('data-pk')
   console.log(modalBody)
   const name= modalBtn.getAttribute('data-quiz')
   const numQuestions= modalBtn.getAttribute('data-questions')
   const difficulty= modalBtn.getAttribute('data-difficulty')
   const scoreToPass= modalBtn.getAttribute('data-pass')
   const time= modalBtn.getAttribute('data-time')

   modalBody.innerHTML =`
       <div class = "h5 mb-3"> Are you sure you want to begin <b>${name}</b>?</div>
       <div class = "text-muted">
          <ul>
             <li> Difficulty: <b>${difficulty}</b></li>
             <li> Number of Questions: <b>${numQuestions}</b></li>
             <li> Score to pass : <b>${scoreToPass}%</b></li>
             <li> Time :  <b>${time} min</b></li>
          </ul>
       </div>

   `

   startBtn.addEventListener('click',()=>{
        window.location.href = url+ pk
        })
}))