import React from 'react';


type PropsType = {
    title: string
    onClick: () => void
}

export const Button: React.FC<PropsType> = ({title,onClick}) => {

    return (
        <div>
            <button className={'button'} onClick={onClick}>{title}</button>
        </div>
    )
}
