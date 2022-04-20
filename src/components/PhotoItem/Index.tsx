import React from 'react'
import * as C from './styles'

type Props = {
    url: string;
    name: string;
}

export const PhotoItem = ({url, name}: Props) => {
    return (
        <C.Container>
            <img src={url} />
            {name}
        </C.Container>
    )
}
