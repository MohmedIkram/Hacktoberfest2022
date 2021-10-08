<template>
  <section class="masthead" role="img" aria-label="Image Description">
    <h1>
      Nuxt Food App
    </h1>
    <div class="buttonHouse">
      <button>
        see Restaurant
      </button>
    </div>

  </section>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style scoped>
.masthead {
  width: 100%;
  height: 80vh; /* if you don't want it to take up the full screen, reduce this number */
  overflow: hidden;
  background-size: cover !important;
  background: radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 37%, rgba(0,0,0,0.65) 100%), url("~assets/headerimg.jpg") no-repeat center center scroll;
}
.buttonHouse{
  padding: 0px 40px;
}
h1 {
  padding: 40px;
  font-style: normal;
  font-weight: bold;
  color: #eee;
  font-size: 8vmin;
  letter-spacing: 0.03em;
  line-height: 1;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 40px;
}
</style>
