// --- Game Data ---
const termCourses = [
    'Academic Reading & Vocabulary 2',
    'Advanced Communication Skills For STEM',
    'Speaking & Pronunciation',
    'Listening & Note Taking Skills 1',
    'Business Writing Skills',
    'Critical Thinking & Analysis Skills',
    'Cultures of ASEAN',
    'International Relations & Diplomacy',
    'English for Tourism',
    'Debate',
    'Public Speaking'
];

const allDiplomas = [
    { id: 'arv2', name: 'Academic Reading & Vocabulary 2', description: 'A follow-up to Academic Reading & Vocabulary 1, this course builds upon the strategies learned to improve reading comprehension and further extends a student\'s knowledge of academic vocabulary through the analysis of more complex and discipline-specific texts.' },
    { id: 'acs', name: 'Advanced Communication Skills For STEM', description: 'This course is tailored for students in science, technology, engineering, and mathematics (STEM) fields. It focuses on effective communication of complex technical information to various audiences, including presentations, report writing, and collaborative discussions.' },
    { id: 'sp', name: 'Speaking & Pronunciation', description: 'This course focuses on becoming a more capable and fluent English speaker. It covers key pronunciation features, intonation, and rhythm, helping students to communicate with greater clarity and confidence in both formal and informal situations.' },
    { id: 'lnts1', name: 'Listening & Note Taking Skills 1', description: 'This course develops fundamental listening and note-taking skills crucial for graduate or post-graduate study in an English-speaking environment. It teaches students how to process and record information from lectures and academic discussions effectively.' },
    { id: 'bws', name: 'Business Writing Skills', description: 'This course contributes to professional growth by developing essential writing skills for a business environment. It includes writing clear and concise reports, proposals, memos, and emails, and focuses on professional tone and structure.' },
    { id: 'ctas', name: 'Critical Thinking & Analysis Skills', description: 'This course enables students to think and function more effectively in the real world by teaching them to assess the validity of information. Students learn to identify logical fallacies, construct sound arguments, and analyze complex topics from multiple perspectives.' },
    { id: 'coa', name: 'Cultures of ASEAN', description: 'This course equips students with a deep understanding of how culture is defined within the Association of Southeast Asian Nations (ASEAN). It explores cultural diversity, shared heritage, and the social dynamics of the region.' },
    { id: 'ird', name: 'International Relations & Diplomacy', description: 'This course helps students become knowledgeable about and work in the field of international relations. It explores global political issues, diplomatic practices, and the role of international organizations.' },
    { id: 'et', name: 'English for Tourism', description: 'This course focuses on the language skills needed for the tourism, travel, and hospitality industry. It covers professional communication, customer service language, and cultural sensitivity for those working in the sector.' },
    { id: 'dbt', name: 'Debate', description: 'This course helps students become self-assured and capable communicators in spoken English. It focuses on the art of debate, teaching students how to research a topic, construct a compelling argument, and respond effectively to counter-arguments in a formal setting.' },
    { id: 'ps', name: 'Public Speaking', description: 'This course helps students become self-assured and capable public speakers. It focuses on reducing anxiety, structuring effective speeches, using body language, and engaging an audience with confidence.' },
];

const diplomas = allDiplomas.filter(d => termCourses.includes(d.name));

