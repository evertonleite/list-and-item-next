import { ReactNode } from "react"

type TypeProps = {
  children: ReactNode
}

export default function Item({ children}: TypeProps) {

    return <ul>{children}</ul>;
    
}
