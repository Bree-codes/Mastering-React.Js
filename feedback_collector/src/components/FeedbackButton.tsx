import React from 'react';

type FeedbackButtonProps = {
    label: string;
    onClick: () => void; // function type with no parameters, no return
};

function FeedbackButton({ label, onClick }: FeedbackButtonProps) {
    return (
        <button
            onClick={onClick}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-xl transition"
        >
            {label}
        </button>
    );
}

export default FeedbackButton;
