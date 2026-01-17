// ========================================
// GLOBAL VARIABLES
// ========================================
let currentLanguage = 'fr';

// ========================================
// TRANSLATIONS OBJECT
// ========================================
const translations = {
    fr: {
        nav: {
            home: 'Accueil',
            services: 'Services',
            about: 'À Propos',
            gallery: 'Galerie',
            certifications: 'Certifications',
            contact: 'Contact'
        },
        hero: {
            title: 'Plongez dans l\'Aventure avec Sipyanos',
            subtitle: 'Instructeur professionnel certifié CMAS ★★ | Moniteur de plongée et chasse sous-marine au Maroc',
            cta1: 'Découvrir les Services',
            cta2: 'Me Contacter'
        },
        services: {
            title: 'Mes Services Professionnels',
            subtitle: 'Des services de plongée complets adaptés à vos besoins',
            service1: {
                title: 'Moniteur de Plongée',
                description: 'Formation et encadrement professionnel pour tous niveaux. Certifié CMAS 2 étoiles pour garantir votre sécurité et progression.'
            },
            service2: {
                title: 'Chasse Sous-Marine',
                description: 'Encadrement et monitoring pour la chasse sous-marine. Apprenez les techniques et règles de sécurité avec un professionnel expérimenté.'
            },
            service3: {
                title: 'Récupération Sous-Marine',
                description: 'Service de recherche et récupération d\'objets perdus dans les piscines, ports, et zones aquatiques. Intervention rapide et professionnelle.'
            },
            service4: {
                title: 'Création de Contenu',
                description: 'Collaboration pour la création de contenu sous-marin. Photographie et vidéographie professionnelle pour vos projets aquatiques.'
            }
        },
        about: {
            title: 'À Propos d\'Othmane Sipyanos',
            description1: 'Passionné par le monde sous-marin depuis mon plus jeune âge, je suis Othmane Sipyanos, instructeur de plongée professionnel certifié CMAS 2 étoiles basé au Maroc.',
            description2: 'Avec plusieurs années d\'expérience dans l\'enseignement de la plongée, la chasse sous-marine et la création de contenu aquatique, je mets mes compétences au service de votre passion pour l\'océan.',
            description3: 'Ma mission est de partager ma passion pour la plongée tout en garantissant votre sécurité et votre progression dans ce magnifique univers sous-marin.',
            stats: {
                experience: '5+',
                experienceLabel: 'Années d\'Expérience',
                cmasLabel: 'CMAS Instructeur',
                students: '200+',
                studentsLabel: 'Plongeurs Formés'
            },
            certified: 'Certifié CMAS'
        },
        gallery: {
            title: 'Galerie',
            subtitle: 'Découvrez mes aventures sous-marines',
            videosTitle: 'Mes Vidéos',
            videosSubtitle: 'Suivez mes aventures sur YouTube',
            videoPlaceholder: 'Vidéo YouTube',
            channelButton: 'Visiter Ma Chaîne YouTube'
        },
        certifications: {
            title: 'Certifications CMAS',
            subtitle: 'Confédération Mondiale des Activités Subaquatiques',
            instructor: {
                title: 'Moniteur Instructeur',
                description: 'Certification internationale d\'instructeur de plongée CMAS niveau 2 étoiles. Habilité à former et certifier des plongeurs de tous niveaux.'
            },
            diver: {
                title: 'Plongeur',
                description: 'Certification de plongeur CMAS niveau 3 étoiles. Compétences avancées en plongée autonome et technique.'
            },
            cmasInfo: 'CMAS (Confédération Mondiale des Activités Subaquatiques) est une organisation internationale reconnue mondialement pour ses standards d\'excellence en plongée sous-marine.'
        },
        testimonials: {
            title: 'Témoignages',
            subtitle: 'Ce que disent mes clients',
            review1: {
                text: 'Othmane est un instructeur exceptionnel ! Très professionnel, patient et passionné. Grâce à lui, j\'ai obtenu ma certification de plongée en toute confiance. Je recommande vivement ses services.',
                name: 'Mohammed A.',
                location: 'Casablanca, Maroc'
            },
            review2: {
                text: 'Service de récupération d\'objets impeccable ! J\'avais perdu mes clés dans la piscine et Othmane les a retrouvées en moins de 30 minutes. Très professionnel et réactif.',
                name: 'Sarah L.',
                location: 'Rabat, Maroc'
            },
            review3: {
                text: 'Excellent moniteur de chasse sous-marine. Othmane m\'a appris toutes les techniques de sécurité et de pêche responsable. Une expérience incroyable avec un vrai professionnel.',
                name: 'Youssef K.',
                location: 'Agadir, Maroc'
            }
        },
        contact: {
            title: 'Contactez-Moi',
            subtitle: 'Prêt à plonger ? Discutons de votre projet',
            whatsapp: 'WhatsApp',
            whatsappNote: 'Méthode de contact préférée',
            email: 'Email',
            location: 'Localisation',
            locationText: 'Maroc',
            followMe: 'Suivez-Moi',
            formTitle: 'Envoyez un Message',
            namePlaceholder: 'Votre nom',
            phonePlaceholder: 'Votre téléphone',
            messagePlaceholder: 'Votre message',
            serviceSelect: 'Sélectionnez un service',
            serviceDiving: 'Moniteur de Plongée',
            serviceSpearfishing: 'Chasse Sous-Marine',
            serviceRecovery: 'Récupération Sous-Marine',
            serviceContent: 'Création de Contenu',
            serviceOther: 'Autre',
            sendButton: 'Envoyer via WhatsApp'
        },
        footer: {
            description: 'Instructeur de plongée professionnel certifié CMAS au Maroc. Votre partenaire pour toutes vos aventures sous-marines.',
            certified: 'Certifié',
            quickLinks: 'Liens Rapides',
            services: 'Services',
            followUs: 'Suivez-Moi',
            rights: 'Tous droits réservés.',
            createdby: 'Site créé par'
        }
    },
    en: {
        nav: {
            home: 'Home',
            services: 'Services',
            about: 'About',
            gallery: 'Gallery',
            certifications: 'Certifications',
            contact: 'Contact'
        },
        hero: {
            title: 'Dive into Adventure with Sipyanos',
            subtitle: 'CMAS ★★ Certified Professional Instructor | Diving & Spearfishing Monitor in Morocco',
            cta1: 'Discover Services',
            cta2: 'Contact Me'
        },
        services: {
            title: 'My Professional Services',
            subtitle: 'Complete diving services tailored to your needs',
            service1: {
                title: 'Diving Instructor',
                description: 'Professional training and supervision for all levels. CMAS 2-star certified to ensure your safety and progression.'
            },
            service2: {
                title: 'Spearfishing',
                description: 'Supervision and monitoring for spearfishing. Learn techniques and safety rules with an experienced professional.'
            },
            service3: {
                title: 'Underwater Recovery',
                description: 'Search and recovery service for lost items in pools, harbors, and aquatic areas. Fast and professional intervention.'
            },
            service4: {
                title: 'Content Creation',
                description: 'Collaboration for underwater content creation. Professional photography and videography for your aquatic projects.'
            }
        },
        about: {
            title: 'About Othmane Sipyanos',
            description1: 'Passionate about the underwater world since childhood, I am Othmane Sipyanos, a CMAS 2-star certified professional diving instructor based in Morocco.',
            description2: 'With several years of experience in dive instruction, spearfishing, and aquatic content creation, I put my skills at the service of your passion for the ocean.',
            description3: 'My mission is to share my passion for diving while ensuring your safety and progression in this magnificent underwater universe.',
            stats: {
                experience: '5+',
                experienceLabel: 'Years of Experience',
                cmasLabel: 'CMAS Instructor',
                students: '200+',
                studentsLabel: 'Trained Divers'
            },
            certified: 'CMAS Certified'
        },
        gallery: {
            title: 'Gallery',
            subtitle: 'Discover my underwater adventures',
            videosTitle: 'My Videos',
            videosSubtitle: 'Follow my adventures on YouTube',
            videoPlaceholder: 'YouTube Video',
            channelButton: 'Visit My YouTube Channel'
        },
        certifications: {
            title: 'CMAS Certifications',
            subtitle: 'World Underwater Federation',
            instructor: {
                title: 'Instructor Monitor',
                description: 'CMAS 2-star international dive instructor certification. Qualified to train and certify divers of all levels.'
            },
            diver: {
                title: 'Diver',
                description: 'CMAS 3-star diver certification. Advanced skills in autonomous and technical diving.'
            },
            cmasInfo: 'CMAS (World Underwater Federation) is an internationally recognized organization for excellence standards in scuba diving.'
        },
        testimonials: {
            title: 'Testimonials',
            subtitle: 'What my clients say',
            review1: {
                text: 'Othmane is an exceptional instructor! Very professional, patient, and passionate. Thanks to him, I got my diving certification with confidence. I highly recommend his services.',
                name: 'Mohammed A.',
                location: 'Casablanca, Morocco'
            },
            review2: {
                text: 'Impeccable object recovery service! I had lost my keys in the pool and Othmane found them in less than 30 minutes. Very professional and responsive.',
                name: 'Sarah L.',
                location: 'Rabat, Morocco'
            },
            review3: {
                text: 'Excellent spearfishing instructor. Othmane taught me all the safety techniques and responsible fishing. An incredible experience with a true professional.',
                name: 'Youssef K.',
                location: 'Agadir, Morocco'
            }
        },
        contact: {
            title: 'Contact Me',
            subtitle: 'Ready to dive? Let\'s discuss your project',
            whatsapp: 'WhatsApp',
            whatsappNote: 'Preferred contact method',
            email: 'Email',
            location: 'Location',
            locationText: 'Morocco',
            followMe: 'Follow Me',
            formTitle: 'Send a Message',
            namePlaceholder: 'Your name',
            phonePlaceholder: 'Your phone',
            messagePlaceholder: 'Your message',
            serviceSelect: 'Select a service',
            serviceDiving: 'Diving Instructor',
            serviceSpearfishing: 'Spearfishing',
            serviceRecovery: 'Underwater Recovery',
            serviceContent: 'Content Creation',
            serviceOther: 'Other',
            sendButton: 'Send via WhatsApp'
        },
        footer: {
            description: 'CMAS certified professional diving instructor in Morocco. Your partner for all your underwater adventures.',
            certified: 'Certified',
            quickLinks: 'Quick Links',
            services: 'Services',
            followUs: 'Follow Me',
            rights: 'All rights reserved.',
            createdby: 'Website created by'
        }
    },
    ar: {
        nav: {
            home: 'الرئيسية',
            services: 'الخدمات',
            about: 'نبذة عني',
            gallery: 'المعرض',
            certifications: 'الشهادات',
            contact: 'اتصل بي'
        },
        hero: {
            title: 'اغطس في المغامرة مع سيبيانوس',
            subtitle: 'مدرب محترف معتمد من CMAS ★★ | مراقب غوص وصيد تحت الماء في المغرب',
            cta1: 'اكتشف الخدمات',
            cta2: 'اتصل بي'
        },
        services: {
            title: 'خدماتي المهنية',
            subtitle: 'خدمات غوص شاملة مصممة خصيصاً لاحتياجاتك',
            service1: {
                title: 'مدرب غوص',
                description: 'تدريب وإشراف محترف لجميع المستويات. معتمد من CMAS نجمتان لضمان سلامتك وتقدمك.'
            },
            service2: {
                title: 'صيد تحت الماء',
                description: 'إشراف ومراقبة للصيد تحت الماء. تعلم التقنيات وقواعد السلامة مع محترف ذي خبرة.'
            },
            service3: {
                title: 'استعادة تحت الماء',
                description: 'خدمة البحث واستعادة الأشياء المفقودة في المسابح والموانئ والمناطق المائية. تدخل سريع ومحترف.'
            },
            service4: {
                title: 'إنشاء المحتوى',
                description: 'تعاون لإنشاء محتوى تحت الماء. تصوير احترافي وفيديو لمشاريعك المائية.'
            }
        },
        about: {
            title: 'نبذة عن عثمان سيبيانوس',
            description1: 'شغوف بالعالم تحت الماء منذ صغري، أنا عثمان سيبيانوس، مدرب غوص محترف معتمد من CMAS نجمتان ومقره في المغرب.',
            description2: 'مع عدة سنوات من الخبرة في تدريس الغوص والصيد تحت الماء وإنشاء المحتوى المائي، أضع مهاراتي في خدمة شغفك بالمحيط.',
            description3: 'مهمتي هي مشاركة شغفي بالغوص مع ضمان سلامتك وتقدمك في هذا العالم الرائع تحت الماء.',
            stats: {
                experience: '٥+',
                experienceLabel: 'سنوات من الخبرة',
                cmasLabel: 'مدرب CMAS',
                students: '٢٠٠+',
                studentsLabel: 'غواص مدرب'
            },
            certified: 'معتمد من CMAS'
        },
        gallery: {
            title: 'المعرض',
            subtitle: 'اكتشف مغامراتي تحت الماء',
            videosTitle: 'مقاطع الفيديو',
            videosSubtitle: 'تابع مغامراتي على يوتيوب',
            videoPlaceholder: 'فيديو يوتيوب',
            channelButton: 'زر قناتي على يوتيوب'
        },
        certifications: {
            title: 'شهادات CMAS',
            subtitle: 'الاتحاد العالمي للأنشطة تحت الماء',
            instructor: {
                title: 'مراقب مدرب',
                description: 'شهادة مدرب غوص دولي CMAS نجمتان. مؤهل لتدريب وإصدار شهادات الغواصين من جميع المستويات.'
            },
            diver: {
                title: 'غواص',
                description: 'شهادة غواص CMAS ثلاث نجوم. مهارات متقدمة في الغوص المستقل والتقني.'
            },
            cmasInfo: 'CMAS (الاتحاد العالمي للأنشطة تحت الماء) هي منظمة دولية معترف بها عالمياً لمعايير التميز في الغوص تحت الماء.'
        },
        testimonials: {
            title: 'الشهادات',
            subtitle: 'ماذا يقول عملائي',
            review1: {
                text: 'عثمان مدرب استثنائي! محترف جداً، صبور ومتحمس. بفضله، حصلت على شهادة الغوص بكل ثقة. أوصي بشدة بخدماته.',
                name: 'محمد أ.',
                location: 'الدار البيضاء، المغرب'
            },
            review2: {
                text: 'خدمة استعادة الأشياء لا تشوبها شائبة! كنت قد فقدت مفاتيحي في المسبح وعثمان وجدها في أقل من ٣٠ دقيقة. محترف جداً ومستجيب.',
                name: 'سارة ل.',
                location: 'الرباط، المغرب'
            },
            review3: {
                text: 'مدرب صيد تحت الماء ممتاز. علمني عثمان جميع تقنيات السلامة والصيد المسؤول. تجربة رائعة مع محترف حقيقي.',
                name: 'يوسف ك.',
                location: 'أكادير، المغرب'
            }
        },
        contact: {
            title: 'اتصل بي',
            subtitle: 'مستعد للغوص؟ لنناقش مشروعك',
            whatsapp: 'واتساب',
            whatsappNote: 'طريقة الاتصال المفضلة',
            email: 'البريد الإلكتروني',
            location: 'الموقع',
            locationText: 'المغرب',
            followMe: 'تابعني',
            formTitle: 'أرسل رسالة',
            namePlaceholder: 'اسمك',
            phonePlaceholder: 'هاتفك',
            messagePlaceholder: 'رسالتك',
            serviceSelect: 'اختر خدمة',
            serviceDiving: 'مدرب غوص',
            serviceSpearfishing: 'صيد تحت الماء',
            serviceRecovery: 'استعادة تحت الماء',
            serviceContent: 'إنشاء المحتوى',
            serviceOther: 'أخرى',
            sendButton: 'إرسال عبر واتساب'
        },
        footer: {
            description: 'مدرب غوص محترف معتمد من CMAS في المغرب. شريكك لجميع مغامراتك تحت الماء.',
            certified: 'معتمد',
            quickLinks: 'روابط سريعة',
            services: 'الخدمات',
            followUs: 'تابعني',
            rights: 'جميع الحقوق محفوظة.',
            createdby: 'تم إنشاء الموقع بواسطة'
        }
    }
};

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Smooth scroll to section
function scrollToSection(id) {
    const element = document.querySelector(id);
    if (element) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const elementPosition = element.offsetTop - navHeight;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// Get default language
function getDefaultLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage');
    const browserLang = navigator.language.split('-')[0];
    return savedLang || (['fr', 'en', 'ar'].includes(browserLang) ? browserLang : 'fr');
}

