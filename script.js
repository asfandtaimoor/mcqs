let xhr = new XMLHttpRequest();

xhr.open('GET', 'data.json', true);

xhr.onload = function() {
    if (this.status == 200) {

        let user = JSON.parse(this.responseText);

        let output = '';
        output = `
        
        <ul>
        <li>${user[0].question}</li>
        <li>${user[0].A}</li>
        <li>${user[0].B}</li>
        <li>${user[0].C}</li>
        <li>${user[0 ].D}</li>
        </ul>`;



        document.getElementById('userdata').innerHTML = output;
    }
}

xhr.send();