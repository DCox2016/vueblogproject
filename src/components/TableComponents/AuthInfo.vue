<script>

export default {
    data() {
        return {
            userName: null,
        }
    },
    props: {
        userId: Number,
        userData: Object,
    },
    computed: {
        arthurName() {
            for(var i = 0; i < this.userData.length; i++){
                if(this.userData[i].id == this.userId){
                    return this.userData[i].name
                }
            }
        }
    },
}
</script>
<template>
    <div>Arthur: {{arthurName}}</div>
</template>