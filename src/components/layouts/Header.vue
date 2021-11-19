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
              <router-link to="/" class="nav-link page" aria-current="page" href="#">home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/kategori/list" class="nav-link page" href="#">kategori ayam</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link d-flex align-items-center"><i class="ba-icon location me-1"></i><input class="ba-input" type="text" placeholder="kirim ke lokasimu ..."></a>
            </li>
          </ul>
        </div>
        <div class="position-absolute top-50 end-0 translate-middle-y">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/keranjang" class="nav-link icon" aria-current="page" href="#"><i class="ba-icon cart"><span>3</span></i></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/customer/masuk" class="nav-link d-flex align-items-center icon" href="#"><i class="ba-icon user me-1"></i> masuk/daftar</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
