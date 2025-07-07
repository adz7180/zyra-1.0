<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import './styles/global.scss';
@import './styles/buttons.scss';
@import './styles/layout.scss';

#app {
  width: 100%;
  min-height: 100vh;
}
</style>
