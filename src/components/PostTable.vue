<script>
import PostThumbnail from "./TableComponents/PostThumbnail.vue";
import AuthInfo from "./TableComponents/AuthInfo.vue";
import Comments from "./TableComponents/Comments.vue";

export default {
    data() {
        return {
            editDisplay: false,
            postToEdit: null,
            postPhoto: null,
            userAlbums: [],
        }
    },
    props: {
        blogData: Object,
        commentData: Object,
        albumData: Object,
        photoData: Object,
        userData: Object,
        todoData: Object,
    },
    components: {
        PostThumbnail,
        AuthInfo,
        Comments,
    },
    methods: {
        isCompleted(userId) {
            for (var i = 0; i < this.todoData.length; i++) {
                if (this.todoData[i].userId == userId) {
                    return this.todoData[i].completed
                }
            }
        },
        displayEdit(data) {
            this.postToEdit = data;
            const routes = [{ path: './PostEdit', redirect: '/edit' }]
        },
        closeModal() {
            this.editDisplay = false;
        }
    }
}
</script>
<template>
    <div class="container">
        <div v-for="data in blogData">
            <div class="card my-2 d-flex flex-row" v-if="isCompleted(data.userId) == true">
                <div class="d-flex flex-column ml-1 mt-1" id="leftcardSection">
                    <PostThumbnail :postId="data.id" :userId="data.userId" :albums="albumData" :photos="photoData" class="mt-3 ml-4 mb-5 pb-4"/>
                    <p class="card-title p-2 mt-5">
                        <AuthInfo :userId="data.userId" :userData="userData" class="user" />
                    </p>
                </div>
                <div class="card-body">
                    <p class="card-text">Title: {{ data.title }}</p>
                    <p class="card-text">{{ data.body }}</p>
                    <Comments :postId="data.id" :commentData="commentData" />
                    <router-link to="/edit" class="d-flex flex-row-reverse m-2">
                        <button @click="displayEdit(data)" title="Edit Post" class="btn btn-primary">
                            <i class="bi bi-pencil-square"></i> Edit
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
        <router-view :postToEdit="postToEdit" :albums="albumData" :photos="photoData"></router-view>
    </div>
</template>