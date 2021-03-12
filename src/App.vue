<template>
  <div id="app">
    <div class="container" v-if="getHome.length === 0 && search.length === 0">
      <p class="center">
        Loading
      </p>
    </div>
    <div v-else class="container">
      <h1 class="title">Our Latest Developments</h1>
      <div class="search">
        <span class="search__title">Filter</span>
        <input
          class="search__input"
          @keyup.enter="onEnter"
          type="text"
          v-model="search"
          id="input"
        />
      </div>
      <p class="center" v-if="getHome.length === 0 && search.length > 0">
        Nothing found
      </p>
    </div>

    <div v-if="getHome.length > 0" class="container">
      <div class="items">
        <a href="#" class="item" v-for="home in getHome" :key="home.id">
          <div class="item__top">
            <img
              class="item__img"
              :src="
                `https://via.placeholder.com/750x370/000000/FFFFFF?text=${home.title}`
              "
            />
            <span
              class="item__type"
              :class="
                home.type === 'IndependentLiving'
                  ? 'item__type--orange'
                  : 'item__type--blue'
              "
              >{{ home.type }}</span
            >
          </div>
          <div class="item__bottom">
            <span class="item__title">{{ home.title }}</span>
            <span class="item__address">{{ home.address }}</span>
            <span class="item__price">£{{ home.price }}</span>
          </div>
        </a>
      </div>
      <div class="btn__wrap">
        <button class="btn">See more</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
    };
  },

  methods: {
    onEnter() {
      this.$store.dispatch('getHomes', this.search);
    },
  },

  computed: {
    getHome() {
      if (this.search.length > 3) {
        return this.$store.state.homes.filter((home) => {
          return home.title.toLowerCase().includes(this.search.toLowerCase());
        });
      }
      return this.$store.state.homes;
    },
  },
  async mounted() {
    await this.$store.dispatch('getHomes');
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');

body {
  font-family: 'Open Sans', sans-serif;
}

.container {
  max-width: 1340px;
  width: 100%;
  margin: 0 auto;
}
.title {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 49px;
  text-align: center;
  color: #45852d;
  margin-top: 36px;
  margin-bottom: 0;
}
.search {
  margin-bottom: 45px;
  margin-top: 43px;
  display: flex;
  align-items: center;
  &__input {
    border-radius: 25px;
    max-width: 418px;
    width: 100%;
    height: 50px;
    outline: none;
    border: 1px solid #d8d8d8;
    padding-left: 30px;
  }
  &__title {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #363636;
    margin-right: 20px;
  }
}

.items {
  display: flex;
  flex-wrap: wrap;
  margin-right: -21px;
}
.item__img {
  width: 100%;
  display: block;
}

.item {
  width: calc(33.33% - 23px);
  margin-right: 21px;
  margin-bottom: 38px;
  background: #f8f8f8;
  border: 1px solid #d8d8d8;
  text-decoration: none;

  &__content {
    display: flex;
    flex-direction: column;
  }
  &__title {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 27px;
    color: #363636;
    margin-bottom: 5px;
  }
  &__address {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #363636;
    margin-bottom: 5px;
  }
  &__type {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    color: #ffffff;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 204px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    &--orange {
      background: #ec6608;
    }
    &--blue {
      background: #006f79;
    }
  }
  &__price {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: #363636;
    margin-bottom: 5px;
  }
  &__top {
    position: relative;
  }
  &__bottom {
    display: flex;
    flex-direction: column;
    padding: 17px 20px;
  }
}
.btn__wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 77px;
}
.btn {
  position: relative;
  width: 150px;
  height: 50px;
  border: 1px solid #d8d8d8;
  border-radius: 25px;
  background: none;
  cursor: pointer;
  font-family: Open Sans;
  font-style: normal;
  outline: none;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #363636;
  transition: all 0.2s linear;
  &::before {
    content: '';
    background-image: url("data:image/svg+xml,%3Csvg width='7' height='17' viewBox='0 0 7 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5.043 8.41667L1 15.8333' stroke='%23363636' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E%0A");
    position: absolute;
    top: 17px;
    right: 23px;
    width: 6px;
    height: 17px;
  }
  &:hover {
    background: #ebebeb;
  }
}
.center{
  text-align: center;
}

@media screen and (max-width: 1340px) {
  .container {
    max-width: 1200px;
  }
  .item {
    width: calc(50% - 23px);
  }
}
@media screen and (max-width: 1240px) {
  .container {
    max-width: 1040px;
  }
}
@media screen and (max-width: 1080px) {
  .container {
    max-width: 960px;
  }
}
@media screen and (max-width: 992px) {
  .container {
    max-width: 840px;
  }
}
@media screen and (max-width: 860px) {
  .container {
    max-width: 740px;
  }
}
@media screen and (max-width: 768px) {
  .container {
    max-width: calc(100% - 30px);
    margin: 0 15px;
  }
  .item {
    width: calc(100% - 23px);
  }
}
</style>
