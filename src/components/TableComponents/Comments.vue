<script>
export default {
    props: {
        postId: Number,
        commentData: Object,
    },
    computed: {
        postComments() {
            for (var i = 0; i < this.commentData.length; i++) {
                if (this.commentData[i].postId == this.postId) {
                    return this.commentData[i]
                }
            }
        }
    }
}
</script>
<template>
    <div class="mx-2 my-2">
        <div class="card">
            <div class="card-header" style="height: 50px;">
                <p>Post Comments</p>
            </div>
            <div class="card-body">
                <div>{{ postComments.body }}</div>
            </div>
            <div class="card-footer d-flex flex-row-reverse">
                <a href="mailto:{{ postComments.email }}">{{ postComments.email }}</a>
                <p class="text-capitalize mx-2">{{ postComments.name }}</p>
            </div>
        </div>
    </div>
</template>