import axios from 'axios';
import { Row } from './models';

interface GetDataFileOptions {
  limit?: number;
  where?: string;
};

const getDataFile = (options?: GetDataFileOptions) => {
  // Set a base URL
  let url = 'https://data.sfgov.org/resource/nuek-vuh3.json';

  // If there are URL parameters, convert them to SoQL
  if (options) {
    const params = []

    Object.entries(options).forEach((option, index) => {
      const [key, value] = option;
      const param = `$${key}=${value}`;
      params.push(param);
    });

    // Append the Base URL with the SoQL query parameters
    url += `?${params.join('&')}`;
  }

    return axios.get(url).then(response => response.data as Row[]);
}

export default getDataFile;