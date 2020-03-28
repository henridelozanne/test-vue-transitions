<template>
  <div id="app">
    <button class="button" @click="toggleModal">Launch modal</button>
    <transition name="fade">
      <div v-if="modalVisible" class="modal">
        <div class="modal-content">
          Modal component
          <button class="button quit-button" @click="toggleModal">Quit modal</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      modalVisible: false,
    };
  },
  methods: {
    toggleModal() {
      this.modalVisible = !this.modalVisible;
    },
  },
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
</style>
