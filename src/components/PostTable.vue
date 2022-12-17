<script>
import PostThumbnail from "./TableComponents/PostThumbnail.vue";
import AuthInfo from "./TableComponents/AuthInfo.vue";

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
    <div class="postList">
        <ul>
            <li v-for="data in blogData">
                <div class="container" v-if="isCompleted(data.userId) == true">
                    <PostThumbnail :postId="data.id" :userId="data.userId" :albums="albumData" :photos="photoData"
                        class="thumbNail" />
                    <div class="titleAuthInfo">
                        <div class="title">Title: {{ data.title }}</div>
                        <div class="body">{{ data.body }}</div>
                        <AuthInfo :userId="data.userId" :userData="userData" class="user" />
                    </div>
                    <div class="edit">
                        <router-link to="/edit">
                            <button @click="displayEdit(data)" title="Edit Post">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="editIcon">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                            </button>
                        </router-link>
                    </div>
                </div>
            </li>
        </ul>
        <router-view :postToEdit="postToEdit" :albums="albumData" :photos="photoData"></router-view>
    </div>
</template>