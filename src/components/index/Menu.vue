<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="menuLeave">
      <dt>全部分类</dt>
      <dd v-for="item in menuList" :key="item.name" @mouseenter="menuEnter(item)">
				<i :class="item.type"></i>
        {{ item.name }}
				<span class="arrow"></span>
      </dd>
    </dl>
		<div class="detail" v-if="curDetail" @mouseenter="detailEnter" @mouseleave="detailLeave">
			<template v-for="(item, index) in curDetail.items" >
				<h4 :key="index">{{ item.title }}</h4>
				<span v-for="(v, i) in item.items" :key="v + '_' + i">{{ v }}</span>
			</template>
		</div>
  </div>
</template>
<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
			menuList: [],
			curDetail: null,
    };
  },
  // mounted () {
  //   axios.get('../static/mock/getCommends.json').then(res => {
  //   console.log(res.data);
  //   });
  // },
  created() {
    api.getMenuList().then((res) => {
      // console.log(res.data.data);
			this.menuList = res.data.data;
			// console.log(res.data.data[0].items[0].items)
    });
	},
	methods: {
		menuEnter (item) {
			this.curDetail = item;
		},
		menuLeave () {
			this.timer = setTimeout( () => {
				this.curDetail = null;
			},200 );
		},
		detailEnter () {
			clearTimeout(this.timer);
		},
		detailLeave () {
			this.curDetail = null;
		}
	}
};
</script>
