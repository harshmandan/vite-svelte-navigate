<script>
  import { Router, Route } from "svelte-routing";

  import Index from "./views/Index.svelte";

  import Auth from "./views/auth/Login.svelte"
  import Home from "./views/admin/Home.svelte"
import TailwindCSS from "./TailwindCSS.svelte";

  export let url = "";
</script>

<TailwindCSS />

<Router {url}>
  <!-- admin layout -->
  <Route path="/home" component={Home} />
  <!-- auth layout -->
  <Route path="/auth" component={Auth} />

  <!-- no layout pages -->
  <Route path="/" component={Index} />
</Router>
