import { ApiService } from '@apicase/services';

const WordpressService = (provider) => {
  return new ApiService({
    adapter,
    url: `${BASE_URL}/${API_PATH}`
  });
};
