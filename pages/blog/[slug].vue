<template>
  <div class="lg:flex gap-4 xl:gap-12 justify-center my-14">
    <div v-for="article in blog.data" class=" bg-container rounded-3xl py-16 w-fit h-fit">
      <div class="text-white">
        <h1 class="text-4xl px-14 mb-8">{{ article.attributes.Title }}</h1>
        <div class="Article container mx-auto px-24" v-html="article.attributes.content"></div>
      </div>
    </div>

    <div class="mt-12 lg:mt-0 lg:max-w-64 xl:max-w-md self-start lg:sticky top-24">
      <div class="bg-container rounded-3xl py-8 px-4 gap-6 block">

        <h1 class="text-white text-xl mb-4">{{ $t('page.blogpost.articles') }}</h1>

        <NuxtLink 
          :to="localePath('/blog/'+article.attributes.slug)" v-for="article in articles.data" 
          class="grid grid-cols-3 lg:block bg-bg pl-2 pr-4 py-2 rounded-xl  xl:grid xl:grid-cols-3 gap-2"
        >
          <NuxtImg 
            :src="'https://panel.8bitjelly.com'+ article.attributes.thumbnail.data.attributes.url" 
            class="rounded-lg lg:h-24 mb-2 2xl:mb-0"
          />
          <h4 class="text-white/80 col-span-2">{{ article.attributes.Title }}</h4>
        </NuxtLink>
      </div>
    </div>
    
  </div>
	
</template>

<style>
.Article h2{
	@apply text-3xl mt-4 mb-2
}
.Article h3{
	@apply text-2xl mt-4 mb-2
}

.Article ul {
	@apply list-inside list-disc
}
.Article ol {
	@apply list-inside list-decimal
}
.Article img {
	@apply rounded-3xl mt-8 mb-14 
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

let articles = ref()
let fetchArticles = async () => {
  const { data, status } = await useFetch(
    `https://panel.8bitjelly.com/api/orbs-blogs?locale=${lang.value}&populate[thumbnail][fields][0]=name&populate[thumbnail][fields][1]=url`
  )
  articles.value = data.value
}

await fetchArticles()



watch(locale, (newLocale, oldLocale) => {
    lang.value = newLocale

    fetchBlog(anotherSlug.value)
    fetchArticles()
})

</script>