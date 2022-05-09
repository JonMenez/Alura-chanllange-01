/*                    HTML references                */

//Buttons

const btnEncrypt = document.querySelector('.encrypt')
const btnDecrypt = document.querySelector('.decrypt')
const btnCopy = document.querySelector('.resolve-button')

//Texts values

const textArea = document.querySelector('.field-text')
const textResolved = document.querySelector('.resolve-text')

//Cards
const resolveCard = document.querySelector('.resolve')
const noResultCard = document.querySelector('.no-result')
const textOutput = document.querySelector('.resolve-text')


//Show result encrypted/decrypted

const showResult = (text) => {
    noResultCard.style.display = "none"
    resolveCard.style.display = "flex"
    textOutput.innerText = text
}

//Encrypt string function

const replaceVowels = (vowel) => {
    switch (vowel) {
        case 'e': return 'enter';
        case 'i': return 'imes';
        case 'a': return 'ai';
        case 'o': return 'ober';
        case 'u': return 'ufat';
        default: return vowel;
    }
}

const encryptText = (string) => {
    let stringEncrypted = '';
    for (const vowel of string) {
        stringEncrypted += replaceVowels(vowel);
    }
    return stringEncrypted;
}

//Decrypt string function

const decryptText = (string) => {
    var newString = '';
    for (var i = 0; i < string.length; i++) {
        switch (string[i]) {
            case 'e':
                if (string[i + 4] === 'r') { newString += 'e'; i += 4; }
                else { return false; }
                break;
            case 'i':
                if (string[i + 3] === 's') { newString += 'i'; i += 3; }
                else { return false; }
                break;
            case 'a':
                if (string[i + 1] === 'i') { newString += 'a'; i += 1; }
                else { return false; }
                break;
            case 'o':
                if (string[i + 3] === 'r') { newString += 'o'; i += 3; }
                else { return false; }
                break;
            case 'u':
                if (string[i + 3] === 't') { newString += 'u'; i += 3; }
                else { return false; }
                break;
            default:
                newString += string[i];
        }
    }
    return newString;
}

//Copy result
const copyText = (text) => {
    console.log(text)
    navigator.clipboard.writeText(text)
    btnCopy.style.backgroundColor = '#F3F5FC'
    btnCopy.innerText = 'Copiado'
}


btnEncrypt.addEventListener('click', () => {
    const textToEncrypt = encryptText(textArea.value)
    showResult(textToEncrypt)
    btnCopy.innerText = 'Copiar'
})

btnDecrypt.addEventListener('click', () => {
    const textToEncrypt = decryptText(textArea.value)
    showResult(textToEncrypt)
    btnCopy.innerText = 'Copiar'
})

btnCopy.addEventListener('click', () => {
    const textToCopy = textOutput.textContent
    copyText(textToCopy)
})

