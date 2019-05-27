<template>
  <div>
    <h2>กีฬาที่ชอบ</h2>
    <input type="text" name="sport" value="" @input="changSport"/>
  </div>
</template>
<script>
export default {
    methods:{
        changSport:function(event){
            this.$store.commit('setSport',event.target.value)
        }
    }
};
</script>
<style>
</style>


