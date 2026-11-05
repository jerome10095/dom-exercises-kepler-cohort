const textElement = document.getElementById('text'); 
const btn = document.getElementById('changeBtn'); 
const greetings = ['morning', 'hello', 'bye', 'good afternoon'];

let index = 0;

btn.addEventListener('click', function() {
    const currentContent = greetings[index]
    textElement.textContent = currentContent

    index++

    if(index === greetings.length - 1) {
        index = 0
    }
})