<template>
    <div class="app">
      <LayoutHeader />
  
      <div class="shop__layout">
        <LayoutSidebar />
  
        <main class="content">
          <slot />
        </main>
      </div>
    </div>
</template>

<style scoped lang="scss" src="./default.scss"></style>