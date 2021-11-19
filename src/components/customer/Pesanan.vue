<script>
import Sidebar from "@/components/layouts/Sidebar.vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCopy  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCopy )

export default {
  name: "Dashboard",
  components: {
    'fa' : FontAwesomeIcon,    
    Sidebar,
  },
};
</script>

<template>
<div class="container-fluid">
        <div class="profil-section">
            <div class="row">
                <Sidebar/>
                <div class="col-9 ">
                    <div class="container">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                                    aria-controls="profile" aria-selected="true">Pesanan</a>
                            </li>
                        </ul>
                        <div class="tab-content " id="myTabContent">
                            <div class="tab-pane fade show active" id="profile" role="tabpanel"
                                aria-labelledby="profile">
                                <div class="card card-profil-2">
                                    <div class="row no-gutters">
                                        <div class="col-md-3 img-col-profil-2">
                                            <div class="img-profil-2 bg-warning d-flex justify-content-center align-items-center m-auto" alt="...">
                                                <img src="../../assets/produk/produk.jpg" class="img-profil-2" alt="...">
                                            </div>                                            
                                        </div>
                                        <div class="col-md-9 ">
                                            <div class="card-body card-body-profil-2">
                                                <div class="row text-start">                                                    
                                                    <div class="col-3">                                                        
                                                        <ul class="list-profil text-start">
                                                            <li>Produk</li>
                                                            <li>Alamat Kirim</li>
                                                            <li>Status</li>
                                                            <li>Resi</li>                                                            
                                                        </ul>
                                                    </div>
                                                    <div class="col-7">
                                                        <ul class="list-profil detail text-start">
                                                            <li><b>Ayam Broiler 0.6kg</b></li>
                                                            <li>Jalan Tirtomulto V 1</li>
                                                            <li><span class="text-warning">Sedang Dalam Pengiriman</span></li>
                                                            <li>DA199277101237</li>                                                            
                                                        </ul>
                                                    </div>
                                                    <div class="col-1">
                                                        <span class="position-relative end-100 badge badge-danger"><fa icon="copy"/> Salin resi</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>