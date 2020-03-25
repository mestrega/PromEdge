import axios from 'axios';
import { Row } from './models';

interface GetDataFileOptions {
  limit?: number;
  where?: string;
};

const getDataFile = (options?: GetDataFileOptions) => {
  let url = 'https://data.sfgov.org/resource/nuek-vuh3.json';

  if (options) {
    const params = []

    Object.entries(options).forEach((option, index) => {
      const [key, value] = option;
      const param = `$${key}=${value}`;
      params.push(param);
    });

    url += `?${params.join('&')}`;
  }

    return axios.get(url).then(response => response.data as Row[]);
}

export default getDataFile;