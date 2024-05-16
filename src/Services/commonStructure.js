import axios from "axios"

export const commonRequest = async (method,url,data) => {

  let config = {
    method,
    url,
    data
  };

  return await axios(config)
  .then(result=>{return result})
  .catch(error => {return error});
}


// GET request for remote image in node.js
// axios({
//   method: 'get',
//   url: 'https://bit.ly/2mTM3nY',
//   responseType: 'stream'
// })
//   .then(function (response) {
//     response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
//   });
