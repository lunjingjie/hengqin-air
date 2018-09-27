<template>
  <v-list-tile ripple>
    <v-list-tile-action>
      <v-icon color="accent">mdi-account-circle</v-icon>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title>{{ $store.state.username }}</v-list-tile-title>
    </v-list-tile-content>
    <v-list-tile-action>
      <v-btn
        icon
        ripple
        @click="logout()">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
  import UserService from '@/service/user-service/index';

  export default {
    name: 'AppLeftDrawerUser',
    methods: {
      logout() {
        this.$store.commit('logout');
        UserService.logout();
        this.$router.push({ name: 'Login' });
      },
    },
  };
</script>
