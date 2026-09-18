import { Box, Stack, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

export function ReadingListWidget({ focused, activationId }) {
  const containerRef = useRef(null);

  const [selected, setSelected] = useState(0);

  const [books, setBooks] = useState([
    {
      checked: true,
      title: "If on a winter's night a traveler",
    },
    {
      checked: false,
      title: "You Only Live Twice",
    },
    {
      checked: false,
      title: "Double Indemnity",
    },
  ]);

  const toggleBook = (index) => {
    setBooks((prev) =>
      prev.map((book, i) =>
        i === index ? { ...book, checked: !book.checked } : book,
      ),
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((prev) => Math.min(prev + 1, books.length - 1));
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((prev) => Math.max(prev - 1, 0));
    }

    if (e.key === "Enter") {
      e.preventDefault();

      setBooks((prev) =>
        prev.map((book, i) =>
          i === selected ? { ...book, checked: !book.checked } : book,
        ),
      );
    }
  };

  useEffect(() => {
    if (!focused) return;

    setSelected(0);
  }, [focused]);

  useEffect(() => {
    if (!focused) return;

    requestAnimationFrame(() => {
      containerRef.current?.focus();
    });
  }, [focused, activationId]);

  return (
    <Stack
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      border="1px solid black"
      padding={5}
      bg="#dab7b8"
      w="100%"
      h="100%"
      outline="none"
      gap={0}
    >
      {books.map((book, i) => (
        <Box
          key={i}
          bg={focused && selected === i ? "#cea6a8" : "transparent"}
          p={1}
          cursor="pointer"
          onClick={(e) => {
            if (!focused) return;

            e.preventDefault();

            setSelected(i);
            toggleBook(i);
          }}
        >
          <Text color="black" fontSize="sm">
            {book.checked ? "[x]" : "[ ]"} {book.title}
          </Text>
        </Box>
      ))}
    </Stack>
  );
}
