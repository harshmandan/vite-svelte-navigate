<script>
  import { link } from "svelte-routing";

  export let location;

</script>

<div>
  <a use:link href='/home'>Click me to go to the page HOME</a>
</div>