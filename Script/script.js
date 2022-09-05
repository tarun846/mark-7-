const textareainput = document.querySelector("textarea");
const translatebtn = document.querySelector('.translate-btn');
const languageinput = document.querySelector('.language');
 
const  url = 'https://api.funtranslations.com/translate/wheel-of-time-old-tongue.json'
async function languageconvertor(val) {
     try {
        const data = await fetch(`${url}?text=${val}`)
        const datavalue  = await data.json()
        languageinput.textContent =  datavalue.contents.translated
    } catch (error) {
        alert("some error occured")
        console.error(error);
     }
 }

translatebtn.addEventListener('click' ,(e) => {
    const inputval = textareainput.value
    languageconvertor(inputval)
} )