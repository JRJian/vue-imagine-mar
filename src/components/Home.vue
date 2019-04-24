<template>
  <div class="home">
    <div class="c-loader-letter" v-for="character in characters" v-bind:key="character">
      <span class="c-letter">{{ character }}</span>
    </div>
    <div class="c-tagline-wrapper">
      <p>Mario Dragicevic Photography Portfolio</p>
    </div>
    <div class="c-click-and-hold-wrapper">
      <span class="c-click-and-hold">
        <svg viewBox=" 0 0 114 114">
          <circle
            cx="56"
            cy="56"
            r="54"
            stroke="#ffffff"
            stroke-width="4"
            fill="none"
            style="stroke-dashoffset: -345px;"
          ></circle>
        </svg>
        <span>
          TAP HERE
          <br>& HOLD
        </span>
      </span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { inherits } from "util";

export default {
  name: "home",
  computed: mapState("home", {
    characters: state => state.characters
  }),
  mounted() {
    var translateXs = [0, -100, 100, 0];
    var letters = document.querySelectorAll(".home .c-loader-letter");
    for (var i = 0; i < translateXs.length; i++) {
      var letter = letters[i];
      letter.setAttribute("data-tx", translateXs[i]);
    }

    this.$anime.set(".home .c-tagline-wrapper>p", {
      translateY: 100
    });

    this.$anime
      .timeline()
      .add({
        targets: ".home .c-loader-letter",
        delay: 2000,
        opacity: 0.5,
        duration: 2000,
        easing: "easeOutQuad"
      })
      .add({
        targets: ".home .c-tagline-wrapper>p",
        translateY: 0,
        opacity: 1,
        duration: 1000,
        easing: "easeOutQuad"
      })
      .add({
        targets: ".home .c-loader-letter",
        opacity: 1.0,
        translateY: el => {
          return el.getAttribute("data-tx");
        },
        duration: 1500,
        easing: "easeOutQuad"
      });
  }
};
</script>

<style>
.home {
  box-sizing: border-box;
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  box-align: center;
  padding: 25px;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
}
.home > .c-loader-letter {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  opacity: 0;
}
.home > .c-loader-letter > .c-letter {
  font-size: 17.5vw;
  line-height: 0.8em;
  padding: 0 10px;
  display: inline-block;
  pointer-events: none;
  user-select: none;
}
.c-tagline-wrapper {
  display: inline-block;
  position: absolute;
  top: 66vh;
  left: 29.83333vw;
  max-width: 160px;
  margin: 20px 4.16667%;
  z-index: 2;
  overflow: hidden;
}
.c-tagline-wrapper > p {
  font-size: 12px;
  line-height: normal;
  opacity: 0;
}
.c-click-and-hold-wrapper {
  width: 220px;
  height: 220px;
  border-radius: 200px;
  position: absolute;
  color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  right: 10vw;
  bottom: 10vh;
  z-index: 51;
}
.c-click-and-hold {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  width: 114px;
  height: 114px;
  border-radius: 100px;
  text-align: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
}
.c-click-and-hold > span {
  font-size: 10px;
  display: block;
  padding: 10px;
  line-height: 13px;
  width: 100%;
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.c-click-and-hold svg {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-transform-origin: center;
    transform-origin: center;
}
</style>
