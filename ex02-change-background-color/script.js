const colorRed = document.querySelector('.red')
const colorGreen = document.querySelector('.green')
const colorBlue = document.querySelector('.blue')

colorRed.addEventListener('click', function() {
    document.body.style.backgroundColor = 'red'
})

colorGreen.addEventListener('click', function() {
    document.body.style.backgroundColor = 'green'
})

colorBlue.addEventListener('click', function() {
    document.body.style.backgroundColor = 'pupple'
})