import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [answerVisible, setanswerVisible] = useState<boolean>(false);
    const [answerHintVisible, setanswerHintVisible] = useState<boolean>(false);
    let answer = 42;

    function toggleVisibility() {
        if (answerVisible) {
            setanswerVisible(false);
        } else {
            setanswerVisible(true);
        }
    }

    function toggleHintVisibility() {
        if (answerHintVisible) {
            setanswerHintVisible(false);
        } else {
            setanswerHintVisible(true);
        }
    }

    return (
        <div>
            Answer: {answerVisible && answer}
            {answerHintVisible ? "the hint" : ""}
            <span>
                <Button onClick={toggleVisibility}>
                    Toggle Answer Visibility
                </Button>
                <Button onClick={toggleHintVisibility}>
                    Toggle Hint Visibility
                </Button>
            </span>
        </div>
    );
}
