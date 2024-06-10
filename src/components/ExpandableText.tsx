import { useState } from "react";

interface Props {
    children: string;
    maxChars?: number
}

export const ExpandableText = ({children, maxChars = 100} : Props) => {
    const [isExpanded, setExpanded] = useState(false);

    if(children.length <= maxChars) return {children}
    const text = isExpanded ? children : children.substring(0, maxChars)

  return (
    <div>{text}...<button onClick={()=>setExpanded(!isExpanded)}>{isExpanded ? 'Less' : 'More'}</button></div>
  )
}
