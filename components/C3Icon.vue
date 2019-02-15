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
import IconAudio from '@/assets/svg/icon--audio.svg'
import IconLoader from '@/assets/svg/icon--loader.svg'
import IconLock from '@/assets/svg/icon--lock.svg'
import IconChevronRight from '@/assets/svg/icon--chevron-right.svg'
import IconClose from '@/assets/svg/icon--close.svg'

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
    IconSpotify,
    IconAudio,
    IconLoader,
    IconLock,
    IconChevronRight,
    IconClose
  },
  props: {
    iconName: {
      type: String,
      default: ''
    }
  }
}
</script>
