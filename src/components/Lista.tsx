import { ReactNode } from "react"

type TypeProps = {
  children: ReactNode
}

export default function Lista({ children}: TypeProps) {

    return <li>{children}</li>;
    
}