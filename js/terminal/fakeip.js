let fakeIpTarget = generateRandom(15)
const fakeIp1 = generateRandom(15)
const fakeIp2 = generateRandom(15)

function generateRandom(length) {
    const characters = '.123.45.6789.';
    return Array.from({ length }, () =>
        characters.charAt(Math.floor(Math.random() * characters.length))
    ).join('');
}

function fakeIpDebug() {
    console.log("FakeIP1 " + fakeIp1)
    console.log("FakeIP2 " + fakeIp2)
}
