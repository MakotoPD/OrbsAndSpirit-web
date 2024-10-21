<template>
	<div  class="bg-container py-12 px-20 rounded-3xl">
		<h2 class="text-4xl text-white font-semibold mb-4">Blog</h2>
		<div class="grid grid-cols-4 gap-4">
			<div v-if="isPendingBlog == 'pending'" class="bg-bg h-64 w-full rounded-xl relative"></div>
			<div v-if="isPendingBlog == 'pending'" class="bg-bg h-64 w-full rounded-xl relative"></div>
			<div v-if="isPendingBlog == 'pending'" class="bg-bg h-64 w-full rounded-xl relative"></div>
			<NuxtLink :to="localePath('/blog/'+article.attributes.slug)" v-for="article in blog.data" class="bg-bg px-2 py-2 pb-8 rounded-xl relative max-w-md">
				<NuxtImg 
					:src="'https://panel.8bitjelly.com'+ article.attributes.thumbnail.data.attributes.url" 
					class="rounded-lg mb-4"
				/>
				<h3 class="text-white/90 px-2">{{ article.attributes.Title }}</h3>
				<p class="text-white/50 absolute right-2 bottom-1">{{ article.attributes.publishedAt.split('T')[0] }}</p>
			</NuxtLink>
		</div>
	</div>
</template>
<script setup lang="ts">
const { locale } = useI18n()

const lang = ref(locale.value)
const localePath = useLocalePath()


let blog = ref()
let isPendingBlog = ref()

let fetchBlog = async () => {
  const { data, status } = await useFetch(
    `https://panel.8bitjelly.com/api/orbs-blogs?locale=${lang.value}&populate[thumbnail][fields][0]=name&populate[thumbnail][fields][1]=url`
  )
  blog.value = data.value
  isPendingBlog.value = status.value

  console.log(blog.value)
}

await fetchBlog()


watch(locale, (newLocale, oldLocale) => {
    lang.value = newLocale

    fetchBlog()
})

</script>