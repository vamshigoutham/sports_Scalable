export const getAllLocation = ({sport, country, successCb}) => {
    fetch(`https://dzomxfjyq1.execute-api.us-east-1.amazonaws.com/dev-env/location?sport=${sport}&country=${country}`)
      .then(res => {
        console.log('res', res);
        successCb(res);
      })
      .catch(err => {
        console.log('err', err);
      })
}

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

