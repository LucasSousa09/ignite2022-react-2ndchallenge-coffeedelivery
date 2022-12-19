import { CreditCard, Bank, Money } from 'phosphor-react'

import { HiddenRadioButton, PaymentType } from './styles'
import { defaultTheme } from '../../../../styles/theme/default'

import { useForm } from 'react-hook-form'

interface PaymentTypeRadioProps {
  id: string
  value: string
  checkedButton: string
  handleCheckRadioButton: (props: string) => void
}

export function PaymentTypeRadio({
  id,
  value,
  checkedButton,
  handleCheckRadioButton,
}: PaymentTypeRadioProps) {
  const { register } = useForm()

  return (
    <>
      <HiddenRadioButton
        type="radio"
        id={id}
        value={value}
        onClick={() => handleCheckRadioButton(id)}
        checked={checkedButton === id}
        {...register('payment-type', { required: true })}
      />

      {id === 'credit-card' && (
        <PaymentType htmlFor={id}>
          <CreditCard size={16} color={defaultTheme.purple} />
          Cartão de Crédito
        </PaymentType>
      )}

      {id === 'debit-card' && (
        <PaymentType htmlFor={id}>
          <Bank size={16} color={defaultTheme.purple} />
          Cartão de Débito
        </PaymentType>
      )}

      {id === 'money' && (
        <PaymentType htmlFor={id}>
          <Money size={16} color={defaultTheme.purple} />
          Dinheiro
        </PaymentType>
      )}
    </>
  )
}
