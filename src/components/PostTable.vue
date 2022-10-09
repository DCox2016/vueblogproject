<script>
import PostImage from "./TableComponents/PostImage.vue";
import AuthInfo from "./TableComponents/AuthInfo.vue";
import PostEdit from "./TableComponents/PostEdit.vue";

export default {
    data() {
        return {
            editDisplay: false,
            postToEdit: null,
        }
    },
    props: {
        blogData: Object,
    },
    components: {
        PostImage,
        AuthInfo,
        PostEdit,
    },
    methods: {
        displayEdit(data) {
            this.postToEdit = data;
            if (this.editDisplay == false) {
                this.editDisplay = true;
            } else {
                this.editDisplay = false;
            }
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
                <div class="container">
                    <PostImage :postId="data.id" class="thumbNail" />
                    <div class="titleAuthInfo">
                        <div class="title">Title: {{data.title}}</div>
                        <div class="body">{{data.body}}</div>
                        <AuthInfo :userId="data.userId" class="user" />
                    </div>
                    <div class="edit">
                        <button @click="displayEdit(data)" title="Edit Post">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="editIcon">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                        </button>
                    </div>
                </div>
            </li>
        </ul>
        <div v-if="editDisplay">
            <PostEdit :postToEdit="postToEdit" @closeModal="closeModal()" />
        </div>
    </div>
</template>