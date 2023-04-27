<script lang="ts">
  import { Router, Link, Route } from "svelte-navigator";
	import Secret from "./pages/secret.svelte";
  import Home from './pages/home.svelte';
  import { BASE_URL, USER } from './store/globalsStore.js';

  export function logout() {
    fetch($BASE_URL + '/logout');
    $USER = undefined;
  }
</script>

<Router>
  <nav>
    <Link to="/" class="link-button">Home</Link>
    {#if $USER}
      <Link to="/secret" class="link-button">Secret</Link>
      <span class="link-button" on:click={logout}>logout</span>
    {/if}
  </nav>
  <Route path="/">
    <div class="card">
      <Home />
    </div>
  </Route>
  <Secret path="/secret" let:location />
</Router>


