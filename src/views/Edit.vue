<script>
import Image from '../components/TableComponents/Image.vue';

export default {
    data() {
        return {
            title: null,
            body: null,
            message: null,
            submitted: false,
            albumId: null,
        }
    },
    components: {
        Image,
    },
    props: {
        postToEdit: Object,
        albums: Object,
        photos: Object,
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
    beforeMount() {
        for (var i = 0; i < this.albums.length; i++) {
            if (this.albums[i].userId === this.postToEdit.userId) {
                this.albumId = this.albums[i].id;
            }
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
        <div id="back">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="closeButton">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
            </svg>
            <div><button @click="updatePost()">Save</button></div>
        </div>
        <div id="postDetails">
            <div class="editTitle">
                <div>Title: </div>
                <textarea rows="4" cols="95" v-model="title"></textarea>
                <div>Body: </div>
                <textarea rows="4" cols="95" v-model="body"></textarea>
            </div>
            <div class="editImages">
                <div>Post Image: </div>
                <Image :albumId="albumId" :photos="this.photos" display="edit" />
            </div>
        </div>
        <div class="updateMessage" v-if="submitted">
            <div v-if="message == 200" class="success">
                Post has been updated
            </div>
            <div v-else class="error">Error. Can not update post.</div>
        </div>
    </div>
</template>