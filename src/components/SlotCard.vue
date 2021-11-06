<template>
<div class="card">
  <div class="card_title">
    <slot name="slot_title"></slot>  
    </div>
    <div class="card_body">
      <p>Slot內容要從本段文字下開始</p>
      <slot></slot>
      <p>Slot內容要從本段文字上結束</p>
      <slot name="slot_footer"></slot> 
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
        width: 600px;
        margin: 10px;
        background: white;
        border: 1px solid #cccccc;
        border-radius: 6px;
        box-shadow: 0 0 4px 0 rgba(0,0,0,0.2);
    }
    .card_title {
        padding: 16px;
        border-bottom: 1px solid #cccccc;
        color: black;
        font-size: 20px;
        line-height: 26px;
        font-weight: bold;
    }
    .card_body {
        padding: 16px;
        color: #555555;
        font-size: 16px;
        line-height: 22px;
    }
</style>