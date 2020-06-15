class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type ? 'direct' : 'reverse'
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw Error();
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let encryptedMessage = '';
    for (let i = 0, j = 0; i < message.length; i++) {
      if (message[i].match(/^[A-Z]$/)) {
        encryptedMessage += String.fromCharCode(((message[i].charCodeAt() + key[j % key.length].charCodeAt()) % 26) + 97);
        j++;
      } else {
        encryptedMessage += message[i];
      }
    }

    return this.type === 'reverse'
      ? encryptedMessage.split('').reverse().join('').toUpperCase()
      : encryptedMessage.toUpperCase();
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw Error();
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let message = '';
    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage[i].match(/^[A-Z]$/)) {
        let difference = encryptedMessage[i].charCodeAt() - key[j % key.length].charCodeAt();
        if (difference >= 0) {
          message += String.fromCharCode((difference % 26) + 97);
          j++;
        } else {
          message += String.fromCharCode((26 + difference % 26) + 97);
          j++;
        }
      } else {
        message += encryptedMessage[i];
      }
    }

    return this.type === 'reverse'
    ? message.split('').reverse().join('').toUpperCase()
    : message.toUpperCase();
  }

}

module.exports = VigenereCipheringMachine;