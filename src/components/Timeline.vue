<template>
  <div>
    <img class="runner first" src="../assets/runner.png" alt="runner" />
    <img class="runner second" src="../assets/runner.png" alt="runner" />
    <img class="runner third" src="../assets/runner.png" alt="runner" />
    <img class="runner fourth" src="../assets/runner.png" alt="runner" />
    <img class="runner fifth" src="../assets/runner.png" alt="runner" />
    <img class="runner sixth" src="../assets/runner.png" alt="runner" />
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  mounted() {
    // timeline will go here
    const tl = gsap.timeline();
    // repeat 2 times
    // const tl = gsap.timeline({repeat: 2});
    // repeat 2 times with delay before next iteration
    // const tl = gsap.timeline({repeat: 2, repeatDelay: 1});
    tl.to('.first', { x: 1200, duration: 2, ease: 'expo.out' });
    // absolute positioning during timeline
    tl.to('.second', { x: 1200, duration: 2, ease: 'expo.out' }, .5);
    // same as previous
    tl.to('.third', { x: 1200, duration: 2, ease: 'expo.out' }, '<');
    // relative to previous
    tl.to('.fourth', { x: 1200, duration: 2, ease: 'expo.out' }, '-=.5');
    tl.to('.fifth', { x: 1200, duration: 2, ease: 'expo.out' }, '+=1');
    // 1 second after start of previous
    tl.to('.sixth', { x: 1200, duration: 2, ease: 'expo.out' }, '<1');
  }
}
</script>

<style scoped>
.runner {
  display: block;
  height: 5em;
  width: 5em;
  margin-top: 1.5em;
}
</style>