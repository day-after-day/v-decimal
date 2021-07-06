# v-decimal

输入框限制组件：限制只能输入整数或者小数。

**默认：只允许输入整数和小数点，小数点后最多两位。**

## 使用示例

main.js
```` js
import Vue from 'vue'
import ElementUI from 'element-ui'
Vue.use(ElementUI)

import VDecimal from 'v-decimal'
Vue.use(VDecimal)
````

demo.vue
```` html
<template>
    <div>
        <!--只允许输入两位小数-->
        <el-input v-model="form.fundPoolMin" v-decimal />
        
        <!--只允许输入整数(0位小数)-->
        <el-input v-model="form.fundPoolMax" v-decimal="0" />
    </div>
</template>
````

