<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faWeightHanging, faTruck, faBox ,faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faWeightHanging, faTruck, faBox, faCartPlus);

export default {
  components: {
    fa: FontAwesomeIcon,
  },
  data() {
    return {
      bgProduct: {
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${require("@/assets/produk/ayam_broiler/banner.jpg")})`,
      },
    };
  },
};
</script>

<template>
<div class="container my-5 py-4">
    <div class="product w-100">
        <div class="d-flex justify-content-between">
            <div class="image-product">
                <div class="active-image" v-bind:style="bgProduct"></div>
                <div class="list-images d-flex justify-content-between pt-4">
                    <div class="image">
                    </div>
                    <div class="image">
                    </div>
                    <div class="image">
                    </div>
                    <div class="image">
                    </div>
                </div>
            </div>
            <div class="product-detail">
                <span class="btn category">Ayam Broiler</span>
                <h1 class="title">Broiler 0.4Kg</h1>
                <div class="d-flex justify-content-between"> 
                    <a class="weight"><fa icon="weight-hanging"/> 0.4kg/pack</a>
                    <a class="stock"><fa icon="box"/> Tersisa 6 Produk</a>                    
                </div>
                <hr>
                <p class="description">
                    <b>Ayam Broiler</b> Dengan Ukuran 0.4Kg.Ayam Broiler atau yang biasa kamu kenal dengan ayam potong/negeri, memiliki tekstur daging yang tebal dan cukup lunak. Hanya menambahkan bumbu dan dan dengan waktu yang cepat, anda sudah dapat menikmati ayam broiler ini.
                </p>
                <div class="pricing d-flex justify-content-between">
                    <a class="price">Rp 24.000,00</a>
                    <div class="control-amount d-flex align-items-center pt-1">                
                        <button class="ba-btn rounded-black controler">-</button>
                        <span class="ammount">2</span>
                        <button class="ba-btn rounded-black controler">+</button>
                    </div> 
                </div>
                <button class="btn ba-btn mt-3"><fa icon="cart-plus"/> Tambahkan ke keranjang</button>
                <hr>
                <div class="row">
                    <div class="col-lg-12 promo text-start">
                        <span class="me-2"><fa icon="truck"/></span> <a>Gratis Ongkir Tanpa Min. Order </a>
                    </div>             
                </div>                                           
            </div>
        </div>
    </div>
</div>
</template>
