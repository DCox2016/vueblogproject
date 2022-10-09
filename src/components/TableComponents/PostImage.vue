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
        postId: Number
    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/albums?id=' + this.postId)
            .then(response => response.json())
            .then(json => this.albumId = json[0].id);
    }
}
</script>
<template>
    <div>
        <Image :albumId="albumId"/>
    </div>
</template>