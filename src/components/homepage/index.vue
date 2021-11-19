<template>
  <div class="container">
    <header>
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="text-header text-start pb-4">
            <h1>Beli ayam <span>makin</span> mudah,</h1>
            <p><span>yuk pilih</span> ayam,</p>
          </div>
          <div class="row group-icon-ayam pt-4 px-4">
            <div class="col-3 d-flex justify-content-center">
              <router-link to ="/kategori/ayam-kampung">
                <div>
                  <div class="box-icon-ayam">
                    <img
                      src="../../assets/img/ayamkampung.png"
                      alt="ayam-kampung"
                    />
                  </div>
                  <div class="text-box-icon">
                    <p>Ayam Kampung</p>
                  </div>
                </div>
              </router-link>
            </div>

            <div class="col-3 d-flex justify-content-center">
              <router-link to="/kategori/ayam-pejantan">
                <div>
                  <div class="box-icon-ayam">
                    <img
                      src="../../assets/img/ayampejantan.png"
                      alt="ayam-pejantan"
                    />
                  </div>
                  <div class="text-box-icon">
                    <p>Ayam Penjantan</p>
                  </div>
                </div>
              </router-link>
            </div>
            <div class="col-3 d-flex justify-content-center">
              <router-link to="/kategori/ayam-broiler">
                <div>
                  <div class="box-icon-ayam">
                    <img
                      src="../../assets/img/broiler.png"
                      alt="ayam-broiler"
                    />
                  </div>
                  <div class="text-box-icon">
                    <p>Ayam Broiler</p>
                  </div>
                </div>
              </router-link>
            </div>
            <div class="col-3 d-flex justify-content-center">
              <router-link to="/kategori/lainnya">
                <div>
                  <div class="box-icon-ayam">
                    <img
                      src="../../assets/img/potonganlainya.png"
                      alt="potongan-lainnya"
                    />
                  </div>
                  <div class="text-box-icon">
                    <p>Lainnya</p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <div class="wrap-icon-ayam"></div>
        </div>
        <div class="col-6">
          <div class="header-img">
            <img src="../../assets/img/header-img.png" alt="header-img" />
          </div>
        </div>
      </div>
    </header>
    <section id="section-1">
      <div class="header-section-1">
        <h1>Makin Mudah <span>beli ayam</span>!</h1>
        <p>semudah apa sih?</p>
      </div>
      <div class="row content-section-1">
        <div class="col-lg-4">
          <img src="../../assets/img/telur1.png" alt="telur-1" />
          <p>1. Pilih Produk kamu</p>
        </div>
        <div class="col-lg-4">
          <img src="../../assets/img/telur2.png" alt="telur-2" />
          <p>2. Lakukan pembayaran produk kamu</p>
        </div>
        <div class="col-lg-4">
          <img src="../../assets/img/telur3.png" alt="telur-3" />
          <p>3. Pesanan kamu di antar</p>
        </div>
      </div>
      <div class="description-section-1">
        <p>Cuman butuh 3 langkah, yuk langsung cobain</p>
        <a href="#" class="btn btn-primary shadow-none">Cari produk</a>
      </div>
    </section>
  </div>
</template>

