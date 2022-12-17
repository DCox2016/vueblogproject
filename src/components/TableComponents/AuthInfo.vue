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
        arthur() {
            for(var i = 0; i < this.userData.length; i++){
                if(this.userData[i].id == this.userId){
                    return this.userData[i];
                }
            }
        }
    },
}
</script>
<template>
    <div>Arthur: {{arthur.name}}</div>
    <a href="mailto:{{ arthur.email }}">{{ arthur.email }}</a>
    <div>Company: {{arthur.company.name}}</div>
</template>