<template>
  <div class="snow-home">
    <!--    <statics alt="Vue logo" src="../assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <!--封面-->
    <section class="snow-cover" :style="{padding: cover_padding}">
      <div class="inner" ref="cover">
        <p>人生是个极大概率出错事件.</p>
        <h2>Snowona</h2>
      </div>
    </section>

    <!--        lightgrey  #717D90
                darkgrey #252839

    -->
    <!--  网站介绍  -->
    <section class="snow-darkgrey-section">
      <div class="inner">
        <div class="title">
          <p>Something about this website.</p>
        </div>
      </div>
      <div class="snow-cont"></div>
    </section>

    <section class="snow-lightgrey-section">
      <div class="inner">
        <div class="title">
          <p>Album</p>
        </div>
      </div>
      <div class="snow-cont">
        <el-carousel arrow="always" ref="album" :height="banner_height">
          <el-carousel-item v-for="(item, index) in homeData.section2.content" :key="index">
            <img :src="item.src" :alt="item.title" >
          </el-carousel-item>
        </el-carousel>
      </div>

    </section>
  </div>
</template>


<script>
// 导入 VUE components
// import ForceLayout from "../components/echarts/forceLayout.vue";
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  // components: {
  //     ForceLayout
  //     //HelloWorld
  // },
  data() {
    return {
      cover_padding: '',
      banner_height: '',
      homeData: this.$store.state.home_data,
    }
  },
  methods: {
    set_cover_padding: function () {
      //设置封面内边距
      let client_height = document.documentElement.clientHeight;
      let title_height = this.$refs.cover.clientHeight;
      let padding = ((client_height - title_height - 64) / 2);
      this.cover_padding = `${padding}px 0px`
    },
    // 预设16：9   根据走马灯宽度 按一定比例设置图片高度
    set_banner_height: function () {
      let imageWidth = this.$refs.album.$el.clientWidth;
      let imageHeight = 0.421875 * imageWidth;
      this.banner_height = `${imageHeight}px`;
    },
  },
  mounted() {
    this.set_cover_padding()
    this.set_banner_height()
  }
}
</script>

<style lang="scss">

.snow-home {
  background: url("../assets/mountain.png") no-repeat fixed top;
  background-size: cover;
  position: relative;
}

///////////////// 封面样式 //////////////////
.snow-cover {
  text-align: center;

  p {
    margin-top: 0;
    color: #f2b632;
    font-size: 30px;
    letter-spacing: 2px;
  }

  h2 {
    color: #f2b632;
    margin: 30px 0 0 0;
    letter-spacing: 8px;
  }

}

///////////////// 板块样式 //////////////////
.snow-darkgrey-section {
  background-color: #252839;
  padding: 4em 0;
  height: 500px;

  .title {
    text-align: center;

    p {
      margin: 0px;
      font-size: 2em;
      color: #f2b632;
    }
  }

}

.snow-lightgrey-section {
  background-color: #5c677d;
  padding: 4em 0;
  /*height: 500px;*/

  .title {
    text-align: center;

    p {
      margin: 0px auto 10px auto;
      font-size: 2em;
      color: #f2b632;
    }

  }

}

.snow-cont {
  max-width: 970px;
  margin: 0 auto;

  img {
    /*图片宽度自适应*/
    width: 100%;
  }
}

</style>
