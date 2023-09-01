import axios from "axios";

const instance = axios.create({
  
  baseURL: "https://api.themoviedb.org/3",
  // "http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=2032V54PXY4O5F1KK42A"
  params: {
    api_key : process.env.REACT_APP_MOVIE_DB_API_KEY,
    language: "ko-KR",
  },
});

export default instance;