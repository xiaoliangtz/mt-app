<template>
    <div 
      :class="['choose-wrap', disabled ? 'disabled' : '']"
      @click="showWrapper"
      v-document-click="documentClick"
    >
      <div class="choose">
        <span>{{ value }}</span>
        <i class="el-icon-caret-bottom" />
        <div
          :class="{'mt-content': true, 'active': showWrapperActive}"
        >
          <h2>{{ title }}</h2>
          <div :class="['wrapper', className]">
            <div 
              class="col"
              v-for="(listData, index) in renderList"
              :key="index"
            >
              <span
                :class="{'mt-item': true, 'active': item[name] == value}"
                v-for="(item, index) in listData"
                :key="index"
                @click="changeValue(item)"
              >{{ item[name] }}</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
</template>
<script>
export default {
  // data () {
  //   return {
  //     name: '',
  //   }
  // },
  props: {
    list: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      required: true,
    },
    showWrapperActive: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
    },
    className: {
      type: String,
      required: true,
    }
  },
  computed: {
    renderList () {
      let resultList = [];
      // console.log('list' + this.list)
      // console.log(this.list);
      let col = Math.ceil(this.list.length / 12);
      for(let i = 0; i < col; i++) {
        let data = this.list.slice(i * 12, i * 12 + 12);
        resultList.push(data);
      }
      return resultList;
    },
    name () {
      return this.list[0].provinceName ? 'provinceName' : 'name';
    }
  },
  methods: {
    showWrapper (e) {
      // 阻止事件冒泡
      e.stopPropagation();
      if(!this.disabled) {
        this.$emit('change_active', true);
      }
    },
    documentClick () {
      this.$emit('change_active', false);
    },
    changeValue (item) {
      this.$emit('change_active', false);
      this.$emit('change', item);
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/css/changecity/select.scss';
</style>