import { useState } from 'react'
import { UseFormRegister } from 'react-hook-form'

import { PaymentTypeRadio } from '../PaymentTypeRadio'

import { PaymentContainer } from './style'

import { ShipingFormData } from '../..'

interface PaymentTypeContainerProps {
  register: UseFormRegister<ShipingFormData>
}

type RadioButtonRegisteredName = 'credit-card' | 'debit-card' | 'money'

export function PaymentTypeContainer({ register }: PaymentTypeContainerProps) {
  const [checkedButton, setCheckedButton] =
    useState<RadioButtonRegisteredName>('credit-card')

  function handleCheckRadioButton(registeredName: RadioButtonRegisteredName) {
    setCheckedButton(registeredName)
  }

  return (
    <PaymentContainer>
      <PaymentTypeRadio
        handleCheckRadioButton={handleCheckRadioButton}
        id="credit-card"
        value="credit-card"
        checkedButton={checkedButton}
        register={register}
      />

      <PaymentTypeRadio
        handleCheckRadioButton={handleCheckRadioButton}
        id="debit-card"
        value="debit-card"
        checkedButton={checkedButton}
        register={register}
      />

      <PaymentTypeRadio
        handleCheckRadioButton={handleCheckRadioButton}
        id="money"
        value="money"
        checkedButton={checkedButton}
        register={register}
      />
    </PaymentContainer>
  )
}
