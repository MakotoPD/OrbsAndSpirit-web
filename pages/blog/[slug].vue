<template>
	<div v-for="article in blog.data" class="bg-container my-14 rounded-3xl py-16">
		<div class="text-white">
			<h1 class="text-4xl px-14 mb-8">{{ article.attributes.Title }}</h1>
			<div class="container mx-auto px-24" v-html="article.attributes.content"></div>
		</div>
	</div>
</template>

<style scoped>
h2{
	@apply text-3xl mt-4 mb-2
}
h3{
	@apply text-2xl mt-4 mb-2
}

ul {
	@apply list-inside list-disc
}
ol {
	@apply list-inside list-decimal
}
</style>

<script setup lang="ts">
const { slug } = useRoute().params;

const { locale } = useI18n()
const lang = ref(locale.value)

let blog = ref()
let blogStatus = ref()
let anotherSlug = ref('');


let fetchBlog = async (x) => {
  const { data, status } = await useFetch(
    `https://panel.8bitjelly.com/api/orbs-blogs?filters[slug][$eq]=${x}&locale=${lang.value}&populate=*`
  )
  blog.value = data.value
  blogStatus.value = status.value
  anotherSlug.value = data.value.data[0].attributes.localizations.data[0].attributes.slug

  console.log(slug)
  console.log(anotherSlug)
  console.log(data.value)


}

await fetchBlog(slug)


watch(locale, (newLocale, oldLocale) => {
    lang.value = newLocale

    fetchBlog(anotherSlug.value)
})

</script>