import axios from "axios";
const instance = axios.create();
export const postAPI = async (

  endpoint,
  data = {},
  headers = {},
  method = "GET",
  options = {}
) => {
 
  const config = {
    url: endpoint,
    method,
    data: data,
    headers,
    ...options,
  };

  const res = await axios(config).catch(console.error);
console.log(res)
  return res?.data || res?.err;
};


