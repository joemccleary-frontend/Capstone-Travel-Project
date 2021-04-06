//import js for webpack
//import { checkURL } from './js/urlChecker'
import { handleSubmit } from './js/formHandler'
import { weatherUpdates, pictureUpdate } from "./js/ui.js"


//import styles for webpack
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

export {
    //checkURL,
    handleSubmit,
    weatherUpdates,
    pictureUpdate
}