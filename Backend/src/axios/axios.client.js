import axios from "axios"

const get = async (url) => {
    const response = await axios.get(url);
    return response.date;
}

export default { get };