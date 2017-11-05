### 基础使用

::: demo
```html
<template>
<div>
  <v-checkbox v-model="v1" @change="v1Change">选项1</v-checkbox>
  <v-checkbox v-model="v2" @change="v2Change">选项2</v-checkbox>
</div>
</template>
<script>
let script = {
  data () {
    return {
      v1: false,
      v2: true
    }
  },
  methods: {
    v1Change () {
      console.log(this.v1)
    },
    v2Change () {
      console.log(this.v2)
    }
  }
}
export default script
</script>
```
:::