import { checkURL } from "./urlChecker"

function handleSubmit(event) {
    event.preventDefault()

    let formInput = document.getElementById('url').value

    if(checkURL(formInput)) {
        let post = async (results = {}) => {
            let apiData = await fetch('http://localhost:2020/apiPost', {
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