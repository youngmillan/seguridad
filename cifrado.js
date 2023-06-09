function encrypt() {
    var message = document.getElementById("message").value;
    var key = document.getElementById("key").value;
    var cipherType = document.getElementById("cipherType").value;
    var result = "";
  
    if (message.trim() === "") {
      alert("Por favor, ingresa un mensaje.");
      return;
    }
  
    if (key.trim() === "") {
      alert("Por favor, ingresa una clave.");
      return;
    }
  
    if (cipherType === "vigenere") {
      result = vigenereEncrypt(message, key);
    } else if (cipherType === "cesar") {
      if (!isValidCesarKey(key)) {
        alert("Por favor, ingresa un número entero válido para la clave César.");
        return;
      }
      result = cesarEncrypt(message, key);
    }
  
    document.getElementById("result").textContent = result;
  }
  
  function decrypt() {
    var message = document.getElementById("message").value;
    var key = document.getElementById("key").value;
    var cipherType = document.getElementById("cipherType").value;
    var result = "";
  
    if (message.trim() === "") {
      alert("Por favor, ingresa un mensaje.");
      return;
    }
  
    if (key.trim() === "") {
      alert("Por favor, ingresa una clave.");
      return;
    }
  
    if (cipherType === "vigenere") {
      result = vigenereDecrypt(message, key);
    } else if (cipherType === "cesar") {
      if (!isValidCesarKey(key)) {
        alert("Por favor, ingresa un número entero válido para la clave César.");
        return;
      }
      result = cesarDecrypt(message, key);
    }
  
    document.getElementById("result").textContent = result;
  }
  
  function isValidCesarKey(key) {
    return /^\d+$/.test(key);
  }
  
  function vigenereEncrypt(message, key) {
    var encryptedMessage = "";
    var keyIndex = 0;
    var keyLength = key.length;
  
    for (var i = 0; i < message.length; i++) {
      var charCode = message.charCodeAt(i);
  
      if (charCode >= 65 && charCode <= 90) {
        var keyCode = key.charCodeAt(keyIndex % keyLength) - 65;
        var encryptedCharCode = ((charCode - 65 + keyCode) % 26) + 65;
        encryptedMessage += String.fromCharCode(encryptedCharCode);
        keyIndex++;
      } else if (charCode >= 97 && charCode <= 122) {
        var keyCode = key.charCodeAt(keyIndex % keyLength) - 97;
        var encryptedCharCode = ((charCode - 97 + keyCode) % 26) + 97;
        encryptedMessage += String.fromCharCode(encryptedCharCode);
        keyIndex++;
      } else {
        encryptedMessage += message.charAt(i);
      }
    }
  
    return encryptedMessage;
  }
  
  function vigenereDecrypt(message, key) {
    var decryptedMessage = "";
    var keyIndex = 0;
    var keyLength = key.length;
  
    for (var i = 0; i < message.length; i++) {
      var charCode = message.charCodeAt(i);
  
      if (charCode >= 65 && charCode <= 90) {
        var keyCode = key.charCodeAt(keyIndex % keyLength) - 65;
        var decryptedCharCode = ((charCode - 65 - keyCode + 26) % 26) + 65;
        decryptedMessage += String.fromCharCode(decryptedCharCode);
        keyIndex++;
      } else if (charCode >= 97 && charCode <= 122) {
        var keyCode = key.charCodeAt(keyIndex % keyLength) - 97;
        var decryptedCharCode = ((charCode - 97 - keyCode + 26) % 26) + 97;
        decryptedMessage += String.fromCharCode(decryptedCharCode);
        keyIndex++;
      } else {
        decryptedMessage += message.charAt(i);
      }
    }
  
    return decryptedMessage;
  }
  
  function cesarEncrypt(message, key) {
    var encryptedMessage = "";
    var shift = parseInt(key);
  
    for (var i = 0; i < message.length; i++) {
      var charCode = message.charCodeAt(i);
  
      if (charCode >= 65 && charCode <= 90) {
        var encryptedCharCode = ((charCode - 65 + shift) % 26) + 65;
        encryptedMessage += String.fromCharCode(encryptedCharCode);
      } else if (charCode >= 97 && charCode <= 122) {
        var encryptedCharCode = ((charCode - 97 + shift) % 26) + 97;
        encryptedMessage += String.fromCharCode(encryptedCharCode);
      } else {
        encryptedMessage += message.charAt(i);
      }
    }
  
    return encryptedMessage;
  }
  
  function cesarDecrypt(message, key) {
    var decryptedMessage = "";
    var shift = parseInt(key);
  
    for (var i = 0; i < message.length; i++) {
      var charCode = message.charCodeAt(i);
  
      if (charCode >= 65 && charCode <= 90) {
        var decryptedCharCode = ((charCode - 65 - shift + 26) % 26) + 65;
        decryptedMessage += String.fromCharCode(decryptedCharCode);
      } else if (charCode >= 97 && charCode <= 122) {
        var decryptedCharCode = ((charCode - 97 - shift + 26) % 26) + 97;
        decryptedMessage += String.fromCharCode(decryptedCharCode);
      } else {
        decryptedMessage += message.charAt(i);
      }
    }
  
    return decryptedMessage;
  }