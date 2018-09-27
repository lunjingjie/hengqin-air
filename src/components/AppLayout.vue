<template>
  <v-app
    id="v-app"
    v-resize="onResize">
    <app-left-drawer :drawer-opened.sync="drawerOpened"/>
    <app-tool-bar :drawer-opened.sync="drawerOpened"/>

    <v-content>
      <v-container
        fluid
        class="pa-0"
        style="height: 100%">
        <router-view/>
      </v-container>
    </v-content>

    <scroll-to-top-button class="scroll-to-top-button"/>

  </v-app>
</template>

<script>
  import AppToolBar from '@/components/AppToolBar';
  import ScrollToTopButton from '@/components/ScrollToTopButton';
  import { DRAWER_OPENED } from '@/store/mutations-type';

  import AppLeftDrawer from './AppLeftDrawer';

  export default {
    name: 'AppLayout',
    components: {
      AppToolBar,
      ScrollToTopButton,
      AppLeftDrawer,
    },
    data() {
      return { clipped: true };
    },
    computed: {
      drawerOpened: {
        set(val) {
          this.$store.commit(DRAWER_OPENED, val);
        },
        get() {
          return this.$store.state.drawerOpened;
        },
      },
    },
    methods: {
      onResize() {
        this.clipped = window.innerWidth >= 1264;
      },
    },
  };
</script>

<style
  lang="scss"
  scoped>
  .scroll-to-top-button {
    position: fixed;
    right: 1.5em;
    bottom: 20px;
    z-index: 3;
  }
</style>
