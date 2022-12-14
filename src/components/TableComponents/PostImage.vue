<script>
import Image from "../TableComponents/Image.vue";

export default {
    data() {
        return {
            albumId: null,
        }
    },
    components: {
        Image
    },
    props: {
        postId: Number,
    },
}
</script>
<template>
    <div>
        <!--<Image :albumId="albumId"/>-->
    </div>
</template>