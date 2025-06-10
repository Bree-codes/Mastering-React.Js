import { useState } from 'react';
import FeedbackButton from "./components/FeedbackButton"

function App() {
  // useState hooks to keep track of counts
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
      <div className="flex flex-col items-center mt-10 space-y-6">
        <h1 className="text-2xl font-bold">Feedback Collector</h1>

        <div className="flex space-x-4">
          {/* Reusable buttons with event handlers passed as props */}
          <FeedbackButton label="Good" onClick={() => setGood(good + 1)} />
          <FeedbackButton label="Neutral" onClick={() => setNeutral(neutral + 1)} />
          <FeedbackButton label="Bad" onClick={() => setBad(bad + 1)} />
        </div>

        {/* Show the counts */}
        <div className="mt-6 text-lg">
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
        </div>
      </div>
  );
}

export default App;
