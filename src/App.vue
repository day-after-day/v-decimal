<template>
  <div>
    <p>
      只允许整数
      <input type="text" v-model="integer" v-decimal="0">
    </p>
    <p>
      只允许两位小数
      <input type="text" v-model="decimal2" v-decimal>
    </p>
    <p>
      只允许四位小数
      <input type="text" v-model="decimal4" v-decimal="4">
    </p>
  </div>
</template>


<script>


export default {
  name: 'app',
  data() {
    return {
      integer: '',
      decimal2: '',
      decimal4: ''
    }
  },
  mounted() {

  },
  methods: {

  }
};
</script>


<style>
html,
body {
  height: 100%;
  width: 100%;
}
* {
  padding: 0;
  margin: 0;
}
ul {
  list-style: none;
}
#app {
  height: 100%;
}
.el-menu {
  border: 0 none !important;
}
.el-menu--horizontal {
  border: 0 none !important ;
}
/*滚动条*/
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}

::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 10px;
}

::-webkit-scrollbar-track {
  /* background-color: #f1f1f1; */
  background-color: transparent;
  border-radius: 10px;
}

.fl {
  float: left;
}
.fr {
  float: right;
}
.pointer {
  cursor: pointer;
}
.oh {
  overflow: hidden;
}
.el-message {
  top: 60px;
}
</style>
