<script>
import Sidebar from "@/components/layouts/Sidebar.vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEdit)

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
                <div class="col-lg-9 ">
                    <div class="container">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                                    aria-controls="profile" aria-selected="true">Profile</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="alamat-tab" data-toggle="tab" href="#alamat" role="tab"
                                    aria-controls="alamat" aria-selected="false">Alamat Pengiriman</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="bantuan-tab" data-toggle="tab" href="#bantuan" role="tab"
                                    aria-controls="bantuan" aria-selected="false">Bantuan</a>
                            </li>
                        </ul>
                        <div class="tab-content " id="myTabContent">
                            <div class="tab-pane fade show active" id="profile" role="tabpanel"
                                aria-labelledby="profile">
                                <div class="card card-profil-2">
                                    <div class="row no-gutters">
                                        <div class="col-md-3 img-col-profil-2">
                                            <div src="img/telur1.png" class="img-profil-2 bg-warning d-flex justify-content-center align-items-center m-auto" alt="...">
                                                <h1 class="initial fw-bold text-light">B</h1>
                                            </div>                                            
                                        </div>
                                        <div class="col-md-9 ">
                                            <div class="card-body card-body-profil-2">
                                                <div class="row">
                                                    <div class="col-lg-3">
                                                        <ul class="list-profil text-start">
                                                            <li>Nama Awal</li>
                                                            <li>Nama Akhir</li>
                                                            <li>Alamat Surel</li>
                                                            <li>No Telephone</li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-lg-7">
                                                        <ul class="list-profil detail text-start">
                                                            <li>Bang</li>
                                                            <li>Jarwo</li>
                                                            <li>bangjarwo@gmail.com</li>
                                                            <li>089921xxxxx</li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-1">
                                                        <span class="position-relative end-100 badge badge-danger"><fa icon="edit"/> Edit</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="alamat" role="tabpanel" aria-labelledby="alamat-tab">
                                <div class="card card-profil-2">
                                </div>
                            </div>
                            <div class="tab-pane fade" id="bantuan" role="tabpanel" aria-labelledby="bantuan-tab">                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>