import axios from 'axios';

export default async function letsFetch(url) {
  return axios.get(url, {
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer BQDtQ3wk7WSRoUPs2mYWRQyIRNW01a8tgwb7w--vmrTEIvTvbMJLRfL5a1DuhMKKZiHhlR6pXKtX6WW6ZkCNN_7WuUldWNxXlF3dpvSdtP2lkrcN5BWO96KZu_xvdahO-HHkQ2dSYIlb9n0Fciwy2xibklqr',
      'Content-Type': 'application/json'
    }

  });
}
