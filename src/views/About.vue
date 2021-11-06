<template>
  <div class="about">
    <SlotCard>
      <div class="content">
        <h2>Slot內容放在這裡</h2>
      </div>
      <template slot="slot_footer">
      <p>多插槽 Slot tooter</p>
      </template>
      <template slot="slot_title">
      <p>多插槽 Slot title</p>
      </template>
    </SlotCard>
  </div>
</template>

<script>
import SlotCard from '../components/SlotCard.vue'
export default {
   name:'about',
  components:{
    SlotCard
  }
}
</script>>



<style>
.content {
  padding: 50px 20px;
  border-radius: 6px;
  background: #a7daed;
  color: #233447;
}
</style>