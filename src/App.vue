<template>
  <header>
    <router-link to="/">
      <h1><span>Motion</span>Picture</h1>
    </router-link>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Fira Sans', sans-serif;
    background-color: #C0EEF2;
    @media (max-width: 575px) {
      padding: 0 50px;
    }
    @media(min-width: 576px) and (max-width: 991px) {
      padding: 0 100px;
    }
    @media (min-width: 992px) {
      padding: 0 180px;
    }
  }
  a {
    text-decoration: none;
  }
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    background-color: #181823;
    box-shadow:  0px 0px 16px rgba(0, 0, 0, 0.3);
    h1 {
      color: #E9F8F9;
      font-weight: 600;
      span {
        color: #537FE7
      }
    }
  }
</style>
