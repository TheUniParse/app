import generateJoke from './generateJoke'
import './styles/main.scss'
//import laugh from '/src/assets/laugh.svg'
import laugh from '/src/assets/gaara.png'

console.log(generateJoke())

const btn = document.querySelectorAll('#btn')
btn[0].addEventListener('click', generateJoke)

const laughImg = document.getElementById('laughImg')
laughImg.src = laugh
const jock = document.getElementById('jock')






function s(choice) {
  switch (choice) {
    case '1': console.log(1); break
    case 1: console.log(2); break
    case 'hello': console.log('hello'); break
    default: console.log('default')
  }
}; s(1)

//let baypass = prompt('enter password');
// while (baypass !== 'hi') {
//   alert('wrong password');
//   baypass = prompt('enter password')
// } alert('welcom')

//(baypass === 'hi') ? alert('welcom') : [alert('wrong password'), baypass = prompt('enter password')];
//(baypass === 'hi') ? alert('welcom2') : alert('wrong password2');
//alert('done')