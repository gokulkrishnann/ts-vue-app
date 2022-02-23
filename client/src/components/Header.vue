<template>
  <div class="header">{{ message }}</div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class Header extends Vue {
  message = "Employee Management";
}
</script>
