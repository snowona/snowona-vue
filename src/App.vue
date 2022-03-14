<template>
  <!--祖传导航栏-->
  <header class="snow-nav">
    <div class="inner">
      <div class="float-left">
        <p class="title">Snowona</p>
      </div>
      <div class="float-right">
        <ul class="menu">
          <li v-for="item in nav_list" :key="item.id">
            <router-link :to="{'name':item.label}"><span>{{ item.label }}</span></router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>

  <!--页面展示-->
  <div class="snow-view">
    <router-view/>
  </div>

  <!--祖传页脚-->
  <footer class="snow-footer">
    <div class="inner">
      <p class="copyright">
        CopyRight © 2020 Snowona.All Rights Reserved.
      </p>
    </div>
  </footer>


</template>


<script>
export default {
  name: "App",
  data() {
    return {
      run_env: 'desktop',
      nav_list: [
        {'id': '1', 'label': 'home'},
        {'id': '2', 'label': 'about'},
        {'id': '3', 'label': 'album'},
      ]
    }
  },
  method: {
    app_init: function () {}
  }
}
</script>


<style lang="scss">
/*#app {*/
/*    font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*    -webkit-font-smoothing: antialiased;*/
/*    -moz-osx-font-smoothing: grayscale;*/
/*    text-align: center;*/
/*    color: #FCFAF2;*/
/*}*/

html, body {
  margin: 0;
  padding: 0;
}

.inner {
  max-width: 1180px;
  margin: 0 auto;
}

.snow-nav {
  width: 100%;
  height: 64px;
  z-index: 100;
  position: fixed;
  font-size: 20px;
  font-family: Sans-serif;
  background-color: #252839;

  .float-left {
    float: left;

    .title {
      color: #b5b5b7;
      /*font-weight: bold;*/
    }
  }

  .float-right {
    float: right;

    .menu {
      padding: 0;

      li {
        height: 64px;
        display: inline-block;
        /*font-weight: bold;*/

        a {
          text-decoration: none;
          margin: 0 20px;
          color: #b5b5b7;

          &.router-link-exact-active {
            color: #f2b632;

            span {
              color: inherit;
              border-bottom: 2px solid #f2b632;
              padding-bottom: 2px;
            }
          }
        }
      }
    }
  }
}

.snow-view {
  padding-top: 64px;
}

/*#nav {*/
/*    padding: 30px;*/

/*    a {*/
/*        font-weight: bold;*/
/*        color: #2c3e50;*/

/*        &.router-link-exact-active {*/
/*            color: #42b983;*/
/*        }*/
/*    }*/
/*}*/

</style>
