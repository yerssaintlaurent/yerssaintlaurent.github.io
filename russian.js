      function processData() {
        const message = document.getElementById("message").value;
        const key = document.getElementById("key").value;
        const mode = document.getElementById("mode").value;
        const result = vigenere_cipher(message, key, mode);
        
        document.getElementById("result-text").innerText = result;
        document.getElementById("result").style.display = "block";
      }

        function vigenere_cipher(message, key, mode) {
        let result = "";
        let key_index = 0;
        for (let i = 0; i < message.length; i++) {
          const char = message[i];
          if (char.match(/[а-яА-Я]/)) {
            const shift = key[key_index].toLowerCase().charCodeAt(0) - 'а'.charCodeAt(0);
            let new_char;
            if (mode === 'encrypt') {
              new_char = String.fromCharCode((char.toLowerCase().charCodeAt(0) - 'а'.charCodeAt(0) + shift) % 31 + 'а'.charCodeAt(0));
            } else if (mode === 'decrypt') {
              new_char = String.fromCharCode((char.toLowerCase().charCodeAt(0) - 'а'.charCodeAt(0) - shift + 31) % 31 + 'а'.charCodeAt(0));
            }
            result += char === char.toLowerCase() ? new_char : new_char.toUpperCase();
            key_index = (key_index + 1) % key.length;
          } else {
            result += char;
          }
        }
        return result;
      }