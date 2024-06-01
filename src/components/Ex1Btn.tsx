import { ReactNode } from "react"

interface Props {
  children: ReactNode;
  color?: 'primary' | 'secondary' | 'success';
  onClick: ()=> void;
}

export const Ex1Btn = ({ children, onClick, color='primary' }: Props) => {
  

  return (
    
    <button type="button" className={"btn btn-" + color} onClick={onClick}>{children}</button>
  )
}
