<template>
  <div class="scrolling-images">
    <ul class="images-column" v-for="images in flowImages" v-bind:Key="images">
      <li v-for="image in images" v-bind:key="image">
        <figure class="image-wrapper">
          <img v-bind:src="image">
        </figure>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
import common from '../common'

export default {
  name: "scrollingImages",
  data() {
    return {
      animatingObjs: []
    };
  },
  computed: mapState("home", {
    flowImages: state => state.flowImages
  }),
  methods: {
    stopAnims: function(e) {
      for (var i = 0; i < this.animatingObjs.length; i++) {
        this.animatingObjs[i].pause();
      }
      // 消失动画
      var oddTargets = document.querySelectorAll(
        ".scrolling-images .images-column:nth-child(odd)"
      );
      var evenTargets = document.querySelectorAll(
        ".scrolling-images .images-column:nth-child(even)"
      );
      this.$anime.timeline().add({
        targets: oddTargets,
        translateY: '1%',
        easing: "easeOutSine",
        duration: 300
      })
      .add({
        targets: oddTargets,
        translateY: "75%",
        easing: "easeInOutQuart",
        opacity: 0.3,
        duration: 1500,
        delay: 100
      })
      this.$anime.timeline().add({
        targets: evenTargets,
        translateY: '-1%',
        easing: "easeOutSine",
        duration: 300
      })
      .add({
        targets: evenTargets,
        translateY: "-75%",
        easing: "easeInOutQuart",
        opacity: 0.3,
        duration: 2500,
        delay: 100
      })
    }
  },
  mounted() {
    var durationT = 90000;
    var delayT = 4000;
    var oddTargets = document.querySelectorAll(
      ".scrolling-images .images-column:nth-child(odd)"
    );
    var evenTargets = document.querySelectorAll(
      ".scrolling-images .images-column:nth-child(even)"
    );
    this.$anime.set(oddTargets, {
      translateY: "-50%",
      opacity: 0
    });
    this.$anime.set(evenTargets, {
      translateY: "50%",
      opacity: 0
    });
    this.$anime({
      targets: ".scrolling-images .images-column",
      opacity: 1,
      easing: "linear",
      duration: 1000,
      delay: delayT
    });
    this.animatingObjs.push(
      this.$anime({
        targets: oddTargets,
        translateY: "50%",
        easing: "linear",
        duration: durationT,
        delay: delayT,
        loop: true,
        direction: "alternate"
      })
    )
    this.animatingObjs.push(
      this.$anime({
        targets: evenTargets,
        translateY: "-50%",
        easing: "linear",
        duration: durationT,
        delay: delayT,
        loop: true,
        direction: "alternate"
      })
    )
  }
};
</script>
<style>
.scrolling-images {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 0 8.3%;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  z-index: 1;
}
.scrolling-images::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  z-index: 2;
}
.scrolling-images .images-column {
  width: 20%;
  height: 200vh;
  position: relative;
  z-index: 1;
  -webkit-box-orient: vertical;
  box-orient: vertical;
  -webkit-box-direction: normal;
  box-direction: normal;
  display: flex;
  flex-direction: column;
  box-pack: justify;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.scrolling-images .images-column:nth-child(2) {
  width: 30%;
}
.scrolling-images .images-column:nth-child(2) li {
  opacity: 0.7;
}
.scrolling-images li {
  opacity: 0.4;
  display: list-item;
  text-align: -webkit-match-parent;
}
.scrolling-images .image-wrapper {
  position: relative;
  width: 100%;
  height: auto;
  background-size: cover;
  background-position: 50%;
}
.scrolling-images .image-wrapper img {
  width: 100%;
  height: auto;
  vertical-align: top;
  pointer-events: none;
  user-select: none;
}
</style>
