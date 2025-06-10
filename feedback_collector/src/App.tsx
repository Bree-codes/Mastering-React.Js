import { useState } from 'react';
import FeedbackButton from './components/FeedbackButton';

function App() {
    // State hooks for tracking feedback counts
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    // Custom function to reset all counts
    const handleReset = () => {
        setGood(0);
        setNeutral(0);
        setBad(0);
    };


// Derived value: total feedback
    const total = good + neutral + bad;

// Derived value: percentage of good feedback
    const positivePercentage = total === 0 ? 0 : ((good / total) * 100).toFixed(1);


    return (
        <div className="flex flex-col items-center mt-10 space-y-6">
            <h1 className="text-2xl font-bold">Feedback Collector</h1>

            {/* Feedback buttons */}
            <div className="flex space-x-4">
                <FeedbackButton label="Good" onClick={() => setGood(good + 1)} />
                <FeedbackButton label="Neutral" onClick={() => setNeutral(neutral + 1)} />
                <FeedbackButton label="Bad" onClick={() => setBad(bad + 1)} />
            </div>

            {/* Reset button */}
            <button
                onClick={handleReset}
                className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-xl"
            >
                Reset
            </button>

            {/* Feedback counts */}
            <div className="mt-6 text-lg">
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p className="mt-2 font-semibold">Total Feedback: {total}</p>
                <p className="text-green-600">Positive Feedback: {positivePercentage}%</p>
            </div>

        </div>
    );
}

export default App;
