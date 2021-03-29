<script>
import { onMount } from "svelte";

import { navigate } from "svelte-routing";

  function navigateToLogin() {
    console.log("navigating to login");
    navigate("/auth", {replace: true, state: {}});
  }

  onMount(async () => {
    navigateToLogin();
	});

  export let location;
</script>

<div>Loading</div>