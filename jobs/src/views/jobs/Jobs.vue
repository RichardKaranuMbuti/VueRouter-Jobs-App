<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id">
    <h2>{{ job.title }}</h2>

  </div>
</template>

<script>
export default {
    data(){
        return{
            jobs:[
                {title: 'UX Designer',id:1,details: 'Open'},
                {title: 'Website Developer',id:2,details: 'Open'},
                {title: 'Vue/Angular Developer',id:3,details: 'Open'},
            ]
        }
    }

}
</script>

<style>

</style>