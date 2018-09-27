<template>
  <app-layout/>
</template>
<script>
  import AppLayout from './components/AppLayout';
  import UserService from './service/user-service';
  import { LOGIN } from './store/mutations-type';

  export default {
    components: {
      AppLayout,
    },

    created() {
      this.$store.commit(LOGIN, UserService.hadLogin());
    },
  };
</script>
<style>
  body .application {
    font-family: "Microsoft YaHei", "Arial", "Tahoma";
  }
</style>
