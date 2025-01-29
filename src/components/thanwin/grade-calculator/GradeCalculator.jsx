import { useState } from 'react';
import Input from './Input';
function calculateGrade(marks) {
  if (marks >= 90 && marks <= 100) {
    return 'A';
  } else if (marks >= 80 && marks <= 89) {
    return 'B';
  } else if (marks >= 70 && marks <= 79) {
    return 'C';
  } else if (marks >= 60 && marks <= 69) {
    return 'D';
  } else if (marks >= 0 && marks <= 59) {
    return 'F';
  } else {
    return 'Not Valid Score';
  }
}
const GradeCalculator = () => {
  const [marks, setMarks] = useState('');
  const [grade, setGrade] = useState(null);
  const invalidScore = grade?.includes('Not');
  function handleSubmit(e) {
    e.preventDefault();
    const grade = calculateGrade(Number(marks));
    setGrade(grade);
  }
  function reset() {
    setGrade(null);
    setMarks('');
  }
  return (
    <section className="h-screen bg-zinc-800 px-4 py-6">
      <h1 className="text-xl mt-2 mb-4 text-center text-slate-200 tracking-wider font-bold">
        Grade Calculator
      </h1>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Enter your scores here"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />
        <div className="flex mt-4 gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 rounded-md px-4 py-2 w-full text-slate-100">
            Calculate
          </button>
          <button
            type="button"
            onClick={reset}
            className={` rounded-md px-4 py-2 w-full text-slate-100 ${
              grade ? 'bg-blue-600 hover:bg-blue-700' : 'bg-zinc-400'
            }`}
          >
            Reset
          </button>
        </div>
      </form>
      {grade && !invalidScore && (
        <p className="text-slate-200 mt-4 text-center text-xl">
          Your grade is <span className="font-bold">{grade}</span>
        </p>
      )}
      {grade && invalidScore && (
        <p className="text-red-300 mt-4 text-center text-xl">
          Please enter a valid score
        </p>
      )}
    </section>
  );
};

export default GradeCalculator;