// ========================================
// LANGUAGE FUNCTIONS
// ========================================

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const keys = element.getAttribute('data-i18n').split('.');
        let translation = translations[lang];
        
        keys.forEach(key => {
            translation = translation?.[key];
        });
        
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // Update placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const keys = element.getAttribute('data-i18n-placeholder').split('.');
        let translation = translations[lang];
        
        keys.forEach(key => {
            translation = translation?.[key];
        });
        
        if (translation) {
            element.placeholder = translation;
        }
    });
    
    // Update select options
    const serviceSelect = document.getElementById('service');
    if (serviceSelect) {
        const options = serviceSelect.querySelectorAll('option');
        options[0].textContent = translations[lang].contact.serviceSelect;
        options[1].textContent = translations[lang].contact.serviceDiving;
        options[2].textContent = translations[lang].contact.serviceSpearfishing;
        options[3].textContent = translations[lang].contact.serviceRecovery;
        options[4].textContent = translations[lang].contact.serviceContent;
        options[5].textContent = translations[lang].contact.serviceOther;
    }
    
    // Handle RTL for Arabic
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.body.classList.add('rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.body.classList.remove('rtl');
    }
    
    // Update active language button
    document.querySelectorAll('.language-switcher button').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

// ========================================
// UI FUNCTIONS
// ========================================

