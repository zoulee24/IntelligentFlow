<template>
  <view class="common" :style="height_style">
    <view v-for="(n, i) in number.toString().padStart(prefix, '0').split('')">
      <single-count-to :key="i" :number="parseInt(n)" :color="color" :size="size" />
    </view>
  </view>
</template>

<script>
  import SingleCountTo from './SingleCountTo.vue';
  export default {
    name: "CountTo",
    components: {
      SingleCountTo
    },
    props: {
      number: {
        type: Number,
        default: 0
      },
      size: {
        type: Number,
        default: 48
      },
      prefix: {
        type: Number,
        default: 3
      },
      color: {
        type: String,
        default: '#ffffff'
      }
    },
    computed: {
      height_style() {
        return `height: ${this.size};`;
      }
    },
  }
</script>

<style scoped>
  .common {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>