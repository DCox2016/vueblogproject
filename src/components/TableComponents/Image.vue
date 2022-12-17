<script>

export default {
    props: {
        photos: Object,
        albumId: Number,
        display: String,
    },
    computed: {
        thumbnailUrl() {
           for(var i = 0; i < this.photos.length; i++){
            if(this.photos[i].albumId == this.albumId){
                return this.photos[i].thumbnailUrl;
            }
           }
        },
        Url() {
           for(var i = 0; i < this.photos.length; i++){
            if(this.photos[i].albumId == this.albumId){
                return this.photos[i].url;
            }
           }
        }
    }
}
</script>
<template>
    <div v-if="display == 'thumbnail' | display == 'edit'">
        <img :src="thumbnailUrl" />
    </div>
    <div v-if="display == 'edit'">
        <img :src="Url" />
    </div>
</template>