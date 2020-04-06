var answer;
var score = 0;
var backgroundImages = [];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function nextQuestion() {
    const n1 = getRandomIntInclusive(0, 4);
    document.getElementById('n1').innerHTML = n1;

    const n2 = getRandomIntInclusive(0, 5);
    document.getElementById('n2').innerHTML = n2;

    answer = n1 + n2;

}

function checkAnswer() {

    const prediction = predictImage();
    console.log(`answer: ${answer}, prediction" ${prediction}`);

    if (prediction == answer) {
        score++;
        console.log(`Correct! ;) Score: ${score}`);
        if (score < 7) {
            backgroundImages.push(`url('images/background${score}.svg')`);
            document.body.style.backgroundImage = backgroundImages;
        } else {
            alert(`Well done! Your math garden is in full bloom! Want to start again?`);
            score = 0;
            backgroundImages = [];
            document.body.style.backgroundImage = backgroundImages;
        }
        
    } else {
        if (score > 0 && score < 7) {
            score--;
            console.log(`Wrong! :( Score: ${score}`)

            alert(`Oops, check your calculations`);
            setTimeout(function(){ 
                backgroundImages.pop();
                document.body.style.backgroundImage = backgroundImages 
            }, 1000);                        
            
        }
    }
    
}