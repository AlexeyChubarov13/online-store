<template>
    <div class="app">
      <LayoutHeaderHeader />
  
      <div class="shop__layout">
        <LayoutSidebarSidebar />
  
        <main class="content">
          <slot />
        </main>
      </div>
    </div>
</template>