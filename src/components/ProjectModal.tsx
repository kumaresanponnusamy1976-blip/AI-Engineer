import React, { useState } from 'react';
import { Project } from '../types/portfolio';
import { X, Play, Code, Check, ExternalLink, RefreshCw, Terminal } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  mode: 'demo' | 'code' | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, mode, onClose }) => {
  if (!project || !mode) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-1">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>Python 3</span>
            </div>
            <h3 id="modal-title" className="text-lg font-semibold text-slate-900">
              {project.title} — {mode === 'demo' ? 'Interactive Demo' : 'Source Code'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {mode === 'code' ? (
            <CodeViewer project={project} />
          ) : (
            <InteractiveDemo project={project} />
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-slate-200 bg-slate-50 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Educational Python Project</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-400">Target URL: {project.githubUrl}</span>
            <button
              onClick={onClose}
              className="px-3 py-1.5 bg-slate-200 text-slate-800 rounded-md font-medium hover:bg-slate-300 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// Code Viewer with Copy functionality
// ----------------------------------------------------
const CodeViewer: React.FC<{ project: Project }> = ({ project }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(project.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-600">
          {project.description}
        </p>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded border border-slate-300 transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Code className="w-3.5 h-3.5 text-slate-600" />
              <span>Copy Code</span>
            </>
          )}
        </button>
      </div>

      <div className="bg-slate-900 rounded-lg p-4 font-mono text-xs text-slate-100 overflow-x-auto border border-slate-800 leading-relaxed">
        <pre>{project.codeSnippet}</pre>
      </div>

      <div className="pt-2">
        <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Key Concepts Practiced</h4>
        <ul className="space-y-1 text-xs text-slate-600 list-disc list-inside">
          {project.keyLearnings.map((learning, idx) => (
            <li key={idx}>{learning}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// Interactive Demos
// ----------------------------------------------------
const InteractiveDemo: React.FC<{ project: Project }> = ({ project }) => {
  switch (project.demoType) {
    case 'voter':
      return <VoterDemo />;
    case 'calculator':
      return <CalculatorDemo />;
    case 'atm':
      return <AtmDemo />;
    case 'grade':
      return <GradeDemo />;
    default:
      return <div>Demo unavailable</div>;
  }
};

const VoterDemo: React.FC = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [status, setStatus] = useState<'neutral' | 'eligible' | 'not-eligible' | 'error'>('neutral');

  const checkEligibility = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setResult('Error: Please enter your name.');
      setStatus('error');
      return;
    }
    const parsedAge = parseInt(age, 10);
    if (isNaN(parsedAge) || parsedAge < 0 || parsedAge > 120) {
      setResult('Error: Age must be a valid number between 0 and 120.');
      setStatus('error');
      return;
    }

    if (parsedAge >= 18) {
      setResult(`Eligible: Hello ${name}, you are ${parsedAge} years old and eligible to vote in national elections.`);
      setStatus('eligible');
    } else {
      const remaining = 18 - parsedAge;
      setResult(`Not Eligible: Hello ${name}, you are ${parsedAge} years old. You will become eligible to vote in ${remaining} year${remaining > 1 ? 's' : ''}.`);
      setStatus('not-eligible');
    }
  };

  return (
    <div className="space-y-5">
      <div className="p-3 bg-blue-50/60 border border-blue-100 rounded-lg text-xs text-blue-900 leading-relaxed">
        <strong>Terminal Simulation:</strong> Test this Python logic live by entering a candidate name and age to evaluate voting criteria (Minimum threshold: 18 years).
      </div>

      <form onSubmit={checkEligibility} className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Alex"
            className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">Age (Years)</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="e.g. 19"
            min="0"
            max="120"
            className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex items-center gap-2">
          <button
            type="submit"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors shadow-sm"
          >
            <Play className="w-3.5 h-3.5" />
            <span>Run Python Verification</span>
          </button>
          <button
            type="button"
            onClick={() => { setName(''); setAge(''); setResult(null); setStatus('neutral'); }}
            className="px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
          >
            Reset
          </button>
        </div>
      </form>

      {result && (
        <div className={`p-4 rounded-lg border text-xs font-mono leading-relaxed ${
          status === 'eligible' ? 'bg-emerald-50 border-emerald-200 text-emerald-900' :
          status === 'not-eligible' ? 'bg-amber-50 border-amber-200 text-amber-900' :
          'bg-rose-50 border-rose-200 text-rose-900'
        }`}>
          <div className="font-semibold text-slate-800 mb-1 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-slate-500" />
            <span>Python stdout:</span>
          </div>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

const CalculatorDemo: React.FC = () => {
  const [num1, setNum1] = useState('25');
  const [num2, setNum2] = useState('5');
  const [operation, setOperation] = useState<'add' | 'subtract' | 'multiply' | 'divide'>('multiply');
  const [output, setOutput] = useState<string | null>(null);

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setOutput('Error: Both values must be valid numbers.');
      return;
    }

    if (operation === 'divide' && b === 0) {
      setOutput('ZeroDivisionError: division by zero is undefined.');
      return;
    }

    let res = 0;
    let opSymbol = '+';
    if (operation === 'add') { res = a + b; opSymbol = '+'; }
    if (operation === 'subtract') { res = a - b; opSymbol = '-'; }
    if (operation === 'multiply') { res = a * b; opSymbol = '×'; }
    if (operation === 'divide') { res = a / b; opSymbol = '÷'; }

    setOutput(`Calculation Successful:\n${a} ${opSymbol} ${b} = ${res}`);
  };

  return (
    <div className="space-y-5">
      <div className="p-3 bg-blue-50/60 border border-blue-100 rounded-lg text-xs text-blue-900 leading-relaxed">
        <strong>Logic Exercise:</strong> Evaluates clean arithmetic operations with floating-point parsing and ZeroDivisionError handling.
      </div>

      <form onSubmit={calculate} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">First Number (num1)</label>
            <input
              type="number"
              step="any"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Second Number (num2)</label>
            <input
              type="number"
              step="any"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1.5">Select Arithmetic Operator</label>
          <div className="grid grid-cols-4 gap-2">
            {[
              { id: 'add', label: '+ Add' },
              { id: 'subtract', label: '- Subtract' },
              { id: 'multiply', label: '× Multiply' },
              { id: 'divide', label: '÷ Divide' }
            ].map((op) => (
              <button
                key={op.id}
                type="button"
                onClick={() => setOperation(op.id as any)}
                className={`py-2 px-2 text-xs font-medium rounded-lg border transition-all ${
                  operation === op.id
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                }`}
              >
                {op.label}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors shadow-sm"
        >
          <Play className="w-3.5 h-3.5" />
          <span>Execute Calculator Function</span>
        </button>
      </form>

      {output && (
        <div className="p-4 bg-slate-900 rounded-lg border border-slate-800 text-xs font-mono text-emerald-400 whitespace-pre-line">
          <div className="text-slate-400 mb-1">// Python Output:</div>
          {output}
        </div>
      )}
    </div>
  );
};

const AtmDemo: React.FC = () => {
  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [balance, setBalance] = useState(500);
  const [amount, setAmount] = useState('');
  const [log, setLog] = useState<string[]>([
    'System initialized. Default test PIN is 1234.'
  ]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === '1234') {
      setIsAuthenticated(true);
      setLog(prev => [...prev, 'PIN authenticated successfully. Welcome to SimpleATM.']);
    } else {
      setLog(prev => [...prev, 'Authentication Failed: Incorrect PIN (Hint: 1234).']);
    }
  };

  const handleDeposit = () => {
    const val = parseFloat(amount);
    if (isNaN(val) || val <= 0) {
      setLog(prev => [...prev, 'Error: Deposit amount must be greater than $0.00']);
      return;
    }
    const newBal = balance + val;
    setBalance(newBal);
    setLog(prev => [...prev, `Deposited $${val.toFixed(2)}. Current Balance: $${newBal.toFixed(2)}`]);
    setAmount('');
  };

  const handleWithdraw = () => {
    const val = parseFloat(amount);
    if (isNaN(val) || val <= 0) {
      setLog(prev => [...prev, 'Error: Withdrawal amount must be greater than $0.00']);
      return;
    }
    if (val > balance) {
      setLog(prev => [...prev, `Transaction Declined: Insufficient funds. Balance is $${balance.toFixed(2)}`]);
      return;
    }
    const newBal = balance - val;
    setBalance(newBal);
    setLog(prev => [...prev, `Dispensed $${val.toFixed(2)}. Remaining Balance: $${newBal.toFixed(2)}`]);
    setAmount('');
  };

  return (
    <div className="space-y-4">
      <div className="p-3 bg-blue-50/60 border border-blue-100 rounded-lg text-xs text-blue-900 leading-relaxed">
        <strong>OOP & State Simulation:</strong> Simulates a Python class maintaining account state, PIN authentication, deposits, and withdrawal limitations.
      </div>

      {!isAuthenticated ? (
        <form onSubmit={handleLogin} className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Enter 4-Digit ATM PIN</label>
            <input
              type="password"
              maxLength={4}
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Default: 1234"
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors"
          >
            Authenticate PIN
          </button>
        </form>
      ) : (
        <div className="space-y-4">
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-500">Account Balance</span>
              <div className="text-xl font-semibold font-mono text-slate-900 tabular-nums">
                ${balance.toFixed(2)}
              </div>
            </div>
            <button
              onClick={() => { setIsAuthenticated(false); setPin(''); }}
              className="px-2.5 py-1 text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-200 rounded"
            >
              Sign Out
            </button>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-medium text-slate-700">Transaction Amount ($)</label>
            <div className="flex gap-2">
              <input
                type="number"
                min="1"
                step="any"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="e.g. 50"
                className="flex-1 px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={handleDeposit}
                className="px-3 py-2 text-xs font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors"
              >
                Deposit
              </button>
              <button
                type="button"
                onClick={handleWithdraw}
                className="px-3 py-2 text-xs font-medium text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg transition-colors"
              >
                Withdraw
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Terminal log */}
      <div className="mt-4 p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs font-mono text-slate-200 max-h-36 overflow-y-auto space-y-1">
        <div className="text-slate-500 font-medium">// Transaction Audit Trail:</div>
        {log.map((item, idx) => (
          <div key={idx} className="leading-tight">&gt; {item}</div>
        ))}
      </div>
    </div>
  );
};

const GradeDemo: React.FC = () => {
  const [scores, setScores] = useState({
    python: '88',
    math: '76',
    physics: '82',
    web: '90'
  });
  const [report, setReport] = useState<{
    total: number;
    percentage: number;
    grade: string;
    description: string;
  } | null>(null);

  const calculateGrades = (e: React.FormEvent) => {
    e.preventDefault();
    const vals = [
      parseFloat(scores.python),
      parseFloat(scores.math),
      parseFloat(scores.physics),
      parseFloat(scores.web)
    ];

    if (vals.some(v => isNaN(v) || v < 0 || v > 100)) {
      alert('Please enter valid scores between 0 and 100 for all subjects.');
      return;
    }

    const total = vals.reduce((a, b) => a + b, 0);
    const percentage = total / 4;
    let grade = 'F';
    let description = 'Needs Improvement';

    if (percentage >= 90) { grade = 'A'; description = 'Outstanding'; }
    else if (percentage >= 80) { grade = 'B'; description = 'Very Good'; }
    else if (percentage >= 70) { grade = 'C'; description = 'Good'; }
    else if (percentage >= 60) { grade = 'D'; description = 'Satisfactory'; }
    else if (percentage >= 40) { grade = 'E'; description = 'Pass'; }

    setReport({ total, percentage, grade, description });
  };

  return (
    <div className="space-y-4">
      <div className="p-3 bg-blue-50/60 border border-blue-100 rounded-lg text-xs text-blue-900 leading-relaxed">
        <strong>Academic Evaluation:</strong> Aggregates marks across 4 1st-semester subjects, calculates percentage, and determines letter grade via threshold conditions.
      </div>

      <form onSubmit={calculateGrades} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Programming (Python)</label>
            <input
              type="number"
              min="0"
              max="100"
              value={scores.python}
              onChange={(e) => setScores({ ...scores, python: e.target.value })}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Mathematics I</label>
            <input
              type="number"
              min="0"
              max="100"
              value={scores.math}
              onChange={(e) => setScores({ ...scores, math: e.target.value })}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Engineering Physics</label>
            <input
              type="number"
              min="0"
              max="100"
              value={scores.physics}
              onChange={(e) => setScores({ ...scores, physics: e.target.value })}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Basics of Web Dev</label>
            <input
              type="number"
              min="0"
              max="100"
              value={scores.web}
              onChange={(e) => setScores({ ...scores, web: e.target.value })}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors shadow-sm"
        >
          <Play className="w-3.5 h-3.5" />
          <span>Compute Academic Grade</span>
        </button>
      </form>

      {report && (
        <div className="p-4 bg-slate-900 rounded-lg border border-slate-800 text-xs font-mono text-slate-200 space-y-2">
          <div className="text-slate-400 font-semibold">// Calculated Result:</div>
          <div className="grid grid-cols-3 gap-2 py-2 border-y border-slate-800">
            <div>
              <span className="text-slate-400 block text-[11px]">Total Score</span>
              <span className="text-sm font-bold text-white tabular-nums">{report.total} / 400</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Percentage</span>
              <span className="text-sm font-bold text-blue-400 tabular-nums">{report.percentage.toFixed(2)}%</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Assigned Grade</span>
              <span className="text-sm font-bold text-emerald-400">{report.grade} ({report.description})</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
