let texto = document.querySelector('textarea');
texto.focus();

document.querySelector('.encriptar').addEventListener('click', function(){
    // Encrypt the text
    let text = texto.value;
    let encryptedText = "";
    console.log(text.length);
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
    }
    texto.value = encryptedText;
});

document.querySelector('.desencriptar').addEventListener('click', function(){
    // Decrypt the text
    let text = texto.value;
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
});
