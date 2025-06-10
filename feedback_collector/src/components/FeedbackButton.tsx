import React from 'react';

type FeedbackButtonProps = {
    label: string;
    onClick: () => void;
    className?: string;
};

const FeedbackButton = ({ label, onClick, className = '' }: FeedbackButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`text-white font-bold py-2 px-4 rounded-xl transition duration-200 ${className}`}
        >
            {label}
        </button>
    );
};

export default FeedbackButton;

