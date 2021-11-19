<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faMapMarkerAlt, faFacebook, faGoogle);
export default {
  name: "Daftar",
  components: {
    fa: FontAwesomeIcon,
  }  
};
</script>
<template>
  <div class="container py-5 my-4 d-flex justify-content-center">
    <div class="login-wrap">
      <div class="from-login">
        <div class="header-login">
          <h1>Daftar</h1>
          <div class="our-login">
            <a href="" class="btn btn-primary w-100"
              ><fa :icon="['fab', 'facebook']" /> Daftar dengan Facebook</a
            >
            <a href="" class="btn btn-light w-100"
              ><fa :icon="['fab', 'google']" /> Daftar dengan Google</a
            >
          </div>
          <p>atau</p>
          <form class="text-start" action="/customer/masuk">
            <div class="form-group">
              <label for="exampleInputEmail1">Alamat Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button
              type="submit"
              class="btn btn-danger btn-login btn-block w-100"
            >
              Daftar
            </button>
            <div class="info-login">
              <div class="row">
                <div>
                  <a href="#" class="info-1 float-start"></a>
                  <router-link to="/customer/masuk" class="info-2 float-end"
                    >Sudah memiliki akun?</router-link
                  >
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="bg-image"></div>
    </div>
  </div>
</template>
