<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        nuxtFront
      </h1>
      <p class="btn btn-primary" @click="testClick1()">
        test1
      </p>
      <p class="btn btn-primary" @click="testClick2()">
        test2
      </p>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "main_menu",
  props: {
    email: {
      type: String,
      default: "example.com",
    },
    name: {
      type: String,
      default: "test tarou",
    },
  },

  // eslint-disable-next-line no-unused-vars
  async asyncData({ app }) {
    let test = 0
    let ctrl = app.$UserCtrl()
    let response = ctrl.index(++test)
    response = ctrl.create(++test)
    response = ctrl.show(++test)
    response = ctrl.update(++test)
    response = ctrl.delete(++test)
    console.log(response)
  },

  data: function () {
    return {
      user: Object,
    }
  },

  methods: {
    testClick1: function () {
      console.log(this.user)
    },
    testClick2: function () {
      alert(2)
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
