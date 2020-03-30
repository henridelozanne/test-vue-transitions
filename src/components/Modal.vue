<template>
    <div>
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

<style>

</style>