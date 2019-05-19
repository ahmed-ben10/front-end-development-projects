<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
*{
  margin: 0;
  font-family: 'Roboto Condensed', sans-serif;
}
#nav {
  padding: 2% 2% 1% 2%;
  text-align: center;
  width: 100%;
  background-color: rgb(63, 63, 63);
}

#nav a {
  font-weight: 100;
  color: #ffffff;
  padding: 1%;
  text-decoration: none;
}

#nav a:hover, #nav a.router-link-exact-active:hover {
  background-color: #47866a;
  color:#2c3e50;
  -webkit-transition: background-color 1s; 
}

#nav a.router-link-exact-active {
  color: #66f7ae;
  text-decoration: none;

}
</style>
