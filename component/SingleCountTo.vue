<template>
  <view class="common" :style="height_style">
    <view class="roller" v-for="num in numbers" :key="num" :style="transform(number)">
      <text class="text" :style="text_style">{{num}}</text>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      number: {
        type: Number,
        default: 0
      },
      size: {
        type: Number,
        default: 48
      },
      color: {
        type: String,
        default: '#ffffff'
      }
    },
    methods: {
      transform(n) {
        const temp = this.size * n;
        return `transform: translateY(-${temp}px); height: ${this.size};`;
      }
    },
    computed: {
      text_style() {
        // const temp = `font-size= ${this.size}px; color: ${this.color};`;
        // console.log(temp);
        return `font-size: ${this.size}px; color: ${this.color};`;
      },
      height_style() {
        return `height: ${this.size};`;
      }
    },
    data() {
      return {
        numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        stt: "font-size: 96px; color: #ffffff;"
      }
    }
  }
</script>

<style scoped>
  .common {
    overflow: hidden;
  }

  .roller {
    transition: transform 1s;
  }

  .text {
    font-weight: 900;
  }
</style>