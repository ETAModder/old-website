onmessage = function (e) {
    const { url, numberOfRequests, userAgent, duration } = e.data;
    const endTime = Date.now() + duration * 1000;
    let requestCount = 0;

    function sendRequest() {
        if (Date.now() > endTime || requestCount >= numberOfRequests) {
            postMessage({ status: 'complete', message: 'Stress test completed.' });
            return;
        }

        fetch(url, {
            method: 'GET',
            headers: {
                'User-Agent': userAgent
            }
        })
            .then(response => {
                postMessage({ status: 'running', message: `Request ${requestCount + 1} response: ${response.status}` });
                requestCount++;
                sendRequest();
            })
            .catch(error => {
                postMessage({ status: 'running', message: `Request ${requestCount + 1} failed: ${error}` });
                requestCount++;
                sendRequest();
            });
    }

    sendRequest();
};
