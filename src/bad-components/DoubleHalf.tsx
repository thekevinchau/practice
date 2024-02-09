import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DHProps {
    dhValue: number;
    setDhValue(num: number): void;
}

function Doubler({ dhValue, setDhValue }: DHProps): JSX.Element {
    return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
}

function Halver({ dhValue, setDhValue }: DHProps): JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler
                dhValue={dhValue}
                setDhValue={() => setDhValue(dhValue * 2)}
            ></Doubler>
            <Halver
                dhValue={dhValue}
                setDhValue={() => setDhValue(dhValue * 0.5)}
            ></Halver>
        </div>
    );
}
