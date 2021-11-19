<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faHome,faBox} from "@fortawesome/free-solid-svg-icons";
library.add(faHome,faBox);
export default {
  name: "Sidebar",
  components: {
    fa: FontAwesomeIcon,
  }, 
};
</script>
<template>
  <div class="col-3 side-bar-a">
    <div class="card card-profil-1 mb-5 px-3">
      <div
        src="img/telur1.png"
        class="
          card-img-top
          bg-warning
          d-flex
          justify-content-center
          align-items-center
        "
        alt="..."
      >
        <h1 class="initial fw-bold text-light">B</h1>
      </div>
      <div class="card-body">
        <h5 class="card-title">Bamg Jarwo</h5>
        <p class="card-text">Kamu punya 2 pesanan</p>
      </div>
      <hr />
      <router-link to="/customer/dashboard" class="btn btn-profil"
        ><fa icon="home"/> Dashboard </router-link>
      <router-link to="/customer/pesanan" class="btn btn-profil"
        ><fa icon="box"/> Pesanan</router-link
      >
    </div>
  </div>
</template>
