function startTest() {
    const url = document.getElementById('url').value;
    const numberOfRequests = parseInt(document.getElementById('requests').value);
    const userAgent = document.getElementById('userAgent').value;
    const duration = parseInt(document.getElementById('duration').value);
    const output = document.getElementById('output');

    output.innerHTML = '';

    if (window.Worker) {
        const worker = new Worker('worker.js');
        worker.postMessage({ url, numberOfRequests, userAgent, duration });

        worker.onmessage = function (e) {
            const { status, message } = e.data;
            output.innerHTML += `${message} <br>`;
            if (status === 'complete') {
                worker.terminate();
            }
        };
    } else {
        alert('Your browser does not support Web Workers.');
    }
}
