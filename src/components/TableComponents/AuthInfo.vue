<script>

export default {
    data() {
        return {
            userName: null,
        }
    },
    props: {
        userId: Number
    },
    mounted(){
            fetch('https://jsonplaceholder.typicode.com/users?id=' + this.userId)
                .then(response => response.json())
                .then(json => this.userName = json[0].name);
    },
}
</script>
<template>
    <div>Arthur: {{userName}}</div>
</template>