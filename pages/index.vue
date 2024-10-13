<template>
	<div>
		<div>
			<select v-model="locale" class="bg-transparent text-blue-500">
				<option class="text-black" value="en">en</option>
				<option class="text-black" value="pl">pl</option>
			</select>
		</div>

		<div>
			{{ $t('start') }}
		</div>

	</div>
</template>
<script setup lang="ts">
import { useI18n, useLocalePath } from '#imports'

const { locale } = useI18n()

const localePath = useLocalePath()
</script>