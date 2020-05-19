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
        <li onclick='a()'>${user[i].A}</li>
        <li onclick='b()'>${user[i].B}</li>
        <li onclick='c()'>${user[i].C}</li>
        <li onclick='d()'>${user[i].D}</li>
        </ul>`;



            document.getElementById('userdata').innerHTML = output;

        }
    }

    xhr.send();


    // 1st option
    function a() {
        let Selected = A;
        console.log('You Selected option A');

    }

    // 2nd option

    function b() {
        let Selected = B;
        if (this.user[i].answer == Selected) {


            console.log('You Selected option B');

        }

    }

    //3rd option
    function c() {
        let Selected = C;
        console.log('You Selected option C');
    }

    //4rth option
    function d() {
        let Selected = D;
        console.log('You Selected option D');
    }

    i++;
}