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


            // option A functionality
            document.getElementById('optionA').addEventListener('click', () => {
                let Selected = 'A';
                if (A == Selected) {
                    console.log("All set")
                }

            });

            // option B  functionality
            document.getElementById('optionB').addEventListener('click', () => {
                let Selected = 'B';
                if (B == Selected) {
                    console.log("All set")
                }

            });

            // option C  functionality
            document.getElementById('optionC').addEventListener('click', () => {
                let Selected = 'C';
                if (C == Selected) {
                    console.log("All set")
                }

            });

            // option D  functionality
            document.getElementById('optionD').addEventListener('click', () => {
                let Selected = 'D';
                if (D == Selected) {
                    console.log("All set")
                }

            });




        }
    }

    xhr.send();





    i++;
}