import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

interface Quote {
  value: string;
  count: number;
  author: string;
  bio: string;
  theme: string;
}

const quotes: Quote[] = [
  {
    value: "Not all those who wander are lost.",
    count: 30,
    author: "J.R.R. Tolkien",
    bio: "British writer, author of 'The Lord of the Rings'",
    theme: "Wandering",
  },
  {
    value: "The unexamined life is not worth living.",
    count: 25,
    author: "Socrates",
    bio: "Ancient Greek philosopher",
    theme: "Self-reflection",
  },
  {
    value:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    count: 28,
    author: "Ralph Waldo Emerson",
    bio: "American essayist and philosopher",
    theme: "Authenticity",
  },
  {
    value: "The only way to do great work is to love what you do.",
    count: 22,
    author: "Steve Jobs",
    bio: "Co-founder of Apple Inc.",
    theme: "Passion",
  },
  {
    value:
      "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    count: 20,
    author: "Martin Luther King Jr.",
    bio: "American civil rights activist",
    theme: "Friendship",
  },
  {
    value:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    count: 18,
    author: "Nelson Mandela",
    bio: "South African anti-apartheid revolutionary and president",
    theme: "Resilience",
  },
  {
    value:
      "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    count: 15,
    author: "Robert Frost",
    bio: "American poet",
    theme: "Choices",
  },
  {
    value: "Be the change you wish to see in the world.",
    count: 32,
    author: "Mahatma Gandhi",
    bio: "Indian independence movement leader",
    theme: "Change",
  },
  {
    value:
      "I have a dream that one day this nation will rise up and live out the true meaning of its creed.",
    count: 27,
    author: "Martin Luther King Jr.",
    bio: "American civil rights activist",
    theme: "Equality",
  },
  {
    value: "The only true wisdom is in knowing you know nothing.",
    count: 23,
    author: "Socrates",
    bio: "Ancient Greek philosopher",
    theme: "Humility",
  },
  {
    value: "Imagination is the only weapon in the war against reality.",
    count: 24,
    author: "Lewis Carroll",
    bio: "British author, 'Alice in Wonderland' creator",
    theme: "Imagination",
  },
  {
    value: "You may say I'm a dreamer, but I'm not the only one.",
    count: 30,
    author: "John Lennon",
    bio: "British singer and songwriter, member of The Beatles",
    theme: "Dreams",
  },
  {
    value: "I am not afraid of storms, for I am learning how to sail my ship.",
    count: 19,
    author: "Louisa May Alcott",
    bio: "American novelist, author of 'Little Women'",
    theme: "Courage",
  },
  {
    value:
      "The world breaks everyone, and afterward, many are strong at the broken places.",
    count: 17,
    author: "Ernest Hemingway",
    bio: "American novelist and journalist",
    theme: "Strength",
  },
  {
    value: "It is never too late to be what you might have been.",
    count: 21,
    author: "George Eliot",
    bio: "English novelist, real name Mary Ann Evans",
    theme: "Potential",
  },
  {
    value:
      "The most common way people give up their power is by thinking they don’t have any.",
    count: 28,
    author: "Alice Walker",
    bio: "American novelist, author of 'The Color Purple'",
    theme: "Empowerment",
  },
  {
    value:
      "I want to be everything, all at once. But no one can be everything.",
    count: 15,
    author: "Sylvia Plath",
    bio: "American poet and novelist",
    theme: "Limitations",
  },
  {
    value: "A person’s a person, no matter how small.",
    count: 18,
    author: "Dr. Seuss",
    bio: "American children's author",
    theme: "Equality",
  },
  {
    value: "There is no greater agony than bearing an untold story inside you.",
    count: 20,
    author: "Maya Angelou",
    bio: "American poet and civil rights activist",
    theme: "Expression",
  },
  {
    value:
      "The best way to find yourself is to lose yourself in the service of others.",
    count: 26,
    author: "Mahatma Gandhi",
    bio: "Indian independence movement leader",
    theme: "Service",
  },
  {
    value:
      "Do what you feel in your heart to be right—for you’ll be criticized anyway.",
    count: 22,
    author: "Eleanor Roosevelt",
    bio: "Former First Lady of the United States and activist",
    theme: "Integrity",
  },
  {
    value:
      "I am no bird; and no net ensnares me: I am a free human being with an independent will.",
    count: 27,
    author: "Charlotte Brontë",
    bio: "English novelist, author of 'Jane Eyre'",
    theme: "Independence",
  },
  {
    value: "We are all in the gutter, but some of us are looking at the stars.",
    count: 23,
    author: "Oscar Wilde",
    bio: "Irish poet and playwright",
    theme: "Optimism",
  },
  {
    value:
      "For what it's worth: it's never too late to be whoever you want to be.",
    count: 20,
    author: "F. Scott Fitzgerald",
    bio: "American novelist, author of 'The Great Gatsby'",
    theme: "Reinvention",
  },
  {
    value: "I will not be 'famous,' I will not be 'great.' I will be myself.",
    count: 15,
    author: "Charlotte Brontë",
    bio: "English novelist, author of 'Jane Eyre'",
    theme: "Authenticity",
  },
  {
    value: "It does not do to dwell on dreams and forget to live.",
    count: 29,
    author: "J.K. Rowling",
    bio: "British author, creator of 'Harry Potter'",
    theme: "Living",
  },
  {
    value: "Hope is the thing with feathers that perches in the soul.",
    count: 24,
    author: "Emily Dickinson",
    bio: "American poet",
    theme: "Hope",
  },
  {
    value: "I am rooted, but I flow.",
    count: 13,
    author: "Virginia Woolf",
    bio: "British author, modernist writer",
    theme: "Adaptability",
  },
  {
    value:
      "I will never be satisfied, because life is a constant search for the next great adventure.",
    count: 18,
    author: "Emma Watson",
    bio: "British actress and activist",
    theme: "Adventure",
  },
  {
    value: "I dream my painting and I paint my dream.",
    count: 22,
    author: "Vincent van Gogh",
    bio: "Dutch post-impressionist painter",
    theme: "Creativity",
  },
  {
    value:
      "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
    count: 21,
    author: "J.K. Rowling",
    bio: "British author, creator of 'Harry Potter'",
    theme: "Positivity",
  },
  {
    value:
      "I must be a mermaid, for I have no fear of depths and a great fear of shallow living.",
    count: 19,
    author: "Anaïs Nin",
    bio: "French-Cuban-American diarist and writer",
    theme: "Depth",
  },
  {
    value: "You can never be overdressed or overeducated.",
    count: 16,
    author: "Oscar Wilde",
    bio: "Irish poet and playwright",
    theme: "Self-improvement",
  },
  {
    value: "I am not what happened to me, I am what I choose to become.",
    count: 25,
    author: "Carl Jung",
    bio: "Swiss psychiatrist and psychoanalyst",
    theme: "Self-determination",
  },
  {
    value: "If you have a garden and a library, you have everything you need.",
    count: 17,
    author: "Marcus Tullius Cicero",
    bio: "Roman statesman and philosopher",
    theme: "Contentment",
  },
  {
    value:
      "The answer to life’s questions are not at the ends of the world, but in the depth of your soul.",
    count: 14,
    author: "Carl Jung",
    bio: "Swiss psychiatrist and psychoanalyst",
    theme: "Soul-searching",
  },
  {
    value: "You can’t use up creativity. The more you use, the more you have.",
    count: 28,
    author: "Maya Angelou",
    bio: "American poet and civil rights activist",
    theme: "Creativity",
  },
  {
    value: "I dwell in possibility.",
    count: 12,
    author: "Emily Dickinson",
    bio: "American poet",
    theme: "Possibility",
  },
  {
    value: "Creativity takes courage.",
    count: 26,
    author: "Henri Matisse",
    bio: "French visual artist",
    theme: "Courage",
  },
];

