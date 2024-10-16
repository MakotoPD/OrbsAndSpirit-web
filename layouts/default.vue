<template>
	<div class="px-16 py-6">

		<header class="bg-container w-full py-4 px-12 rounded-3xl flex justify-between items-center mb-16">
			<div class="flex gap-6 items-end">
				<NuxtLink :to="localePath('/')">
					<NuxtImg src="/logo/8bitjelly.svg" class="w-20 object-contain" />
				</NuxtLink>
				<select v-model="locale" class="h-fit text-white bg-secondary rounded-md">
					<option class="text-white" value="en">en</option>
					<option class="text-white" value="pl">pl</option>
				</select>
			</div>

			<div class="flex gap-4 text-graytext">
				<NuxtLink :to="localePath('/')">{{ $t('menu.home') }}</NuxtLink>
				<NuxtLink :to="localePath('/')">{{ $t('menu.about') }}</NuxtLink>
				<NuxtLink :to="localePath('/')">{{ $t('menu.download') }}</NuxtLink>
			</div>
		</header>

		
		<slot />

		<footer class="footer mb-16 mt-16 rounded-3xl">
			<div class="bg-container/50 w-full py-8 px-12 rounded-3xl flex flex-col items-center gap-20">
				<h2 class="text-4xl text-white/90 font-semibold">Join the Orbs and Magic Comunity</h2>

				<div class="flex flex-col gap-6">
					<button class="flex items-center justify-center gap-2 text-lighttext px-3 py-1 bg-lighttext/20 rounded-full border border-1 border-lighttext">
						<span>✨ Download</span> <NuxtImg src="/icons/icon-right-arrow.svg" height="24" width="24" />
					</button>

					<div class="flex justify-center gap-8">
						<NuxtImg src="/icons/icon-instagram.svg" height="32" width="32" />
						<NuxtImg src="/icons/icon-tiktok.svg" height="32" width="32" />
						<NuxtImg src="/icons/icon-facebook.svg" height="32" width="32" />
					</div>
				</div>

				<div class="flex flex-col items-center">
					<p class="text-white/80">© 2023-{{ datenow.getFullYear() }} 8BitJelly. All Rights Reserved.</p>
					<p class="text-white/70">Desing and development by <NuxtLink to="https://makoto.com.pl" target="_blank" class="underline">MakotoPD</NuxtLink></p>
				</div>

			</div>
		</footer>
	</div>
</template>
<script setup lang="ts">
import { useI18n, useLocalePath } from '#imports'

const { locale } = useI18n()

const localePath = useLocalePath()

let datenow = new Date();

</script>

<style scoped>

.footer {
	background-image: url('/img/art.png');
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
}

</style>