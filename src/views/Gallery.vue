<template>
  <div>
    <div class="container">
      <b-row>
        <b-col
          v-for="(data, index) in imageFruit"
          :key="index"
          lg="3"
          sm="6"
          xs="12"
          class="img-margin"
        >
          <b-img
            fluid
            :src="data.img"
            alt="Responsive image"
            @click="displayImage(data)"
          ></b-img>
        </b-col>
      </b-row>
    </div>
    <b-modal ref="show-image" size="lg" centered hide-header hide-footer>
      <DisplayImage :imgArr="displayImgArr" @hide="hideImage" />
    </b-modal>
  </div>
</template>

<script>
import DisplayImage from "../components/DisplayImage";
export default {
  name: "home",
  components: { DisplayImage },
  data() {
    return {
      largeImage: null,
      displayImgArr: [],
      imageFruit: [
        {
          id: 1,
          img: require("../assets/img/fruit-01.jpg")
        },
        {
          id: 2,
          img: require("../assets/img/fruit-02.jpg")
        },
        {
          id: 3,
          img: require("../assets/img/fruit-03.jpg")
        },
        {
          id: 4,
          img: require("../assets/img/fruit-04.jpg")
        },
        {
          id: 5,
          img: require("../assets/img/fruit-05.jpg")
        },
        {
          id: 6,
          img: require("../assets/img/fruit-06.jpg")
        },
        {
          id: 7,
          img: require("../assets/img/fruit-07.jpg")
        },
        {
          id: 8,
          img: require("../assets/img/fruit-08.jpg")
        },
        {
          id: 9,
          img: require("../assets/img/fruit-09.jpg")
        },
        {
          id: 10,
          img: require("../assets/img/fruit-10.jpg")
        },
        {
          id: 11,
          img: require("../assets/img/fruit-11.jpg")
        },
        {
          id: 12,
          img: require("../assets/img/fruit-12.jpg")
        }
      ]
    };
  },
  methods: {
    displayImage(data) {
      this.displayImgArr = [];
      this.largeImage = data;
      const filterImageLess = this.imageFruit.filter(img => img.id < data.id);
      const filterImageThan = this.imageFruit.filter(img => img.id > data.id);
      this.displayImgArr.push(this.largeImage);
      filterImageThan.forEach(item => {
        this.displayImgArr.push(item);
      });
      filterImageLess.forEach(item => {
        this.displayImgArr.push(item);
      });
      this.$refs["show-image"].show();
    },
    hideImage() {
      this.$refs["show-image"].hide();
    }
  }
};
</script>
<style>
.img-margin {
  padding: 20px 10px 10px 10px;
}
img {
  cursor: pointer;
}
</style>
