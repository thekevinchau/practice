import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);

    //disabled property will be set to inProgress because it is a boolean

    function startQuiz(): void {
        setAttempts(attempts - 1);
        setProgress(true);
    }

    function stopQuiz(): void {
        setProgress(false);
    }

    return (
        <div>
            <div>Attempts Left: {attempts}</div>
            <Button onClick={startQuiz} disabled={inProgress || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={inProgress === false}>
                Stop Quiz
            </Button>
            <Button
                onClick={() => setAttempts(attempts + 1)}
                disabled={inProgress}
            >
                Mulligan
            </Button>
        </div>
    );
}
