import { FunctionalComponentOptions } from 'vue'
import Icon from './Icon'

const LabelledFieldOptions: FunctionalComponentOptions = {
  functional: true,
  name: 'labelled-field',
  props: ['label', 'leftIcon', 'leftIconSize', 'rightIcon', 'rightIconSize'],
  render: function (h, context) {
    return (
      <div class="field">
        <label class="label">{context.props.label}</label>
        <div class={{ 'control': true, 'has-icons-left': context.props.leftIcon, 'has-icons-right': context.props.rightIcon }}>
          {context.props.leftIcon && <Icon class={'is-left'} size={context.props.leftIconSize} name={context.props.leftIcon} />}
          {context.props.rightIcon && <Icon class={'is-right'} size={context.props.rightIconSize} name={context.props.rightIcon} />}
          {context.children}
        </div>
      </div>
    )
  }
}

export const LabelledField = () => LabelledFieldOptions
