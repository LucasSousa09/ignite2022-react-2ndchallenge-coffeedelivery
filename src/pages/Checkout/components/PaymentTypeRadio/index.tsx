import { CreditCard, Bank, Money } from 'phosphor-react'

import { HiddenRadioButton, PaymentType } from './styles'
import { defaultTheme } from '../../../../styles/theme/default'

import { UseFormRegister } from 'react-hook-form'

import { ShipingFormData } from '../../index'

type PaymentTypeId = 'credit-card' | 'debit-card' | 'money'

interface PaymentTypeRadioProps {
  id: PaymentTypeId
  value: string
  checkedButton: string
  register: UseFormRegister<ShipingFormData>
  handleCheckRadioButton: (props: PaymentTypeId) => void
}

export function PaymentTypeRadio({
  id,
  value,
  checkedButton,
  handleCheckRadioButton,
  register,
}: PaymentTypeRadioProps) {
  return (
    <>
      <HiddenRadioButton
        type="radio"
        id={id}
        value={value}
        onClick={() => handleCheckRadioButton(id)}
        checked={checkedButton === id}
        {...register('paymentType', { required: true })}
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
