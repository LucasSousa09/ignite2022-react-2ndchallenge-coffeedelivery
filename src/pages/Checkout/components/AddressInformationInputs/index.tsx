import { UseFormRegister } from 'react-hook-form'
import { ShipingFormData } from '../..'

import {
  CityInput,
  ComplementInput,
  Container,
  DistrictInput,
  NumberInput,
  StreetInput,
  UfInput,
  ZipCodeInput,
} from './style'

interface AddressContainerProps {
  register: UseFormRegister<ShipingFormData>
}

export function AddressInformationInputs({ register }: AddressContainerProps) {
  return (
    <Container>
      <ZipCodeInput
        type="text"
        placeholder="CEP"
        required
        {...register('zipCode')}
      />

      <StreetInput
        type="text"
        placeholder="Rua"
        className="street"
        required
        {...register('street')}
      />

      <NumberInput
        type="number"
        placeholder="Número"
        className="number"
        required
        {...register('houseNumber', { valueAsNumber: true })}
      />

      <ComplementInput
        type="text"
        placeholder="Complemento"
        className="complement"
        {...register('complement')}
      />

      <DistrictInput
        type="text"
        placeholder="Bairro"
        className="district"
        required
        {...register('district')}
      />

      <CityInput
        type="text"
        placeholder="Cidade"
        className="city"
        required
        {...register('city')}
      />

      <UfInput
        type="text"
        placeholder="UF"
        className="uf"
        required
        {...register('state')}
      />
    </Container>
  )
}
