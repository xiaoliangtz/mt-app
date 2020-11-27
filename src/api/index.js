import axios from '@/axios';

var api = {
	
  searchHotWords (params) {
    return axios.get('http://open.duyiedu.com/api/meituan/header/searchHotWords.json', params)
  },
  getSearchList() {
    return axios.get('http://open.duyiedu.com/api/meituan/header/search.json');
  },
  getMenuList () {
    return axios.get('http://open.duyiedu.com/api/meituan/index/nav.json');
  },
  resultsByKeywords () {
    return axios.get('http://open.duyiedu.com/api/meituan/index/resultsByKeywords.json');
  },
  getProductsList () {
    return axios.get('http://open.duyiedu.com/api/meituan/list/goodsList.json');
  },
  getHotCiity () {
    return axios.get('http://open.duyiedu.com/api/meituan/city/hot.json');
  },
  getRecentCity () {
    return axios.get('http://open.duyiedu.com/api/meituan/city/recents.json');
  },
  getProviceList () {
    return axios.get('http://open.duyiedu.com/api/meituan/city/province.json');
  },
  getCurPosition () {
    return axios.get('http://open.duyiedu.com/api/meituan/city/getPosition.json');
  },
  getCityList () {
    return axios.get('http://open.duyiedu.com/api/meituan/city/cityList.json');
  },
  login (params) {
    return axios.get('http://open.duyiedu.com/api/meituan/login', params);
  },
  register (params) {
    return axios.get('http://open.duyiedu.com/api/meituan/register', params);
  }
};

export default api;

