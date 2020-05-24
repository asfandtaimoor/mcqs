// Accessing html blocks
let nextButton = document.getElementById('nextQ');
let showResult = document.getElementById('showResult');
let dataBlock = document.getElementById('userdata'); // Main block to show the data

// Assigning funciton to the next button
nextButton.addEventListener('click', loadQuestion);


let i = -1;
let totalNumber = 0;

// Changing the question after clicking next button

function loadQuestion() {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true);


    xhr.onload = function() {
        let user = JSON.parse(this.responseText);

        if (this.status == 200 && i < user.length) {

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
            dataBlock.innerHTML = output;

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
                    totalNumber++;
                }
                loadQuestion();

            });

            // option B  functionality
            optionB.addEventListener('click', () => {
                let Selected = 'B';
                if (B == Selected) {
                    optionB.style.backgroundColor = "green";
                    totalNumber++;
                }
                setTimeout(loadQuestion, 500);

            });

            // option C  functionality
            optionC.addEventListener('click', () => {
                let Selected = 'C';
                if (C == Selected) {
                    optionC.style.backgroundColor = "green";
                    totalNumber++;
                }
                loadQuestion();
            });

            // option D  functionality
            optionD.addEventListener('click', () => {
                let Selected = 'D';
                if (D == Selected) {
                    optionD.style.backgroundColor = "green";
                    totalNumber++;
                }
                loadQuestion();

            });




        } else {

            dataBlock.style.display = "none";
            nextButton.style.display = "none";
            let acuiredNumber = `Your total number is ${totalNumber}`
            showResult.innerHTML = acuiredNumber;
        }

    }

    xhr.send();





    i++;


}


console.log(length);