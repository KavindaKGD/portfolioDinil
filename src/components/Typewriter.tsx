import { useState, useEffect, useCallback } from 'react';

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function Typewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const handleTyping = useCallback(() => {
    const currentWord = words[currentWordIndex];

    if (!isDeleting) {
      setCurrentText(currentWord.substring(0, currentText.length + 1));
      if (currentText.length === currentWord.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }
    } else {
      setCurrentText(currentWord.substring(0, currentText.length - 1));
      if (currentText.length === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
    }
  }, [currentText, currentWordIndex, isDeleting, words, pauseDuration]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [handleTyping, isDeleting, deletingSpeed, typingSpeed]);

  return (
    <span>
      {currentText}
      <span className="typewriter-cursor" />
    </span>
  );
}
