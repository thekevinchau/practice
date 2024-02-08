import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, changeType] = useState<QuestionType>("short_answer_question");

    function invertType(): void {
        type === "short_answer_question"
            ? changeType("multiple_choice_question")
            : changeType("short_answer_question");
    }

    return (
        <div>
            <Button onClick={invertType}>Change Type</Button>
            {type === "multiple_choice_question" ? (
                <div>Multiple Choice</div>
            ) : (
                <div>Short Answer</div>
            )}
        </div>
    );
}
