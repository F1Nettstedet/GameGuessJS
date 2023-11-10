'use strict'

let askNumb
let randomNumb = Math.round(Math.random() * 100)
let finish
let gameOver


function isNumb(num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}



function game(number, attempt = 10) {

    function guess(build = 10) {
        askNumb = prompt('Угадай число от 1 до 100')

        if (!isNumb(askNumb) && askNumb !== null) {
            alert('Введи число')
            guess()
        } else if (attempt <= 1) {
            gameOver = confirm('Ваши попытки кончились.Хотели бы сыграть еще?')
            if (gameOver === true) {
                attempt = build
                guess()
            } else {
                return alert('Спасибо за игру!')
            }
        } else if (askNumb > number && askNumb !== null) {
            attempt--
            alert(`Загаданное число было меньше,осталась попыток ${attempt}`)
            guess()
        } else if (askNumb < number && askNumb !== null) {
            attempt--
            alert(`Загаднное число было больше,осталась попыток ${attempt}`)
            guess()
        } else if (askNumb === null) {
            return alert('Игра окончена')
        } else {
            finish = confirm('Поздравляю,вы угадали.Хотели бы сыграть еще ?')

            if (finish === true) {
                attempt = build
                guess()
            } else {
                return alert('Спасибо за игру!')
            }
        }

    }

    guess()
}


game(randomNumb)