<template>
  <div id="app">
    <router-link class="link" to="/">Modal</router-link>
    <router-link class="link" to="/about">About</router-link>
    <router-link class="link" to="/list">List</router-link>
    <transition name="slide-fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.3em;
}

.button {
  padding: 5px 10px;
  background: teal;
  color: white;
  border-radius: 5px;
  font-size: 18px;

  &:hover {
    cursor: pointer;
  }
}

.quit-button {
  margin-top: 50px;
}

.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);

  .modal-content {
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    max-width: 500px;
    margin: 200px auto;
    padding: 100px 50px;
    border-radius: 5px;
  }
}

.link:not(:last-of-type) {
  margin-right: 20px;
}

.view {
  margin-top: 30px;
}

/* TRANSITIONS */
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter {
  opacity: 0;
  transform: translateX(100px);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.slide-up-enter {
  transform: translateY(15px);
  opacity: 0;
}

.slide-up-enter-active {
  transition: all 0.5s ease;
}
</style>
