import { FunctionalComponentOptions } from 'vue'
import { getSize } from './helpers'

const Icon: FunctionalComponentOptions = {
  functional: true,
  name: 'icon',
  props: ['name', 'size'],
  render(h, context) {
    var classes = {
      icon: true,
      [context.data.class]: context.data.class,
      [getSize(context.props.size)]: getSize(context.props.size)
    }
    return (
      <span class={{ ...classes }}>
        <i class={{ fa: true, [context.props.name]: true }}></i>
      </span >
    )
  }
}

export default () => Icon
