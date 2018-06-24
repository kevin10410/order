<template>
  <div class="websiteBox">
    <p class="subtitle">Transaction Website</p>
    <div class="websites">
      <div class="website">
        <div class="brand">
            <span class="icon"><i class="fab fa-facebook fa-3x"></i></span>
            <span class="url">Facebook.com</span>
        </div>
        <div class="state">
          <span class="price">45,836</span>
          <span class="diff up">
            <i class="fas fa-arrow-up"></i>
            20%
          </span>
        </div>
      </div>
      <div class="website">
        <div class="brand">
            <span class="icon"><i class="fab fa-google fa-3x"></i></span>
            <span class="url">Google.com</span>
        </div>
        <div class="state">
          <span class="price">23,582</span>
          <span class="diff up">
            <i class="fas fa-arrow-up"></i>
            12%
          </span>
        </div>
      </div>
      <div class="website">
        <div class="brand">
            <span class="icon"><i class="fas fa-shopping-basket fa-3x"></i></span>
            <span class="url">Shopify.com</span>
        </div>
        <div class="state">
          <span class="price">2,489</span>
          <span class="diff down">
            <i class="fas fa-arrow-down"></i>
            15%
          </span>
        </div>
      </div>
      <div class="website">
        <div class="brand">
            <span class="icon"><i class="fab fa-wordpress fa-3x"></i></span>
            <span class="url">Wordpress.com</span>
        </div>
        <div class="state">
          <span class="price">1,057</span>
          <span class="diff down">
            <i class="fas fa-arrow-down"></i>
            30%
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.websiteBox {
  margin-top: 20px;
  background: #ffffff;
  width: 460px;
  height: 455px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .subtitle {
    width: 380px;
    margin-top: 30px;
    font-family: HelveticaNeue-Bold;
    font-size: 24px;
    height: 28px;
  }
  .websites {
    width: 380px;
    .website {
      width: 100%;
      height: 99px;
      border-bottom: 1px solid #ebebeb;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &:last-child {
        border: none;
      }
      .brand {
        display: flex;
        align-items: center;
        .icon {
          display: inline-block;
          text-align: center;
          width: 50px;
          height: 50px;
        }
        .url {
          margin-left: 20px;
          font-size: 16px;
          color: #9b9b9b;
        }
      }
      .state {
        .price {
          margin-right: 20px;
          font-size: 20px;
        }
        .diff {
          font-size: 16px;
          &.up {
            color: #7ED321;
          }
          &.down {
            color: #D0021B;
          }
        }
      }
    }
  }
}
</style>

