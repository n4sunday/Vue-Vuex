<template>
  <div>
    <h2>อาหารที่ชอบ</h2>
    <input type="text" name="food" value="" @input="changFood"/>
  </div>
</template>
<script>
export default {
    methods:{
        changFood:function(event){
            this.$store.commit('setFood',event.target.value)
        }
    }
};
</script>
<style>
</style>


