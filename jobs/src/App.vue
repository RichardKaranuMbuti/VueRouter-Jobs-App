<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link>
    <router-link :to="{name: 'Jobs'}">Jobs</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  background: white;
  margin: 0 5px;
 
}

nav a.router-link-exact-active {
  color: green;
  background: red;
  border-radius: 10px;
  font-size: larger;
  padding: 10px;
  
  
}
</style>
