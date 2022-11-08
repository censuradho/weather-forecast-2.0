import { ButtonIcon } from 'components/button-icon'
import { Icon } from 'components/icon'
import { IconProps } from 'components/icon/types'
import { forwardRef, memo } from 'react'

import * as Styles from './styles'
import { InputProps } from './types'

export const BaseInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    label,
    errorMessage,
    register,
    fullWidth,
    leftIcon,
    rightIcon,
    onLeftIconClick,
    onRightIconClick,
    ...otherProps
  } = props
  const hasError = !!errorMessage

  const renderLabel = () => {
    if (!label) return null
    return (
      <Styles.Label
        htmlFor={otherProps?.id}
        hasError={hasError}
      >
        {label}
      </Styles.Label>
    )
  }

  const renderErrorMessage = () => {
    if (!hasError) return null

    return (
      <Styles.ErrorMessage>{errorMessage}</Styles.ErrorMessage>

    )
  }

  const renderIcon = (icon: IconProps, callback?: () => void) => {
    if (callback) {
      return (
        <ButtonIcon
          onClick={callback}
          type="button"
          icon={icon}
        />
      )
    }

    return (
      <Icon {...icon} />
    )
  }

  const renderLeftIcon = () => {
    if (!leftIcon) return null

    return (
      <Styles.LeftIconView>
        {renderIcon(leftIcon, onLeftIconClick)}
      </Styles.LeftIconView>
    )
  }

  const renderRightIcon = () => {
    if (!rightIcon) return null

    return (
      <Styles.RightIconView>
        {renderIcon(rightIcon, onRightIconClick)}
      </Styles.RightIconView>
    )
  }

  return (
    <Styles.Container fullWidth={fullWidth}>
      {renderLabel()}
      <Styles.IconView>
        {renderLeftIcon()}
        <Styles.Input
          {...otherProps}
          ref={ref}
          {...register}
          hasError={hasError}
          hasLeftIcon={!!leftIcon}
          hasRightIcon={!!rightIcon}
        />
        {renderRightIcon()}
      </Styles.IconView>
      {renderErrorMessage()}
    </Styles.Container>
  )
})

export const Input = memo(BaseInput)
