let texto = document.querySelector('textarea');
texto.focus();

document.querySelector('.encriptar').addEventListener('click', function(){
    console.log((texto).value);
    // La letra "e" es convertida para "enter"
    // La letra "i" es convertida para "imes"
    // La letra "a" es convertida para "ai"
    // La letra "o" es convertida para "ober"
    // La letra "u" es convertida para "ufat"
  if (texto.value === 'e'){
    texto.value = 'enter';
}
  else if (texto.value === 'i'){
           texto.value = 'imes';

}
  else if (texto.value === 'a'){
           texto.value = 'ai';
}

else if (texto.value === 'o'){
         texto.value = 'ober';
}

else if (texto.value === 'u'){
         texto.value = 'ufat';
}


console.log(texto.value);
   
   

});



document.querySelector('.desencriptar').addEventListener('click', function(){

    if (texto.value === 'enter'){
        texto.value = 'e';
    }
      else if (texto.value == 'imes'){
               texto.value = 'i';
    
    }
      else if (texto.value == 'ai'){
               texto.value = 'a';
    }
    
    else if (texto.value == 'ober'){
             texto.value = 'o';
    }
    
    else if (texto.value == 'ufat'){
             texto.value = 'u';
    }
    console.log(texto.value);

});
