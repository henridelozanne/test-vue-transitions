<template>
    <div>
        <input type="text" v-model="newContact" placeholder="Name"/>
        <button @click="addContact">Add contact</button>
        <button @click="sortContacts">Sort contacts</button>
        <transition-group name="slide-up" tag="ul" appear>
            <li v-for="contact in contacts" :key="contact">{{contact}}</li>
        </transition-group>
    </div>
</template>

<script>
export default {
    name: 'List',
    data() {
        return {
            newContact: '',
            contacts: ['Camila Martinez', 'Henri Delozanne', 'Alexis Delozanne', 'Clémence Delozanne'],
        };
    },
    methods: {
        addContact() {
            this.contacts.push(this.newContact);
            this.newContact = '';
        },
        sortContacts() {
            this.contacts.sort();
        },
    }
}
</script>

<style scoped>
    ul {
        list-style-type: none;
    }
</style>