const allStudents = [
    { image: 'img/arv1.png', dilemma: 'I am taking a new course that requires me to read complex research papers. I need to improve my reading speed and comprehension for academic texts.', courseNeeded: 'arv2' },
    { image: 'img/arv2.png', dilemma: 'I have a hard time understanding technical vocabulary in the articles for my science classes. I need a course that focuses on advanced reading strategies and vocabulary.', courseNeeded: 'arv2' },
    { image: 'img/acs1.png', dilemma: 'I am a STEM student and often have to explain my complex research findings to a non-technical audience. I need to improve my ability to communicate clearly and concisely.', courseNeeded: 'acs' },
    { image: 'img/acs2.png', dilemma: 'I am working on a new engineering project, and I need to be able to present my ideas and reports effectively to my team and managers. I want to improve my professional communication skills for a technical context.', courseNeeded: 'acs' },
    { image: 'img/sp1.png', dilemma: 'I am moving to an English-speaking country for my new job. I want to sound more natural when I speak, and I need to work on my pronunciation and intonation to be better understood.', courseNeeded: 'sp' },
    { image: 'img/sp2.png', dilemma: 'My dream is to be a podcaster, but I feel my speaking style is flat and my pronunciation is not always clear. I need to practice speaking with more confidence and fluency.', courseNeeded: 'sp' },
    { image: 'img/lnts11.png', dilemma: 'I am preparing for a new semester of university lectures. I need to learn how to take effective notes from long lectures and process information quickly.', courseNeeded: 'lnts1' },
    { image: 'img/lnts12.png', dilemma: 'I am struggling to keep up with the pace of my online lectures and often miss important details. I need a course to help me develop better listening and note-taking skills.', courseNeeded: 'lnts1' },
    { image: 'img/bws1.png', dilemma: 'I am a new intern at a company and I need to write clear and professional emails and reports to my colleagues. I want to improve my business writing to be more effective and professional.', courseNeeded: 'bws' },
    { image: 'img/bws2.png', dilemma: 'I need to write a proposal for a new project to my boss. I have the ideas, but I struggle to write a compelling and well-structured business document.', courseNeeded: 'bws' },
    { image: 'img/ctas1.png', dilemma: 'I want to be able to make better-informed decisions in my life and work. I need to learn how to analyze information critically and identify logical fallacies.', courseNeeded: 'ctas' },
    { image: 'img/ctas2.png', dilemma: 'I often find myself agreeing with an argument without fully understanding it. I need to develop my critical thinking skills to evaluate information more effectively.', courseNeeded: 'ctas' },
    { image: 'img/coa1.png', dilemma: 'I am preparing to work in Southeast Asia and I want to better understand the cultural norms and social dynamics of the ASEAN nations to avoid misunderstandings.', courseNeeded: 'coa' },
    { image: 'img/coa2.png', dilemma: 'I am an international business student and I want to gain a deeper appreciation for the diverse cultures within the ASEAN region. I need to learn about their histories and traditions.', courseNeeded: 'coa' },
    { image: 'img/ird1.png', dilemma: 'I want to pursue a career in foreign policy, but I need to have a strong foundational understanding of global politics and diplomacy. I need a course to get me started.', courseNeeded: 'ird' },
    { image: 'img/ird2.png', dilemma: 'I am fascinated by current events and want to understand how different countries interact on a global scale. I need to learn the language of international relations.', courseNeeded: 'ird' },
    { image: 'img/et1.png', dilemma: 'I am starting a job at a hotel, and I need to communicate with international guests confidently. I need to learn the specific language and phrases used in the tourism industry.', courseNeeded: 'et' },
    { image: 'img/et2.png', dilemma: 'I want to work as a tour guide. I need to improve my English speaking skills, especially for describing places and engaging with tourists in a professional and friendly manner.', courseNeeded: 'et' },
    { image: 'img/dbt1.png', dilemma: 'I want to join my university\'s debate club, but I need to learn how to structure a logical argument and respond to my opponents\' points effectively. I get flustered under pressure.', courseNeeded: 'dbt' },
    { image: 'img/dbt2.png', dilemma: 'My job requires me to participate in a lot of group discussions and I often feel like my voice is not heard. I want to learn to present my opinions and arguments more persuasively.', courseNeeded: 'dbt' },
    { image: 'img/ps1.png', dilemma: 'I have to give a presentation to a large audience next month for my company, and I am very nervous. I need to learn how to write and deliver a confident and engaging speech.', courseNeeded: 'ps' },
    { image: 'img/ps2.png', dilemma: 'I want to be a motivational speaker. I need a course that will help me with speech writing, delivery techniques, and audience engagement to inspire my listeners.', courseNeeded: 'ps' },
    { image: 'img/ps3.png', dilemma: 'I have a fear of speaking in front of people. While I can talk one-on-one, I freeze up when I have to present to a group. I need to overcome this stage fright.', courseNeeded: 'ps' },
];

let score = 0;
let studentsServed = 0;
const maxStudents = 10;
let currentStudent = null;
let randomizedStudents = [];

// --- DOM Elements ---
const introScreen = document.getElementById('intro-screen');
const instructionsScreen = document.getElementById('instructions-screen');
const deskScreen = document.getElementById('desk');
const gameEndScreen = document.getElementById('game-end-screen');

const introMusic = document.getElementById('introMusic');
// New audio objects for the chime and game music
const chimeSound = new Audio('audio/chime.mp3'); 
const gameMusic = new Audio('audio/game_music.mp3');
gameMusic.loop = true;

const startButton = document.getElementById('start-button'); // Reference to the new start button
const introButtons = document.getElementById('intro-buttons'); // Reference to the buttons container

const queueLengthEl = document.getElementById('queue-length');
const studentImageEl = document.getElementById('student-image');
const studentDilemmaEl = document.getElementById('student-dilemma');
const diplomaDropdown = document.getElementById('diploma-dropdown');
const submitEnrolButton = document.getElementById('submit-enrol');
const almanacButton = document.getElementById('almanac-button');
const almanacModal = document.getElementById('almanac-modal');
const almanacContentEl = document.getElementById('almanac-content');
const finalScoreEl = document.getElementById('final-score');
const performanceMessageEl = document.getElementById('performance-message');

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showScreen(screenId) {
    const screens = [introScreen, instructionsScreen, deskScreen, gameEndScreen];
    screens.forEach(screen => {
        if (screen && screen.id === screenId) {
            screen.style.display = 'flex';
        }
        else if (screen) {
            screen.style.display = 'none';
        }
    });

    // Check which screens should have music playing
    if (introMusic) {
        if (screenId === 'intro-screen' || screenId === 'instructions-screen') {
            // Play intro music if it's not already playing
            if (introMusic.paused) {
                introMusic.play().catch(e => console.log("Music auto-play prevented:", e));
            }
        } else {
            // Pause intro music on all other screens
            introMusic.pause();
        }
    }
    // Pause game music on screens other than the main desk
    if (gameMusic) {
        if (screenId !== 'desk') {
            gameMusic.pause();
        }
    }

    if (almanacModal.style.display === 'flex') {
        closeAlmanac();
    }
}

