<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html, body {
    padding:0;
    margin:0;
    background-color: #f9f9f9;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    font-size: 14px;
    color: #586069;
    font-weight: 400;
}

ul {
   list-style:none;
   padding-left:0px;
}

ul li {
	margin-top : 10px;
}

.profile-img {
	width:100px;
	height:100px;
	border-radius:50px;
}

p {
	margin:0;
}

.icon {
	width : 22px;
	height:22px;
}
</style>
