export function checkURL(formURL){
    //https://stackoverflow.com/questions/30970068/js-regex-url-validation
    //Reference used for regex match url code
    let regExp = formURL.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

    if(regExp === null) {
        return false;
    }
    else {
        return true;
    }
 }