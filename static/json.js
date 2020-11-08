var base_api = "https://dois-app.herokuapp.com/"
var rnn = "api/v1/rnn/"

function call_api(userinput) {
    var api_url = base_api+rnn+userinput
    fetch(api_url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            appendData(data);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });
    function appendData(data) {
        var mainContainer = document.getElementById("myData");
        var div = document.createElement("div");
        div.innerHTML = data.replaceAll("\n","<br>")
        mainContainer.appendChild(div);
        document.body.classList.remove('busy-cursor');
    }
}

function passText() {
    var text_value = document.getElementById("myText").value;
    var person_value = document.getElementById("personpick").value;
    call_api(person_value+":"+" "+text_value);
    document.body.classList.add('busy-cursor');
}