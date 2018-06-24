<template>
  <div id="app">
    <div class="nav">
      <div class="logo">Shoptime</div>
      <router-link to="/Home" class="link" active-class="active" exact>Home</router-link>
      <router-link to="/Orders" class="link" active-class="active">Orders</router-link>
      <router-link to="/Products" class="link" active-class="active">Products</router-link>
      <div class="admin">ADMIN</div>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
font,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-weight: inherit;
  font-style: inherit;
  font-size: 100%;
  font-family: inherit;
  vertical-align: baseline;
}
body{
  background: #f2f2f2;
}

#app {
  font-family: HelveticaNeue;
  width: 100%;
  min-width: 1024px;
  .nav {
    display: flex;
    padding: 0 42px;
    align-items: center;
    height: 70px;
    background: #000000;
    color: #ffffff;
    font-weight: bolder;
    position: relative;

    .logo {
      font-size: 24px;
      color: #ffffff;
      margin-right: 65px;
    }

    .link {
      text-decoration: none;
      font-size: 16px;
      color: #9B9B9B;
      width: 80px;
      text-align: center;
      height: 66px;
      line-height: 66px;
    }

    .link:hover, .link.active {
      color: #ffffff;
      border-bottom: 4px solid white;
    }

    .admin {
      position: absolute;
      right: 42px;
    }
  }
  .container {
    width: 940px;
    margin: 0 auto;
  }
}
</style>
