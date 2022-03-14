<template>
  <div class="snow-photograph">
    <div class="inner">
      <h2 class="snow-photograph-intro">Snowona's photo wall</h2>
      <div class="snow-photowall">
        <!-- photo-wall-demo示例  -->
        <template v-for="(item, index) in photo_data" :key="index">
          <!-- 2022年1月照片 demo  -->
          <div class="photo-entry">

            <!-- 左侧  图片 2022年-1月  -->
            <div class="entry-left">
              <div class="entry-left-text">
                <span class="month">{{ item.month }}</span>
                <span class="year">{{ item.year }}</span>
              </div>
            </div>

            <!-- 右侧  缩略图  -->
            <div class="entry-right">
              <div class="photo-container">

                <div class="photo-box-inline-block" v-for="(photo, index) in item.photolist" :key="index">
                    <el-image
                        style="width: 100px; height: 100px"
                        :src="photo.src"
                    ></el-image>
                </div>

              </div>

            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlbumView",
  data() {
    return {
      photo_data: this.$store.state.photo_data
    }
  }
}
</script>


<style scoped lang="scss">
.inner {
  max-width: 1180px;
  margin: 0 auto;
}

.snow-photograph-intro{
  width: 90%;
  margin: 32px auto 16px auto;
  display: flex;
  align-self: flex-start;
  font-weight: 400;
  color: #252839;
}

.snow-photowall{
  width: 90%;
  margin: 0px auto 32px auto;
  border-top: 1px solid lightgray;
  display: flex;
  flex-direction: column;

  .photo-entry{
    display: flex;
    flex-direction: row;

    .entry-left{
      width: 20%;
      border-right: 1px solid lightgray;

      .entry-left-text{
        margin: 16px 0;
        display: flex;
        flex-direction: column;
        .month{
          font-size: 30px;
        }
        .year{
          font-size: 15px;
        }
      }
    }

    .entry-right{
      width: 80%;

      .photo-container{
        margin: 16px 0;

        .photo-box-inline-block{
          display: inline-block;
          border-radius: 25px;
          padding-top: 2rem;
          padding-left: 2rem;
        }
      }

    }
  }
}

</style>