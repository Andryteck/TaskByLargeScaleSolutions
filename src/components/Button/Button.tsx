import React from 'react';


type PropsType = {
    title: string
    // onClick: () => void
}

export const Button: React.FC<PropsType> = ({title}) => {

    return (
        <div>
            <button className={'button'}>{title}</button>
        </div>
    )
}
