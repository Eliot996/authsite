<script lang="ts">
  import { Router, Link, Route } from "svelte-navigator";
  import Counter from './lib/Counter.svelte';
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
    <Link to="/counter" class="link-button">Counter</Link>
    {#if $USER}
      <span class="link-button" on:click={logout}>logout</span>
    {/if}
  </nav>
  <Route path="/">
    <div class="card">
      <Home />
    </div>
  </Route>
  <Route path="/counter">
    <div class="card">
      <Counter />
    </div> 
  </Route>
</Router>


