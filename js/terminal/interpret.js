const yes = 'yes'
const local = 'local'
let currency = 0

function ehelp() {
    console.log("██████████████████");
    console.log("▓-=+ COMMANDS +=-▓")
    console.log("▓ehelp  |  etutor▓")
}

function etutor() {
    console.log("█████████████████████████████████");
    console.log("▓How to control the ETAterminal:▓");
    console.log("▓Use eHELP for a commands list. ▓");
    console.log("▓Use eKILL to kill the terminal.▓");
}

function ekill(yes) {
    if (yes) {
        
    } else {
        console.log("PLEASE CONFIRM WITH ekill(yes)")
    }
}

function ecrypto() {
    console.log('CURRENT CRYPTOCURRENCY:')
    console.log("¢" + currency)
}

function eiptrack(local) {
    if (local) {
        setTimeout(() => {
            console.log('FINDING IPS ON LOCAL NET.');
            setTimeout(() => {
                console.log('FINDING IPS ON LOCAL NET..');
                setTimeout(() => {
                    console.log('FINDING IPS ON LOCAL NET...');
                    setTimeout(() => {
                        console.log('1 IP(s) FOUND!');
                        setTimeout(() => {
                            console.log('IP: ' + fakeIpTarget);
                        }, 250);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 100);
    } else {
        setTimeout(() => {
            console.log('FINDING IPS ON PUBLIC NET.');
            setTimeout(() => {
                console.log('FINDING IPS ON PUBLIC NET..');
                setTimeout(() => {
                    console.log('FINDING IPS ON PUBLIC NET...');
                    setTimeout(() => {
                        console.log('1 IP(s) FOUND!');
                        setTimeout(() => {
                            console.log('IP: ' + fakeIpTarget);
                        }, 250);
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 100);
    }
}

function ehack(fakeIpTarget) {
    if (fakeIpTarget) {
        currency += 750
        setTimeout(() => {
            console.log('HACKING.');
            setTimeout(() => {
                console.log('HACKING..');
                setTimeout(() => {
                    console.log('HACKING...');
                    setTimeout(() => {
                        console.log('INJECTED!');
                        console.log('STOLE 750 CRYPTO!');
                    }, 5000);
                }, 5000);
            }, 5000);
        }, 100);
    } else {
        console.log('PLEASE ENTER A IP ADDRESS')
        console.log('TO HACK ANOTHER SYSTEM!!!')
    }
}

function ecodesteal(fakeIpTarget) {
    if (fakeIpTarget) {
        setTimeout(() => {
            console.log('FINDING PSSWD.');
            setTimeout(() => {
                console.log('FINDING PSSWD..');
                setTimeout(() => {
                    console.log('FINDING PSSWD...');
                    setTimeout(() => {
                        let yapPasswordTarget = generateRandomPassword(10)
                        console.log('PASSWORD FOUND:');
                        console.log(yapPasswordTarget);
                    }, 4000);
                }, 4000);
            }, 4000);
        }, 100);
    } else {
        console.log('███████████████████████████')
        console.log('▓PLEASE ENTER A IP ADDRESS▓')
        console.log("▓TO STEAL ANOTHER SYSTEM'S▓")
        console.log('▓YAPstore PASSWORDS & DATA▓')
        console.log('▓█████████████████████████▓')
    }
}