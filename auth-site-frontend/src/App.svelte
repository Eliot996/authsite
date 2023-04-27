<script lang="ts">
  import { Router, Link, Route } from "svelte-navigator";
  import Counter from './lib/Counter.svelte';
  import Home from './pages/home.svelte';
</script>

<Router>
  <nav>
    <Link to="/" class="link-button">Home</Link>
    <Link to="/counter" class="link-button">Counter</Link>
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


