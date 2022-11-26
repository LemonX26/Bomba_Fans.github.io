import {ref,computed } from 'vue'
export const collapsed = ref(false)
export const toggleSidebar = () => (collapsed.value = ! collapsed.value) //collapsed - zwiniety
export const SIDEBAR_WIDTH = 110
export const SIDEBAR_WIDTH_COLLAPSED = 40
export const sidebarWidth = computed(()=>`${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
)
