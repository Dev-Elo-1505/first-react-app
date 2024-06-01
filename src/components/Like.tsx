import { useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

interface Props {
    onClick: ()=> void;
}

export const Like = ({ onClick }: Props) => {
const [status, setStatus] = useState(false)
const toggle = ()=> {
setStatus(!status);
onClick();
}

  if (status) return <AiFillLike color="red" size={20} onClick={toggle}/>
  return <AiOutlineLike size={20} onClick={toggle}/>
}
