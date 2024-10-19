// script.js

// Sample data for courses and teachers
const courses = [
    { id: 1, name: 'Mathematics', type: 'theory' },
    { id: 2, name: 'Physics', type: 'theory' },
    { id: 3, name: 'Chemistry', type: 'theory' },
    { id: 4, name: 'Biology', type: 'theory' },
    { id: 5, name: 'Computer Science Lab', type: 'lab' },
    { id: 6, name: 'Physics Lab', type: 'lab' },
];

const teachers = [
    { id: 1, name: 'Dr. Smith', email: 'smith@example.com', rating: 4.5, department: 'Mathematics', research_projects: 'Quantum Computing', patents: 'Algorithm Optimization', academic_background: 'PhD in Mathematics' },
    { id: 2, name: 'Dr. Johnson', email: 'johnson@example.com', rating: 4.2, department: 'Physics', research_projects: 'Astrophysics', patents: 'Space-time Manipulation', academic_background: 'PhD in Physics' },
];

// Function to display courses in the selection form
function displayCourses() {
    const theoryCoursesContainer = document.getElementById('theory-courses');
    const labCoursesContainer = document.getElementById('lab-courses');

    courses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.innerHTML = `<input type="checkbox" class="${course.type}-course" value="${course.id}"> ${course.name}`;
        
        if (course.type === 'theory') {
            theoryCoursesContainer.appendChild(courseDiv);
        } else {
            labCoursesContainer.appendChild(courseDiv);
        }
    });
}

// Function to display teacher profiles
function displayTeachers() {
    const profilesList = document.getElementById('profiles-list');
    teachers.forEach(teacher => {
        const profileDiv = document.createElement('div');
        profileDiv.innerHTML = `
            <h4>${teacher.name}</h4>
            <p>Email: ${teacher.email}</p>
            <p>Department: ${teacher.department}</p>
            <p>Research Projects: ${teacher.research_projects}</p>
            <p>Patents: ${teacher.patents}</p>
            <p>Academic Background: ${teacher.academic_background}</p>
            <p>Average Rating: ${teacher.rating}</p>
            <button onclick="showFeedbackForm(${teacher.id})">Give Feedback</button>
            <hr>
        `;
        profilesList.appendChild(profileDiv);
    });
}

// Show feedback form
function showFeedbackForm(teacherId) {
    document.getElementById('feedback-section').style.display = 'block';
    document.getElementById('teacher-id').value = teacherId;
}

// Handle course selection form submission
document.getElementById('selection-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const selectedTheoryCourses = Array.from(document.querySelectorAll('.theory-course:checked')).map(course => course.value);
    const selectedLabCourses = Array.from(document.querySelectorAll('.lab-course:checked')).map(course => course.value);
    
    if (selectedTheoryCourses.length !== 4 || selectedLabCourses.length !== 2) {
        alert('Please select 4 theory courses and 2 lab courses.');
        return;
    }
    
    // Here you can send the selected courses to the server
    console.log('Selected Theory Courses:', selectedTheoryCourses);
    console.log('Selected Lab Courses:', selectedLabCourses);
    alert('Courses selected successfully!');
});

// Handle feedback form submission
document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const teacherId = document.getElementById('teacher-id').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;

    // Here you can send the feedback to the server
    console.log('Feedback submitted for Teacher ID:', teacherId);
    console.log('Rating:', rating);
    console.log('Comments:', comments);
    
    alert('Feedback submitted successfully!');
});

// Initializing the display
displayCourses();
displayTeachers();
