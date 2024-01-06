<template xmlns:x-on="http://www.w3.org/1999/xhtml">
  <div>
    <AppHeader />
    <div class="container mx-auto">
      <slot />
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 767px) {
  .navicon {
    width: 1.125em;
    height: .125em;
    background: #3D4852;
  }

  .navicon::before,
  .navicon::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all .2s ease-out;
    content: '';
    background: #3D4852;
  }

  .navicon::before {
    top: 5px;
  }

  .navicon::after {
    top: -5px;
  }

  .menu-btn:not(:checked) ~ .menu {
    display: none;
  }

  .menu-btn:checked ~ .menu {
    display: block;
  }

  .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .menu-btn:checked ~ .menu-icon .navicon::before {
    transform: rotate(-45deg);
    top: 0;
  }

  .menu-btn:checked ~ .menu-icon .navicon::after {
    transform: rotate(45deg);
    top: 0;
  }
}
</style>
