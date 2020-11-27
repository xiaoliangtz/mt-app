import axios from 'axios';
var apiMt = {
    getHotMovies () {
		return axios.get('../../static/mock/hotMovies.json');
	},
	getComingMovies () {
		return axios.get('../../static/mock/comingMovies.json');
	},
	getMinsuCitys () {
		return axios.get('../../static/mock/minsuCitys.json');
	},
	getMinsuTJ () {
		return axios.get('../../static/mock/minsuTJ.json');
	},
	getMinsuJN () {
		return axios.get('../static/mock/minsuJN.json');
	},
	getMinsuDL () {
		return axios.get('../../static/mock/minsuDL.json');
	},
	getMinsuTY () {
		return axios.get('../../static/mock/minsuTY.json');
	},
	getMinsuSJZ () {
		return axios.get('../../static/mock/minsuSJZ.json');
	},
	getMinsuQHD () {
		return axios.get('../../static/mock/minsuQHD.json');
	},
	getMinsuHHHT () {
		return axios.get('../../static/mock/minsuHHHT.json');
	},
	getProvinceCityInfo () {
		return axios.get('../../static/mock/provinceCityInfo.json');
	},
	getProductList () {
		return axios.get('../../static/mock/productList.json');
	}
}
export default apiMt;