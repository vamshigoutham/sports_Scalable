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
    fetch(`https://jz43dl2q96.execute-api.us-east-1.amazonaws.com/newstage/workshops?keyword=${searchValue}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            successCb(data);
        })
        .catch(err => {
            console.log('err', err);
            errorCb()
        })
}

