<script>
    import { Route } from "svelte-navigator";
    import SecretGuard from "./secretGuard.svelte";
  
    export let path;
  </script>
  
  <Route {path} let:params let:location let:navigate>
    <SecretGuard>
      <slot {params} {location} {navigate} />
      <h1>hello</h1>
    </SecretGuard>
  </Route>
  