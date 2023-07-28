import { useEffect, useState } from 'react'
import axiosClient from '../axios.js'
import test from '../test.js';

export default function Index() {

    test();

    // Sample State
    const [state1, setState1] = useState("");

    const sampleFunction = (sampleParams) => {
        // Do Something
    };

    return (
        <div>
            Hello World!
        </div>
    )
}
