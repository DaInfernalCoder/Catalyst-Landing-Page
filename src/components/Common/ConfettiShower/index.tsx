"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  rotation: number;
  velocity: {
    x: number;
    y: number;
  };
  shape: "square" | "circle" | "triangle";
}

const ConfettiOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
  overflow: hidden;
`;

const ConfettiPieceStyled = styled(motion.div)<{
  $color: string;
  $size: number;
  $shape: "square" | "circle" | "triangle";
}>`
  position: absolute;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  background: ${(props) => props.$color};

  ${(props) => {
    switch (props.$shape) {
      case "circle":
        return "border-radius: 50%;";
      case "triangle":
        return `
          width: 0;
          height: 0;
          background: transparent;
          border-left: ${props.$size / 2}px solid transparent;
          border-right: ${props.$size / 2}px solid transparent;
          border-bottom: ${props.$size}px solid ${props.$color};
        `;
      default:
        return "border-radius: 2px;";
    }
  }}
`;

interface ConfettiShowerProps {
  isActive: boolean;
  onComplete?: () => void;
}

const ConfettiShower: React.FC<ConfettiShowerProps> = ({
  isActive,
  onComplete,
}) => {
  const [confettiPieces, setConfettiPieces] = useState<ConfettiPiece[]>([]);

  const colors = [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#96CEB4",
    "#FFEAA7",
    "#DDA0DD",
    "#98D8C8",
    "#F39C12",
    "#E74C3C",
    "#9B59B6",
    "#3498DB",
    "#2ECC71",
    "#F1C40F",
    "#E67E22",
    "#1ABC9C",
  ];

  const shapes: ("square" | "circle" | "triangle")[] = [
    "square",
    "circle",
    "triangle",
  ];

  const createConfettiPiece = (id: number): ConfettiPiece => {
    return {
      id,
      x: Math.random() * window.innerWidth,
      y: -20,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 8 + 4, // 4-12px
      rotation: Math.random() * 360,
      velocity: {
        x: (Math.random() - 0.5) * 4, // -2 to 2
        y: Math.random() * 3 + 2, // 2-5
      },
      shape: shapes[Math.floor(Math.random() * shapes.length)],
    };
  };

  useEffect(() => {
    if (!isActive) {
      setConfettiPieces([]);
      return;
    }

    // Create initial burst of confetti
    const initialPieces = Array.from({ length: 150 }, (_, i) =>
      createConfettiPiece(i)
    );
    setConfettiPieces(initialPieces);

    // Add more confetti pieces over time for the first second
    const intervals: NodeJS.Timeout[] = [];

    for (let i = 0; i < 10; i++) {
      const timeout = setTimeout(() => {
        setConfettiPieces((prev) => [
          ...prev,
          ...Array.from({ length: 20 }, (_, j) =>
            createConfettiPiece(prev.length + j)
          ),
        ]);
      }, i * 100);
      intervals.push(timeout);
    }

    // Clean up after 3 seconds
    const cleanup = setTimeout(() => {
      setConfettiPieces([]);
      onComplete?.();
    }, 3000);

    return () => {
      intervals.forEach(clearTimeout);
      clearTimeout(cleanup);
    };
  }, [isActive, onComplete, createConfettiPiece]);

  return (
    <AnimatePresence>
      {isActive && (
        <ConfettiOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {confettiPieces.map((piece) => (
            <ConfettiPieceStyled
              key={piece.id}
              $color={piece.color}
              $size={piece.size}
              $shape={piece.shape}
              initial={{
                x: piece.x,
                y: piece.y,
                rotate: piece.rotation,
                opacity: 1,
              }}
              animate={{
                x: piece.x + piece.velocity.x * 100,
                y: window.innerHeight + 100,
                rotate: piece.rotation + 720, // Two full rotations
                opacity: [1, 1, 1, 0],
              }}
              transition={{
                duration: 3,
                ease: "easeOut",
                opacity: {
                  times: [0, 0.7, 0.9, 1],
                  duration: 3,
                },
              }}
            />
          ))}
        </ConfettiOverlay>
      )}
    </AnimatePresence>
  );
};

export default ConfettiShower;
