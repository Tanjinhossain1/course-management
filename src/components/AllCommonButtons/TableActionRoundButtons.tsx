import { Button } from 'antd'
import React from 'react'

interface TableActionRoundButtonsPropsType{
    icon: any; 
    backgroundColor?: string; 
    color?: string;
    styles?: any;
    type?: "link" | "text" | "default" | "primary" | "dashed" ;
    size?: "large" | "middle" | "small"
}
export default function TableActionRoundButtons({icon,backgroundColor,styles,type,size}: TableActionRoundButtonsPropsType) {
  return (
    
<Button
      type={type ? type : "default"}
      icon={icon}
      size={size}
      style={{
          backgroundColor: backgroundColor, 
          borderColor: backgroundColor, 
          color: "#fff", 
          width: "30px", 
          height: "30px", 
          borderRadius: '50%', 
          ...styles,
      }}
    />
  )
}
