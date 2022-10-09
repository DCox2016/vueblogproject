<script>

export default {
    data() {
        return {
            thumbnailUrl: null,
        }
    },
    props: {
        albumId: Number,
    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + this.albumId)
            .then(response => response.json())
            .then(json => this.thumbnailUrl = json[0].thumbnailUrl);
    }
}
</script>
<template> 
    <div>
        <img :src="thumbnailUrl" />
    </div>
</template>