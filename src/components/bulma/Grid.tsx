import { FunctionalComponentOptions } from 'vue'

export const Column = () => createFunctionalComponentOptions('column')

export const Columns = () => createFunctionalComponentOptions('columns')

function createFunctionalComponentOptions(componentName: string, className?: 'column' | 'columns'): FunctionalComponentOptions {
  return {
    functional: true,
    name: componentName,
    render(h, context) {
      let classes = {
        [className || componentName]: true,
        [context.data.staticClass]: context.data.staticClass
      }
      return (<div class={{ ...classes }}>{context.children} </div>)
    }
  }
}
