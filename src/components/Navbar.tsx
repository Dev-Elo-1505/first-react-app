

interface Props {
    cartItemsCount: number
}

export const Navbar = ({cartItemsCount} : Props) => {
  return (
    <div>Navbar: {cartItemsCount}</div>
  )
}
