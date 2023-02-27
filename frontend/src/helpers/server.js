const querystring = require("querystring");
const { postAPI } = require("./utils");



const getFlyers = async (params={}) => {
  try {
    const paramsString = querystring.stringify(params);
    const res = await postAPI(
      `/get-flyer-list`,
      {},

      "GET"
    )
    return { Flyers: res?.data}
  } catch (err) {
 
    return { err: err.response || JSON.stringify(err) };
  }
};

export{getFlyers}