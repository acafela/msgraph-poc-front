<template>
    <div id="toast-area" aria-live="polite" aria-atomic="true" style="position: fixed; top:66px; right:10px; min-height: 200px;">
        <div class="toast-box" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <img src="" class="rounded mr-2" >
                <strong class="mr-auto">Bootstrap</strong>
                <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="toast-body">
                로그인 했습니다.
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Toast",
  data () {
    return {
    }
  },
  
};
</script>

<style scoped>
.toast-box {
    max-width: 350px;
    overflow: hidden;
    font-size: .875rem;
    background-color: rgba(255,255,255,.85);
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.1);
    box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.1);
    backdrop-filter: blur(10px);
    /* opacity: 0; */
    border-radius: .25rem;
}
</style>

