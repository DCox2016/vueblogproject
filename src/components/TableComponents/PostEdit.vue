<script>
export default {
    data() {
        return {
            title: null,
            body: null,
            message: null,
            submitted: false,
        }
    },
    props: {
        postToEdit: Object,
    },
    methods: {
        closeModal() {
            this.submitted = false;
            this.$emit('closeModal');
        },
        updatePost() {
            this.submitted = true;
            fetch('https://jsonplaceholder.typicode.com/posts/' + this.postToEdit.id, {
                method: 'PUT',
                body: JSON.stringify({
                    id: this.postToEdit.id,
                    title: this.title,
                    body: this.body,
                    userId: this.postToEdit.userId,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => this.message = (response.status));
        }
    },
    mounted() {
        this.title = this.postToEdit.title;
        this.body = this.postToEdit.body;
    }
}
</script>
<template>
    <div class="postContent">
        <div id="close">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" id="closeButton" @click="closeModal()">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
        <div id="postDetails">
            <h2>Post Edit</h2>
            <div class="editTitle">
                <div>Title: </div>
                <textarea rows="4" cols="125" v-model="title"></textarea>
                <div>Body: </div>
                <textarea rows="4" cols="125" v-model="body"></textarea>
                <div><button @click="updatePost()">Save</button></div>
            </div>
        </div>
        <div class="updateMessage" v-if="submitted">
            <div v-if="message == 200" class="success">
                Post has been updated
            </div>
            <div v-else  class="error">Error. Can not update post.</div>
        </div>
    </div>
</template>