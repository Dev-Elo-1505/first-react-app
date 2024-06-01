import { ReactNode } from "react"
import styles from './Ex1Btn.module.css'

interface Props {
  children: ReactNode;
  color?: 'primary' | 'secondary' | 'success';
  onClick: ()=> void;
}

export const Ex1Btn = ({ children, onClick, color='primary' }: Props) => {
  

  return (
    
    <button type="button" className={[styles.btn, styles['btn-' + color]].join(' ')} onClick={onClick}>{children}</button>
  )
}
