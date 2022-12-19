import { createContext, ReactNode, useState } from 'react'
import { ShipingFormData } from '../pages/Checkout/index'

interface ShipmentContextProps {
  shipingData: ShipingFormData
  setShipingInformation: (props: ShipingFormData) => void
}

export const ShipmentContext = createContext({} as ShipmentContextProps)

interface ShipmentContextProviderProps {
  children: ReactNode
}

export function ShipmentContextProvider({
  children,
}: ShipmentContextProviderProps) {
  const [shipingData, setShipingData] = useState<ShipingFormData>(
    {} as ShipingFormData,
  )
  function setShipingInformation(data: ShipingFormData) {
    setShipingData(data)
  }
  return (
    <ShipmentContext.Provider value={{ shipingData, setShipingInformation }}>
      {children}
    </ShipmentContext.Provider>
  )
}
