<script>
import Image from "./Image.vue";

export default {
    data(){
        return{
            albumId: null,
        }
    },  
    components: {
        Image
    },
    props: {
        postId: Number,
        userId: Number,
        albums: Object,
        photos: Object,
    },
    beforeMount() {
       for(var i = 0; i < this.albums.length; i++){
        if(this.albums[i].userId === this.userId){
            this.albumId = this.albums[i].id;
        }
       }
    }
}
</script>
<template>
    <div>
        <Image :photos="photos" :albumId="albumId" display="thumbnail"/>
    </div>
</template>