const colors = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#FFA07A",
  "#98D8C8",
  "#F7B267",
  "#A06CD5",
  "#7FD1B9",
  "#FF9FF3",
  "#74B49B",
];

export default function INFPQuoteCloud() {
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);

  const getRandomPosition = () => ({
    left: `${Math.random() * 80 + 10}%`,
    top: `${Math.random() * 80 + 10}%`,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4 overflow-hidden relative">
      <motion.div
        className="text-6xl font-bold text-gray-800 z-10 mb-8"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        INFPs Speak
      </motion.div>
      <div className="w-full h-full absolute top-0 left-0">
        {quotes.map((quote, index) => (
          <motion.div
            key={index}
            className="absolute cursor-pointer"
            style={{
              ...getRandomPosition(),
              fontSize: `${Math.max(24, quote.count / 1.5)}px`,
              color: colors[index % colors.length],
              fontFamily: "'Roboto', sans-serif",
              textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
              maxWidth: "300px",
              textAlign: "center",
            }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelectedQuote(quote)}
          >
            {quote.theme}
          </motion.div>
        ))}
      </div>
      <Dialog
        open={!!selectedQuote}
        onOpenChange={() => setSelectedQuote(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedQuote?.author}</DialogTitle>
            <DialogDescription>{selectedQuote?.bio}</DialogDescription>
          </DialogHeader>
          <p className="mt-4 text-lg italic">"{selectedQuote?.value}"</p>
          <p className="mt-2 text-sm text-gray-500">
            Theme: {selectedQuote?.theme}
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
}
