<template>
    <div class="home">
      <div class="banner">
        <p class="subtitle">OVERVIEW</p>
        <p class="rangeInfo">
          <span class="startDate">2018/6/6</span>
          <span class="icon"><i class="fas fa-caret-right"></i></span>
          <span class="endDate">2018/6/13</span>
          <span class="dataRange">{{ dateRange }}</span>
          <span class="rangeToggle" @click="toggleDateRange = !toggleDateRange"><i class="fas fa-caret-down"></i></span>
        </p>
        <ul class="rangeSelector" v-if="toggleDateRange">
          <li @click="changeDateRange('Daily')">Daily</li>
          <li @click="changeDateRange('Weekly')">Weekly</li>
          <li @click="changeDateRange('Monthly')">Monthly</li>
          <li @click="changeDateRange('Yearly')">Yearly</li>
          <li @click="changeDateRange('Custom')">Custom</li>
        </ul>
      </div>
      <overview-cards></overview-cards>
      <div class="chart">

      </div>
      <div class="submain">
        <website></website>
        <last-orders></last-orders>
      </div>
    </div>
</template>

<script>
import OverviewCards from './home/OverviewCards';
import Website from './home/Website';
import LastOrders from './home/LastOrders';

export default {
  data() {
    return {
      dateRange: 'Weekly',
      toggleDateRange: false,
    }
  },
  methods: {
    changeDateRange(range) {
      this.dateRange = range;
      this.toggleDateRange = false;
    }
  },
  components: {
    OverviewCards,
    Website,
    LastOrders,
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding-top: 30px;
  padding-bottom: 40px;
  .banner {
    user-select: none;
    font-family: HelveticaNeue;
    color: #000000;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .subtitle {
      font-size: 24px;
      font-weight: bold;
    }
    .rangeInfo {
      font-family: HelveticaNeue;
      font-size: 16px;
      color: #9b9b9b;
      .endDate {
        margin-right: 20px;
      }
      .icon,
      .rangeToggle {
        display: inline-block;
        width: 20px;
        height: 20px;
        text-align: center;
        color: #000000;
      }
    }
    .rangeSelector {
      position: absolute;
      right: 0;
      top: calc(100% + 8px);
      background: #ffffff;
      box-shadow: 1px 2px 10px 0 #9b9b9b;
      border-radius: 2px;
      list-style: none;
      padding: 8px 0;
      li {
        width: 125px;
        padding: 8px 0;
        text-align: center;
        &:hover {
          background: #000000;
          color: #ffffff;
        }
      }
    }
  }
  .chart {
    border-radius: 3px;
    margin-top: 18px;
    width: 100%;
    height: 405px;
    background-image: url('../../static/chart.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .submain {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
</style>

