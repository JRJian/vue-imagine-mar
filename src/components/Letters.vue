<template>
  <div class="letters">
    <div class="c-loader-letter" v-for="character in characters" v-bind:key="character">
      <span class="c-letter">{{ character }}</span>
    </div>
    <div class="c-tagline-wrapper">
      <p>Mario Dragicevic Photography Portfolio</p>
    </div>
    <scrolling-images ref="imageschild"></scrolling-images>
    <div class="c-click-and-hold-wrapper">
      <span class="c-click-and-hold" v-on:mousedown="mousedown()" v-on:mouseup="mouseup()">
        <!-- <svg viewBox=" 0 0 114 114">
          <circle cx="56" cy="56" r="54" stroke-width="1" stroke="#fff" fill="none"></circle>
          <circle
            id = "progress"
            cx="56"
            cy="56"
            r="54"
            stroke="#fff"
            stroke-linecap="round"
            stroke-width="4"
            fill="none"
          ></circle>
        </svg>-->
        <svg width="114" height="114">
          <circle id="backdrop" r="54" cy="56" cx="56" stroke-width="1" stroke="#fff" fill="none"></circle>
          <circle id="progress" r="54" cy="56" cx="56" stroke-width="3" stroke="#fff" fill="none"></circle>
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
import ScrollingImages from "./ScrollingImages.vue";
import { mapState } from "vuex";

export default {
  name: "letters",
  data() {
    return {
      animatingObjs: []
    };
  },
  components: {
    "scrolling-images": ScrollingImages
  },
  computed: mapState("home", {
    characters: state => state.characters
  }),
  methods: {
    mousedown: function(event) {
      for (var i = 0; i < this.animatingObjs.length; i++) {
        this.animatingObjs[i].direction = "normal";
        this.animatingObjs[i].reset();
        this.animatingObjs[i].restart();
      }
    },
    mouseup: function(event) {
      var progress = this.animatingObjs[0].progress;
      if (progress == 100) {
        this.$refs.imageschild.stopAnims('')
        var activeInstances = this.$anime.running
        for (var i = 0; i < activeInstances.length; i++) {
          activeInstancess[i].pause();
        }
      } else {
        for (var i = 0; i < this.animatingObjs.length; i++) {
          this.animatingObjs[i].reverse();
        }
      }
    }
  },
  mounted() {
    var letters = document.querySelectorAll(".letters .c-loader-letter");
    var translateXs = ["0%", "-110%", "110%", "0%"];
    for (var i = 0; i < translateXs.length; i++) {
      var letter = letters[i];
      letter.setAttribute("data-tx", translateXs[i]);
    }

    this.$anime.set(".letters .c-tagline-wrapper>p", {
      translateY: 100
    });
    this.$anime.set(".letters .c-click-and-hold-wrapper", {
      scale: 0
    });

    this.$anime
      .timeline()
      .add({
        targets: ".letters .c-loader-letter",
        delay: 2000,
        opacity: 0.5,
        duration: 2000,
        easing: "easeOutQuad"
      })
      .add({
        targets: ".letters .c-tagline-wrapper>p",
        translateY: 0,
        opacity: 1,
        duration: 1000,
        easing: "easeOutQuad"
      })
      .add({
        targets: ".letters .c-loader-letter",
        opacity: 1.0,
        translateY: el => {
          return el.getAttribute("data-tx");
        },
        duration: 1500,
        easing: "easeOutCirc"
      })
      .add({
        targets: ".letters .c-click-and-hold-wrapper",
        opacity: 1.0,
        scale: 1.0,
        duration: 800,
        easing: "easeOutQuad"
      });

    this.animatingObjs.push(
      this.$anime({
        targets: "#progress",
        strokeDashoffset: {
          value: [-340, 0],
          easing: "easeInOutQuint",
          duration: 1000
        },
        autoplay: false
      })
    );
    this.animatingObjs.push(
      this.$anime({
        targets: ".c-click-and-hold-wrapper .c-click-and-hold svg",
        rotate: {
          value: "-=0.15turn", // 0 * 2 = '2turn'
          duration: 1000,
          easing: "easeInOutQuint"
        },
        autoplay: false
      })
    );
    this.animatingObjs.push(
      this.$anime({
        targets:
          ".letters > .c-loader-letter > .c-letter, .scrolling-images .images-column figure, .c-tagline-wrapper, .c-click-and-hold-wrapper .c-click-and-hold",
        rotate: -5,
        duration: 1000,
        easing: "easeInOutQuint",
        autoplay: false
      })
    );
  }
};
</script>

<style>
.letters {
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
  padding: 0 5%;
}
.letters > .c-loader-letter {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  opacity: 0;
  z-index: 10;
}
.letters > .c-loader-letter > .c-letter {
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
  opacity: 0;
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
circle[id="progress"] {
  stroke-dasharray: 340;
  stroke-dashoffset: -340;
}
</style>
