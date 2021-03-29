<style global>
  .hide-scrollbar {
    overflow-y: scroll;
  }

  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }

  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .hide-spinner input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
