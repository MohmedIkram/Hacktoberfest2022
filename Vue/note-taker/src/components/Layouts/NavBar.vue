<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop">
      <div class="navbar-brand">
        <RouterLink class="navbar-item is-size-3" to="/">
          NoteTaker
        </RouterLink>
        <a
          role="button"
          class="navbar-burger"
          :class="{ 'is-active': showMobileNav }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click.prevent="showMobileNav = !showMobileNav"
          ref="navbarBurgerRef"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': showMobileNav }"
        ref="navbarMenuRef"
      >
        <div class="navbar-end">
          <RouterLink
            to="/"
            class="navbar-item"
            active-class="is-active"
            @click="
              showMobileNav = false;
              showToast();
            "
            >Notes</RouterLink
          >
          <RouterLink
            to="/stats"
            class="navbar-item"
            active-class="is-active"
            @click="
              showMobileNav = false;
              showToast();
            "
            >Stats</RouterLink
          >
          <button
            class="button is-small is-rounded"
            :class="{
              'is-ghost': !showMobileNav,
              'has-text-white': !showMobileNav,
            }"
            v-if="storeAuth.user.id"
            style="margin: auto 0"
            @click="logout"
          >
            Log out - {{ storeAuth.user.email }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
//imports
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useStoreAuth } from "@/stores/storeAuth";
import { toast } from "bulma-toast";

const storeAuth = useStoreAuth();

//toast

const showToast = () => {
  if (!storeAuth.user.id) {
    toast({
      message: "You need to log in to access this page",
      type: "is-danger",
      position: "top-center",
      closeOnClick: true,
      pauseOnHover: true,
      opacity: 0.8,
    });
  }
};

//mobile nav

const showMobileNav = ref(false);

//click outside to close

const navbarMenuRef = ref(null);
const navbarBurgerRef = ref(null);

onClickOutside(
  navbarMenuRef,
  () => {
    showMobileNav.value = false;
  },
  {
    ignore: [navbarBurgerRef],
  }
);

const logout = () => {
  storeAuth.logoutUser();
  showMobileNav.value = false;
};
</script>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
