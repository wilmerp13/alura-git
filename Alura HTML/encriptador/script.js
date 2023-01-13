const texto = document.querySelector('textarea');
texto.focus();
const closeModalbtn = document.querySelector('.close-modal');
const divMuneco = document.querySelector('.divmuneco');
const modal = document.querySelector('.modal');
const modalText = document.querySelector('.modalText');

if (texto.value == ''){
             divMuneco.classList.remove('hidden');

} 

document.querySelector('.encriptar').addEventListener('click', function(){
    // Encrypt the text
    let text = texto.value.toLowerCase();
    let encryptedText = "";
    for (let i = 0; i < text.length; i++) {
        switch(text[i]) {
            case 'a':
                encryptedText += 'ai';
                break;
            case 'e':
                encryptedText += 'enter';
                break;
            case 'i':
                encryptedText += 'imes';
                break;
            case 'o':
                encryptedText += 'ober';
                break;
            case 'u':
                encryptedText += 'ufat';
                break;
            default:
                encryptedText += text[i];
        }
        texto.value = encryptedText;
        
            divMuneco.classList.add('hidden');
            modalText.textContent = encryptedText;
            document.querySelector('.modal-h1').textContent = 'Mensaje Encriptado';
            modal.classList.remove('hidden');
    }

});

document.querySelector('.desencriptar').addEventListener('click', function(){
    // Decrypt the text
    let text = texto.value.toLowerCase();
    let decryptedText = "";
    for (let i = 0; i < text.length; i++) {
        if (text.substring(i, i+2) === "ai") {
            decryptedText += "a";
            i++;
        } else if (text.substring(i, i+5) === "enter") {
            decryptedText += "e";
            i += 4;
        } else if (text.substring(i, i+4) === "imes") {
            decryptedText += "i";
            i += 3;
        } else if (text.substring(i, i+4) === "ober") {
            decryptedText += "o";
            i += 3;
        } else if (text.substring(i, i+4) === "ufat") {
            decryptedText += "u";
            i += 3;
        } else {
            decryptedText += text[i];
        }
    }
    texto.value = decryptedText;

    divMuneco.classList.add('hidden');
    modalText.textContent = decryptedText;
    document.querySelector('.modal-h1').textContent = 'Mensaje Desencriptado';
    modal.classList.remove('hidden');

});

document.querySelector('.modal-copy').addEventListener('click',function(){
    navigator.clipboard.writeText(modalText.innerHTML);

});

const closeModal = closeModalbtn.addEventListener('click', function(){
        modal.classList.add('hidden');
        texto.value = '';
        texto.focus();

        if (texto.value == ''){
            divMuneco.classList.remove('hidden');
    } 
    
    });

    