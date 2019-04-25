<template>
  <div class="letters">
    <div class="c-loader-letter" v-for="character in characters" v-bind:key="character">
      <span class="c-letter">{{ character }}</span>
    </div>
    <div class="c-tagline-wrapper">
      <p>Mario Dragicevic Photography Portfolio</p>
    </div>
    <scrolling-images></scrolling-images>
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
          <circle id="backdrop" r="54" cy="56" cx="56" stroke-width="1" stroke="#333" fill="none"></circle>
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
import ScrollingImages from './ScrollingImages.vue'
import { mapState } from "vuex";

export default {
  name: "letters",
  data() {
    return {
      animatingObjs: [],
    }
  },
  components: {
    'scrolling-images': ScrollingImages
  },
  computed: mapState("home", {
    characters: state => state.characters
  }),
  methods: {
    mousedown: function (event) {
        this.animatingObjs.push(this.$anime({
          targets: '#progress',
          strokeDashoffset: {
            value: [this.$anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1000
          }
        }))
        this.animatingObjs.push(this.$anime({
          targets: 'svg',
          rotate: {
            value: '+=0.15turn', // 0 * 2 = '2turn'
            duration: 1000,
            easing: 'easeInOutSine'
          }
        }))
    },
    mouseup: function (event) {
      var progress = this.animatingObjs[0].progress
      if (progress == 1.0) {
      } else {
        for (var i = 0; i < this.animatingObjs.length; i++) {
            this.animatingObjs[i].reverse()
        }
      }
    }
  },
  mounted() {
    // var ProgressCircle = (function() {
    //   function ProgressCircle(percent, radius, elementClass) {
    //     this._percent = percent;
    //     this._radius = radius;
    //     this._elementClass = elementClass;
    //   }

    //   ProgressCircle.prototype.calcDashOffset = function() {
    //     var circumference;
    //     circumference = Math.PI * (2 * this._radius); //计算圆圈的周长
    //     return (
    //       Math.round(circumference - (this._percent / 100) * circumference) /
    //         100 +
    //       "rem"
    //     ); //计算圆圈要渲染的 长度
    //   };

    //   //渲染进度条
    //   ProgressCircle.prototype.createCSS = function() {
    //     var target = document.querySelector('progress')
    //     target.style.cssText = this.calcDashOffset()
    //   };

    //   ProgressCircle.prototype.init = function() {
    //     var _this = this;
    //     setTimeout(function() {
    //       return _this.createCSS();
    //     }, 1000);
    //   };

    //   return ProgressCircle;
    // })();
    // var progress = new ProgressCircle(50, 200, 'donut');
    // progress.init();

    var letters = document.querySelectorAll(".letters .c-loader-letter");
    var translateXs = ['0%', '-110%', '110%', '0%'];
    for (var i = 0; i < translateXs.length; i++) {
      var letter = letters[i];
      letter.setAttribute("data-tx", translateXs[i]);
    }
    
    this.$anime.set(".letters .c-tagline-wrapper>p", {
      translateY: 100
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
        easing: "easeOutQuad"
      });
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
  padding: 0 3.1%;
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
  stroke-dashoffset: 340;
}
</style>
