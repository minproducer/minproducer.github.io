// Add to Calendar functionality
function addToCalendar() {
    const eventDetails = {
        title: 'Kỷ niệm 10 năm thành lập CLB Máu nóng Ban Mai Xanh',
        start: '2025-06-07T18:00:00',
        end: '2025-06-07T22:00:00',
        description: 'Sinh nhật lần thứ 10 của CLB Máu nóng Ban Mai Xanh',
        location: 'Quán Idol Beer Garden, lô 26,27,28 đường Hoàng Thị Loan, Thanh Khê, TP. Đà Nẵng'
    };

    // Check if device supports calendar API
    if ('serviceWorker' in navigator && 'calendar' in window) {
        // For modern browsers with calendar API
        try {
            const event = new CalendarEvent(eventDetails.title, {
                startDate: new Date(eventDetails.start),
                endDate: new Date(eventDetails.end),
                location: eventDetails.location,
                notes: eventDetails.description
            });
            event.save();
        } catch (error) {
            fallbackCalendar(eventDetails);
        }
    } else {
        fallbackCalendar(eventDetails);
    }
}

function fallbackCalendar(eventDetails) {
    // Create Google Calendar link as fallback
    const startDate = eventDetails.start.replace(/[-:]/g, '').replace('T', 'T');
    const endDate = eventDetails.end.replace(/[-:]/g, '').replace('T', 'T');

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}`;

    // For mobile devices, try to open calendar app
    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // Create ICS file for mobile
        const icsContent = createICSFile(eventDetails);
        downloadICS(icsContent, 'event.ics');
    } else {
        // Open Google Calendar for desktop
        window.open(googleCalendarUrl, '_blank');
    }
}

function createICSFile(eventDetails) {
    const startDate = new Date(eventDetails.start).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const endDate = new Date(eventDetails.end).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

    return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//CLB Máu nóng Ban Mai Xanh//Event//EN
BEGIN:VEVENT
UID:${Date.now()}@banmaixanh.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${startDate}
DTEND:${endDate}
SUMMARY:${eventDetails.title}
DESCRIPTION:${eventDetails.description}
LOCATION:${eventDetails.location}
END:VEVENT
END:VCALENDAR`;
}

function downloadICS(content, filename) {
    const blob = new Blob([content], { type: 'text/calendar' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// Google Maps functionality
function openGoogleMaps() {
    const address = 'Quán Idol Beer Garden, lô 26,27,28 đường Hoàng Thị Loan, Thanh Khê, TP. Đà Nẵng';
    const encodedAddress = encodeURIComponent(address);

    // Check if mobile device
    if (/Android/i.test(navigator.userAgent)) {
        // Try to open Google Maps app on Android
        window.location.href = `geo:0,0?q=${encodedAddress}`;
    } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        // Try to open Maps app on iOS
        window.location.href = `geo:0,0?q=${encodedAddress}`;
    } else {
        // Open Google Maps in browser
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
    }
}

// Toggle embedded map
function toggleMap() {
    const mapContainer = document.getElementById('mapContainer');
    const isVisible = mapContainer.classList.contains('show');

    if (isVisible) {
        mapContainer.classList.remove('show');
    } else {
        mapContainer.classList.add('show');
        // Add a small delay to ensure smooth animation
        setTimeout(() => {
            mapContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
    }
}

// Add scroll animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.detail-item, .guest-info, .message, .signature');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    addScrollAnimations();

    // Add click effect to buttons
    const buttons = document.querySelectorAll('.reminder-btn, .map-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add ripple effect CSS
const style = document.createElement('style');
style.textContent = `
    .reminder-btn, .map-btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
// Logo loading functionality
document.addEventListener('DOMContentLoaded', function () {
    const logoImg = document.querySelector('.club-logo');
    const logoPlaceholder = document.querySelector('.logo-placeholder');

    if (logoImg) {
        logoImg.onload = function () {
            logoPlaceholder.classList.add('hidden');
        };

        logoImg.onerror = function () {
            console.log('Logo không thể tải được, hiển thị placeholder');
            logoPlaceholder.classList.remove('hidden');
        };

        // Check if image is already loaded (cached)
        if (logoImg.complete) {
            logoPlaceholder.classList.add('hidden');
        }
    }
});
