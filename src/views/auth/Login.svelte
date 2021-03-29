<script>
  import { link, navigate } from "svelte-routing";

  export let location;

</script>

<div>
  <a use:link href='/admin/home'>Go to Home</a>
</div>