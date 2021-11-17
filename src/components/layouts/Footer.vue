<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faWhatsapp,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faFacebook, faInstagram, faYoutube, faWhatsapp, faTwitter);
export default {
  name: "Footer",
  components: {
    fa: FontAwesomeIcon,
  },
};
</script>

<template>
  <footer>
    <div class="container">
      <div class="brand">
        <img src="../../assets/logo_light.png" />
      </div>
      <div class="list-items d-flex justify-content-between">
        <div class="items text-start">
          <h1 class="title">Hubungi kami</h1>
          <ul class="list-unstyled">
            <li>
              <a
                >Office 8, Level 18-A Jl. Jend. Sudirman Kav. 52-53 SCBD LOT 28,
                Jakarta Selatan</a
              >
            </li>
            <li><br /></li>
            <li><a>Telp. 0251 8395655</a></li>
            <li>
              <a>Email support@beliayam.com</a>
            </li>
          </ul>
        </div>
        <div class="items text-start">
          <h1 class="title">Bantuan</h1>
          <ul class="list-unstyled">
            <li>
              <a href="#">Kemitraan</a>
            </li>
            <li><a href="#">Syarat & Ketentuan</a></li>
            <li>
              <a href="#">Kebijakan Privasi</a>
            </li>
          </ul>
        </div>
        <div class="items text-start">
          <h1 class="title">Produk kami</h1>
          <ul class="list-unstyled">
            <li>
              <a href="#">Ayam Broiler</a>
            </li>
            <li><a href="#">Ayam Kampung</a></li>
            <li>
              <a href="#">Ayam Pejantan</a>
            </li>
          </ul>
        </div>
        <div class="items text-start">
          <h1 class="title">Info Terbaru</h1>
          <ul class="list-inline social">
            <li class="list-inline-item">
              <a href="#"><fa :icon="['fab', 'youtube']" /></a>
            </li>
            <li class="list-inline-item">
              <a href="#"><fa :icon="['fab', 'facebook']" /></a>
            </li>
            <li class="list-inline-item">
              <a href="#"><fa :icon="['fab', 'instagram']" /></a>
            </li>
            <li class="list-inline-item">
              <a href="#"><fa :icon="['fab', 'whatsapp']" /></a>
            </li>
            <li class="list-inline-item">
              <a href="#"><fa :icon="['fab', 'twitter']" /></a>
            </li>
          </ul>
          <h1 class="title mt-2">Unduh Aplikasi</h1>
          <ul class="list-unstyled">
            <li>
              <a href="#"
                ><img src="../../assets/download.png" v-bind:height="50"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
