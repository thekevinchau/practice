import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface ColorProps {
    setColorIndex: () => void;
}

function ChangeColor({ setColorIndex }: ColorProps): JSX.Element {
    return <Button onClick={setColorIndex}>Next Color</Button>;
}

function ColorPreview({ colorIndex }: { colorIndex: number }): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [index, setIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    const advanceColor = () => setIndex((1 + index) % COLORS.length);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[DEFAULT_COLOR_INDEX]}</span>
            <div>
                <ChangeColor setColorIndex={advanceColor}></ChangeColor>
                <ColorPreview colorIndex={index}></ColorPreview>
            </div>
        </div>
    );
}
