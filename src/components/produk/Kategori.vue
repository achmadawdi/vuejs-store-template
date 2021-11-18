<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faWeightHanging, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faWeightHanging, faCartPlus);

export default {
  components: {
    fa: FontAwesomeIcon,
  },
  data() {
    return {
      bgTitle: {
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${require("@/assets/produk/ayam_broiler/banner.jpg")})`,
      },
    };
  },
};
</script>

<template>
  <div class="category" id="app">
    <div class="bg" v-bind:style="bgTitle">
      <div class="description container">
        <h1>Boiler</h1>
        <p>
          <b>Ayam Broiler</b> atau yang biasa kamu kenal dengan ayam
          potong/negeri, memiliki tekstur daging yang tebal dan cukup lunak.
          Hanya menambahkan bumbu dan dan dengan waktu yang cepat, anda sudah
          dapat menikmati ayam broiler ini.
        </p>
      </div>
    </div>
    <div class="container mt-5 mb-5">
      <div class="detail-category col-12 text-start mb-2">
        <h1>Kategori <span class="text-red">Ayam Broiler</span> ,</h1>
      </div>
      <div class="sub-category mb-5">
        <ul class="list-inline list-sub-category">
          <li class="list-inline-item items active"><a href="#">Ayam Utuh</a></li>
          <li class="list-inline-item items"><a href="#">Dada fillet</a></li>
          <li class="list-inline-item items"><a href="#">Paha fillet</a></li>
          <li class="list-inline-item sub-items"><a href="#">Cari Ayam Lain</a></li>
          <li class="list-inline-item items float-end">
            <a href="#"><fa icon="weight-hanging" /> Berat ayam</a>
          </li>
        </ul>
      </div>

      <div class="row list-items mt-5">
        <div class="col-lg-3 d-flex justify-content-center">
          <div class="items">
            <img
              src="../../assets/produk/ayam_broiler/banner.jpg"
              class="img-product"
            />
            <div class="description text-start">
              <span class="tag">Diskon 20%</span>
              <h1 class="title">Broiler 0.4Kg</h1>
              <a class="weight"><fa icon="weight-hanging" /> 0.4kg/pack</a>
              <hr />
              <div
                class="order d-flex align-items-center justify-content-between"
              >
                <a class="price">Rp 19.500,00</a>
                <button class="ba-btn">
                  <fa icon="cart-plus" /> <span>Pesan</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 d-flex justify-content-center">
          <div class="items">
            <img
              src="../../assets/produk/ayam_broiler/banner.jpg"
              class="img-product"
            />
            <div class="description text-start">
              <span class="tag">Diskon 20%</span>
              <h1 class="title">Broiler 0.4Kg</h1>
              <a class="weight"><fa icon="weight-hanging" /> 0.4kg/pack</a>
              <hr />
              <div
                class="order d-flex align-items-center justify-content-between"
              >
                <a class="price">Rp 19.500,00</a>
                <button class="ba-btn">
                  <fa icon="cart-plus" /> <span>Pesan</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 d-flex justify-content-center">
          <div class="items">
            <img
              src="../../assets/produk/ayam_broiler/banner.jpg"
              class="img-product"
            />
            <div class="description text-start">
              <span class="tag">Diskon 20%</span>
              <h1 class="title">Broiler 0.4Kg</h1>
              <a class="weight"><fa icon="weight-hanging" /> 0.4kg/pack</a>
              <hr />
              <div
                class="order d-flex align-items-center justify-content-between"
              >
                <a class="price">Rp 19.500,00</a>
                <button class="ba-btn">
                  <fa icon="cart-plus" /> <span>Pesan</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 d-flex justify-content-center">
          <div class="items">
            <img
              src="../../assets/produk/ayam_broiler/banner.jpg"
              class="img-product"
            />
            <div class="description text-start">
              <span class="tag">Diskon 20%</span>
              <h1 class="title">Broiler 0.4Kg</h1>
              <a class="weight"><fa icon="weight-hanging" /> 0.4kg/pack</a>
              <hr />
              <div
                class="order d-flex align-items-center justify-content-between"
              >
                <a class="price">Rp 19.500,00</a>
                <button class="ba-btn">
                  <fa icon="cart-plus" /> <span>Pesan</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 d-flex justify-content-center">
          <div class="items">
            <img
              src="../../assets/produk/ayam_broiler/banner.jpg"
              class="img-product"
            />
            <div class="description text-start">
              <span class="tag">Diskon 20%</span>
              <h1 class="title">Broiler 0.4Kg</h1>
              <a class="weight"><fa icon="weight-hanging" /> 0.4kg/pack</a>
              <hr />
              <div
                class="order d-flex align-items-center justify-content-between"
              >
                <a class="price">Rp 19.500,00</a>
                <button class="ba-btn">
                  <fa icon="cart-plus" /> <span>Pesan</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
