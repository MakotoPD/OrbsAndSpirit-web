<template>
	<div class="px-16 py-6">

		<div class="bg-container w-full py-4 px-12 rounded-3xl flex justify-between items-center mb-16">
			<div class="flex gap-6 items-end">
				<NuxtImg src="/logo/8bitjelly.svg" class="w-20 object-contain" />
				<select v-model="locale" class="h-fit text-white bg-secondary rounded-md">
					<option class="text-white" value="en">en</option>
					<option class="text-white" value="pl">pl</option>
				</select>
			</div>

			<div class="flex gap-4 text-graytext">
				<p>{{ $t('menu.home') }}</p>
				<p>{{ $t('menu.about') }}</p>
				<p>{{ $t('menu.download') }}</p>
			</div>
		</div>

		
		<slot />
	</div>
</template>
<script setup lang="ts">
import { useI18n, useLocalePath } from '#imports'

const { locale } = useI18n()

const localePath = useLocalePath()
</script>