<template>
  <nav id="app-navigation" class="navbar">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item"><slot name="brand"></slot></router-link>
      <div class="navbar-burger" :class="{'is-active': responsiveMenuVisible}" @click="toggleResponsiveMenu" data-target="app-navigation-menu">
        <span />
        <span />
        <span />
      </div>
    </div>
    <div id="app-navigation-menu" class="navbar-menu" :class="{'is-active': responsiveMenuVisible}">
      <div class="navbar-start">
        <slot />
      </div>
      <div class="navbar-end">
        <slot name="end" />
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({name: 'nav-bar'})
export default class Navbar extends Vue {

  responsiveMenuVisible: boolean = false

  toggleResponsiveMenu() {
    this.responsiveMenuVisible = !this.responsiveMenuVisible
  }

}
</script>
