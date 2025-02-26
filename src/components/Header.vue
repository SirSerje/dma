<template>
  <header class="header">
    <img src="@/assets/logo.svg" alt="Logo" class="logo" />
    <div class="select">Select</div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  ;
  background-color: var(--color-background-dark);
  color: var(--color-text-light);
}

.logo {
  margin-right: 32px;
  margin-left: 32px;
  margin-top: 15px;
  margin-bottom: 15px;
}


.select {
  color: var(--color-white-primary);
  margin-right: 32px;
}
</style>
