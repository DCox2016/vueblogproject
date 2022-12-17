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
            <router-link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="backButton">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>

            </router-link>
            <router-view></router-view>
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