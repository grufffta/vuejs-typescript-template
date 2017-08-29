import { DirectiveOptions } from 'vue'

export const Focus: DirectiveOptions = {
  inserted(el) {
    el.focus()
  }
}
