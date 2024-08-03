// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyBK5UM0n8-GLvleW7l6B8Hi-_WuC64QA4U",
    authDomain: "scores-b25a7.firebaseapp.com",
    projectId: "scores-b25a7",
    storageBucket: "scores-b25a7.appspot.com",
    messagingSenderId: "1001957936318",
    appId: "1:1001957936318:web:43934942ee87654fd8e2ef",
    measurementId: "G-3QES2VR31T"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Reference to the scores node
const scoreRef = database.ref('liveScore');

// Handle form submission
document.getElementById('update-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const ridersFCScore = document.getElementById('score-ridersFC').value;
    const goldenStarFCScore = document.getElementById('score-goldenStarFC').value;
    const possessionRidersFC = document.getElementById('possession-ridersFC').value;
    const possessionGoldenStarFC = document.getElementById('possession-goldenStarFC').value;
    const cornersRidersFC = document.getElementById('corners-ridersFC').value;
    const cornersGoldenStarFC = document.getElementById('corners-goldenStarFC').value;
    const yellowCardsRidersFC = document.getElementById('yellow-cards-ridersFC').value;
    const yellowCardsGoldenStarFC = document.getElementById('yellow-cards-goldenStarFC').value;
    const redCardsRidersFC = document.getElementById('red-cards-ridersFC').value;
    const redCardsGoldenStarFC = document.getElementById('red-cards-goldenStarFC').value;
    const matchStatus = document.getElementById('match-status').value;

    // Create an object with the form data
    const data = {
        ridersFC: ridersFCScore || 0,
        goldenStarFC: goldenStarFCScore || 0,
        ballPossession: {
            ridersFC: possessionRidersFC || 0,
            goldenStarFC: possessionGoldenStarFC || 0
        },
        corners: {
            ridersFC: cornersRidersFC || 0,
            goldenStarFC: cornersGoldenStarFC || 0
        },
        yellowCards: {
            ridersFC: yellowCardsRidersFC || 0,
            goldenStarFC: yellowCardsGoldenStarFC || 0
        },
        redCards: {
            ridersFC: redCardsRidersFC || 0,
            goldenStarFC: redCardsGoldenStarFC || 0
        },
        matchStatus: matchStatus || 'Match ongoing...',
        lastUpdated: new Date().toLocaleString()
    };

    // Log data for debugging
    console.log('Updating data with:', data);

    // Update Firebase
    scoreRef.set(data, (error) => {
        if (error) {
            console.error('Error updating score:', error);
        } else {
            alert('Score updated successfully!');
        }
    });
});
