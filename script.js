/**
 * ENHANCED PC BUILDING GUIDE - INTERACTIVE SYSTEM
 * Apple-inspired interactions with advanced animations and visual effects
 */

// ================================================================
// ENHANCED LOADING & ANIMATION SYSTEM
// ================================================================

// Enhanced Loading & Animation System
let loadingComplete = false;
let animationQueue = [];
let isAnimating = false;

// Notification System
let notificationCounter = 0;
const notifications = new Map();

// Performance Monitoring
let animationFrameId = null;
let lastScrollY = 0;
let ticking = false;

// Enhanced initialization
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Enhanced PC Building Guide Loading...');
    
    // Initialize loading overlay
    initializeLoadingSystem();
    
    // Initialize core systems
    initializeEnhancedSystems();
    
    // Start loading sequence
    startLoadingSequence();
});

function initializeLoadingSystem() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (!loadingOverlay) {
        console.warn('Loading overlay not found');
        return;
    }

    // Add enhanced loading spinner animation
    const spinner = loadingOverlay.querySelector('.loading-spinner');
    if (spinner) {
        spinner.style.animation = 'spin 1s linear infinite';
    }
}

function startLoadingSequence() {
    // Simulate loading time for enhanced experience
    const loadingSteps = [
        { message: 'Loading components database...', delay: 300 },
        { message: 'Initializing performance calculator...', delay: 400 },
        { message: 'Setting up interactive elements...', delay: 300 },
        { message: 'Finalizing animations...', delay: 500 }
    ];

    let currentStep = 0;
    
    function executeStep() {
        if (currentStep < loadingSteps.length) {
            const step = loadingSteps[currentStep];
            console.log(`📊 ${step.message}`);
            
            setTimeout(() => {
                currentStep++;
                executeStep();
            }, step.delay);
        } else {
            completeLoading();
        }
    }
    
    executeStep();
}

function completeLoading() {
    loadingComplete = true;
    const loadingOverlay = document.getElementById('loadingOverlay');
    
    if (loadingOverlay) {
        // Add completion animation
        setTimeout(() => {
            loadingOverlay.classList.add('hidden');
            showWelcomeNotification();
            initializePostLoadAnimations();
        }, 200);
        
        // Remove from DOM after animation completes
        setTimeout(() => {
            loadingOverlay.remove();
        }, 1000);
    }
    
    console.log('✅ Enhanced PC Building Guide Ready!');
}

function showWelcomeNotification() {
    showNotificationSafe('Welcome to the Enhanced PC Building Guide! 🚀', 'success');
}

function initializeEnhancedSystems() {
    // Initialize all enhanced systems
    initializeScrollAnimations();
    initializeInteractiveElements();
    initializeTooltipSystem();
    initializeNavigation();
    initBuildingProcessSteps();
    initializeResponsiveChecks();
    setupEnhancedInteractions();
    initializeEnhancedPerformanceAnalyzer();
    
    // Initialize navigation scroll effects
    initializeNavigationEffects();
}

function initializePostLoadAnimations() {
    // Trigger entrance animations for hero section
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .pc-overview');
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Initialize component cards animation
    initializeComponentCardsAnimation();
}

function initializeComponentCardsAnimation() {
    const componentCards = document.querySelectorAll('.component-overview');
    
    componentCards.forEach((card, index) => {
        // Add enhanced hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 20px 60px rgba(0, 122, 255, 0.2), 0 0 40px rgba(0, 122, 255, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
        
        // Add click ripple effect
        card.addEventListener('click', function(e) {
            createRippleEffect(e, this);
        });
    });
}

