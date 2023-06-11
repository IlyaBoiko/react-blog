import React, {useState, useEffect} from 'react';
import { Button } from "../components/button/Button";

export default function IndexPage() {
    const [state, setState] = useState(0);

    function handleState() {
        setState(state + 1);
    }

    return (
        <main>
            <Button onClick={handleState}>click</Button>
            <br/>
            <span>{state}</span>
        </main>
    )
}

React.createElement(
    "h1",
    {
        sass: "sass"
    },
    "hi"
);