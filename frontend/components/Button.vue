<template>
  <button
    :class="[
      'rounded-xl px-6 py-3 font-medium transition-all duration-200',
      variantClasses[variant],
      className
    ]"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'login'
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  className: ''
})

const variantClasses = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-purple-600 text-white hover:bg-purple-700',
  login: 'bg-white text-gray-800 hover:bg-gray-100'
}

defineEmits(['click'])
</script>