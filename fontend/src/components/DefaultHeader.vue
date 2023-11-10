<script setup lang="ts">

</script>

<template>
  <main class="header">
    <div class="container">
      <router-link class="logo" to="/">
        <img class="logo-image" src="@/assets/img/im_logo.png" alt="롯데오토리스"/>
      </router-link>
      <div class="navigation">
        <nav class="nav">
          <router-link class="router-link" to="/home">Home</router-link>
          <router-link class="router-link" to="/home/id">HomeD</router-link>
          <router-link class="router-link" to="/about">About</router-link>
          <router-link class="router-link" to="/about/123">AboutD</router-link>
        </nav>
      </div>
      <div class="profile">
        <div class="login">로그인</div>
        <div class="logout" v-show="false">로그인</div>
        <div class="menu">햄버거</div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.header {
  padding: 10px 50px 0 50px;

  .container {
    width: 100%;
    height: 120px;
    display: flex;
    text-align: center;

    .logo {
      display: inline-block;
      width: 15%;
      margin: auto;

      .logo-image {
        min-width: 175px;
        width: 100%;
      }
    }

    .navigation {
      padding-left: 5%;
      padding-right: 5%;
      display: inline-block;
      width: 60%;
      margin: auto;

      .nav {
        font-size: 28px;
        margin: 0;
        padding: 0;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -moz-flex;
        display: -webkit-flex;
        display: flex;
        justify-content: space-between;
        list-style: none;

        :before {
          display: inline-block;
          width: 1px;
        }

        :after {
          display: inline-block;
          width: 1px;
        }

        .router-link {
          display: inline-block;
          line-height: 33px;
          font-family: "Noto Sans KR", serif;
          font-weight: 700;
          text-decoration-line: none;

        }
        .router-link:visited {
          color: black;
        }
      }
    }

    .profile {
      display: flex;
      width: 15%;
      margin: auto;
      font-size: 22px;
      justify-content: space-between;

      .login {
        font-family: "Noto Sans KR", serif;
        font-weight: 500;
      }

      .menu {
        font-family: "Noto Sans KR", serif;
        font-weight: 500;
      }
    }
  }
}


</style>