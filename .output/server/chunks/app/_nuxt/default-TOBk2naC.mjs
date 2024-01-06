import { resolveComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Nuxt = resolveComponent("Nuxt");
  _push(`<div${ssrRenderAttrs(_attrs)}><nav class="nav flex flex-wrap items-center justify-between px-4 bg-blue-100"><div class="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest"><span class="font-semibold text-xl tracking-tight">NUXTJS</span></div><input class="menu-btn hidden" type="checkbox" id="menu-btn"><label class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn"><span class="navicon bg-grey-darkest flex items-center relative"></span></label><ul class="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto"><li class="border-t md:border-none"><a href="/" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold">Home</a></li></ul></nav><div class="container mx-auto">`);
  _push(ssrRenderComponent(_component_Nuxt, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-TOBk2naC.mjs.map
