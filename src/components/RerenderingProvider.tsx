import React, {createContext, useEffect, useReducer} from "react";

const RerenderingContext = createContext(-1)

export default function RerenderingProvider({children}: {children: React.ReactNode}) {
  console.log('Render <RerenderingProvider>')

  const [value, rerender] = useReducer(p => p + 1, 0)

  useEffect(() => {
    rerender()
  }, [])

  return <RerenderingContext value={value}>{children}</RerenderingContext>
}
