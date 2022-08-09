<template>
  <div class="about">
    <button type="button" @click="changeQuery()">Change Route</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Route } from "vue-router";
Component.registerHooks(["beforeRouteUpdate"]);

@Component({})
export default class FooView extends Vue {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  beforeRouteUpdate(to: Route, from: Route, next: any): void {
    console.log("beforeRouteUpdate");
    next();
  }

  changeQuery(): void {
    this.$router.push({ query: { foo: String(Math.random()) } });
  }
}
</script>
