import axios from 'axios';

const getDataFile = () => {
    return axios.get('https://data.sfgov.org/resource/nuek-vuh3.json').then(response => response.data);
}

export default getDataFile;