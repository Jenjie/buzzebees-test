<template>
  <div v-if="imgArr.length">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="10000"
      controls
      background="#ffffff"
      style="text-shadow: 1px 1px 2px #000;"
    >
      <template v-for="(data, index) in imgArr">
        <b-carousel-slide :key="index" :img-src="data.img"></b-carousel-slide>
      </template>
      <a class="carousel-control-prev" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "DisplayImage",
  props: {
    imgArr: {
      type: Array,
      default: Array
    }
  },
  data() {
    return {
      slide: 0
    };
  },
  methods: {
    hideModal() {
      this.$emit("hide", false);
    },
    onPrevious() {
      // console.log("previos");
    },
    onNext() {
      // console.log("next");
    }
  }
};
</script>

<style scoped>
.right {
  margin-left: auto;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: black !important;
}
</style>
