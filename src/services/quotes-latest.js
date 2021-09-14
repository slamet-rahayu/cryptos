import axios from 'axios';
import {BASE_API, API_KEY} from '@env';

async function fetchQuotesLatest(slug) {
  try {
    const {data} = await axios({
      method: 'GET',
      url: `${BASE_API}/cryptocurrency/quotes/latest?slug=${slug}`,
      headers: {
        'X-CMC_PRO_API_KEY': API_KEY,
      },
    });
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export default fetchQuotesLatest;
