<template>
    <div>
        <button @click="isOpen = !isOpen" class="button">My profile</button>
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave"
            :css="false">
            <div v-if="isOpen" class="drawer">
                <img src="../assets/avatar.png" alt="avatar">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </transition>
    </div>
</template>

<script>
import Velocity from 'velocity-animate';

export default {
    name: 'Drawer',
    data() {
        return {
            isOpen: false,
        };
    },
    methods: {
        beforeEnter(el) {
            el.style.opacity = 0;
            el.style.width = 0;
        },
        enter(el, done) {
            Velocity(
                el,
                { opacity: 1, width: '300px' },
                { duration: 1000, easing: [60, 10], complete: done },
            );
        },
        leave(el, done) {
            Velocity(
                el,
                { opacity: 0, width: '0' },
                { duration: 500, easing: 'easeInCubic', complete: done },
            )
        }
    }
}
</script>

<style lang="scss">
.drawer {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    background: gainsboro;
    padding: 50px 20px;

    img {
        width: 80px;
        margin-bottom: 50px;
    }

    div {
        background: teal;
        height: 30px;
        line-height: 30px;
        width: 80%;
        margin: 0 auto;

        &:not(:last-of-type) {
            margin-bottom: 15px;
        }
    }
}
</style>