// Toggle mobile menu
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Sticky navbar on scroll
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.padding = '0.5rem 0';
    } else {
        navbar.style.padding = '1rem 0';
    }
}

// ========================================
// FORM HANDLING
// ========================================

function handleContactForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name')?.value || '';
    const phone = document.getElementById('phone')?.value || '';
    const service = document.getElementById('service')?.value || '';
    const message = document.getElementById('message')?.value || '';
    
    // Get service name in current language
    let serviceName = '';
    if (service) {
        const serviceMap = {
            'diving': translations[currentLanguage].contact.serviceDiving,
            'spearfishing': translations[currentLanguage].contact.serviceSpearfishing,
            'recovery': translations[currentLanguage].contact.serviceRecovery,
            'content': translations[currentLanguage].contact.serviceContent,
            'other': translations[currentLanguage].contact.serviceOther
        };
        serviceName = serviceMap[service] || service;
    }
    
    // Construct WhatsApp message
    let whatsappMessage = `*${translations[currentLanguage].contact.formTitle}*%0A%0A`;
    whatsappMessage += `👤 *Nom / Name:* ${name}%0A`;
    whatsappMessage += `📱 *Téléphone / Phone:* ${phone}%0A`;
    
    if (serviceName) {
        whatsappMessage += `🎯 *Service:* ${serviceName}%0A`;
    }
    
    whatsappMessage += `%0A💬 *Message:*%0A${message}`;
    
    // Replace with actual WhatsApp number
    const whatsappNumber = '212615644280';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    event.target.reset();
}

