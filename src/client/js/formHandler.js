import { checkForURL } from "./urlChecker"

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formInput = document.getElementById('url').value

    if(checkForURL(formInput)) {
        let post = async (results = {}) => {
            let apiData = await fetch('/apiPost', {
                method: 'POST',
                credentials: 'same-origin',
                headers: {'Content-Type': 'application/json'},
                mode: 'cors',
                body: JSON.stringify(results)
            });
            
            try {
                let data = await apiData.json();
                return data;
            } 
            catch (error) {
                console.log("error");
            }
        };

        post({url: formInput})
        //update UI
        .then(function(res) {
            document.getElementById('polarity').innerHTML = "Polarity: "+res.score_tag;
            document.getElementById("subjectivity").innerHTML = "Subjective/Objective: "+ res.subjectivity;
            document.getElementById("confidence").innerHTML = "Confidence: "+ res.confidence +"%";
        })
        }
    else {alert("Enter a URL that is valid");}
}
export { handleSubmit }
/*
    const postData = async (url = "", results = {}) => {
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(results)
        });
        try {
            const Data = await response.json();
            console.log(Data)
            return Data;
        } catch (error) {
            console.log('error', error);
        }
    };

    postData('/api', {url: formInput})
*/