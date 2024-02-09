import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface ShoveBoxProps {
    position: number;
    setPosition: (position: number) => void;
}

function ShoveBoxButton({ position, setPosition }: ShoveBoxProps) {
    function addPos() {
        setPosition(4 + position);
    }

    return <Button onClick={addPos}>Shove the Box</Button>;
}

function MoveableBox({ position }: { position: number }): JSX.Element {
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: position + "px"
            }}
        ></div>
    );
}

export function ShoveBox(): JSX.Element {
    const [position, setPosition] = useState<number>(10);
    return (
        <div>
            <h3>Shove Box</h3>
            <ShoveBoxButton
                position={position}
                setPosition={setPosition}
            ></ShoveBoxButton>
            <MoveableBox position={position}></MoveableBox>
            <span>The box is at position {position}</span>
        </div>
    );
}
