import React, { useEffect, useState } from 'react'
import useNumber from '../../Hooks/useNumber'

function Decrementer() {
    let num = useNumber(-1)

    return (
        <div>{num}</div>
    )
}

export default Decrementer