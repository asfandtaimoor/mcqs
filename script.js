document.getElementById('nextQ1').addEventListener('click', loadQuestion);
document.getElementById('nextQ').addEventListener('click', loadQuestion);

let i = -1;


// Changing the question after clicking next button

function loadQuestion() {
    // Hiding the start button after click
    document.getElementById('nextQ1').style.display = 'none';


    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true);

    xhr.onload = function() {
        if (this.status == 200) {

            let user = JSON.parse(this.responseText);

            let output = '';
            output = `
        
        <ul>
        <li>${user[i].question}</li>
        <li id="optionA">${user[i].A}</li>
        <li id="optionB">${user[i].B}</li>
        <li id="optionC">${user[i].C}</li>
        <li id="optionD">${user[i].D}</li>
        </ul>`;


            // output data
            document.getElementById('userdata').innerHTML = output;

            // Assgining option to variable values
            let A = user[i].Answer;
            let B = user[i].Answer;
            let C = user[i].Answer;
            let D = user[i].Answer;


            // setting option values to the variables
            let optionA = document.getElementById('optionA');
            let optionB = document.getElementById('optionB');
            let optionC = document.getElementById('optionC');
            let optionD = document.getElementById('optionD');


            // option A functionality
            optionA.addEventListener('click', () => {
                let Selected = 'A';
                if (A == Selected) {
                    optionA.style.backgroundColor = "green";
                    loadQuestion();
                }

            });

            // option B  functionality
            optionB.addEventListener('click', () => {
                let Selected = 'B';
                if (B == Selected) {
                    optionB.style.backgroundColor = "green";
                    loadQuestion();
                }

            });

            // option C  functionality
            optionC.addEventListener('click', () => {
                let Selected = 'C';
                if (C == Selected) {
                    optionC.style.backgroundColor = "green";
                    loadQuestion();
                }

            });

            // option D  functionality
            optionD.addEventListener('click', () => {
                let Selected = 'D';
                if (D == Selected) {
                    optionD.style.backgroundColor = "green";
                    loadQuestion();
                }

            });




        }
    }

    xhr.send();





    i++;
}