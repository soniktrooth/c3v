<template>
  <component :is="iconName" />
</template>

<script>
import IconInstagram from '@/assets/svg/icon--instagram.svg'
import IconTwitter from '@/assets/svg/icon--twitter.svg'
import IconFacebook from '@/assets/svg/icon--facebook.svg'
import IconChevronDown from '@/assets/svg/icon--chevron-down.svg'
import IconApplePodcasts from '@/assets/svg/icon--apple-podcasts.svg'
import IconBreaker from '@/assets/svg/icon--breaker.svg'
import IconCastbox from '@/assets/svg/icon--castbox.svg'
import IcongooglePodcasts from '@/assets/svg/icon--google-podcasts.svg'
import IconOvercast from '@/assets/svg/icon--overcast.svg'
import IconPocketCasts from '@/assets/svg/icon--pocket-casts.svg'
import IconRadioPublic from '@/assets/svg/icon--radio-public.svg'
import IconSpotify from '@/assets/svg/icon--spotify.svg'

export default {
  components: {
    IconInstagram,
    IconTwitter,
    IconFacebook,
    IconChevronDown,
    IconApplePodcasts,
    IconBreaker,
    IconCastbox,
    IcongooglePodcasts,
    IconOvercast,
    IconPocketCasts,
    IconRadioPublic,
    IconSpotify
  },
  props: {
    iconName: {
      type: String,
      default: ''
    }
  }
}
</script>
