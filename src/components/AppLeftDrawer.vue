<template>
  <v-navigation-drawer
    width="250"
    fixed
    app
    class="elevation-4"
    enable-resize-watcher
    v-model="doneDrawerOpened">
    <app-left-drawer-nav/>
  </v-navigation-drawer>
</template>

<script>
  import AppLeftDrawerNav from '@/components/AppLeftDrawerNav';
  import AppLeftDrawerUser from '@/components/AppLeftDrawerUser';

  export default {
    name: 'AppLeftDrawer',
    components: {
      AppLeftDrawerNav,
      AppLeftDrawerUser,
    },
    props: {
      drawerOpened: {
        type: Boolean,
        required: true,
      },
    },
    computed: {
      doneDrawerOpened: {
        get() {
          return this.drawerOpened;
        },
        set(val) {
          this.$emit('update:drawerOpened', val);
        },
      },
    },
  };
</script>