function showFeedbackMessage(message) {
    console.log(message);
}

function startGame() {
    introMusic.pause(); // Stop the intro music
    introMusic.currentTime = 0; // Rewind for next intro

    chimeSound.play().catch(e => console.log("Chime auto-play prevented:", e));
    gameMusic.currentTime = 0;
    gameMusic.play().catch(e => console.log("Game music auto-play prevented:", e));

    score = 0;
    studentsServed = 0;
    randomizedStudents = shuffle([...allStudents]).slice(0, maxStudents);
    populateDiplomaDropdown();
    createAlmanacContent();
    loadNextStudent();
    showScreen('desk');
}

// New function to handle the initial start button click
function handleStartClick() {
    startButton.style.display = 'none';
    introButtons.style.display = 'flex';
    if (introMusic) {
        introMusic.currentTime = 0;
        introMusic.play().catch(e => console.log("Music auto-play prevented:", e));
    }
}

function initializeGame() {
    // Add the new event listener for the start button
    if (startButton) {
        startButton.addEventListener('click', handleStartClick);
    }
    
    // Add event listeners for the other buttons
    document.getElementById('play-button').addEventListener('click', startGame);
    document.getElementById('instructions-button').addEventListener('click', () => showScreen('instructions-screen'));
    document.getElementById('return-button').addEventListener('click', () => showScreen('intro-screen'));
    almanacButton.addEventListener('click', openAlmanac);
    submitEnrolButton.addEventListener('click', handleSubmit);
    document.querySelector('#game-end-screen .button').addEventListener('click', () => {
        gameMusic.pause();
        gameMusic.currentTime = 0;
        showScreen('intro-screen');
    });
    
    showScreen('intro-screen');
}

function populateDiplomaDropdown() {
    diplomaDropdown.innerHTML = '<option value="">Select a Diploma...</option>';
    diplomas.forEach(diploma => {
        const option = document.createElement('option');
        option.value = diploma.id;
        option.textContent = diploma.name;
        diplomaDropdown.appendChild(option);
    });
}

function createAlmanacContent() {
    almanacContentEl.innerHTML = '';
    diplomas.forEach(diploma => {
        const entry = document.createElement('div');
        entry.classList.add('diploma-entry');
        entry.innerHTML = `
            <h3>${diploma.name}</h3>
            <p>${diploma.description}</p>
        `;
        almanacContentEl.appendChild(entry);
    });
}

function loadNextStudent() {
    if (studentsServed >= maxStudents) {
        endGame();
        return;
    }

    const studentData = randomizedStudents[studentsServed];
    currentStudent = studentData;

    studentImageEl.src = studentData.image;
    studentDilemmaEl.textContent = `"${studentData.dilemma}"`;
    diplomaDropdown.value = "";
    updateQueueLength();
}

function updateQueueLength() {
    const remainingStudents = maxStudents - studentsServed;
    queueLengthEl.textContent = `Queue: ${remainingStudents}`;
}

function handleSubmit() {
    const selectedDiplomaId = diplomaDropdown.value;

    if (!selectedDiplomaId) {
        showFeedbackMessage('Please select a diploma to enrol the student.');
        return;
    }

    const isCorrect = selectedDiplomaId === currentStudent.courseNeeded;
    
    const submitButton = submitEnrolButton;
    submitButton.classList.add(isCorrect ? 'correct-stamp' : 'incorrect-stamp');

    setTimeout(() => {
        submitButton.classList.remove('correct-stamp', 'incorrect-stamp');
        
        if (isCorrect) {
            score++;
        }
        
        studentsServed++;
        
        loadNextStudent();
    }, 500);
}

function openAlmanac() {
    almanacModal.style.display = 'flex';
}

function closeAlmanac() {
    almanacModal.style.display = 'none';
}

function endGame() {
    gameMusic.pause();
    showScreen('game-end-screen');
    finalScoreEl.textContent = score;
    
    let message = '';
    const percentage = (score / maxStudents) * 100;
    if (percentage >= 80) {
        message = "Excellent job! Your recommendations were spot on. You're a true Student Advisor.";
    } else if (percentage >= 50) {
        message = "Good effort! You've got a solid understanding of the courses. A little more study and you'll be an expert.";
    } else {
        message = "You've got the spirit! A bit more time reading about the diploma courses on offer will help you master the recommendations.";
    }
    performanceMessageEl.textContent = message;
}

window.addEventListener('load', initializeGame);
