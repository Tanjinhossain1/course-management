
interface ActionBarProps {
    title?: string;
    children?: React.ReactElement | React.ReactNode
}
export const ActionBar = ({title,children}: ActionBarProps) =>{
return (
    <div>
        <h1>{title}</h1>
        <div style={{display: "flex"}}>
            {children}
        </div>
    </div>
)
}