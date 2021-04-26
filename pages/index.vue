<template>
  <div
    class="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl mt-3">
    <div
      class="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
    >
      <p class="font-semibold text-gray-800">Dynamic Form Input</p>
    </div>
    <div class="flex flex-col px-6 py-5 bg-gray-50">

      <p class="mb-2 font-semibold text-gray-700">Phone</p>

      <div
        v-for="(input, index) in phoneFields"
        :key="`phoneInput-${index}`"

        class="flex flex-col mb-4">
        <div class="relative">
          <input
            type="text"
            v-model="input.value"
            class="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-2 pr-10">

          <div
            v-show="phoneFields.length > 1"
            @click="removeField(index, phoneFields)"
            class="absolute flex border border-transparent right-0 top-0 h-full w-10">
            <div
              class="flex items-center justify-center rounded-tr rounded-br z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
              <svg viewBox="0 0 24 24"
                   width="24"
                   height="24"
                   stroke="currentColor"
                   stroke-width="2"
                   fill="none"
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   class="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div
      class="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
    >
      <button
        @click="addField(input, phoneFields)"
        class="px-4 py-2 text-white font-semibold bg-green-500 rounded">
        Add Field
      </button>
      <button class="px-4 py-2 text-white font-semibold bg-blue-500 rounded">
        Save
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneFields: [
        {
          value: "123143",
        },
        {
          value: "874565",
        },
        {
          value: "546456234",
        },
      ],
    }
  },

  methods: {
    addField(value, fieldType) {
      fieldType.push(
        {
          value: ""
        },
      );
    },
    removeField(index, fieldType) {
      fieldType.splice(index, 1);
    },
  }
}
</script>
