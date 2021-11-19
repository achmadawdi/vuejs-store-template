<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faWeightHanging,
  faTruck,
  faBox,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Modal from "../layouts/Modal"

library.add(faWeightHanging, faTruck, faBox, faCartPlus);
import json from "../../public/data/product.json";

export default {    
  components: {
    fa: FontAwesomeIcon,
    Modal,
  },
  data() {
    return {
      bgProduct: {
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${require("@/assets/produk/ayam_broiler/banner.jpg")})`,
      },
      dataProduct:{},    
      amount: 0,  
      showModal: false,
    };
  },
  created(){            
      this.filterProduct()
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    filterProduct() {
      let title = this.$route.params.id.split('-').join(' ')
      let product = json.filter(d => d.title.toLowerCase() == title);
      product[0] ? this.dataProduct = product[0] : this.$router.push('../') ;   
    },
    amountControl(op){
        let stock = this.dataProduct.stock;
        if(!(this.amount >= stock && op == "plus") && !(this.amount <= 0 && op == "min")){            
            if(op=="plus") this.amount += 1;
            else this.amount -= 1;
        }
    }
  },
};
</script>

<template>
<Modal v-if="showModal" modal-title="Keranjang" modal-desc="Berhasil ditambahkan ke keranjang!" @close="showModal = false"/>
  <div class="container my-5 py-4">
    <div class="product w-100">
      <div class="d-flex justify-content-between">
        <div class="image-product">
          <div class="active-image" v-bind:style="bgProduct"></div>
          <div class="list-images d-flex justify-content-between pt-4">
            <div class="image" v-bind:style="bgProduct"></div>
            <div class="image" v-bind:style="bgProduct"></div>
            <div class="image" v-bind:style="bgProduct"></div>
            <div class="image" v-bind:style="bgProduct"></div>
          </div>
        </div>
        <div class="product-detail">
          <span class="btn category">{{dataProduct.category}}</span>
          <h1 class="title">{{dataProduct.title}}</h1>
          <div class="d-flex justify-content-between">
            <a class="weight"><fa icon="weight-hanging" /> {{dataProduct.weight}}kg/pack</a>
            <a class="stock"><fa icon="box" /> Tersisa {{dataProduct.stock}} Produk</a>
          </div>
          <hr />
          <p class="description" v-html="dataProduct.description">
          </p>
          <div class="pricing d-flex justify-content-between">
            <a class="price">Rp {{formatPrice(dataProduct.price)}}</a>
            <div class="control-amount d-flex align-items-center pt-1" id="counter">
              <button class="ba-btn rounded-black controler" v-on:click="amountControl('min')">-</button>
              <span class="ammount">{{amount}}</span>
              <button class="ba-btn rounded-black controler" v-on:click="amountControl('plus')">+</button>
            </div>
          </div>          
          <button class="btn ba-btn mt-3" type="button" @click="showModal = true">
            <fa icon="cart-plus" /> Tambahkan ke keranjang
          </button>
          <hr />
          <div class="row">
            <div class="col-lg-12 promo text-start">
              <span class="me-2"><fa icon="truck" /></span>
              <a>Gratis Ongkir Tanpa Min. Order </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
