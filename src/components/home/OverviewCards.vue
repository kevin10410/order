<template>
  <div class="overviewCards">
    <div class="card">
      <p class="title">
        <span class="icon"><i class="fas fa-hand-holding-usd fa-lg"></i></span>
        TOTAL REVENUE
      </p>
      <p class="price revenue">54,540</p>
    </div>
    <div class="card">
      <p class="title">
        <span class="icon"><i class="fas fa-boxes fa-lg"></i></span>
        TOTAL COST
      </p>
      <p class="price cost">12,660</p>
    </div>
    <div class="card">
      <p class="title">
        <span class="icon"><i class="fas fa-money-bill fa-lg"></i></span>
        NET INCOME
      </p>
      <p class="price income">41,880</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.overviewCards {
  display: flex;
  justify-content: space-between;
  .card {
    margin-top: 20px;
    width: 300px;
    background: #ffffff;
    height: 140px;
    font-family: HelveticaNeue-Medium;
    font-size: 16px;
    color: #000000;
    text-align: center;
    .title {
      margin-top: 25px;
      height: 25px;
      line-height: 25px;
    }
    .price {
      margin-top: 16px;
      font-family: HelveticaNeue-Bold;
      font-size: 36px;
      &.revenue {
        color: #7ed321;
      }
      &.cost {
        color: #d0021b;
      }
      &.income {
        color: #4a90e2;
      }
    }
  }
}
</style>

