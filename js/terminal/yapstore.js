let yapPasswordTarget = generateRandomPassword(10)
const yapPassword = generateRandomPassword(10)

function generateRandomPassword(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz1230!#$';
    return Array.from({ length }, () =>
        characters.charAt(Math.floor(Math.random() * characters.length))
    ).join('');
}

function yapPasswordDebug() {
    let yapPasswordTarget = generateRandomPassword(10)
    console.log("Your YAPstore psswd " + yapPassword)
    console.log("Target YAPstore psswd " + yapPasswordTarget)
}

function estore() {
    console.log("WELCOME TO THE YAPstore");
    console.log("ENTER A PASSWORD PLEASE");
    
}