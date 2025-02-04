
export const quizes = [
  {
    quizId: "abcd",
    title: "General Knowledge Quiz",
    description: "A basic quiz to test your general knowledge.",
    image:
      "https://img.freepik.com/premium-vector/man-silhouette-mental-health-creative-process_24640-20813.jpg",
    category: "General Knowledge",
    language: "en",
    tags: ["geography", "history", "science"],
    questions: [
      {
        questionId: "q1",
        question: "What is the capital of France?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Berlin",
            explanation: "Capital of Germany",
          },
          { optionId: "b", answer: "Madrid", explanation: "Capital of Spain" },
          { optionId: "c", answer: "Paris", explanation: "Capital of France" },
          { optionId: "d", answer: "Rome", explanation: "Capital of Italy" },
        ],
        correctAnswer: "c",
        feedback: {
          correct: "Great job! Paris is the capital of France.",
          incorrect: "Oops! The correct answer is Paris.",
        },
        hint: "It’s a European city.",
        difficulty: "easy",
      },
      {
        questionId: "q2",
        question: "Which planet is known as the Red Planet?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Venus",
            explanation: "Known for its thick atmosphere.",
          },
          {
            optionId: "b",
            answer: "Mars",
            explanation: "Known as the Red Planet.",
          },
          {
            optionId: "c",
            answer: "Jupiter",
            explanation: "Largest planet in the solar system.",
          },
          {
            optionId: "d",
            answer: "Saturn",
            explanation: "Famous for its rings.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! Mars is known as the Red Planet.",
          incorrect: "Oops! The correct answer is Mars.",
        },
        hint: "It has a reddish appearance.",
        difficulty: "easy",
      },
      {
        questionId: "q3",
        question: "Which is the largest mammal in the world?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "African Elephant",
            explanation: "Largest land animal.",
          },
          {
            optionId: "b",
            answer: "Blue Whale",
            explanation: "Largest mammal on Earth.",
          },
          {
            optionId: "c",
            answer: "Giraffe",
            explanation: "Tallest land animal.",
          },
          {
            optionId: "d",
            answer: "Orca",
            explanation: "A large sea mammal, but not the largest.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! The Blue Whale is the largest mammal.",
          incorrect: "Oops! The correct answer is Blue Whale.",
        },
        hint: "It lives in the ocean.",
        difficulty: "medium",
      },
      {
        questionId: "q4",
        question: "Who was the first man to step on the moon?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Buzz Aldrin",
            explanation: "Second person to step on the moon.",
          },
          {
            optionId: "b",
            answer: "Yuri Gagarin",
            explanation: "First man in space, not on the moon.",
          },
          {
            optionId: "c",
            answer: "Neil Armstrong",
            explanation: "First man to step on the moon.",
          },
          {
            optionId: "d",
            answer: "Michael Collins",
            explanation:
              "Part of the Apollo 11 mission but didn't step on the moon.",
          },
        ],
        correctAnswer: "c",
        feedback: {
          correct:
            "Correct! Neil Armstrong was the first man to step on the moon.",
          incorrect: "Oops! The correct answer is Neil Armstrong.",
        },
        hint: "He was part of the Apollo 11 mission.",
        difficulty: "easy",
      },
      {
        questionId: "q5",
        question: "What is the largest desert in the world?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Sahara Desert",
            explanation: "Largest hot desert.",
          },
          {
            optionId: "b",
            answer: "Gobi Desert",
            explanation: "Large desert in Asia, but not the largest.",
          },
          {
            optionId: "c",
            answer: "Antarctic Desert",
            explanation: "The largest desert in the world.",
          },
          {
            optionId: "d",
            answer: "Arabian Desert",
            explanation: "A significant desert, but not the largest.",
          },
        ],
        correctAnswer: "c",
        feedback: {
          correct:
            "Correct! The Antarctic Desert is the largest desert in the world.",
          incorrect: "Oops! The correct answer is Antarctic Desert.",
        },
        hint: "It’s not hot; it's cold.",
        difficulty: "medium",
      },
      {
        questionId: "q6",
        question: "Which country is known as the Land of the Rising Sun?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "China",
            explanation:
              "Known for its Great Wall, but not as the Land of the Rising Sun.",
          },
          {
            optionId: "b",
            answer: "Japan",
            explanation: "Referred to as the Land of the Rising Sun.",
          },
          {
            optionId: "c",
            answer: "South Korea",
            explanation: "Known for its technology and culture.",
          },
          {
            optionId: "d",
            answer: "India",
            explanation: "Known as the Land of Diversity.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! Japan is known as the Land of the Rising Sun.",
          incorrect: "Oops! The correct answer is Japan.",
        },
        hint: "It's in East Asia.",
        difficulty: "easy",
      },
      {
        questionId: "q7",
        question:
          "Which organ in the human body is responsible for pumping blood?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Lungs",
            explanation: "Responsible for respiration, not pumping blood.",
          },
          {
            optionId: "b",
            answer: "Heart",
            explanation: "Responsible for pumping blood.",
          },
          {
            optionId: "c",
            answer: "Kidney",
            explanation: "Filters blood but doesn't pump it.",
          },
          {
            optionId: "d",
            answer: "Liver",
            explanation: "Processes nutrients but doesn't pump blood.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! The heart pumps blood throughout the body.",
          incorrect: "Oops! The correct answer is the heart.",
        },
        hint: "It beats regularly.",
        difficulty: "easy",
      },
      {
        questionId: "q8",
        question: "Who painted the Mona Lisa?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Pablo Picasso",
            explanation: "A famous artist, but not for the Mona Lisa.",
          },
          {
            optionId: "b",
            answer: "Vincent van Gogh",
            explanation: "Known for Starry Night, not Mona Lisa.",
          },
          {
            optionId: "c",
            answer: "Leonardo da Vinci",
            explanation: "He painted the Mona Lisa.",
          },
          {
            optionId: "d",
            answer: "Claude Monet",
            explanation: "A famous Impressionist artist, not Mona Lisa.",
          },
        ],
        correctAnswer: "c",
        feedback: {
          correct: "Correct! Leonardo da Vinci painted the Mona Lisa.",
          incorrect: "Oops! The correct answer is Leonardo da Vinci.",
        },
        hint: "He was also an inventor.",
        difficulty: "medium",
      },
      {
        questionId: "q9",
        question: "What is the smallest prime number?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "1",
            explanation: "1 is not a prime number.",
          },
          { optionId: "b", answer: "2", explanation: "Smallest prime number." },
          {
            optionId: "c",
            answer: "3",
            explanation: "A prime number but not the smallest.",
          },
          {
            optionId: "d",
            answer: "0",
            explanation: "0 is not a prime number.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! 2 is the smallest prime number.",
          incorrect: "Oops! The correct answer is 2.",
        },
        hint: "It's the only even prime number.",
        difficulty: "easy",
      },
      {
        questionId: "q10",
        question: "Which is the longest river in the world?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Amazon River",
            explanation: "Second longest but largest by volume.",
          },
          {
            optionId: "b",
            answer: "Nile River",
            explanation: "The longest river in the world.",
          },
          {
            optionId: "c",
            answer: "Yangtze River",
            explanation: "Longest in Asia, not the world.",
          },
          {
            optionId: "d",
            answer: "Mississippi River",
            explanation: "Not the longest globally.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! The Nile is the longest river in the world.",
          incorrect: "Oops! The correct answer is the Nile River.",
        },
        hint: "It's in Africa.",
        difficulty: "medium",
      },
    ],
  },
  //----------------------------------------------------------------------
  {
    quizId: "efgh",
    title: "Science Quiz",
    description: "Test your knowledge on basic science concepts.",
    category: "Science",
    image:
      "https://img.freepik.com/free-vector/science-banner-with-doodle-icons_1308-132177.jpg?semt=ais_hybrid",
    language: "en",
    tags: ["physics", "biology", "chemistry"],
    questions: [
      {
        questionId: "q1",
        question: "What is the smallest planet in our solar system?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Mercury",
            explanation: "The smallest and closest planet to the Sun.",
          },
          {
            optionId: "b",
            answer: "Venus",
            explanation: "Second planet from the Sun.",
          },
          {
            optionId: "c",
            answer: "Earth",
            explanation: "Third planet from the Sun.",
          },
          {
            optionId: "d",
            answer: "Mars",
            explanation: "Fourth planet from the Sun.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! Mercury is the smallest planet.",
          incorrect: "Oops! The correct answer is Mercury.",
        },
        difficulty: "medium",
      },
      {
        questionId: "q2",
        question: "Who developed the theory of relativity?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Isaac Newton",
            explanation: "Known for laws of motion and gravity.",
          },
          {
            optionId: "b",
            answer: "Galileo Galilei",
            explanation: "Pioneered the use of the telescope.",
          },
          {
            optionId: "c",
            answer: "Albert Einstein",
            explanation: "Developed the theory of relativity.",
          },
          {
            optionId: "d",
            answer: "Nikola Tesla",
            explanation: "Known for his work on alternating current.",
          },
        ],
        correctAnswer: "c",
        feedback: {
          correct:
            "Correct! Albert Einstein developed the theory of relativity.",
          incorrect: "Oops! The correct answer is Albert Einstein.",
        },
        difficulty: "hard",
      },
      {
        questionId: "q3",
        question: "What is the powerhouse of the cell?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Nucleus",
            explanation: "The control center of the cell.",
          },
          {
            optionId: "b",
            answer: "Mitochondria",
            explanation: "Produces energy in the cell.",
          },
          {
            optionId: "c",
            answer: "Ribosome",
            explanation: "Site of protein synthesis.",
          },
          {
            optionId: "d",
            answer: "Cell Membrane",
            explanation: "Protects the cell and controls movement in and out.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! Mitochondria is the powerhouse of the cell.",
          incorrect: "Oops! The correct answer is Mitochondria.",
        },
        difficulty: "easy",
      },
      {
        questionId: "q4",
        question: "What is the chemical symbol for water?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "H",
            explanation: "Symbol for Hydrogen.",
          },
          {
            optionId: "b",
            answer: "O",
            explanation: "Symbol for Oxygen.",
          },
          {
            optionId: "c",
            answer: "H2O",
            explanation: "Chemical formula for water.",
          },
          {
            optionId: "d",
            answer: "OH",
            explanation: "Not the correct formula for water.",
          },
        ],
        correctAnswer: "c",
        feedback: {
          correct: "Correct! H2O is the chemical formula for water.",
          incorrect: "Oops! The correct answer is H2O.",
        },
        difficulty: "easy",
      },
      {
        questionId: "q5",
        question: "What is the speed of light in vacuum?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "3 x 10^8 m/s",
            explanation: "The correct speed of light.",
          },
          {
            optionId: "b",
            answer: "3 x 10^6 m/s",
            explanation: "Too slow for the speed of light.",
          },
          {
            optionId: "c",
            answer: "3 x 10^10 m/s",
            explanation: "Too fast for the speed of light.",
          },
          {
            optionId: "d",
            answer: "3 x 10^4 m/s",
            explanation: "Much slower than the actual speed.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! The speed of light is 3 x 10^8 m/s.",
          incorrect: "Oops! The correct answer is 3 x 10^8 m/s.",
        },
        difficulty: "hard",
      },
      {
        questionId: "q6",
        question: "Which gas do plants primarily use during photosynthesis?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Oxygen",
            explanation: "Plants release oxygen, not use it in photosynthesis.",
          },
          {
            optionId: "b",
            answer: "Carbon Dioxide",
            explanation: "Used by plants in photosynthesis.",
          },
          {
            optionId: "c",
            answer: "Nitrogen",
            explanation:
              "A major component of air but not used in photosynthesis.",
          },
          {
            optionId: "d",
            answer: "Hydrogen",
            explanation: "Not directly used in photosynthesis.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! Plants use carbon dioxide during photosynthesis.",
          incorrect: "Oops! The correct answer is Carbon Dioxide.",
        },
        difficulty: "medium",
      },
      {
        questionId: "q7",
        question: "Which organ filters blood in the human body?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Liver",
            explanation: "Processes nutrients but does not filter blood.",
          },
          {
            optionId: "b",
            answer: "Kidney",
            explanation: "Filters blood and removes waste.",
          },
          {
            optionId: "c",
            answer: "Heart",
            explanation: "Pumps blood but does not filter it.",
          },
          {
            optionId: "d",
            answer: "Lungs",
            explanation:
              "Responsible for oxygen exchange, not filtering blood.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! The kidneys filter blood in the human body.",
          incorrect: "Oops! The correct answer is Kidneys.",
        },
        difficulty: "easy",
      },
      {
        questionId: "q8",
        question: "What is the chemical symbol for gold?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Ag",
            explanation: "Symbol for silver.",
          },
          {
            optionId: "b",
            answer: "Au",
            explanation: "Correct symbol for gold.",
          },
          {
            optionId: "c",
            answer: "Fe",
            explanation: "Symbol for iron.",
          },
          {
            optionId: "d",
            answer: "Pb",
            explanation: "Symbol for lead.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! Au is the chemical symbol for gold.",
          incorrect: "Oops! The correct answer is Au.",
        },
        difficulty: "medium",
      },
      {
        questionId: "q9",
        question: "What is the most abundant gas in Earth's atmosphere?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Oxygen",
            explanation: "Essential for breathing but not the most abundant.",
          },
          {
            optionId: "b",
            answer: "Nitrogen",
            explanation: "Makes up around 78% of the atmosphere.",
          },
          {
            optionId: "c",
            answer: "Carbon Dioxide",
            explanation: "Found in small amounts.",
          },
          {
            optionId: "d",
            answer: "Hydrogen",
            explanation: "Not abundant in Earth's atmosphere.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct:
            "Correct! Nitrogen is the most abundant gas in Earth's atmosphere.",
          incorrect: "Oops! The correct answer is Nitrogen.",
        },
        difficulty: "easy",
      },
      {
        questionId: "q10",
        question: "What is the SI unit of force?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Pascal",
            explanation: "SI unit for pressure.",
          },
          {
            optionId: "b",
            answer: "Newton",
            explanation: "Correct SI unit for force.",
          },
          {
            optionId: "c",
            answer: "Joule",
            explanation: "SI unit for energy.",
          },
          {
            optionId: "d",
            answer: "Watt",
            explanation: "SI unit for power.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! Newton is the SI unit of force.",
          incorrect: "Oops! The correct answer is Newton.",
        },
        difficulty: "medium",
      },
    ],
  },
  //--------------------------------------------------------------------------
  {
    quizId: "ijkl",
    title: "World History Quiz",
    description: "Test your knowledge of world history.",
    category: "History",
    image:
      "https://static.vecteezy.com/system/resources/previews/002/236/242/non_2x/history-minimal-thin-line-icons-set-vector.jpg",
    language: "en",
    tags: ["ancient", "medieval", "modern"],
    questions: [
      {
        questionId: "q1",
        question: "Who was the first president of the United States?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "George Washington",
            explanation: "He served as the first president from 1789 to 1797.",
          },
          {
            optionId: "b",
            answer: "Thomas Jefferson",
            explanation:
              "Third president of the U.S., known for writing the Declaration of Independence.",
          },
          {
            optionId: "c",
            answer: "Abraham Lincoln",
            explanation:
              "Sixteenth president, known for the Emancipation Proclamation.",
          },
          {
            optionId: "d",
            answer: "James Madison",
            explanation: "Fourth president, known for the War of 1812.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! George Washington was the first president.",
          incorrect: "Oops! The correct answer is George Washington.",
        },
        difficulty: "easy",
      },
      {
        questionId: "q2",
        question: "What year did World War II end?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "1941",
            explanation:
              "U.S. entered World War II in 1941, but the war continued.",
          },
          {
            optionId: "b",
            answer: "1945",
            explanation:
              "World War II ended in 1945 after the defeat of Germany and Japan.",
          },
          {
            optionId: "c",
            answer: "1950",
            explanation:
              "The Korean War started in 1950, but World War II ended in 1945.",
          },
          {
            optionId: "d",
            answer: "1939",
            explanation:
              "World War II began in 1939, but did not end until 1945.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! World War II ended in 1945.",
          incorrect: "Oops! The correct answer is 1945.",
        },
        difficulty: "medium",
      },
      {
        questionId: "q3",
        question: "Which empire was ruled by Genghis Khan?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Roman Empire",
            explanation: "This empire existed long before Genghis Khan.",
          },
          {
            optionId: "b",
            answer: "Ottoman Empire",
            explanation: "Genghis Khan did not rule the Ottoman Empire.",
          },
          {
            optionId: "c",
            answer: "Mongol Empire",
            explanation: "He founded and ruled the Mongol Empire.",
          },
          {
            optionId: "d",
            answer: "British Empire",
            explanation: "This empire was prominent much later in history.",
          },
        ],
        correctAnswer: "c",
        feedback: {
          correct: "Correct! Genghis Khan ruled the Mongol Empire.",
          incorrect: "Oops! The correct answer is the Mongol Empire.",
        },
        difficulty: "medium",
      },
      {
        questionId: "q4",
        question: "What ancient civilization built the pyramids?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Babylonians",
            explanation: "Known for Hammurabi's Code and ziggurats.",
          },
          {
            optionId: "b",
            answer: "Egyptians",
            explanation: "The pyramids were built as tombs for their pharaohs.",
          },
          {
            optionId: "c",
            answer: "Romans",
            explanation:
              "Known for their engineering feats but not the pyramids.",
          },
          {
            optionId: "d",
            answer: "Mayans",
            explanation: "They built stepped pyramids in Mesoamerica.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! The Egyptians built the pyramids.",
          incorrect: "Oops! The correct answer is the Egyptians.",
        },
        difficulty: "easy",
      },
      {
        questionId: "q5",
        question: "What was the capital of the Byzantine Empire?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Rome",
            explanation: "Rome was the capital of the Western Roman Empire.",
          },
          {
            optionId: "b",
            answer: "Constantinople",
            explanation:
              "Constantinople was the capital of the Byzantine Empire.",
          },
          {
            optionId: "c",
            answer: "Athens",
            explanation: "Athens was an important Greek city-state.",
          },
          {
            optionId: "d",
            answer: "Alexandria",
            explanation: "An important city in ancient Egypt.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct:
            "Correct! Constantinople was the capital of the Byzantine Empire.",
          incorrect: "Oops! The correct answer is Constantinople.",
        },
        difficulty: "medium",
      },
      {
        questionId: "q6",
        question: "Who was known as the 'Iron Lady'?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Margaret Thatcher",
            explanation: "She was the Prime Minister of the United Kingdom.",
          },
          {
            optionId: "b",
            answer: "Indira Gandhi",
            explanation:
              "Prime Minister of India, but not known as the 'Iron Lady.'",
          },
          {
            optionId: "c",
            answer: "Angela Merkel",
            explanation: "German Chancellor, but not known as the 'Iron Lady.'",
          },
          {
            optionId: "d",
            answer: "Queen Elizabeth II",
            explanation: "Queen of the UK, not referred to as the 'Iron Lady.'",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! Margaret Thatcher was known as the 'Iron Lady.'",
          incorrect: "Oops! The correct answer is Margaret Thatcher.",
        },
        difficulty: "medium",
      },
      {
        questionId: "q7",
        question: "Which country was known as Persia until 1935?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Iran",
            explanation: "The name Persia was changed to Iran in 1935.",
          },
          {
            optionId: "b",
            answer: "Iraq",
            explanation: "Iraq was part of the Ottoman Empire.",
          },
          {
            optionId: "c",
            answer: "Turkey",
            explanation: "Turkey was previously known as the Ottoman Empire.",
          },
          {
            optionId: "d",
            answer: "Afghanistan",
            explanation: "Afghanistan was never referred to as Persia.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! Iran was known as Persia until 1935.",
          incorrect: "Oops! The correct answer is Iran.",
        },
        difficulty: "medium",
      },
      {
        questionId: "q8",
        question: "Who was the first emperor of Rome?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Julius Caesar",
            explanation: "He was a dictator but never an emperor.",
          },
          {
            optionId: "b",
            answer: "Augustus",
            explanation: "Augustus was the first emperor of Rome.",
          },
          {
            optionId: "c",
            answer: "Nero",
            explanation: "He ruled much later and is infamous for his tyranny.",
          },
          {
            optionId: "d",
            answer: "Trajan",
            explanation: "A prominent emperor, but not the first.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! Augustus was the first emperor of Rome.",
          incorrect: "Oops! The correct answer is Augustus.",
        },
        difficulty: "hard",
      },
      {
        questionId: "q9",
        question: "What year did the Berlin Wall fall?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "1989",
            explanation: "The Berlin Wall fell on November 9, 1989.",
          },
          {
            optionId: "b",
            answer: "1980",
            explanation: "The wall was still standing in 1980.",
          },
          {
            optionId: "c",
            answer: "1991",
            explanation:
              "The Soviet Union collapsed in 1991, but the wall fell earlier.",
          },
          {
            optionId: "d",
            answer: "1975",
            explanation:
              "The wall was built in 1961 and still standing in 1975.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! The Berlin Wall fell in 1989.",
          incorrect: "Oops! The correct answer is 1989.",
        },
        difficulty: "easy",
      },
      {
        questionId: "q10",
        question: "Who was the famous queen of Ancient Egypt?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Cleopatra",
            explanation: "Known for her beauty and diplomacy.",
          },
          {
            optionId: "b",
            answer: "Nefertiti",
            explanation: "An influential queen but not as famous as Cleopatra.",
          },
          {
            optionId: "c",
            answer: "Hatshepsut",
            explanation: "A prominent female pharaoh of Ancient Egypt.",
          },
          {
            optionId: "d",
            answer: "Nefertari",
            explanation: "The wife of Ramses II but not the most famous queen.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! Cleopatra is the famous queen of Ancient Egypt.",
          incorrect: "Oops! The correct answer is Cleopatra.",
        },
        difficulty: "medium",
      },
    ],
  },
  //-----------------------------------------------------------------------------
  {
    quizId: "mnop",
    title: "Geography Quiz",
    description: "How well do you know the world’s geography?",
    category: "Geography",
    image: "https://img.cdn.schooljotter2.com/sampled/19153022/900/0/nocrop//",
    language: "en",
    tags: ["countries", "capitals", "landmarks"],
    questions: [
      {
        questionId: "q1",
        question: "Which is the largest country in the world by area?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "China",
            explanation:
              "China is the most populous country, but not the largest by area.",
          },
          {
            optionId: "b",
            answer: "Canada",
            explanation: "Canada is the second-largest country by area.",
          },
          {
            optionId: "c",
            answer: "Russia",
            explanation:
              "Russia is the largest country in the world by land area.",
          },
          {
            optionId: "d",
            answer: "United States",
            explanation: "The U.S. is large, but not the largest by area.",
          },
        ],
        correctAnswer: "c",
        feedback: {
          correct: "Correct! Russia is the largest country by area.",
          incorrect: "Oops! The correct answer is Russia.",
        },
        difficulty: "easy",
      },
      {
        questionId: "q2",
        question: "What is the capital of Australia?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Sydney",
            explanation: "Sydney is the most famous city, but not the capital.",
          },
          {
            optionId: "b",
            answer: "Melbourne",
            explanation: "Melbourne is a major city, but not the capital.",
          },
          {
            optionId: "c",
            answer: "Canberra",
            explanation: "Canberra is the capital city of Australia.",
          },
          {
            optionId: "d",
            answer: "Brisbane",
            explanation:
              "Brisbane is a large city in Australia, but not the capital.",
          },
        ],
        correctAnswer: "c",
        feedback: {
          correct: "Correct! Canberra is the capital of Australia.",
          incorrect: "Oops! The correct answer is Canberra.",
        },
        difficulty: "medium",
      },
      {
        questionId: "q3",
        question: "Which continent is known as the 'Dark Continent'?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Asia",
            explanation:
              "Asia is the largest continent but not referred to as the 'Dark Continent.'",
          },
          {
            optionId: "b",
            answer: "Africa",
            explanation:
              "Africa has historically been referred to as the 'Dark Continent.'",
          },
          {
            optionId: "c",
            answer: "South America",
            explanation:
              "South America is known for its rainforests and not as the 'Dark Continent.'",
          },
          {
            optionId: "d",
            answer: "Europe",
            explanation:
              "Europe is known as the 'Old World,' not the 'Dark Continent.'",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! Africa is known as the 'Dark Continent.'",
          incorrect: "Oops! The correct answer is Africa.",
        },
        difficulty: "easy",
      },
      {
        questionId: "q4",
        question: "What is the largest desert in the world?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Sahara",
            explanation:
              "The Sahara is the largest hot desert but not the largest overall.",
          },
          {
            optionId: "b",
            answer: "Antarctic Desert",
            explanation:
              "The Antarctic Desert is the largest desert in the world.",
          },
          {
            optionId: "c",
            answer: "Gobi Desert",
            explanation: "The Gobi Desert is large but not the largest desert.",
          },
          {
            optionId: "d",
            answer: "Kalahari Desert",
            explanation:
              "The Kalahari Desert is much smaller compared to the largest desert.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct:
            "Correct! The Antarctic Desert is the largest desert in the world.",
          incorrect: "Oops! The correct answer is the Antarctic Desert.",
        },
        difficulty: "medium",
      },
      {
        questionId: "q5",
        question: "Which country is known as the Land of the Rising Sun?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Japan",
            explanation:
              "Japan is famously referred to as the Land of the Rising Sun.",
          },
          {
            optionId: "b",
            answer: "China",
            explanation:
              "China is known as the Middle Kingdom, not the Land of the Rising Sun.",
          },
          {
            optionId: "c",
            answer: "South Korea",
            explanation:
              "South Korea is not referred to as the Land of the Rising Sun.",
          },
          {
            optionId: "d",
            answer: "Thailand",
            explanation:
              "Thailand is known as the Land of Smiles, not the Land of the Rising Sun.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! Japan is known as the Land of the Rising Sun.",
          incorrect: "Oops! The correct answer is Japan.",
        },
        difficulty: "easy",
      },
      {
        questionId: "q6",
        question: "Which river is the longest in the world?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Amazon",
            explanation: "The Amazon River is the second-longest in the world.",
          },
          {
            optionId: "b",
            answer: "Nile",
            explanation: "The Nile River is the longest river in the world.",
          },
          {
            optionId: "c",
            answer: "Yangtze",
            explanation:
              "The Yangtze is the longest river in Asia, but not in the world.",
          },
          {
            optionId: "d",
            answer: "Mississippi",
            explanation: "The Mississippi River is not the longest river.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! The Nile River is the longest river in the world.",
          incorrect: "Oops! The correct answer is the Nile River.",
        },
        difficulty: "medium",
      },
      {
        questionId: "q7",
        question: "Which country has the most natural lakes?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Canada",
            explanation: "Canada has the most natural lakes in the world.",
          },
          {
            optionId: "b",
            answer: "United States",
            explanation: "The U.S. has many lakes, but not as many as Canada.",
          },
          {
            optionId: "c",
            answer: "Russia",
            explanation:
              "Russia has large lakes like Baikal, but not the most lakes overall.",
          },
          {
            optionId: "d",
            answer: "Finland",
            explanation:
              "Known as the Land of a Thousand Lakes, but not the most.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! Canada has the most natural lakes in the world.",
          incorrect: "Oops! The correct answer is Canada.",
        },
        difficulty: "medium",
      },
      {
        questionId: "q8",
        question: "Which mountain range separates Europe and Asia?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Himalayas",
            explanation:
              "The Himalayas are in Asia and do not separate Europe and Asia.",
          },
          {
            optionId: "b",
            answer: "Rocky Mountains",
            explanation: "The Rocky Mountains are in North America.",
          },
          {
            optionId: "c",
            answer: "Ural Mountains",
            explanation:
              "The Ural Mountains form a boundary between Europe and Asia.",
          },
          {
            optionId: "d",
            answer: "Andes",
            explanation: "The Andes are in South America.",
          },
        ],
        correctAnswer: "c",
        feedback: {
          correct: "Correct! The Ural Mountains separate Europe and Asia.",
          incorrect: "Oops! The correct answer is the Ural Mountains.",
        },
        difficulty: "medium",
      },
    ],
  },
  //----------------------------------------------------------------------------------
  {
    quizId: "uvwx",
    title: "Music Quiz",
    description: "Test your knowledge about famous musicians and songs.",
    category: "Music",
    image:
      "https://img.freepik.com/premium-vector/music-notes-clip-art-vector-design-with-white-background_579306-9765.jpg",
    language: "en",
    tags: ["artists", "albums", "songs"],
    questions: [
      {
        questionId: "q1",
        question: "Who is known as the 'King of Pop'?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Elvis Presley",
            explanation: "Elvis was known as the 'King of Rock and Roll'.",
          },
          {
            optionId: "b",
            answer: "Michael Jackson",
            explanation:
              "Michael Jackson is widely known as the 'King of Pop'.",
          },
          {
            optionId: "c",
            answer: "Prince",
            explanation:
              "Prince was a music icon but known as 'The Artist Formerly Known As'.",
          },
          {
            optionId: "d",
            answer: "Whitney Houston",
            explanation:
              "Whitney was a legendary singer but not known as the 'King of Pop'.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! Michael Jackson is the 'King of Pop'.",
          incorrect: "Oops! The correct answer is Michael Jackson.",
        },
        difficulty: "easy",
      },
      {
        questionId: "q2",
        question: "Which band wrote the hit song 'Hey Jude'?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "The Beatles",
            explanation:
              "The Beatles wrote 'Hey Jude', one of their most famous songs.",
          },
          {
            optionId: "b",
            answer: "The Rolling Stones",
            explanation:
              "The Rolling Stones are famous, but they did not write 'Hey Jude'.",
          },
          {
            optionId: "c",
            answer: "Led Zeppelin",
            explanation:
              "Led Zeppelin is known for classic rock, but not for 'Hey Jude'.",
          },
          {
            optionId: "d",
            answer: "Queen",
            explanation:
              "Queen is a legendary band, but 'Hey Jude' was written by The Beatles.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! 'Hey Jude' was written by The Beatles.",
          incorrect: "Oops! The correct answer is The Beatles.",
        },
        difficulty: "medium",
      },
      {
        questionId: "q3",
        question: "Which artist released the album '1989'?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Taylor Swift",
            explanation:
              "Taylor Swift released the album '1989', which was a major success.",
          },
          {
            optionId: "b",
            answer: "Adele",
            explanation:
              "Adele is a renowned artist, but she did not release '1989'.",
          },
          {
            optionId: "c",
            answer: "Katy Perry",
            explanation:
              "Katy Perry has many hit albums, but '1989' is by Taylor Swift.",
          },
          {
            optionId: "d",
            answer: "Lady Gaga",
            explanation:
              "Lady Gaga is famous for her music, but '1989' is Taylor Swift's album.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! '1989' was released by Taylor Swift.",
          incorrect: "Oops! The correct answer is Taylor Swift.",
        },
        difficulty: "medium",
      },
      {
        questionId: "q4",
        question: "Which of these is a famous song by Queen?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Bohemian Rhapsody",
            explanation:
              "Queen's 'Bohemian Rhapsody' is one of the most famous rock songs.",
          },
          {
            optionId: "b",
            answer: "Imagine",
            explanation:
              "'Imagine' is a famous song by John Lennon, not by Queen.",
          },
          {
            optionId: "c",
            answer: "Like a Rolling Stone",
            explanation:
              "'Like a Rolling Stone' is a classic by Bob Dylan, not Queen.",
          },
          {
            optionId: "d",
            answer: "Hotel California",
            explanation:
              "'Hotel California' is a hit by the Eagles, not by Queen.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! 'Bohemian Rhapsody' is a famous song by Queen.",
          incorrect:
            "Oops! The correct answer is 'Bohemian Rhapsody' by Queen.",
        },
        difficulty: "hard",
      },
      {
        questionId: "q5",
        question: "Which musician is known for the song 'Purple Rain'?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Prince",
            explanation:
              "Prince's 'Purple Rain' is one of his most iconic songs.",
          },
          {
            optionId: "b",
            answer: "David Bowie",
            explanation:
              "David Bowie is a legend, but 'Purple Rain' is by Prince.",
          },
          {
            optionId: "c",
            answer: "Bob Dylan",
            explanation:
              "Bob Dylan is a famous musician, but 'Purple Rain' is by Prince.",
          },
          {
            optionId: "d",
            answer: "Jimi Hendrix",
            explanation:
              "Jimi Hendrix was a great guitarist, but he did not perform 'Purple Rain'.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! 'Purple Rain' is by Prince.",
          incorrect: "Oops! The correct answer is Prince.",
        },
        difficulty: "medium",
      },
      {
        questionId: "q6",
        question: "Which year did the famous Woodstock festival take place?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "1969",
            explanation: "The original Woodstock festival took place in 1969.",
          },
          {
            optionId: "b",
            answer: "1975",
            explanation: "Woodstock took place in 1969, not 1975.",
          },
          {
            optionId: "c",
            answer: "1980",
            explanation: "Woodstock took place in 1969, not in 1980.",
          },
          {
            optionId: "d",
            answer: "1994",
            explanation: "The first Woodstock was in 1969, not in 1994.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! The Woodstock festival took place in 1969.",
          incorrect: "Oops! The correct answer is 1969.",
        },
        difficulty: "easy",
      },
    ],
  },
  //------------------------------------------------------------------------------
  {
    quizId: "yzab",
    title: "Literature Quiz",
    description:
      "Test your knowledge on famous authors and works of literature.",
    category: "Literature",
    image:
      "https://i.pinimg.com/736x/b0/52/6d/b0526d8ca7d5b6202bc0b22481258421.jpg",
    language: "en",
    tags: ["authors", "novels", "poetry"],
    questions: [
      {
        questionId: "q1",
        question: "Who wrote the novel '1984'?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "George Orwell",
            explanation:
              "Orwell is famous for writing '1984', a dystopian novel.",
          },
          {
            optionId: "b",
            answer: "Aldous Huxley",
            explanation: "Huxley wrote 'Brave New World', not '1984'.",
          },
          {
            optionId: "c",
            answer: "Ray Bradbury",
            explanation: "Bradbury wrote 'Fahrenheit 451', not '1984'.",
          },
          {
            optionId: "d",
            answer: "J.R.R. Tolkien",
            explanation:
              "Tolkien is famous for 'The Lord of the Rings', not '1984'.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! '1984' was written by George Orwell.",
          incorrect: "Oops! The correct answer is George Orwell.",
        },
        difficulty: "hard",
      },
      {
        questionId: "q2",
        question: "Which novel features the character 'Atticus Finch'?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "To Kill a Mockingbird",
            explanation:
              "Atticus Finch is a central character in 'To Kill a Mockingbird'.",
          },
          {
            optionId: "b",
            answer: "Pride and Prejudice",
            explanation: "Atticus Finch is not a character in this novel.",
          },
          {
            optionId: "c",
            answer: "The Great Gatsby",
            explanation:
              "Atticus Finch is not a character in 'The Great Gatsby'.",
          },
          {
            optionId: "d",
            answer: "Moby-Dick",
            explanation: "Atticus Finch is not in 'Moby-Dick'.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct:
            "Correct! Atticus Finch is a character in 'To Kill a Mockingbird'.",
          incorrect: "Oops! The correct answer is 'To Kill a Mockingbird'.",
        },
        difficulty: "medium",
      },
      {
        questionId: "q3",
        question: "Who is the author of 'Pride and Prejudice'?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Jane Austen",
            explanation: "Jane Austen is the author of 'Pride and Prejudice'.",
          },
          {
            optionId: "b",
            answer: "Charlotte Brontë",
            explanation:
              "Charlotte Brontë is known for 'Jane Eyre', not 'Pride and Prejudice'.",
          },
          {
            optionId: "c",
            answer: "Emily Dickinson",
            explanation:
              "Emily Dickinson was a famous poet, but she did not write 'Pride and Prejudice'.",
          },
          {
            optionId: "d",
            answer: "Virginia Woolf",
            explanation:
              "Virginia Woolf was an influential author, but she did not write 'Pride and Prejudice'.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! 'Pride and Prejudice' was written by Jane Austen.",
          incorrect: "Oops! The correct answer is Jane Austen.",
        },
        difficulty: "easy",
      },
      {
        questionId: "q4",
        question: "Which author wrote 'The Catcher in the Rye'?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "J.D. Salinger",
            explanation:
              "J.D. Salinger is famous for writing 'The Catcher in the Rye'.",
          },
          {
            optionId: "b",
            answer: "Ernest Hemingway",
            explanation:
              "Ernest Hemingway is known for works like 'The Old Man and the Sea', not 'The Catcher in the Rye'.",
          },
          {
            optionId: "c",
            answer: "F. Scott Fitzgerald",
            explanation:
              "F. Scott Fitzgerald wrote 'The Great Gatsby', not 'The Catcher in the Rye'.",
          },
          {
            optionId: "d",
            answer: "Mark Twain",
            explanation:
              "Mark Twain is famous for 'Adventures of Huckleberry Finn', not 'The Catcher in the Rye'.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct:
            "Correct! 'The Catcher in the Rye' was written by J.D. Salinger.",
          incorrect: "Oops! The correct answer is J.D. Salinger.",
        },
        difficulty: "medium",
      },
      {
        questionId: "q5",
        question: "What is the main theme of 'The Great Gatsby'?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "The American Dream",
            explanation:
              "'The Great Gatsby' explores the theme of the American Dream and its flaws.",
          },
          {
            optionId: "b",
            answer: "Revenge",
            explanation:
              "'The Great Gatsby' does not focus on revenge but on the pursuit of dreams.",
          },
          {
            optionId: "c",
            answer: "Isolation",
            explanation:
              "Isolation is not the central theme, although the characters experience it.",
          },
          {
            optionId: "d",
            answer: "Fantasy",
            explanation:
              "'The Great Gatsby' is a realist novel, not a fantasy.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct:
            "Correct! The main theme of 'The Great Gatsby' is the American Dream.",
          incorrect: "Oops! The correct answer is the American Dream.",
        },
        difficulty: "hard",
      },
      {
        questionId: "q6",
        question: "Who wrote 'Frankenstein'?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Mary Shelley",
            explanation: "Mary Shelley is the author of 'Frankenstein'.",
          },
          {
            optionId: "b",
            answer: "Bram Stoker",
            explanation: "Bram Stoker wrote 'Dracula', not 'Frankenstein'.",
          },
          {
            optionId: "c",
            answer: "Oscar Wilde",
            explanation:
              "Oscar Wilde wrote 'The Picture of Dorian Gray', not 'Frankenstein'.",
          },
          {
            optionId: "d",
            answer: "Charles Dickens",
            explanation:
              "Charles Dickens wrote 'Oliver Twist', not 'Frankenstein'.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! 'Frankenstein' was written by Mary Shelley.",
          incorrect: "Oops! The correct answer is Mary Shelley.",
        },
        difficulty: "medium",
      },
    ],
  },
];