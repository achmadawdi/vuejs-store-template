<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faWeightHanging, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faWeightHanging, faTrashAlt);

export default {
  components: {
    fa: FontAwesomeIcon,
  },
  data() {
    return {
      bgProduct: {        
        background: `url(${require("@/assets/produk/ayam_broiler/banner.jpg")}), #C4C4C4`,
      },
    };
  },
};
</script>

<template>
  <div class="my-cart" id="app">
    <div class="container p-0 text-start mt-5 mb-5">
      <h1>Keranjang <span class="text-red">Belanjamu</span> ,</h1>      
  
      <div class="row container list-items mt-1">
        <div class="col-lg-7 items list-product row">
          <div class="col-lg-12 d-flex justify-content-between product">    
            <div class="product-detail">
              <div class="img-product" v-bind:style="bgProduct">              
              </div>        
              <div class="product-description">
                <h1>Broiler 0.4Kg</h1>
                <a class="weight"><fa icon="weight-hanging"/> 0.4kg/pack</a>
              </div>            
            </div>
            <div class="product-amount">
              <div class="pricing d-flex flex-column">
                <a class="total-price">Rp 48.000,00</a>
                <span class="sub-price">(perpack Rp 24.000,00)</span>
              </div>             
              <div class="control-amount d-flex align-items-center pt-1">                
                <button class="ba-btn rounded-black controler">-</button>
                <span class="ammount">2</span>
                <button class="ba-btn rounded-black controler">+</button>
                <span class="barrier"></span>
                <button class="ba-btn plain-grey "> <fa icon="trash-alt"/> hapus</button>                  
              </div>               
            </div>
          </div>
          <hr class="mt-4">
           <div class="col-lg-12 d-flex justify-content-between product">    
            <div class="product-detail">
              <div class="img-product" v-bind:style="bgProduct">              
              </div>        
              <div class="product-description">
                <h1>Broiler 0.4Kg</h1>
                <a class="weight"><fa icon="weight-hanging"/> 0.4kg/pack</a>
              </div>            
            </div>
            <div class="product-amount">
              <div class="pricing d-flex flex-column">
                <a class="total-price">Rp 48.000,00</a>
                <span class="sub-price">(perpack Rp 24.000,00)</span>
              </div>             
              <div class="control-amount d-flex align-items-center pt-1">                
                <button class="ba-btn rounded-black controler">-</button>
                <span class="ammount">2</span>
                <button class="ba-btn rounded-black controler">+</button>
                <span class="barrier"></span>
                <button class="ba-btn plain-grey "> <fa icon="trash-alt"/> hapus</button>                  
              </div>               
            </div>
          </div>
        </div>
        <div class="col-lg-1">
        </div>
        <div class="col-lg-4 items pricing">
          <h1 class="title">Ringkasan Keranjang</h1>
          <ul class="list-inline pricing-list">
            <li class="list-inline-items"><hr class="mt-2 mb-2"></li>
            <li class="list-inline-items pricing-items">
              <a class="sub-title">Sub total</a><span class="value">Rp 96.000,00</span>
            </li>
            <li class="list-inline-items pricing-items">
              <a class="sub-title">Ongkir</a><span class="value">Rp 0,00</span>
            </li>
            <li class="list-inline-items"><hr class="mt-2 mb-2"></li>
            <li class="list-inline-items pricing-items">
              <a class="sub-title">Total keseluruhan</a><span class="total-value">Rp 96.000,00</span>
            </li>
            <li class="list-inline-items"><hr class="mt-2 mb-2"></li>
          </ul>
          <div class="coupon d-flex justify-content-between align-items-center">
            <input class="px-2 ba-input" placeholder="Kode kupon kamu" />
            <button class="ba-btn">Terapkan</button>
          </div>
          <button type="submit" class="ba-btn mt-2">Terapkan</button>
        </div>
      </div>
      
    </div>
  </div>
</template>
