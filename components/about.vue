<template>
	<div class="bg-container py-12 px-20 rounded-3xl">
		<h3 class="text-4xl text-white font-semibold mb-4">{{ about.data.attributes.title }}</h3>
		<p class="text-white/85 2xl:text-lg max-w-screen-xl">{{ about.data.attributes.desc }}</p>
	</div>

</template>

<script setup lang="ts">
const { locale } = useI18n()
const lang = ref(locale.value)


let about = ref()
let isPendingAbout = ref(true)

let fetchAbout = async () => {
  const { data, pending, error } = await useFetch(
    `https://panel.8bitjelly.com/api/orbs-and-spirit-about?locale=${lang.value}`
  )
  about.value = data.value
  isPendingAbout.value = pending.value

  console.log(about.value)
}

await fetchAbout()


watch(locale, (newLocale, oldLocale) => {
    lang.value = newLocale


    fetchAbout()
})

</script>