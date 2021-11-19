<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faWeightHanging, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faWeightHanging, faCartPlus);
import json from "../../public/data/product.json";
import jsonCategory from "../../public/data/category.json";

export default {
  components: {
    fa: FontAwesomeIcon,
  },
  data() {
    return {
      bgTitle: {
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${require("@/assets/produk/ayam_broiler/banner.jpg")})`,
      },
      dataProduct: {},
      dataCategory: {},
    };
  },
  created() {
    this.filterCategory();
    this.filterProductByCategory();    
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    formatLink(value) {
      let link = value.toLowerCase().split(" ").join("-");
      return link;
    },
    filterProductByCategory() {
      let idCategory = this.$route.params.id.split("-").join(" ");
      let product = json.filter((d) => d.category.toLowerCase() == idCategory);
      product ? (this.dataProduct = product) : console.log(jsonCategory);
    },
    filterCategory() {
      let idCategory = this.$route.params.id.split("-").join(" ");
      if(idCategory=="list") this.$router.push('../');  
      let category = jsonCategory.filter(
        (c) => c.category.toLowerCase() == idCategory
      );
      category[0]
        ? (this.dataCategory = category[0])
        : console.log(jsonCategory);
    },
  },
};
</script>

<template>
  <div class="category">
    <div class="bg" v-bind:style="bgTitle">
      <div class="description container">
        <h1>{{dataCategory.category}}</h1>
        <p v-html="dataCategory.description">          
        </p>
      </div>
    </div>
    <div class="container mt-5 mb-5">
      <div class="detail-category col-12 text-start mb-2">
        <h1>Kategori <span class="text-red">{{dataCategory.category}}</span> ,</h1>
      </div>
      <div class="sub-category mb-5">
        <ul class="list-inline list-sub-category">
          <li class="list-inline-item items active">
            <a href="#">Ayam Utuh</a>
          </li>
          <li class="list-inline-item items" v-for="data in dataCategory.sub_category"
          :key="data.id"
          >
            <a href="#">{{ data }}</a>
          </li>
          <li class="list-inline-item sub-items">
            <a href="#">Cari Ayam Lain</a>
          </li>
          <li class="list-inline-item items float-end">
            <a href="#"><fa icon="weight-hanging" /> Berat ayam</a>
          </li>
        </ul>
      </div>

      <div class="row list-items mt-5">
        <div
          class="col-lg-3 d-flex justify-content-center"
          v-for="data in dataProduct"
          :key="data.id"
        >
          <div class="items">
            <img
              v-bind:src="require('../../assets/produk/' + data.thumbnail)"
              class="img-product"
            />
            <div class="description text-start">
              <span v-if="data.discount == true" class="tag">Diskon 20%</span>
              <h1 class="title">{{ data.title }}</h1>
              <a class="weight"
                ><fa icon="weight-hanging" /> {{ data.weight }}kg/pack</a
              >
              <hr />
              <div
                class="order d-flex align-items-center justify-content-between"
              >
                <a class="price">Rp {{ formatPrice(data.price) }}</a>
                <router-link
                  v-bind:to="'/produk/' + formatLink(data.title)"
                  tag="button"
                  class="ba-btn"
                >
                  <fa icon="cart-plus" /> <span>Pesan</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
