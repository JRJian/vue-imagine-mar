<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<!-- https://www.mariodragicevic.com/ -->
<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
#app {
  font-family: Empirica Headline Regular Roman Extra-light;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
body {
  background-color: #252423;
}
ul, ol {
  list-style-type: none;
}
* {
  outline: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
abbr, address, article, aside, audio, b, blockquote, body, canvas, caption, cite, code, dd, del, details, dfn, div, dl, dt, em, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, p, pre, q, samp, section, small, span, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, ul, var, video {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}
</style>
