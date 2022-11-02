import React, { useEffect, useState } from 'react'
import useNumber from '../../Hooks/useNumber'

function Incrementer() {
    let num = useNumber(+1)

    return (
        <div>
            <p>{num}</p>
        </div>
    )
}

export default Incrementer