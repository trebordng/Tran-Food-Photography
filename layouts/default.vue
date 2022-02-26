<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>
<script>
export default {};
</script>
<style>
.spinner {
  background-color: rgba(44, 39, 39, 1);
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 50;
}
</style>
