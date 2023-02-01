import axios from 'axios';
export const baseUrl = process.env.REACT_APP_HOST_KEY

type User = {
  id: number;
  email: string;
  first_name: string;
};

type GetUsersResponse = {
  data: User[];
};

export const getNews = async function getUsers() {
  try {
    // 👇️ const data: GetUsersResponse
    const { data, status } = await axios.get<GetUsersResponse>(
      'https://newsapi.org/v2/everything?q=tesla&from=2022-12-31&sortBy=publishedAt&apiKey=08a1125e14ac48248b07e0e9a62dd2d6',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    // console.log(JSON.stringify(data, null, 4));
    console.log(data, baseUrl);

    // 👇️ "response status is: 200"
    console.log('response status is: ', status);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

