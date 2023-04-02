import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '51ac4ed291msh2fc236d478b75bep19f77bjsn7bce6ac75a1c',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });

    return data;
}