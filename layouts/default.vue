<template xmlns:x-on="http://www.w3.org/1999/xhtml">
  <div>
    <nav class="nav flex flex-wrap items-center justify-between px-4 bg-blue-100">
      <div class="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
        <span class="font-semibold text-xl tracking-tight">NUXTJS</span>
      </div>

      <input class="menu-btn hidden" type="checkbox" id="menu-btn">
      <label class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
        <span class="navicon bg-grey-darkest flex items-center relative"></span>
      </label>

      <ul class="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
        <li class="border-t md:border-none">
          <a href="/"
             class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold">Home</a>
        </li>
      </ul>
    </nav>

    <div class="container mx-auto">
      <Nuxt/>
    </div>

  </div>


</template>

<style>
@media (max-width: 767px) {
  .navicon {
    width: 1.125em;
    height: .125em;
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
  }

  .menu-btn:checked ~ .menu-icon .navicon::after {
    transform: rotate(45deg);
  }

  .menu-btn:checked ~ .menu-icon .navicon::before,
  .menu-btn:checked ~ .menu-icon .navicon::after {
    top: 0;
  }
}

</style>


