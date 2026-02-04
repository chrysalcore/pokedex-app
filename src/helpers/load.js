import axios from "axios";

async function load(url, search) {
    try {
        let data;

        if(localStorage.getItem(url)) {
            data = JSON.parse(localStorage.getItem(url))
        } else {
            const response = await axios.get(url)
            data = response.data
        }

        localStorage.setItem(url, JSON.stringify(data))
        data.results = data.results.filter(item => item.name.includes(search))
        return { type: 'SUCCESS', payload: data }

    } catch(error) {
        return { type: 'ERROR', payload: error }
    }
}

export default load