import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, changeLeft] = useState<number>(3);
    const [rightDie, changeRight] = useState<number>(6);

    return (
        <>
            <div>
                <span>
                    <Button onClick={() => changeLeft(d6)}>Roll Left</Button>
                    <span data-testid="left-die">{leftDie}</span>
                    <Button onClick={() => changeRight(d6)}>Roll Right</Button>
                    <span data-testid="right-die">{rightDie}</span>
                    <div>
                        {leftDie === rightDie &&
                            leftDie < 2 &&
                            rightDie < 2 && <span>Lose!</span>}
                    </div>
                    <div>
                        {leftDie === rightDie &&
                            leftDie > 1 &&
                            rightDie > 1 && <span>Win!</span>}
                    </div>
                </span>
            </div>
        </>
    );
}
