// admin.ts
const form = document.getElementById('add-question-form') as HTMLFormElement;

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const adminToken = localStorage.getItem('token');

    await fetch('/api/questions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${adminToken}`
        },
        body: JSON.stringify({
            question:   'What is 2 + 2?',
            type:       'multiple-choice',
            category:   'Math',
            difficulty: 'easy',
            answers: [
                { text: '3', correct: false },
                { text: '4', correct: true  },
                { text: '5', correct: false },
            ]
        })
    });
});