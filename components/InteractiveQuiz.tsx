'use client'

import React, { useState, useEffect } from 'react';
import { Clock, Users, Trophy } from 'lucide-react';

interface QuizQuestion {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: number;
  category: string;
}

const InteractiveQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [isActive, setIsActive] = useState(true);

  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: "Wie scoorde het winnende doelpunt in de Champions League finale van 2023?",
      answers: ["Rodri", "Kevin De Bruyne", "Erling Haaland", "Riyad Mahrez"],
      correctAnswer: 0,
      category: "Champions League"
    },
    {
      id: 2,
      question: "In welk jaar werd de UEFA Europa League opgericht?",
      answers: ["1971", "1972", "1970", "1973"],
      correctAnswer: 0,
      category: "Europa League"
    },
    {
      id: 3,
      question: "Welke Nederlandse club heeft de meeste Europese prijzen gewonnen?",
      answers: ["PSV", "Feyenoord", "Ajax", "AZ"],
      correctAnswer: 2,
      category: "Nederlandse voetbal"
    }
  ];

  // Timer countdown
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isActive && timeLeft > 0 && !showResult) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && !showResult) {
      handleNextQuestion();
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft, showResult]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    setIsActive(false);

    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      handleNextQuestion();
    }, 2000);
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setTimeLeft(15);
      setIsActive(true);
    } else {
      setShowResult(true);
      setIsActive(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setTimeLeft(15);
    setIsActive(true);
  };

  const getAnswerClass = (index: number) => {
    if (selectedAnswer === null) {
      return 'bg-white text-black hover:bg-[#A2E832] hover:text-black transition-all duration-200 cursor-pointer';
    }
    
    if (index === questions[currentQuestion].correctAnswer) {
      return 'bg-green-500 text-white';
    }
    
    if (index === selectedAnswer && selectedAnswer !== questions[currentQuestion].correctAnswer) {
      return 'bg-red-500 text-white';
    }
    
    return 'bg-gray-300 text-gray-700';
  };

  if (showResult) {
    return (
      <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-brand p-8 text-white text-center max-w-md mx-auto">
        <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
        <h3 className="text-2xl font-bold mb-4">Quiz Voltooid!</h3>
        <div className="mb-6">
          <div className="text-4xl font-black text-[#A2E832] mb-2">{score}/{questions.length}</div>
          <p className="text-lg">Correct beantwoord</p>
        </div>
        <button 
          onClick={resetQuiz}
          className="bg-[#A2E832] text-black px-6 py-3 rounded-full font-bold hover:bg-[#8BC728] transition-colors duration-200"
        >
          Opnieuw Spelen
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-brand p-6 text-white max-w-md mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <div className="bg-[#A2E832] text-black px-2 py-1 rounded text-sm font-bold">
            QUIZ
          </div>
          <span className="text-sm opacity-90">{questions[currentQuestion].category}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Clock className="w-4 h-4" />
          <span className={`font-bold ${timeLeft <= 5 ? 'text-red-400 animate-pulse' : ''}`}>
            {timeLeft}s
          </span>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span>Vraag {currentQuestion + 1} van {questions.length}</span>
          <span>{score} correct</span>
        </div>
        <div className="w-full bg-orange-900 rounded-full h-2">
          <div 
            className="bg-[#A2E832] h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-4 leading-tight">
          {questions[currentQuestion].question}
        </h3>

        {/* Answers */}
        <div className="space-y-3">
          {questions[currentQuestion].answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={selectedAnswer !== null}
              className={`w-full p-4 rounded-lg text-left font-semibold transition-all duration-200 ${getAnswerClass(index)}`}
            >
              <span className="font-bold mr-3 text-orange-800">
                {String.fromCharCode(65 + index)}:
              </span>
              <span className={selectedAnswer === null ? 'text-black' : ''}>
                {answer}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Live Stats */}
      <div className="border-t border-orange-500 pt-4">
        <div className="flex items-center justify-center space-x-4 text-sm opacity-90">
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>1.2K spelers</span>
          </div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <span>Live in stadion</span>
        </div>
      </div>
    </div>
  );
};

export default InteractiveQuiz;
