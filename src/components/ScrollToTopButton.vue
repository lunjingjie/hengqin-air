<template>
  <v-fab-transition>
    <v-btn
      role="none"
      v-scroll="onScroll"
      color="accent"
      fab
      dark
      @click="scrollToTop"
      v-show="show"
      class="mb-5">
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
  export default {
    name: 'ScrollToTopButton',
    data() {
      return {
        show: false,
      };
    },
    methods: {
      onScroll() {
        this.show = !!window.pageYOffset;
      },
      scrollToTop() {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      },
    },
  };
</script>
