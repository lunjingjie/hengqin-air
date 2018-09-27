<template>
  <v-toolbar
    app
    class="primary"
    dark
    fixed>
    <v-btn
      aria-label="menu"
      icon
      @click.stop="doneDrawerOpened=!doneDrawerOpened">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-toolbar-title>横琴项目大气系统</v-toolbar-title>
    <v-spacer/>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'AppToolBar',
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
