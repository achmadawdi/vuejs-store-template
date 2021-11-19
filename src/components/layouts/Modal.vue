<script>
export default {
  name: "Modal",
  props: ['modalTitle','modalDesc']
};
</script>

<template name="Modal">
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="c">{{modalTitle}}</slot>
        </div>

        <div class="modal-body">                    
          <img src="../../assets/img/check-green.gif" v-bind:height="100" />          
          <span class="mt-2" name="body">{{modalDesc}} </span>
        </div>

        <div class="modal-footer">
          <slot name="footer">            
            <button class="btn ba-btn text-light mt-3" @click="$emit('close')">
              OK
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
