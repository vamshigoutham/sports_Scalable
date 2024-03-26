export const getAllLocation = ({ sport, country, successCb, errorCb }) => {
    const url = `https://dzomxfjyq1.execute-api.us-east-1.amazonaws.com/dev-env/location?sport=${encodeURIComponent(sport)}&country=${encodeURIComponent(country)}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Convert the response body to JSON
        })
        .then(data => {
            console.log('Success:', data);
            if (successCb) successCb(data); // Ensure successCb is called with the parsed data
        })
        .catch(error => {
            console.error('Error:', error);
            if (errorCb) errorCb(error);
        });
};


export const getWorkshopData = ({searchValue, successCb, errorCb}) => {
    fetch(`https://1kp8jzrn10.execute-api.us-east-1.amazonaws.com/dev/workshops?keywords=${searchValue}`)
        .then(res => res.json())
        .then(data => {
            if (typeof successCb === 'function') {
                successCb(data);
            }
        })
        .catch(err => {
            console.log('err', err);
            if (typeof errorCb === 'function') {
                errorCb(err); // Pass err to errorCb
            }
        });
};


