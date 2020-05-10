<template>
  <div class="wrapper">
    <svg width="200" height="200">
      <circle :class="{'on-circle': play}" class="circle"  fill="none" stroke="#4F5D73" cx="100" cy="100" r="50" stroke-width="8" transform="rotate(-90 100 100)" />
      <polyline :class="{'on-check': play}" class="check" fill="none" stroke="#47BF8C" stroke-width="8" points="74,95 90,115 130,85" stroke-linecap="round" stroke-linejoin="round" />
    </svg> 
  </div>
</template>
<script>
export default {
  props: ['play']
}
</script>
<style lang="less" scoped>
.circle {
  stroke-dasharray: 314;
  stroke-dashoffset: 0;
}

.check {
  stroke-dasharray: 80;
  stroke-dashoffset: 0;
}

.reset-circle {
  stroke-dashoffset: 314;
}

.reset-check {
  stroke-dashoffset: 80;
}

.on-circle {
  animation: circle_animate 1s ease-in-out;
  animation-fill-mode: forwards;
  stroke-dashoffset: 314;
}

.on-check {
  animation: check_animate .8s ease-in-out 1s;
  animation-fill-mode: forwards;
  stroke-dashoffset: 80;
}

@keyframes circle_animate {
  from {
    stroke-dashoffset: 314;
  }
  to {
    stroke-dashoffset: 628;
  }
}

@keyframes check_animate {
  from {
    stroke-dashoffset: 80;
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>