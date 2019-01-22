<template>
  <component :is="iconName" />
</template>

<script>
import IconInstagram from '@/assets/svg/icon--instagram.svg'
import IconTwitter from '@/assets/svg/icon--twitter.svg'
import IconFacebook from '@/assets/svg/icon--facebook.svg'
import IconChevronDown from '@/assets/svg/icon--chevron-down.svg'

export default {
  components: {
    IconInstagram,
    IconTwitter,
    IconFacebook,
    IconChevronDown
  },
  props: {
    iconName: {
      type: String,
      default: ''
    }
  }
}
</script>
