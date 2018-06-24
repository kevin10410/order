<template>
  <div class="lastOrder">
    <p class="subtitle">Latest Orders</p>
    <div class="historys">
      <div class="order">
        <img src="https://static.gap.hk/media/catalog/product/cache/1/image/375x502.5/9df78eab33525d08d6e5fb8d27136e95/3/0/305119vintage_navy_m_1500_1_180508_1_1.jpg">
        <div class="des">
          <p class="product">Vintage T-shirt</p>
          <p class="time">
            <span><i class="fas fa-clock fa-sm"></i> 2018/6/13  13:42</span>
            <span>Total</span>
          </p>
          <p class="person">
            <span><i class="fas fa-male"></i> Belle Willis</span>
            <span>3,200</span>
          </p>
        </div>
      </div>
      <div class="order">
        <img src="https://static.gap.hk/media/catalog/product/cache/1/image/375x502.5/9df78eab33525d08d6e5fb8d27136e95/2/2/225584sunbleach_m_1500_1_180323_1.jpg">
        <div class="des">
          <p class="product">Cowboy Jacket</p>
          <p class="time">
            <span><i class="fas fa-clock fa-sm"></i> 2018/6/13  10:45</span>
            <span>Total</span>
          </p>
          <p class="person">
            <span><i class="fas fa-male"></i> Adrian Cummings</span>
            <span>2,800</span>
          </p>
        </div>
      </div>
      <div class="order">
        <img src="https://static.gap.hk/media/catalog/product/cache/1/image/375x502.5/9df78eab33525d08d6e5fb8d27136e95/d/8/d8d36ef62e4b587c04cfb8c61e3e6419_1.jpg">
        <div class="des">
          <p class="product">Coach Coat</p>
          <p class="time">
            <span><i class="fas fa-clock fa-sm"></i> 2018/6/13  8:26</span>
            <span>Total</span>
          </p>
          <p class="person">
            <span><i class="fas fa-male"></i> Lura Holland</span>
            <span>1,600</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.lastOrder {
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
  .historys {
    margin-top: 30px;
    width: 380px;
    .order {
      padding-bottom: 8px;
      margin-bottom: 8px;
      border-bottom: 1px solid #EBEBEB;
      display: flex;
      &:last-child {
        margin-bottom: 0;
        border-bottom: none;
      }
      img {
        width: 100px;
        height: 100px;
        object-fit: cover;
      }
      .des {
        margin-left: 20px;
        padding-top: 10px;
        width: 100%;
        .product {
          font-size: 20px;
          font-weight: bold;
        }
        .time {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-top: 8px;
          font-size: 16px;
          color: #9B9B9B;
          span:last-child {
            color: #000000;
            font-size: 14px;
          }
        }
        .person {
          display: flex;
          justify-content: space-between;
          padding-left: 4px;
          font-size: 16px;
          margin-top: 4px;
          color: #9B9B9B;
          span:last-child {
            color: #000000;
            font-size: 20px;
          }
        }
      }
    }
  }
}
</style>

