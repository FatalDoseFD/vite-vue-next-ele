import { inject } from '@vue/runtime-core'
export function getTheme(){
    const theme = inject('theme')
    const weight = inject('color-weight')
    return [`bg-${theme}-${weight}`]
}