function createRippleEffect(e, element) {
    const ripple = document.createElement('div');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        border-radius: 50%;
        background: rgba(0, 122, 255, 0.3);
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
        z-index: 10;
    `;
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple animation to CSS dynamically
if (!document.querySelector('#ripple-animation')) {
    const style = document.createElement('style');
    style.id = 'ripple-animation';
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

function initializeNavigationEffects() {
    const nav = document.querySelector('.premium-nav');
    if (!nav) return;
    
    // Enhanced scroll effects
    let scrollTimeout;
    
    function updateScrollPosition() {
        const scrollY = window.pageYOffset;
        const scrollDelta = scrollY - lastScrollY;
        
        // Add/remove scrolled class
        if (scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        // Hide/show navigation based on scroll direction
        if (scrollDelta > 0 && scrollY > 200) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        
        lastScrollY = scrollY;
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateScrollPosition);
            ticking = true;
        }
    });
}

function setupEnhancedInteractions() {
    // Enhanced component overview interactions
    const componentOverviews = document.querySelectorAll('.component-overview');
    
    componentOverviews.forEach(component => {
        component.addEventListener('mouseenter', function() {
            // Add magnetic effect to nearby elements
            const siblings = Array.from(this.parentNode.children);
            siblings.forEach(sibling => {
                if (sibling !== this) {
                    sibling.style.transform = 'scale(0.95)';
                    sibling.style.opacity = '0.7';
                }
            });
        });
        
        component.addEventListener('mouseleave', function() {
            // Reset magnetic effect
            const siblings = Array.from(this.parentNode.children);
            siblings.forEach(sibling => {
                sibling.style.transform = '';
                sibling.style.opacity = '';
            });
        });
    });
    
    // Enhanced button interactions
    const buttons = document.querySelectorAll('.analyze-button, button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(-1px) scale(1.02)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
    });
}

// ================================================================
// ENHANCED NOTIFICATION SYSTEM
// ================================================================

function showNotificationSafe(message, type = 'info', duration = 5000) {
    const notificationId = `notification-${++notificationCounter}`;
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.id = notificationId;
    
    // Get appropriate icon
    const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
    };
    
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${icons[type] || icons.info}</span>
            <span class="notification-text">${message}</span>
            <button class="notification-close" onclick="hideNotification('${notificationId}')">×</button>
        </div>
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Trigger show animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Auto-remove after duration
    const timeoutId = setTimeout(() => {
        hideNotification(notificationId);
    }, duration);
    
    // Store in notifications map
    notifications.set(notificationId, {
        element: notification,
        timeoutId: timeoutId
    });
    
    return notificationId;
}

function hideNotification(notificationId) {
    const notificationData = notifications.get(notificationId);
    if (!notificationData) return;
    
    const { element, timeoutId } = notificationData;
    
    // Clear timeout
    clearTimeout(timeoutId);
    
    // Trigger hide animation
    element.classList.remove('show');
    
    // Remove from DOM after animation
    setTimeout(() => {
        if (element.parentNode) {
            element.parentNode.removeChild(element);
        }
        notifications.delete(notificationId);
    }, 400);
}

// Make hideNotification globally accessible
window.hideNotification = hideNotification;

// ================================================================
// ORIGINAL GLOBAL VARIABLES & CONFIGURATION
// ================================================================

let tooltip = null;
let activeTooltip = null;

// Global variables to store selected components
let selectedBuild = {
    cpu: null,
    gpu: null,
    ram: null,
    storage: null,
    cooling: null,
    psu: null,
    monitor: null
};

// Component tiers for performance calculation
const componentTiers = {
    cpu: {
        'low': ['i5-13600k', 'r5-7600x'],
        'mid': [],
        'high': ['i7-14700k', 'r7-7800x3d'],
        'ultra': ['i9-14900k']
    },
    gpu: {
        'low': ['rx6600'],
        'mid': ['rtx4060'],
        'high': ['rtx4070'],
        'ultra': ['rtx4080', 'rx7900xt']
    }
};

// Performance data for different scenarios
const performanceDatabase = {
    'cpu-intensive': {
        name: 'CPU Intensive Games',
        description: 'Strategy games, simulations, and titles that heavily utilize CPU cores',
        cpuWeight: 0.7,
        gpuWeight: 0.3,
        basePerformance: {
            '1080p': { low: 80, mid: 120, high: 150, ultra: 180 },
            '1440p': { low: 70, mid: 100, high: 130, ultra: 160 },
            '4k': { low: 40, mid: 60, high: 80, ultra: 100 }
        }
    },
    'gpu-intensive': {
        name: 'GPU Intensive Games',
        description: 'AAA games with ray tracing, high-resolution textures, and advanced graphics',
        cpuWeight: 0.2,
        gpuWeight: 0.8,
        basePerformance: {
            '1080p': { low: 60, mid: 90, high: 120, ultra: 150 },
            '1440p': { low: 35, mid: 55, high: 80, ultra: 110 },
            '4k': { low: 20, mid: 30, high: 45, ultra: 65 }
        }
    },
    'balanced': {
        name: 'Balanced Games',
        description: 'Most modern games with balanced CPU and GPU requirements',
        cpuWeight: 0.5,
        gpuWeight: 0.5,
        basePerformance: {
            '1080p': { low: 70, mid: 100, high: 140, ultra: 170 },
            '1440p': { low: 50, mid: 75, high: 105, ultra: 130 },
            '4k': { low: 25, mid: 40, high: 60, ultra: 80 }
        }
    },
    'competitive': {
        name: 'Competitive Games',
        description: 'High refresh rate gaming with emphasis on consistent frame rates',
        cpuWeight: 0.6,
        gpuWeight: 0.4,
        basePerformance: {
            '1080p': { low: 120, mid: 180, high: 240, ultra: 300 },
            '1440p': { low: 90, mid: 140, high: 190, ultra: 240 },
            '4k': { low: 45, mid: 70, high: 100, ultra: 130 }
        }
    }
};

// Performance data for different game types and resolutions
const performanceData = {
    'cpu-intensive': {
        '1080p': { low: 45, mid: 65, high: 85, ultra: 95 },
        '1440p': { low: 40, mid: 60, high: 80, ultra: 90 },
        '4K': { low: 25, mid: 40, high: 55, ultra: 65 }
    },
    'gpu-intensive': {
        '1080p': { low: 35, mid: 55, high: 85, ultra: 110 },
        '1440p': { low: 25, mid: 40, high: 65, ultra: 85 },
        '4K': { low: 15, mid: 25, high: 40, ultra: 55 }
    },
    'balanced': {
        '1080p': { low: 50, mid: 75, high: 105, ultra: 130 },
        '1440p': { low: 35, mid: 55, high: 80, ultra: 100 },
        '4K': { low: 20, mid: 30, high: 45, ultra: 60 }
    }
};

// Extensive Component Database
const componentDatabase = {
    cpus: [
        // Intel 14th Gen
        { name: "Intel Core i9-14900K", price: 580, cores: 24, threads: 32, baseClock: 3.2, boostClock: 6.0, tdp: 125, tier: "flagship" },
        { name: "Intel Core i9-14900KF", price: 560, cores: 24, threads: 32, baseClock: 3.2, boostClock: 6.0, tdp: 125, tier: "flagship" },
        { name: "Intel Core i7-14700K", price: 420, cores: 20, threads: 28, baseClock: 3.4, boostClock: 5.6, tdp: 125, tier: "high-end" },
        { name: "Intel Core i7-14700KF", price: 400, cores: 20, threads: 28, baseClock: 3.4, boostClock: 5.6, tdp: 125, tier: "high-end" },
        { name: "Intel Core i5-14600K", price: 320, cores: 14, threads: 20, baseClock: 3.5, boostClock: 5.3, tdp: 125, tier: "mainstream" },
        { name: "Intel Core i5-14600KF", price: 300, cores: 14, threads: 20, baseClock: 3.5, boostClock: 5.3, tdp: 125, tier: "mainstream" },
        { name: "Intel Core i5-14400", price: 220, cores: 10, threads: 16, baseClock: 2.5, boostClock: 4.7, tdp: 65, tier: "budget" },
        { name: "Intel Core i5-14400F", price: 200, cores: 10, threads: 16, baseClock: 2.5, boostClock: 4.7, tdp: 65, tier: "budget" },
        
        // Intel 13th Gen
        { name: "Intel Core i9-13900K", price: 520, cores: 24, threads: 32, baseClock: 3.0, boostClock: 5.8, tdp: 125, tier: "flagship" },
        { name: "Intel Core i9-13900KF", price: 500, cores: 24, threads: 32, baseClock: 3.0, boostClock: 5.8, tdp: 125, tier: "flagship" },
        { name: "Intel Core i7-13700K", price: 380, cores: 16, threads: 24, baseClock: 3.4, boostClock: 5.4, tdp: 125, tier: "high-end" },
        { name: "Intel Core i7-13700KF", price: 360, cores: 16, threads: 24, baseClock: 3.4, boostClock: 5.4, tdp: 125, tier: "high-end" },
        { name: "Intel Core i5-13600K", price: 280, cores: 14, threads: 20, baseClock: 3.5, boostClock: 5.1, tdp: 125, tier: "mainstream" },
        { name: "Intel Core i5-13600KF", price: 260, cores: 14, threads: 20, baseClock: 3.5, boostClock: 5.1, tdp: 125, tier: "mainstream" },
        { name: "Intel Core i5-13400", price: 200, cores: 10, threads: 16, baseClock: 2.5, boostClock: 4.6, tdp: 65, tier: "budget" },
        { name: "Intel Core i5-13400F", price: 180, cores: 10, threads: 16, baseClock: 2.5, boostClock: 4.6, tdp: 65, tier: "budget" },
        
        // AMD Ryzen 7000 Series
        { name: "AMD Ryzen 9 7950X", price: 550, cores: 16, threads: 32, baseClock: 4.5, boostClock: 5.7, tdp: 170, tier: "flagship" },
        { name: "AMD Ryzen 9 7950X3D", price: 650, cores: 16, threads: 32, baseClock: 4.2, boostClock: 5.7, tdp: 120, tier: "flagship" },
        { name: "AMD Ryzen 9 7900X", price: 450, cores: 12, threads: 24, baseClock: 4.7, boostClock: 5.6, tdp: 170, tier: "high-end" },
        { name: "AMD Ryzen 9 7900X3D", price: 550, cores: 12, threads: 24, baseClock: 4.4, boostClock: 5.6, tdp: 120, tier: "high-end" },
        { name: "AMD Ryzen 7 7800X3D", price: 420, cores: 8, threads: 16, baseClock: 4.2, boostClock: 5.0, tdp: 120, tier: "high-end" },
        { name: "AMD Ryzen 7 7700X", price: 350, cores: 8, threads: 16, baseClock: 4.5, boostClock: 5.4, tdp: 105, tier: "mainstream" },
        { name: "AMD Ryzen 5 7600X", price: 280, cores: 6, threads: 12, baseClock: 4.7, boostClock: 5.3, tdp: 105, tier: "mainstream" },
        { name: "AMD Ryzen 5 7600", price: 230, cores: 6, threads: 12, baseClock: 3.8, boostClock: 5.1, tdp: 65, tier: "budget" },
        
        // AMD Ryzen 5000 Series
        { name: "AMD Ryzen 9 5950X", price: 480, cores: 16, threads: 32, baseClock: 3.4, boostClock: 4.9, tdp: 105, tier: "flagship" },
        { name: "AMD Ryzen 9 5900X", price: 380, cores: 12, threads: 24, baseClock: 3.7, boostClock: 4.8, tdp: 105, tier: "high-end" },
        { name: "AMD Ryzen 7 5800X3D", price: 320, cores: 8, threads: 16, baseClock: 3.4, boostClock: 4.5, tdp: 105, tier: "high-end" },
        { name: "AMD Ryzen 7 5800X", price: 280, cores: 8, threads: 16, baseClock: 3.8, boostClock: 4.7, tdp: 105, tier: "mainstream" },
        { name: "AMD Ryzen 5 5600X", price: 200, cores: 6, threads: 12, baseClock: 3.7, boostClock: 4.6, tdp: 65, tier: "mainstream" },
        { name: "AMD Ryzen 5 5600", price: 150, cores: 6, threads: 12, baseClock: 3.5, boostClock: 4.4, tdp: 65, tier: "budget" }
    ],
    
    gpus: [
        // NVIDIA RTX 40 Series
        { name: "NVIDIA RTX 4090", price: 1600, vram: 24, memoryType: "GDDR6X", cudaCores: 16384, rtCores: 128, baseClock: 2230, boostClock: 2520, tdp: 450, tier: "flagship" },
        { name: "NVIDIA RTX 4080", price: 1200, vram: 16, memoryType: "GDDR6X", cudaCores: 9728, rtCores: 76, baseClock: 2205, boostClock: 2505, tdp: 320, tier: "high-end" },
        { name: "NVIDIA RTX 4070 Ti", price: 800, vram: 12, memoryType: "GDDR6X", cudaCores: 7680, rtCores: 60, baseClock: 2310, boostClock: 2610, tdp: 285, tier: "high-end" },
        { name: "NVIDIA RTX 4070", price: 600, vram: 12, memoryType: "GDDR6X", cudaCores: 5888, rtCores: 46, baseClock: 1920, boostClock: 2475, tdp: 200, tier: "mainstream" },
        { name: "NVIDIA RTX 4060 Ti", price: 450, vram: 16, memoryType: "GDDR6", cudaCores: 4352, rtCores: 34, baseClock: 2310, boostClock: 2535, tdp: 165, tier: "mainstream" },
        { name: "NVIDIA RTX 4060", price: 350, vram: 8, memoryType: "GDDR6", cudaCores: 3072, rtCores: 24, baseClock: 1830, boostClock: 2460, tdp: 115, tier: "budget" },
        
        // NVIDIA RTX 30 Series
        { name: "NVIDIA RTX 3090", price: 1200, vram: 24, memoryType: "GDDR6X", cudaCores: 10496, rtCores: 82, baseClock: 1395, boostClock: 1695, tdp: 350, tier: "flagship" },
        { name: "NVIDIA RTX 3080", price: 800, vram: 10, memoryType: "GDDR6X", cudaCores: 8704, rtCores: 68, baseClock: 1440, boostClock: 1710, tdp: 320, tier: "high-end" },
        { name: "NVIDIA RTX 3070 Ti", price: 600, vram: 8, memoryType: "GDDR6X", cudaCores: 6144, rtCores: 48, baseClock: 1580, boostClock: 1770, tdp: 290, tier: "mainstream" },
        { name: "NVIDIA RTX 3070", price: 500, vram: 8, memoryType: "GDDR6", cudaCores: 5888, rtCores: 46, baseClock: 1500, boostClock: 1725, tdp: 220, tier: "mainstream" },
        { name: "NVIDIA RTX 3060 Ti", price: 400, vram: 8, memoryType: "GDDR6", cudaCores: 4864, rtCores: 38, baseClock: 1410, boostClock: 1665, tdp: 200, tier: "budget" },
        { name: "NVIDIA RTX 3060", price: 300, vram: 12, memoryType: "GDDR6", cudaCores: 3584, rtCores: 28, baseClock: 1320, boostClock: 1777, tdp: 170, tier: "budget" },
        
        // AMD RX 7000 Series
        { name: "AMD RX 7900 XTX", price: 1000, vram: 24, memoryType: "GDDR6", streamProcessors: 6144, rayAccelerators: 96, baseClock: 1855, boostClock: 2500, tdp: 355, tier: "flagship" },
        { name: "AMD RX 7900 XT", price: 850, vram: 20, memoryType: "GDDR6", streamProcessors: 5376, rayAccelerators: 84, baseClock: 1500, boostClock: 2400, tdp: 300, tier: "high-end" },
        { name: "AMD RX 7800 XT", price: 550, vram: 16, memoryType: "GDDR6", streamProcessors: 3840, rayAccelerators: 60, baseClock: 1295, boostClock: 2430, tdp: 263, tier: "mainstream" },
        { name: "AMD RX 7700 XT", price: 450, vram: 12, memoryType: "GDDR6", streamProcessors: 3456, rayAccelerators: 54, baseClock: 1700, boostClock: 2544, tdp: 245, tier: "mainstream" },
        { name: "AMD RX 7600", price: 320, vram: 8, memoryType: "GDDR6", streamProcessors: 2048, rayAccelerators: 32, baseClock: 1720, boostClock: 2655, tdp: 165, tier: "budget" },
        
        // AMD RX 6000 Series
        { name: "AMD RX 6950 XT", price: 800, vram: 16, memoryType: "GDDR6", streamProcessors: 5120, rayAccelerators: 80, baseClock: 1860, boostClock: 2310, tdp: 335, tier: "high-end" },
        { name: "AMD RX 6900 XT", price: 700, vram: 16, memoryType: "GDDR6", streamProcessors: 5120, rayAccelerators: 80, baseClock: 1825, boostClock: 2250, tdp: 300, tier: "high-end" },
        { name: "AMD RX 6800 XT", price: 600, vram: 16, memoryType: "GDDR6", streamProcessors: 4608, rayAccelerators: 72, baseClock: 1825, boostClock: 2250, tdp: 300, tier: "mainstream" },
        { name: "AMD RX 6700 XT", price: 400, vram: 12, memoryType: "GDDR6", streamProcessors: 2560, rayAccelerators: 40, baseClock: 2321, boostClock: 2581, tdp: 230, tier: "mainstream" },
        { name: "AMD RX 6600 XT", price: 350, vram: 8, memoryType: "GDDR6", streamProcessors: 2048, rayAccelerators: 32, baseClock: 1968, boostClock: 2589, tdp: 160, tier: "budget" },
        { name: "AMD RX 6600", price: 280, vram: 8, memoryType: "GDDR6", streamProcessors: 1792, rayAccelerators: 28, baseClock: 1626, boostClock: 2491, tdp: 132, tier: "budget" }
    ],
    
    ram: [
        // DDR5 High-End
        { name: "G.Skill Trident Z5 32GB DDR5-6000", price: 280, capacity: 32, type: "DDR5", speed: 6000, cas: 36, voltage: 1.35, tier: "high-end" },
        { name: "Corsair Dominator Platinum 32GB DDR5-5600", price: 320, capacity: 32, type: "DDR5", speed: 5600, cas: 40, voltage: 1.25, tier: "high-end" },
        { name: "Kingston Fury Beast 32GB DDR5-5200", price: 220, capacity: 32, type: "DDR5", speed: 5200, cas: 40, voltage: 1.25, tier: "mainstream" },
        { name: "Crucial 32GB DDR5-4800", price: 180, capacity: 32, type: "DDR5", speed: 4800, cas: 40, voltage: 1.1, tier: "budget" },
        
        // DDR5 16GB Kits
        { name: "G.Skill Trident Z5 16GB DDR5-6400", price: 180, capacity: 16, type: "DDR5", speed: 6400, cas: 32, voltage: 1.4, tier: "high-end" },
        { name: "Corsair Vengeance 16GB DDR5-5600", price: 140, capacity: 16, type: "DDR5", speed: 5600, cas: 36, voltage: 1.25, tier: "mainstream" },
        { name: "Kingston Fury Beast 16GB DDR5-5200", price: 120, capacity: 16, type: "DDR5", speed: 5200, cas: 40, voltage: 1.25, tier: "mainstream" },
        { name: "Crucial 16GB DDR5-4800", price: 100, capacity: 16, type: "DDR5", speed: 4800, cas: 40, voltage: 1.1, tier: "budget" },
        
        // DDR4 High-End
        { name: "G.Skill Trident Z Royal 32GB DDR4-3600", price: 200, capacity: 32, type: "DDR4", speed: 3600, cas: 16, voltage: 1.35, tier: "high-end" },
        { name: "Corsair Dominator Platinum 32GB DDR4-3200", price: 220, capacity: 32, type: "DDR4", speed: 3200, cas: 16, voltage: 1.35, tier: "high-end" },
        { name: "Kingston Fury Beast 32GB DDR4-3200", price: 140, capacity: 32, type: "DDR4", speed: 3200, cas: 16, voltage: 1.35, tier: "mainstream" },
        { name: "Crucial Ballistix 32GB DDR4-3200", price: 120, capacity: 32, type: "DDR4", speed: 3200, cas: 16, voltage: 1.35, tier: "budget" },
        
        // DDR4 16GB Kits
        { name: "G.Skill Ripjaws V 16GB DDR4-3600", price: 80, capacity: 16, type: "DDR4", speed: 3600, cas: 16, voltage: 1.35, tier: "mainstream" },
        { name: "Corsair Vengeance LPX 16GB DDR4-3200", price: 70, capacity: 16, type: "DDR4", speed: 3200, cas: 16, voltage: 1.35, tier: "mainstream" },
        { name: "Kingston Fury Beast 16GB DDR4-3200", price: 60, capacity: 16, type: "DDR4", speed: 3200, cas: 16, voltage: 1.35, tier: "budget" },
        { name: "Crucial Ballistix 16GB DDR4-3200", price: 50, capacity: 16, type: "DDR4", speed: 3200, cas: 16, voltage: 1.35, tier: "budget" }
    ]
};

// Game Performance Database
const gamePerformanceDatabase = {
    cyberpunk2077: { cpuWeight: 0.3, gpuWeight: 0.7, rtWeight: 0.4, difficulty: "very-high" },
    rdr2: { cpuWeight: 0.25, gpuWeight: 0.75, rtWeight: 0.1, difficulty: "high" },
    valorant: { cpuWeight: 0.6, gpuWeight: 0.4, rtWeight: 0.0, difficulty: "low" },
    csgo: { cpuWeight: 0.7, gpuWeight: 0.3, rtWeight: 0.0, difficulty: "low" },
    warzone: { cpuWeight: 0.4, gpuWeight: 0.6, rtWeight: 0.2, difficulty: "high" },
    apex: { cpuWeight: 0.45, gpuWeight: 0.55, rtWeight: 0.1, difficulty: "medium" },
    fortnite: { cpuWeight: 0.5, gpuWeight: 0.5, rtWeight: 0.15, difficulty: "medium" },
    minecraft: { cpuWeight: 0.3, gpuWeight: 0.7, rtWeight: 0.5, difficulty: "high" },
    spiderman: { cpuWeight: 0.25, gpuWeight: 0.75, rtWeight: 0.3, difficulty: "high" },
    witcher3: { cpuWeight: 0.3, gpuWeight: 0.7, rtWeight: 0.2, difficulty: "medium" },
    blender: { cpuWeight: 0.8, gpuWeight: 0.2, rtWeight: 0.0, difficulty: "cpu-intensive" },
    premiere: { cpuWeight: 0.6, gpuWeight: 0.4, rtWeight: 0.0, difficulty: "cpu-intensive" },
    overall: { cpuWeight: 0.35, gpuWeight: 0.65, rtWeight: 0.2, difficulty: "medium" }
};

// Performance Analysis State
let performanceState = {
    selectedCPU: null,
    selectedGPU: null,
    selectedRAM: null,
    currentCharts: {},
    analysisResults: null
};

// ================================================================
// CORE INITIALIZATION
// ================================================================

document.addEventListener('DOMContentLoaded', function() {
    initializeTooltipSystem();
    initializeScrollAnimations();
    initializeNavigation();
    initializeEnhancedPerformanceAnalyzer();
    initializeInteractiveElements();
    initializeExplodedCPU();
    initializeResponsiveChecks();
    
    console.log('🚀 Premium PC Building Guide initialized with adaptive design');
    
    // Building process expandable steps
    initBuildingProcessSteps();
});

// ================================================================
// RESPONSIVE & ADAPTIVE CHECKS
// ================================================================

function initializeResponsiveChecks() {
    // Check for viewport changes
    window.addEventListener('resize', debounce(handleViewportChange, 150));
    window.addEventListener('orientationchange', debounce(handleViewportChange, 300));
    
    // Initial check
    handleViewportChange();
    
    // Monitor for element overflow
    const observer = new ResizeObserver(entries => {
        entries.forEach(entry => {
            preventElementOverflow(entry.target);
        });
    });
    
    // Observe critical elements
    const criticalElements = document.querySelectorAll('.caption-card, .example-card, .premium-tooltip');
    criticalElements.forEach(el => observer.observe(el));
}

function handleViewportChange() {
    const viewport = {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.innerWidth / window.innerHeight
    };
    
    // Adjust layout based on viewport
    adjustLayoutForViewport(viewport);
    
    // Reposition active tooltips
    if (activeTooltip && tooltip) {
        repositionTooltipSafely();
    }
    
    // Check for element overflow
    checkForOverflow();
}

function adjustLayoutForViewport(viewport) {
    const root = document.documentElement;
    
    // Set adaptive spacing based on viewport
    if (viewport.width < 480) {
        root.style.setProperty('--adaptive-spacing', '1rem');
        root.style.setProperty('--adaptive-gap', '1rem');
    } else if (viewport.width < 768) {
        root.style.setProperty('--adaptive-spacing', '1.5rem');
        root.style.setProperty('--adaptive-gap', '1.5rem');
    } else {
        root.style.setProperty('--adaptive-spacing', '2rem');
        root.style.setProperty('--adaptive-gap', '2rem');
    }
    
    // Adjust font scaling for extreme aspect ratios
    if (viewport.ratio < 0.6) { // Very tall screens
        root.style.setProperty('--font-scale', '0.9');
    } else if (viewport.ratio > 3) { // Very wide screens
        root.style.setProperty('--font-scale', '0.95');
    } else {
        root.style.setProperty('--font-scale', '1');
    }
}

function preventElementOverflow(element) {
    const rect = element.getBoundingClientRect();
    const viewport = {
        width: window.innerWidth,
        height: window.innerHeight
    };
    
    // Check horizontal overflow
    if (rect.right > viewport.width) {
        element.style.maxWidth = `${viewport.width - rect.left - 20}px`;
    }
    
    // Check vertical overflow
    if (rect.bottom > viewport.height) {
        element.style.maxHeight = `${viewport.height - rect.top - 20}px`;
        element.style.overflowY = 'auto';
    }
}

function checkForOverflow() {
    const elements = document.querySelectorAll('.caption-card, .example-card');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.right > window.innerWidth || rect.bottom > window.innerHeight) {
            preventElementOverflow(el);
        }
    });
}

// ================================================================
// EXPLODED CPU INTERACTIONS
// ================================================================

function initializeExplodedCPU() {
    const cpuParts = document.querySelectorAll('.cpu-part');
    const captionCards = document.querySelectorAll('.caption-card');
    
    // Set default active card
    showCaptionCard('performance-tier-card');
    
    cpuParts.forEach(part => {
        part.addEventListener('mouseenter', handleCPUPartHover);
        part.addEventListener('mouseleave', handleCPUPartLeave);
        part.addEventListener('touchstart', handleCPUPartTouch, { passive: true });
    });
}

function handleCPUPartHover(e) {
    const part = e.currentTarget;
    const explanation = part.dataset.explanation;
    
    // Show tooltip with smart positioning
    if (explanation === 'performance-tier') {
        showTooltipSafe(e, 'High-end tier with 8-12 cores');
        showCaptionCard('performance-tier-card');
    } else if (explanation === 'generation') {
        showTooltipSafe(e, '9th generation Ryzen CPU');
        showCaptionCard('generation-card');
    } else if (explanation === 'suffix') {
        showTooltipSafe(e, 'Unlocked high-performance variant');
        showCaptionCard('suffix-card');
    }
    
    // Animate connection line safely
    const connectionLine = part.querySelector('.connection-line');
    if (connectionLine && window.innerHeight > 600) {
        connectionLine.style.opacity = '1';
    }
}

function handleCPUPartLeave(e) {
    hideTooltipSafe();
    
    // Reset to default card after a delay
    setTimeout(() => {
        showCaptionCard('performance-tier-card');
    }, 500);
}

function handleCPUPartTouch(e) {
    // Handle touch devices
    e.preventDefault();
    handleCPUPartHover(e);
    
    // Auto-hide after 3 seconds on touch
    setTimeout(() => {
        hideTooltipSafe();
    }, 3000);
}

function showCaptionCard(cardId) {
    const allCards = document.querySelectorAll('.caption-card');
    const targetCard = document.getElementById(cardId);
    
    allCards.forEach(card => {
        card.classList.remove('active');
    });
    
    if (targetCard) {
        // Ensure card fits in viewport
        targetCard.classList.add('active');
        
        // Check if card overflows and adjust
        setTimeout(() => {
            preventElementOverflow(targetCard);
        }, 100);
    }
}

// ================================================================
// SMART ANTI-CLIPPING TOOLTIP SYSTEM
// ================================================================

function initializeTooltipSystem() {
    // Create tooltip element if it doesn't exist
    tooltip = document.getElementById('tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.id = 'tooltip';
        tooltip.className = 'premium-tooltip';
        tooltip.innerHTML = `
            <div class="tooltip-content"></div>
            <div class="tooltip-arrow"></div>
        `;
        document.body.appendChild(tooltip);
    }

    // Initialize all hoverable elements
    const hoverableElements = document.querySelectorAll('[data-tooltip], .hoverable');
    
    hoverableElements.forEach(element => {
        element.addEventListener('mouseenter', handleTooltipShow);
        element.addEventListener('mouseleave', handleTooltipHide);
        element.addEventListener('mousemove', handleTooltipMove);
        
        // Touch support
        element.addEventListener('touchstart', handleTooltipTouch, { passive: true });
        element.addEventListener('touchend', handleTooltipHide, { passive: true });
    });
}

function handleTooltipShow(e) {
    const content = e.target.dataset.tooltip;
    if (!content) return;

    showTooltipSafe(e, content);
}

function handleTooltipHide(e) {
    if (activeTooltip === e.target) {
        hideTooltipSafe();
    }
}

function handleTooltipMove(e) {
    if (activeTooltip === e.target) {
        updateTooltipPositionSafe(e);
    }
}

function handleTooltipTouch(e) {
    const content = e.target.dataset.tooltip;
    if (!content) return;
    
    showTooltipSafe(e, content);
    
    // Auto-hide after 2.5 seconds
    setTimeout(() => {
        hideTooltipSafe();
    }, 2500);
}

function showTooltipSafe(e, text) {
    if (!tooltip) return;

    const tooltipContent = tooltip.querySelector('.tooltip-content');
    if (!tooltipContent) return;
    
    tooltipContent.textContent = text;
    
    // Show tooltip temporarily to measure dimensions
    tooltip.style.opacity = '0';
    tooltip.style.visibility = 'visible';
    tooltip.classList.add('visible');
    
    // Position tooltip safely
    updateTooltipPositionSafe(e);
    
    // Make visible with animation
    requestAnimationFrame(() => {
        tooltip.style.opacity = '1';
        tooltip.style.visibility = 'visible';
    });
    
    activeTooltip = e.target;
}

function hideTooltipSafe() {
    if (tooltip) {
        tooltip.classList.remove('visible');
        tooltip.style.opacity = '0';
        setTimeout(() => {
            tooltip.style.visibility = 'hidden';
        }, 300);
    }
    activeTooltip = null;
}

function updateTooltipPositionSafe(e) {
    if (!tooltip) return;
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const tooltipRect = tooltip.getBoundingClientRect();
    const viewport = {
        width: window.innerWidth,
        height: window.innerHeight,
        scrollX: window.scrollX,
        scrollY: window.scrollY
    };
    
    // Calculate safe positioning with multiple fallbacks
    const positions = calculateSafeTooltipPositions(mouseX, mouseY, tooltipRect, viewport);
    const bestPosition = positions[0]; // Use the best position
    
    // Apply position
    tooltip.style.left = `${bestPosition.x}px`;
    tooltip.style.top = `${bestPosition.y}px`;
    
    // Update arrow position based on tooltip placement
    updateTooltipArrow(bestPosition, mouseX, mouseY);
}

function calculateSafeTooltipPositions(mouseX, mouseY, tooltipRect, viewport) {
    const margin = 15;
    const arrowSize = 8;
    const positions = [];
    
    // Position 1: Above mouse (preferred)
    const above = {
        x: mouseX - (tooltipRect.width / 2),
        y: mouseY - tooltipRect.height - margin,
        placement: 'above'
    };
    
    // Position 2: Below mouse
    const below = {
        x: mouseX - (tooltipRect.width / 2),
        y: mouseY + margin,
        placement: 'below'
    };
    
    // Position 3: Left of mouse
    const left = {
        x: mouseX - tooltipRect.width - margin,
        y: mouseY - (tooltipRect.height / 2),
        placement: 'left'
    };
    
    // Position 4: Right of mouse
    const right = {
        x: mouseX + margin,
        y: mouseY - (tooltipRect.height / 2),
        placement: 'right'
    };
    
    // Test each position and score them
    [above, below, left, right].forEach(pos => {
        pos.score = scoreTooltipPosition(pos, tooltipRect, viewport, margin);
        positions.push(pos);
    });
    
    // Sort by score (higher is better)
    positions.sort((a, b) => b.score - a.score);
    
    // Adjust the best position to fit perfectly
    const best = positions[0];
    adjustTooltipPositionToFit(best, tooltipRect, viewport, margin);
    
    return positions;
}

function scoreTooltipPosition(pos, tooltipRect, viewport, margin) {
    let score = 100;
    
    // Check horizontal bounds
    if (pos.x < margin) {
        score -= Math.abs(pos.x - margin) * 2;
    }
    if (pos.x + tooltipRect.width > viewport.width - margin) {
        score -= Math.abs((pos.x + tooltipRect.width) - (viewport.width - margin)) * 2;
    }
    
    // Check vertical bounds
    if (pos.y < margin) {
        score -= Math.abs(pos.y - margin) * 2;
    }
    if (pos.y + tooltipRect.height > viewport.height - margin) {
        score -= Math.abs((pos.y + tooltipRect.height) - (viewport.height - margin)) * 2;
    }
    
    // Prefer above placement
    if (pos.placement === 'above') {
        score += 10;
    }
    
    return Math.max(0, score);
}

function adjustTooltipPositionToFit(pos, tooltipRect, viewport, margin) {
    // Horizontal adjustment
    if (pos.x < margin) {
        pos.x = margin;
    } else if (pos.x + tooltipRect.width > viewport.width - margin) {
        pos.x = viewport.width - tooltipRect.width - margin;
    }
    
    // Vertical adjustment
    if (pos.y < margin) {
        pos.y = margin;
    } else if (pos.y + tooltipRect.height > viewport.height - margin) {
        pos.y = viewport.height - tooltipRect.height - margin;
    }
    
    // Ensure minimum bounds
    pos.x = Math.max(margin, pos.x);
    pos.y = Math.max(margin, pos.y);
}

function updateTooltipArrow(position, mouseX, mouseY) {
    const arrow = tooltip.querySelector('.tooltip-arrow');
    if (!arrow) return;
    
    // Calculate arrow position relative to tooltip
    const tooltipRect = tooltip.getBoundingClientRect();
    const arrowX = Math.max(8, Math.min(tooltipRect.width - 8, mouseX - tooltipRect.left));
    
    // Position arrow
    arrow.style.left = `${arrowX}px`;
    
    // Adjust arrow direction based on placement
    if (position.placement === 'above') {
        arrow.style.bottom = '-4px';
        arrow.style.top = 'auto';
        arrow.style.transform = `translateX(-50%) rotate(45deg)`;
    } else if (position.placement === 'below') {
        arrow.style.top = '-4px';
        arrow.style.bottom = 'auto';
        arrow.style.transform = `translateX(-50%) rotate(-135deg)`;
    }
}

function repositionTooltipSafely() {
    if (!activeTooltip || !tooltip) return;
    
    // Create a mock event for repositioning
    const rect = activeTooltip.getBoundingClientRect();
    const mockEvent = {
        clientX: rect.left + rect.width / 2,
        clientY: rect.top + rect.height / 2,
        target: activeTooltip
    };
    
    updateTooltipPositionSafe(mockEvent);
}

// ================================================================
// PERFORMANCE ANALYZER
// ================================================================

function initializeEnhancedPerformanceAnalyzer() {
    console.log('Initializing Enhanced Performance Analyzer...');
    
    setupComponentSearch();
    setupAnalysisButton();
    setupChartControls();
    
    // Initialize Chart.js
    if (typeof Chart !== 'undefined') {
        Chart.defaults.color = '#e5e5e7';
        Chart.defaults.backgroundColor = 'rgba(0, 122, 255, 0.1)';
        Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.1)';
    }
}

// Component Search Setup
function setupComponentSearch() {
    const searchInputs = ['cpu-search', 'gpu-search', 'ram-search'];
    
    searchInputs.forEach(inputId => {
        const input = document.getElementById(inputId);
        const resultsContainer = document.getElementById(inputId.replace('-search', '-results'));
        
        if (input && resultsContainer) {
            input.addEventListener('input', (e) => handleComponentSearch(e, inputId));
            input.addEventListener('focus', (e) => handleComponentSearch(e, inputId));
            
            // Close results when clicking outside
            document.addEventListener('click', (e) => {
                if (!input.contains(e.target) && !resultsContainer.contains(e.target)) {
                    resultsContainer.classList.remove('visible');
                }
            });
        }
    });
}

// Handle Component Search
function handleComponentSearch(event, inputId) {
    const query = event.target.value.toLowerCase();
    const componentType = inputId.split('-')[0]; // cpu, gpu, or ram
    const resultsContainer = document.getElementById(`${componentType}-results`);
    
    if (query.length < 1) {
        resultsContainer.classList.remove('visible');
        return;
    }
    
    const components = componentDatabase[componentType + 's'] || [];
    const filteredComponents = components.filter(component =>
        component.name.toLowerCase().includes(query)
    ).slice(0, 10); // Limit to 10 results
    
    displaySearchResults(filteredComponents, resultsContainer, componentType);
}

// Display Search Results
function displaySearchResults(components, container, componentType) {
    container.innerHTML = '';
    
    if (components.length === 0) {
        container.innerHTML = '<div class="search-result-item"><div class="result-name">No components found</div></div>';
        container.classList.add('visible');
        return;
    }
    
    components.forEach(component => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        resultItem.innerHTML = `
            <div>
                <div class="result-name">${component.name}</div>
                <div class="result-specs">${getComponentSpecs(component, componentType)}</div>
            </div>
            <div class="result-price">$${component.price}</div>
        `;
        
        resultItem.addEventListener('click', () => selectComponent(component, componentType));
        container.appendChild(resultItem);
    });
    
    container.classList.add('visible');
}

// Get Component Specifications for Display
function getComponentSpecs(component, type) {
    switch (type) {
        case 'cpu':
            return `${component.cores}C/${component.threads}T • ${component.boostClock}GHz • ${component.tdp}W`;
        case 'gpu':
            return `${component.vram}GB ${component.memoryType} • ${component.tdp}W`;
        case 'ram':
            return `${component.capacity}GB • ${component.type}-${component.speed} • CL${component.cas}`;
        default:
            return '';
    }
}

// Select Component
function selectComponent(component, type) {
    performanceState[`selected${type.toUpperCase()}`] = component;
    
    const selectedContainer = document.getElementById(`selected-${type}`);
    const searchInput = document.getElementById(`${type}-search`);
    const resultsContainer = document.getElementById(`${type}-results`);
    
    if (selectedContainer) {
        selectedContainer.innerHTML = `
            <span class="component-name">${component.name}</span>
            <span class="component-price">$${component.price}</span>
        `;
    }
    
    if (searchInput) {
        searchInput.value = component.name;
    }
    
    if (resultsContainer) {
        resultsContainer.classList.remove('visible');
    }
}

// Setup Analysis Button
function setupAnalysisButton() {
    const analyzeButton = document.getElementById('analyze-performance');
    if (analyzeButton) {
        analyzeButton.addEventListener('click', runComprehensiveAnalysis);
    }
}

// ================================================================
// NAVIGATION SYSTEM
// ================================================================

function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calculate safe offset
                const navHeight = document.querySelector('.premium-nav')?.offsetHeight || 80;
                const offsetTop = targetElement.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: Math.max(0, offsetTop),
                    behavior: 'smooth'
                });
                
                // Add visual feedback
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            }
        });
    });
}

// ================================================================
// SCROLL ANIMATIONS
// ================================================================

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    const animatableElements = document.querySelectorAll('.example-card, .component-section, .caption-card');
    animatableElements.forEach(el => observer.observe(el));
}

// ================================================================
// INTERACTIVE ELEMENTS
// ================================================================

// ================================================================
// INTERACTIVE NAMING SYSTEM
// ================================================================

function initializeInteractiveNamingSystem() {
    const namingContainers = document.querySelectorAll('.naming-container');
    
    namingContainers.forEach(container => {
        const nameSegments = container.querySelectorAll('.name-segment');
        const descriptionContents = container.querySelectorAll('.description-content');
        const defaultMessage = container.querySelector('.default-message');
        
        // Show default message initially
        if (defaultMessage) {
            defaultMessage.style.display = 'flex';
        }
        
        nameSegments.forEach(segment => {
            segment.addEventListener('mouseenter', function() {
                const segmentType = this.getAttribute('data-segment');
                
                // Hide all description content and default message
                descriptionContents.forEach(content => {
                    content.classList.remove('active');
                });
                if (defaultMessage) {
                    defaultMessage.style.display = 'none';
                }
                
                // Show the relevant description content
                const targetContent = container.querySelector(`[data-segment-info="${segmentType}"]`);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
            
            segment.addEventListener('mouseleave', function() {
                // Hide all description content
                descriptionContents.forEach(content => {
                    content.classList.remove('active');
                });
                
                // Show default message after a short delay
                setTimeout(() => {
                    if (defaultMessage && !container.querySelector('.name-segment:hover')) {
                        defaultMessage.style.display = 'flex';
                    }
                }, 100);
            });
        });
        
        // Handle container mouse leave to ensure default message shows
        container.addEventListener('mouseleave', function() {
            descriptionContents.forEach(content => {
                content.classList.remove('active');
            });
            if (defaultMessage) {
                defaultMessage.style.display = 'flex';
            }
        });
    });
}

// ================================================================
// INTERACTIVE ELEMENTS
// ================================================================

function initializeInteractiveElements() {
    // Initialize the interactive naming system
    initializeInteractiveNamingSystem();
    
    // Name segment hover effects with safe boundaries
    const nameSegments = document.querySelectorAll('.name-segment');
    
    nameSegments.forEach(segment => {
        segment.addEventListener('mouseenter', function() {
            // Only apply transform if element won't overflow
            const rect = this.getBoundingClientRect();
            if (rect.left > 10 && rect.right < window.innerWidth - 10) {
                this.style.transform = 'translateY(-1px) scale(1.02)';
            }
        });
        
        segment.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // Enhanced card hover effects with overflow prevention
    const exampleCards = document.querySelectorAll('.example-card');
    
    exampleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Check if card has room to expand
            const rect = this.getBoundingClientRect();
            const hasVerticalRoom = rect.top > 20;
            
            if (hasVerticalRoom) {
                this.style.transform = 'translateY(-4px) scale(1.01)';
            } else {
                this.style.transform = 'scale(1.01)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// ================================================================
// UTILITY FUNCTIONS
// ================================================================

function animateCountUp(element, targetValue, suffix = '') {
    if (!element) return;
    
    const startValue = 0;
    const duration = 1000;
    const startTime = performance.now();
    
    function updateCount(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Use easing function for smooth animation
        const easedProgress = easeOutCubic(progress);
        const currentValue = Math.round(startValue + (targetValue - startValue) * easedProgress);
        
        element.textContent = currentValue + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(updateCount);
        }
    }
    
    requestAnimationFrame(updateCount);
}

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

function showNotificationSafe(message, type = 'info') {
    // Create notification element with safe positioning
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    // Calculate safe position
    const notificationWidth = 300;
    const rightMargin = Math.min(20, window.innerWidth * 0.05);
    const topMargin = Math.min(20, window.innerHeight * 0.05);
    
    notification.style.cssText = `
        position: fixed;
        top: ${topMargin}px;
        right: ${rightMargin}px;
        background: rgba(0, 0, 0, 0.9);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        z-index: 10001;
        transform: translateX(100%);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        max-width: ${Math.min(notificationWidth, window.innerWidth - 40)}px;
        word-wrap: break-word;
        font-size: ${window.innerWidth < 480 ? '0.9rem' : '1rem'};
    `;
    
    if (type === 'warning') {
        notification.style.background = 'rgba(255, 149, 0, 0.9)';
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// ================================================================
// ADVANCED SCROLL EFFECTS
// ================================================================

window.addEventListener('scroll', debounce(function() {
    // Update navigation active states
    updateActiveNavigation();
    
    // Reposition tooltips if active
    if (activeTooltip && tooltip) {
        repositionTooltipSafely();
    }
}, 16)); // ~60fps

function updateActiveNavigation() {
    const sections = document.querySelectorAll('.component-section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.id;
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ================================================================
// PERFORMANCE OPTIMIZATIONS
// ================================================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for high-frequency events
function throttle(func, wait) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, wait);
        }
    };
}

// ================================================================
// ERROR HANDLING & FALLBACKS
// ================================================================

window.addEventListener('error', function(e) {
    console.warn('PC Guide Error:', e.message);
    // Graceful degradation - disable animations on error
    document.body.style.animation = 'none';
});

// Fallback for older browsers
if (!window.IntersectionObserver) {
    // Polyfill or alternative implementation
    console.warn('IntersectionObserver not supported, using fallback');
}

// ================================================================
// EXPORT FOR DEBUGGING
// ================================================================

window.PCGuide = {
    performanceDatabase,
    componentTiers,
    runPerformanceAnalysis,
    calculatePerformance,
    showNotificationSafe,
    repositionTooltipSafely,
    handleViewportChange
};

// Building Process Expandable Steps
function initBuildingProcessSteps() {
    const expandableSteps = document.querySelectorAll('.expandable-step');
    
    expandableSteps.forEach(step => {
        const header = step.querySelector('.step-header');
        
        header.addEventListener('click', () => {
            const isExpanded = step.classList.contains('expanded');
            
            // Close all other expanded steps
            expandableSteps.forEach(otherStep => {
                if (otherStep !== step) {
                    otherStep.classList.remove('expanded');
                }
            });
            
            // Toggle current step
            if (isExpanded) {
                step.classList.remove('expanded');
            } else {
                step.classList.add('expanded');
            }
        });
    });
}

// Comprehensive Performance Analysis
function runComprehensiveAnalysis() {
    const { selectedCPU, selectedGPU, selectedRAM } = performanceState;
    
    if (!selectedCPU || !selectedGPU) {
        alert('Please select both a CPU and GPU to run analysis');
        return;
    }
    
    // Show loading state
    const analyzeButton = document.getElementById('analyze-performance');
    const originalText = analyzeButton.innerHTML;
    analyzeButton.innerHTML = '<span class="button-text">Analyzing...</span><span class="button-icon">⏳</span>';
    analyzeButton.disabled = true;
    
    setTimeout(() => {
        // Perform analysis calculations
        const analysisResults = calculateComprehensivePerformance(selectedCPU, selectedGPU, selectedRAM);
        performanceState.analysisResults = analysisResults;
        
        // Update dashboard
        updatePerformanceDashboard(analysisResults);
        
        // Generate all charts
        generateAllCharts(analysisResults);
        
        // Update detailed metrics table
        updateMetricsTable(analysisResults);
        
        // Update recommendations
        updateRecommendations(analysisResults);
        
        // Show dashboard
        const dashboard = document.getElementById('performance-dashboard');
        if (dashboard) {
            dashboard.classList.add('visible');
            dashboard.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
        // Reset button
        analyzeButton.innerHTML = originalText;
        analyzeButton.disabled = false;
    }, 1500); // Simulate analysis time
}

// Calculate Comprehensive Performance
function calculateComprehensivePerformance(cpu, gpu, ram) {
    const resolution = document.getElementById('resolution-select')?.value || '1440p';
    const quality = document.getElementById('quality-select')?.value || 'high';
    const game = document.getElementById('game-select')?.value || 'overall';
    
    const gameData = gamePerformanceDatabase[game];
    const qualityMultipliers = {
        low: 1.4,
        medium: 1.2,
        high: 1.0,
        ultra: 0.85,
        'ultra-rt': 0.65
    };
    
    const resolutionMultipliers = {
        '1080p': 1.0,
        '1440p': 0.7,
        '4k': 0.4,
        '1080p-ultrawide': 0.85,
        '1440p-ultrawide': 0.6
    };
    
    // Calculate base performance scores
    const cpuScore = calculateCPUScore(cpu);
    const gpuScore = calculateGPUScore(gpu);
    const ramScore = calculateRAMScore(ram);
    
    // Calculate FPS for different resolutions
    const fps1080p = calculateFPS(cpuScore, gpuScore, ramScore, '1080p', quality, gameData);
    const fps1440p = calculateFPS(cpuScore, gpuScore, ramScore, '1440p', quality, gameData);
    const fps4k = calculateFPS(cpuScore, gpuScore, ramScore, '4k', quality, gameData);
    
    // Calculate utilization
    const cpuUtilization = calculateUtilization(cpuScore, resolution, gameData.cpuWeight);
    const gpuUtilization = calculateUtilization(gpuScore, resolution, gameData.gpuWeight);
    
    // Calculate other metrics
    const systemBalance = calculateSystemBalance(cpuUtilization, gpuUtilization);
    const powerConsumption = calculatePowerConsumption(cpu, gpu, cpuUtilization, gpuUtilization);
    const temperatures = calculateTemperatures(cpu, gpu, cpuUtilization, gpuUtilization);
    const perfPerDollar = fps1440p / (cpu.price + gpu.price + (ram?.price || 150));
    
    return {
        fps: {
            '1080p': Math.round(fps1080p),
            '1440p': Math.round(fps1440p),
            '4k': Math.round(fps4k),
            current: Math.round(calculateFPS(cpuScore, gpuScore, ramScore, resolution, quality, gameData))
        },
        utilization: {
            cpu: Math.round(cpuUtilization),
            gpu: Math.round(gpuUtilization)
        },
        systemBalance: Math.round(systemBalance),
        powerConsumption: Math.round(powerConsumption),
        temperatures: {
            cpu: Math.round(temperatures.cpu),
            gpu: Math.round(temperatures.gpu)
        },
        frameTimes: {
            average: Math.round(1000 / fps1440p * 10) / 10,
            onePercentLow: Math.round(1000 / (fps1440p * 0.8) * 10) / 10
        },
        perfPerDollar: Math.round(perfPerDollar * 1000) / 1000,
        scores: {
            cpu: Math.round(cpuScore),
            gpu: Math.round(gpuScore),
            ram: Math.round(ramScore),
            overall: Math.round((cpuScore + gpuScore + ramScore) / 3)
        },
        bottleneck: calculateBottleneck(cpuUtilization, gpuUtilization),
        resolution,
        quality,
        game,
        selectedComponents: { cpu, gpu, ram }
    };
}

// Calculate Individual Component Scores
function calculateCPUScore(cpu) {
    const coreWeight = 0.4;
    const clockWeight = 0.3;
    const efficiencyWeight = 0.3;
    
    const coreScore = (cpu.cores / 24) * 100; // Normalized to 24 cores
    const clockScore = (cpu.boostClock / 6.0) * 100; // Normalized to 6.0 GHz
    const efficiencyScore = (200 - cpu.tdp) / 200 * 100; // Lower TDP is better
    
    return (coreScore * coreWeight + clockScore * clockWeight + efficiencyScore * efficiencyWeight);
}

function calculateGPUScore(gpu) {
    const coreWeight = 0.3;
    const clockWeight = 0.2;
    const vramWeight = 0.3;
    const efficiencyWeight = 0.2;
    
    const coreScore = ((gpu.cudaCores || gpu.streamProcessors) / 16384) * 100; // Normalized to RTX 4090
    const clockScore = (gpu.boostClock / 2700) * 100; // Normalized to high-end boost
    const vramScore = (gpu.vram / 24) * 100; // Normalized to 24GB
    const efficiencyScore = (500 - gpu.tdp) / 500 * 100; // Lower TDP is better
    
    return (coreScore * coreWeight + clockScore * clockWeight + vramScore * vramWeight + efficiencyScore * efficiencyWeight);
}

function calculateRAMScore(ram) {
    if (!ram) return 75; // Default score for missing RAM
    
    const capacityWeight = 0.4;
    const speedWeight = 0.4;
    const latencyWeight = 0.2;
    
    const capacityScore = Math.min(ram.capacity / 32, 1) * 100; // Normalized to 32GB
    const speedScore = (ram.speed / 6400) * 100; // Normalized to DDR5-6400
    const latencyScore = (50 - ram.cas) / 50 * 100; // Lower CAS is better
    
    return (capacityScore * capacityWeight + speedScore * speedWeight + latencyScore * latencyWeight);
}

// Calculate FPS
function calculateFPS(cpuScore, gpuScore, ramScore, resolution, quality, gameData) {
    const resolutionMultipliers = {
        '1080p': 1.0,
        '1440p': 0.7,
        '4k': 0.4,
        '1080p-ultrawide': 0.85,
        '1440p-ultrawide': 0.6
    };
    
    const qualityMultipliers = {
        low: 1.4,
        medium: 1.2,
        high: 1.0,
        ultra: 0.85,
        'ultra-rt': 0.65
    };
    
    const baseFPS = (cpuScore * gameData.cpuWeight + gpuScore * gameData.gpuWeight + ramScore * 0.1);
    const adjustedFPS = baseFPS * resolutionMultipliers[resolution] * qualityMultipliers[quality];
    
    return Math.max(adjustedFPS * 1.8, 15); // Scale up and ensure minimum 15 FPS
}

// Calculate Utilization
function calculateUtilization(componentScore, resolution, weight) {
    const resolutionLoad = {
        '1080p': 0.6,
        '1440p': 0.75,
        '4k': 0.95,
        '1080p-ultrawide': 0.7,
        '1440p-ultrawide': 0.85
    };
    
    const baseUtilization = (componentScore / 100) * weight * resolutionLoad[resolution] * 100;
    return Math.min(Math.max(baseUtilization + (Math.random() * 20 - 10), 25), 98);
}

// Calculate System Balance
function calculateSystemBalance(cpuUtil, gpuUtil) {
    const difference = Math.abs(cpuUtil - gpuUtil);
    return Math.max(100 - difference * 1.5, 0);
}

// Calculate Power Consumption
function calculatePowerConsumption(cpu, gpu, cpuUtil, gpuUtil) {
    const cpuPower = cpu.tdp * (cpuUtil / 100) * 0.8;
    const gpuPower = gpu.tdp * (gpuUtil / 100) * 0.9;
    const systemPower = 80; // Motherboard, RAM, storage, fans
    
    return cpuPower + gpuPower + systemPower;
}

// Calculate Temperatures
function calculateTemperatures(cpu, gpu, cpuUtil, gpuUtil) {
    const baseCPUTemp = 35 + (cpu.tdp / 200 * 30);
    const baseGPUTemp = 40 + (gpu.tdp / 450 * 35);
    
    return {
        cpu: baseCPUTemp + (cpuUtil / 100 * 25) + (Math.random() * 10 - 5),
        gpu: baseGPUTemp + (gpuUtil / 100 * 30) + (Math.random() * 10 - 5)
    };
}

// Calculate Bottleneck
function calculateBottleneck(cpuUtil, gpuUtil) {
    const difference = Math.abs(cpuUtil - gpuUtil);
    
    if (difference < 15) return 'balanced';
    if (cpuUtil > gpuUtil + 15) return 'gpu-bottleneck';
    if (gpuUtil > cpuUtil + 15) return 'cpu-bottleneck';
    return 'balanced';
}

// Update Performance Dashboard
function updatePerformanceDashboard(results) {
    // Update summary cards
    updateElement('avg-fps', results.fps.current);
    updateElement('avg-frametime', results.frameTimes.average);
    updateElement('system-balance', results.systemBalance);
    updateElement('perf-dollar', results.perfPerDollar);
    
    // Update ratings
    updateRating('fps-rating', results.fps.current, 'fps');
    updateRating('frametime-rating', results.frameTimes.average, 'frametime');
    updateRating('balance-rating', results.systemBalance, 'balance');
    updateRating('value-rating', results.perfPerDollar, 'value');
}

// Update Element Content
function updateElement(id, value) {
    const element = document.getElementById(id);
    if (element) {
        if (typeof value === 'number') {
            animateCountUp(element, value);
        } else {
            element.textContent = value;
        }
    }
}

// Update Rating
function updateRating(id, value, type) {
    const element = document.getElementById(id);
    if (!element) return;
    
    let rating, className;
    
    switch (type) {
        case 'fps':
            if (value >= 120) { rating = 'Excellent'; className = 'excellent'; }
            else if (value >= 80) { rating = 'Good'; className = 'good'; }
            else if (value >= 60) { rating = 'Average'; className = 'average'; }
            else { rating = 'Poor'; className = 'poor'; }
            break;
        case 'frametime':
            if (value <= 8) { rating = 'Excellent'; className = 'excellent'; }
            else if (value <= 12) { rating = 'Good'; className = 'good'; }
            else if (value <= 16) { rating = 'Average'; className = 'average'; }
            else { rating = 'Poor'; className = 'poor'; }
            break;
        case 'balance':
            if (value >= 85) { rating = 'Excellent'; className = 'excellent'; }
            else if (value >= 70) { rating = 'Good'; className = 'good'; }
            else if (value >= 50) { rating = 'Average'; className = 'average'; }
            else { rating = 'Poor'; className = 'poor'; }
            break;
        case 'value':
            if (value >= 0.15) { rating = 'Excellent'; className = 'excellent'; }
            else if (value >= 0.10) { rating = 'Good'; className = 'good'; }
            else if (value >= 0.06) { rating = 'Average'; className = 'average'; }
            else { rating = 'Poor'; className = 'poor'; }
            break;
    }
    
    element.textContent = rating;
    element.className = `performance-rating ${className}`;
}

function setupChartControls() {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('chart-toggle')) {
            const chartType = e.target.dataset.chart;
            const container = e.target.closest('.chart-container');
            const canvas = container.querySelector('canvas');
            
            // Update active button
            container.querySelectorAll('.chart-toggle').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            
            // Regenerate chart with new type (simplified for demo)
            if (performanceState.analysisResults) {
                setTimeout(() => generateAllCharts(performanceState.analysisResults), 100);
            }
        }
    });
}

// Generate All Charts
function generateAllCharts(results) {
    if (typeof Chart === 'undefined') {
        console.error('Chart.js not loaded');
        return;
    }
    
    // Destroy existing charts
    Object.values(performanceState.currentCharts).forEach(chart => {
        if (chart) chart.destroy();
    });
    performanceState.currentCharts = {};
    
    // Generate each chart
    generateUtilizationChart(results);
    generateFPSChart(results);
    generateCostChart(results);
    generateGamesChart(results);
    generatePowerChart(results);
    generateTemperatureChart(results);
}

// Generate Utilization Chart
function generateUtilizationChart(results) {
    const canvas = document.getElementById('utilization-chart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    performanceState.currentCharts.utilization = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['CPU Utilization', 'GPU Utilization'],
            datasets: [{
                label: 'Utilization %',
                data: [results.utilization.cpu, results.utilization.gpu],
                backgroundColor: [
                    results.utilization.cpu > 85 ? 'rgba(255, 69, 58, 0.8)' : 'rgba(0, 122, 255, 0.8)',
                    results.utilization.gpu > 85 ? 'rgba(255, 69, 58, 0.8)' : 'rgba(0, 212, 255, 0.8)'
                ],
                borderColor: [
                    results.utilization.cpu > 85 ? '#ff453a' : '#007aff',
                    results.utilization.gpu > 85 ? '#ff453a' : '#00d4ff'
                ],
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(28, 32, 35, 0.95)',
                    titleColor: '#e5e5e7',
                    bodyColor: '#e5e5e7',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: { color: 'rgba(255, 255, 255, 0.1)' },
                    ticks: { color: '#e5e5e7', callback: value => value + '%' }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#e5e5e7' }
                }
            }
        }
    });
}

// Generate FPS Chart
function generateFPSChart(results) {
    const canvas = document.getElementById('fps-chart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    performanceState.currentCharts.fps = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1080p', '1440p', '4K'],
            datasets: [{
                label: 'FPS',
                data: [results.fps['1080p'], results.fps['1440p'], results.fps['4k']],
                borderColor: '#007aff',
                backgroundColor: 'rgba(0, 122, 255, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#007aff',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(28, 32, 35, 0.95)',
                    titleColor: '#e5e5e7',
                    bodyColor: '#e5e5e7',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(255, 255, 255, 0.1)' },
                    ticks: { color: '#e5e5e7', callback: value => value + ' FPS' }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#e5e5e7' }
                }
            }
        }
    });
}

// Generate Cost Performance Chart
function generateCostChart(results) {
    const canvas = document.getElementById('cost-chart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const { cpu, gpu } = results.selectedComponents;
    
    performanceState.currentCharts.cost = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Current Build',
                data: [{
                    x: cpu.price + gpu.price,
                    y: results.fps.current
                }],
                backgroundColor: 'rgba(0, 122, 255, 0.8)',
                borderColor: '#007aff',
                pointRadius: 12,
                pointHoverRadius: 15
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(28, 32, 35, 0.95)',
                    titleColor: '#e5e5e7',
                    bodyColor: '#e5e5e7',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1,
                    callbacks: {
                        label: (context) => [
                            `Cost: $${context.parsed.x}`,
                            `Performance: ${context.parsed.y} FPS`,
                            `Value: ${(context.parsed.y / context.parsed.x).toFixed(3)} FPS/$`
                        ]
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: { display: true, text: 'Performance (FPS)', color: '#e5e5e7' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' },
                    ticks: { color: '#e5e5e7' }
                },
                x: {
                    title: { display: true, text: 'Total Cost ($)', color: '#e5e5e7' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' },
                    ticks: { 
                        color: '#e5e5e7',
                        callback: value => '$' + value
                    }
                }
            }
        }
    });
}

// Generate Games Performance Chart
function generateGamesChart(results) {
    const canvas = document.getElementById('games-chart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Sample game performance data
    const gamePerformance = {
        'Cyberpunk 2077': Math.round(results.fps.current * 0.7),
        'Red Dead 2': Math.round(results.fps.current * 0.8),
        'Valorant': Math.round(results.fps.current * 2.1),
        'CS2': Math.round(results.fps.current * 2.5),
        'Warzone': Math.round(results.fps.current * 0.9),
        'Apex Legends': Math.round(results.fps.current * 1.1),
        'Fortnite': Math.round(results.fps.current * 1.3),
        'Witcher 3': Math.round(results.fps.current * 1.0)
    };
    
    performanceState.currentCharts.games = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: Object.keys(gamePerformance),
            datasets: [{
                label: 'FPS',
                data: Object.values(gamePerformance),
                borderColor: '#00d4ff',
                backgroundColor: 'rgba(0, 212, 255, 0.1)',
                borderWidth: 2,
                pointBackgroundColor: '#00d4ff',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(28, 32, 35, 0.95)',
                    titleColor: '#e5e5e7',
                    bodyColor: '#e5e5e7',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    grid: { color: 'rgba(255, 255, 255, 0.1)' },
                    pointLabels: { color: '#e5e5e7', font: { size: 11 } },
                    ticks: { 
                        color: '#e5e5e7', 
                        callback: value => value + ' FPS',
                        stepSize: 30
                    }
                }
            }
        }
    });
}

// Generate Power Consumption Chart
function generatePowerChart(results) {
    const canvas = document.getElementById('power-chart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const { cpu, gpu } = results.selectedComponents;
    
    const cpuPower = Math.round(cpu.tdp * (results.utilization.cpu / 100) * 0.8);
    const gpuPower = Math.round(gpu.tdp * (results.utilization.gpu / 100) * 0.9);
    const systemPower = 80;
    
    performanceState.currentCharts.power = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['CPU', 'GPU', 'System'],
            datasets: [{
                data: [cpuPower, gpuPower, systemPower],
                backgroundColor: [
                    'rgba(0, 122, 255, 0.8)',
                    'rgba(0, 212, 255, 0.8)',
                    'rgba(255, 149, 0, 0.8)'
                ],
                borderColor: [
                    '#007aff',
                    '#00d4ff',
                    '#ff9500'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: '#e5e5e7', padding: 20 }
                },
                tooltip: {
                    backgroundColor: 'rgba(28, 32, 35, 0.95)',
                    titleColor: '#e5e5e7',
                    bodyColor: '#e5e5e7',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1,
                    callbacks: {
                        label: (context) => `${context.label}: ${context.parsed}W`
                    }
                }
            }
        }
    });
}

// Generate Temperature Chart
function generateTemperatureChart(results) {
    const canvas = document.getElementById('temperature-chart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Simulate temperature over time
    const timeLabels = ['0min', '5min', '10min', '15min', '20min', '25min', '30min'];
    const cpuTemps = [35, 45, results.temperatures.cpu - 5, results.temperatures.cpu, results.temperatures.cpu + 2, results.temperatures.cpu, results.temperatures.cpu - 1];
    const gpuTemps = [40, 50, results.temperatures.gpu - 8, results.temperatures.gpu - 3, results.temperatures.gpu, results.temperatures.gpu + 1, results.temperatures.gpu];
    
    performanceState.currentCharts.temperature = new Chart(ctx, {
        type: 'line',
        data: {
            labels: timeLabels,
            datasets: [{
                label: 'CPU Temperature',
                data: cpuTemps,
                borderColor: '#007aff',
                backgroundColor: 'rgba(0, 122, 255, 0.1)',
                borderWidth: 2,
                fill: false,
                tension: 0.4
            }, {
                label: 'GPU Temperature',
                data: gpuTemps,
                borderColor: '#00d4ff',
                backgroundColor: 'rgba(0, 212, 255, 0.1)',
                borderWidth: 2,
                fill: false,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: { color: '#e5e5e7' }
                },
                tooltip: {
                    backgroundColor: 'rgba(28, 32, 35, 0.95)',
                    titleColor: '#e5e5e7',
                    bodyColor: '#e5e5e7',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1,
                    callbacks: {
                        label: (context) => `${context.dataset.label}: ${context.parsed.y}°C`
                    }
                }
            },
            scales: {
                y: {
                    title: { display: true, text: 'Temperature (°C)', color: '#e5e5e7' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' },
                    ticks: { color: '#e5e5e7' }
                },
                x: {
                    title: { display: true, text: 'Time', color: '#e5e5e7' },
                    grid: { display: false },
                    ticks: { color: '#e5e5e7' }
                }
            }
        }
    });
}

// Update Metrics Table
function updateMetricsTable(results) {
    const updates = {
        'fps-1080p': results.fps['1080p'] + ' FPS',
        'fps-1440p': results.fps['1440p'] + ' FPS',
        'fps-4k': results.fps['4k'] + ' FPS',
        'low-fps-1080p': Math.round(results.fps['1080p'] * 0.8) + ' FPS',
        'low-fps-1440p': Math.round(results.fps['1440p'] * 0.8) + ' FPS',
        'low-fps-4k': Math.round(results.fps['4k'] * 0.8) + ' FPS',
        'frametime-1080p': Math.round(1000 / results.fps['1080p'] * 10) / 10 + ' ms',
        'frametime-1440p': Math.round(1000 / results.fps['1440p'] * 10) / 10 + ' ms',
        'frametime-4k': Math.round(1000 / results.fps['4k'] * 10) / 10 + ' ms',
        'cpu-util-1080p': results.utilization.cpu + '%',
        'cpu-util-1440p': results.utilization.cpu + '%',
        'cpu-util-4k': results.utilization.cpu + '%',
        'gpu-util-1080p': results.utilization.gpu + '%',
        'gpu-util-1440p': results.utilization.gpu + '%',
        'gpu-util-4k': results.utilization.gpu + '%',
        'power-1080p': results.powerConsumption + 'W',
        'power-1440p': results.powerConsumption + 'W',
        'power-4k': results.powerConsumption + 'W',
        'temp-1080p': results.temperatures.cpu + '°C / ' + results.temperatures.gpu + '°C',
        'temp-1440p': results.temperatures.cpu + '°C / ' + results.temperatures.gpu + '°C',
        'temp-4k': results.temperatures.cpu + '°C / ' + results.temperatures.gpu + '°C',
        'score-1080p': results.scores.overall,
        'score-1440p': results.scores.overall,
        'score-4k': results.scores.overall,
        'fps-rating-table': getRatingText(results.fps.current, 'fps'),
        'low-fps-rating': getRatingText(results.fps.current * 0.8, 'fps'),
        'frametime-rating-table': getRatingText(results.frameTimes.average, 'frametime'),
        'cpu-util-rating': getRatingText(results.utilization.cpu, 'utilization'),
        'gpu-util-rating': getRatingText(results.utilization.gpu, 'utilization'),
        'power-rating': getRatingText(results.powerConsumption, 'power'),
        'temp-rating': getRatingText(Math.max(results.temperatures.cpu, results.temperatures.gpu), 'temperature'),
        'overall-score': results.scores.overall + '/100'
    };
    
    Object.entries(updates).forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element) element.textContent = value;
    });
}

// Get Rating Text
function getRatingText(value, type) {
    switch (type) {
        case 'fps':
            if (value >= 120) return 'Excellent';
            if (value >= 80) return 'Good';
            if (value >= 60) return 'Average';
            return 'Poor';
        case 'frametime':
            if (value <= 8) return 'Excellent';
            if (value <= 12) return 'Good';
            if (value <= 16) return 'Average';
            return 'Poor';
        case 'utilization':
            if (value <= 75) return 'Good';
            if (value <= 85) return 'Average';
            return 'High';
        case 'power':
            if (value <= 300) return 'Efficient';
            if (value <= 450) return 'Average';
            return 'High';
        case 'temperature':
            if (value <= 65) return 'Cool';
            if (value <= 75) return 'Warm';
            if (value <= 85) return 'Hot';
            return 'Critical';
        default:
            return 'Unknown';
    }
}

// Update Recommendations
function updateRecommendations(results) {
    const bottleneckRec = document.getElementById('bottleneck-rec');
    const upgradeRec = document.getElementById('upgrade-rec');
    const optimizeRec = document.getElementById('optimize-rec');
    const alternativeRec = document.getElementById('alternative-rec');
    
    // Bottleneck Analysis
    if (bottleneckRec) {
        const bottleneckText = getBottleneckRecommendation(results);
        bottleneckRec.querySelector('.rec-content').textContent = bottleneckText;
    }
    
    // Upgrade Suggestions
    if (upgradeRec) {
        const upgradeText = getUpgradeRecommendation(results);
        upgradeRec.querySelector('.rec-content').textContent = upgradeText;
    }
    
    // Optimization Tips
    if (optimizeRec) {
        const optimizeText = getOptimizationRecommendation(results);
        optimizeRec.querySelector('.rec-content').textContent = optimizeText;
    }
    
    // Alternative Builds
    if (alternativeRec) {
        const alternativeText = getAlternativeRecommendation(results);
        alternativeRec.querySelector('.rec-content').textContent = alternativeText;
    }
}

// Recommendation Helper Functions
function getBottleneckRecommendation(results) {
    const cpuUtil = results.utilization.cpu;
    const gpuUtil = results.utilization.gpu;
    const difference = Math.abs(cpuUtil - gpuUtil);
    
    if (difference < 15) {
        return 'Well-balanced system! CPU and GPU utilization are closely matched, indicating optimal performance without significant bottlenecks.';
    } else if (cpuUtil > gpuUtil + 15) {
        return `GPU bottleneck detected. Your GPU is limiting performance at ${gpuUtil}% while CPU runs at ${cpuUtil}%. Consider upgrading your graphics card.`;
    } else {
        return `CPU bottleneck detected. Your CPU is limiting performance at ${cpuUtil}% while GPU runs at ${gpuUtil}%. Consider upgrading your processor.`;
    }
}

function getUpgradeRecommendation(results) {
    const fps = results.fps.current;
    const { cpu, gpu } = results.selectedComponents;
    
    if (fps >= 120) {
        return 'Excellent performance! This build delivers smooth gaming at high frame rates. No immediate upgrades needed.';
    } else if (fps >= 80) {
        return 'Good performance! For higher frame rates, consider upgrading to a higher-tier GPU or enabling DLSS/FSR if available.';
    } else if (fps >= 60) {
        return `Average performance. Consider upgrading your ${cpu.tier === 'budget' ? 'CPU' : 'GPU'} for better frame rates, or reduce graphics settings.`;
    } else {
        return 'Below optimal performance. Both CPU and GPU upgrades recommended, or significantly reduce graphics settings for playable frame rates.';
    }
}

function getOptimizationRecommendation(results) {
    const tips = [];
    
    if (results.temperatures.cpu > 80) tips.push('CPU temperatures are high - improve case ventilation or upgrade CPU cooler');
    if (results.temperatures.gpu > 85) tips.push('GPU temperatures are high - check case airflow and clean GPU fans');
    if (results.powerConsumption > 500) tips.push('High power consumption - consider undervolting components for efficiency');
    if (results.utilization.gpu < 95 && results.fps.current < 100) tips.push('Enable GPU-focused settings like higher resolution or quality');
    if (!results.selectedComponents.ram || results.selectedComponents.ram.speed < 3200) tips.push('Faster RAM can improve CPU performance, especially with AMD processors');
    
    return tips.length > 0 ? tips.join('. ') + '.' : 'System is well-optimized! Monitor temperatures and consider overclocking for extra performance.';
}

function getAlternativeRecommendation(results) {
    const totalCost = results.selectedComponents.cpu.price + results.selectedComponents.gpu.price;
    const fpsCost = results.fps.current / totalCost;
    
    if (fpsCost > 0.12) {
        return 'Excellent value build! This combination offers great performance per dollar. Similar alternatives would offer minimal improvement.';
    } else if (fpsCost > 0.08) {
        return 'Good value. Consider AMD RX 7800 XT + Ryzen 7 7800X3D for similar performance, or RTX 4070 + i5-14600K for budget alternative.';
    } else {
        return 'Premium build with room for value optimization. Consider RTX 4070 Ti + Ryzen 7 7700X for 90% performance at lower cost.';
    }
}

// Update main initialization
function initializePerformanceAnalyzer() {
    initializeEnhancedPerformanceAnalyzer();
} 