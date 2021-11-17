<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faMapMarkerAlt)
export default {
  name: "Header",
  components: {
    'fa' : FontAwesomeIcon,    
  },
};

</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse position-relative navbar-collapse"
        id="navbarTogglerDemo01"
      >
        <a
          class="
            navbar-brand
            position-absolute
            top-50
            start-50
            translate-middle
          "
          href="#"
        >
          <img src="../../assets/logo_navbar.png" v-bind:height="50" />
        </a>
        <div class="position-absolute top-50 start-0 translate-middle-y">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link page active" aria-current="page" href="#">home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link page" href="#">kategori ayam</a>
            </li>
            <li class="nav-item">
              <a class="nav-link d-flex align-items-center"><i class="ba-icon location me-1"></i><input class="ba-input" type="text" placeholder="kirim ke lokasimu ..."></a>
            </li>
          </ul>
        </div>
        <div class="position-absolute top-50 end-0 translate-middle-y">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#"><i class="ba-icon cart"><span>3</span></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link d-flex align-items-center" href="#"><i class="ba-icon user me-1"></i> masuk/daftar</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