// ========================================
// EVENT LISTENERS
// ========================================

function setupEventListeners() {
    // Navigation links smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                scrollToSection(targetId);
            }
        });
    });
    
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Gallery lightbox functionality
    setupGalleryLightbox();
}

// ========================================
// GALLERY LIGHTBOX
// ========================================

function setupGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    
    let currentImageIndex = 0;
    const images = Array.from(galleryItems).map(item => {
        const img = item.querySelector('img');
        return {
            src: img.src,
            alt: img.alt
        };
    });
    
    function openLightbox(index) {
        currentImageIndex = index;
        lightboxImage.src = images[index].src;
        lightboxImage.alt = images[index].alt;
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightboxModal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        lightboxImage.src = images[currentImageIndex].src;
        lightboxImage.alt = images[currentImageIndex].alt;
    }
    
    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        lightboxImage.src = images[currentImageIndex].src;
        lightboxImage.alt = images[currentImageIndex].alt;
    }
    
    // Add click events to gallery items
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openLightbox(index));
    });
    
    // Close button
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    // Navigation buttons
    if (lightboxNext) {
        lightboxNext.addEventListener('click', showNextImage);
    }
    
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', showPrevImage);
    }
    
    // Close on background click
    lightboxModal?.addEventListener('click', (e) => {
        if (e.target === lightboxModal) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightboxModal.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        } else if (e.key === 'ArrowLeft') {
            showPrevImage();
        }
    });
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
            easing: 'ease-in-out'
        });
    }
    
    // Set initial language
    const defaultLang = getDefaultLanguage();
    changeLanguage(defaultLang);
    
    // Setup all event listeners
    setupEventListeners();
    
    // Log initialization
    console.log('Sipyanos Diving website initialized successfully');
    console.log('Current language:', currentLanguage);
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Debounce function for scroll events
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

// Apply debounce to scroll handler
window.addEventListener('scroll', debounce(handleNavbarScroll, 10));
