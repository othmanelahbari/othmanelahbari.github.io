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
            subtitle: 'Instructeur Professionnel Certifié CMAS ★★ | Spécialiste en Plongée et Chasse Sous-Marine au Maroc',
            cta1: 'Découvrir les Services',
            cta2: 'Me Contacter'
        },
        services: {
            title: 'Mes Services Professionnels',
            subtitle: 'Une expertise complète au service de votre passion pour le monde sous-marin',
            service1: {
                title: 'Formation à la Plongée',
                description: 'Enseignement professionnel pour débutants et plongeurs expérimentés. Certification CMAS 2 étoiles garantissant votre sécurité et votre progression à chaque étape.'
            },
            service2: {
                title: 'Chasse Sous-Marine',
                description: 'Formation complète aux techniques de chasse responsable. Apprentissage des règles de sécurité et des pratiques durables avec un expert qualifié.'
            },
            service3: {
                title: 'Récupération d\'Objets',
                description: 'Service professionnel de recherche et récupération d\'objets perdus en milieu aquatique. Intervention efficace dans les piscines, ports et plans d\'eau.'
            },
            service4: {
                title: 'Production de Contenu',
                description: 'Réalisation de contenus visuels sous-marins de qualité professionnelle. Photographie et vidéographie pour vos projets médiatiques et commerciaux.'
            }
        },
        about: {
            title: 'À Propos d\'Othmane Sipyanos',
            description1: 'Passionné par l\'univers sous-marin depuis l\'enfance, je suis instructeur de plongée professionnel certifié CMAS 2 étoiles, établi au Maroc.',
            description2: 'Fort de plusieurs années d\'expérience en formation de plongée, chasse sous-marine et production de contenus aquatiques, je mets mon expertise au service de votre découverte des fonds marins.',
            description3: 'Mon engagement : vous transmettre ma passion pour la plongée dans un cadre sécurisé, tout en respectant l\'environnement marin et en favorisant votre progression personnelle.',
            stats: {
                experience: '5+',
                experienceLabel: 'Années d\'Expérience',
                cmasLabel: 'Instructeur CMAS',
                students: '50+',
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
            subtitle: 'Confédération Mondiale des Activités Subaquatiques - Standards Internationaux',
            instructor: {
                title: 'Instructeur Niveau 2 Étoiles',
                description: 'Certification internationale d\'instructeur CMAS niveau 2 étoiles. Qualification complète pour former et certifier des plongeurs de tous niveaux selon les standards internationaux.'
            },
            diver: {
                title: 'Plongeur Niveau 3 Étoiles',
                description: 'Certification de plongeur CMAS niveau 3 étoiles. Maîtrise avancée de la plongée autonome avec compétences en plongée technique et profonde.'
            },
            cmasInfo: 'CMAS (Confédération Mondiale des Activités Subaquatiques) est l\'organisation internationale de référence en plongée sous-marine, reconnue dans plus de 130 pays pour ses standards d\'excellence et de sécurité.'
        },
        testimonials: {
            title: 'Témoignages',
            subtitle: 'Retours d\'expérience de mes clients',
            review1: {
                text: 'Instructeur exceptionnel ! Très professionnel, pédagogue et passionné. Grâce à Othmane, j\'ai obtenu ma certification de plongée en toute confiance. Je recommande vivement ses services à tous ceux qui souhaitent découvrir la plongée.',
                name: 'Mohammed A.',
                location: 'Casablanca, Maroc'
            },
            review2: {
                text: 'Service de récupération impeccable ! J\'avais perdu mes clés de voiture dans la piscine et Othmane les a retrouvées en moins de 30 minutes. Très professionnel, rapide et efficace.',
                name: 'Sarah L.',
                location: 'Rabat, Maroc'
            },
            review3: {
                text: 'Excellent formateur en chasse sous-marine. Othmane m\'a transmis toutes les techniques de sécurité et les principes de pêche responsable. Une expérience enrichissante avec un véritable professionnel.',
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
            description: 'Instructeur de plongée professionnel certifié CMAS au Maroc. Votre partenaire de confiance pour toutes vos aventures sous-marines en toute sécurité.',
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
            subtitle: 'CMAS ★★ Certified Professional Instructor | Expert in Diving & Spearfishing in Morocco',
            cta1: 'Discover Services',
            cta2: 'Contact Me'
        },
        services: {
            title: 'My Professional Services',
            subtitle: 'Comprehensive expertise dedicated to your underwater passion',
            service1: {
                title: 'Diving Instruction',
                description: 'Professional training for beginners and experienced divers. CMAS 2-star certification ensuring your safety and progression at every step.'
            },
            service2: {
                title: 'Spearfishing Training',
                description: 'Complete training in responsible spearfishing techniques. Learning safety protocols and sustainable practices with a qualified expert.'
            },
            service3: {
                title: 'Object Recovery',
                description: 'Professional search and recovery service for lost items in aquatic environments. Efficient intervention in pools, harbors, and water bodies.'
            },
            service4: {
                title: 'Content Production',
                description: 'Professional-quality underwater visual content creation. Photography and videography for your media and commercial projects.'
            }
        },
        about: {
            title: 'About Othmane Sipyanos',
            description1: 'Passionate about the underwater world since childhood, I am a CMAS 2-star certified professional diving instructor based in Morocco.',
            description2: 'With several years of experience in dive training, spearfishing, and aquatic content production, I bring my expertise to your exploration of marine environments.',
            description3: 'My commitment: sharing my passion for diving in a safe environment while respecting marine ecosystems and fostering your personal development.',
            stats: {
                experience: '5+',
                experienceLabel: 'Years of Experience',
                cmasLabel: 'CMAS Instructor',
                students: '50+',
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
            subtitle: 'World Underwater Federation - International Standards',
            instructor: {
                title: '2-Star Instructor',
                description: 'CMAS 2-star international dive instructor certification. Full qualification to train and certify divers of all levels according to international standards.'
            },
            diver: {
                title: '3-Star Diver',
                description: 'CMAS 3-star diver certification. Advanced mastery of autonomous diving with technical and deep diving skills.'
            },
            cmasInfo: 'CMAS (World Underwater Federation) is the leading international organization in scuba diving, recognized in over 130 countries for its excellence and safety standards.'
        },
        testimonials: {
            title: 'Testimonials',
            subtitle: 'Client experiences and feedback',
            review1: {
                text: 'Exceptional instructor! Very professional, pedagogical, and passionate. Thanks to Othmane, I obtained my diving certification with complete confidence. I highly recommend his services to anyone wanting to discover diving.',
                name: 'Mohammed A.',
                location: 'Casablanca, Morocco'
            },
            review2: {
                text: 'Impeccable recovery service! I had lost my car keys in the pool and Othmane found them in less than 30 minutes. Very professional, fast, and efficient.',
                name: 'Sarah L.',
                location: 'Rabat, Morocco'
            },
            review3: {
                text: 'Excellent spearfishing trainer. Othmane taught me all safety techniques and responsible fishing principles. An enriching experience with a true professional.',
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
            description: 'CMAS certified professional diving instructor in Morocco. Your trusted partner for all your underwater adventures in complete safety.',
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
            about: 'عن المدرب',
            gallery: 'المعرض',
            certifications: 'الشهادات',
            contact: 'تواصل معي'
        },
        hero: {
            title: 'اكتشف عالم الغوص مع سيبيانوس',
            subtitle: 'مدرب محترف معتمد من CMAS ★★ | متخصص في الغوص والصيد البحري في المغرب',
            cta1: 'استكشف الخدمات',
            cta2: 'تواصل معي'
        },
        services: {
            title: 'خدماتي المتخصصة',
            subtitle: 'خبرة شاملة في خدمة شغفك بعالم البحار',
            service1: {
                title: 'تدريب الغوص',
                description: 'تدريب احترافي للمبتدئين والغواصين ذوي الخبرة. شهادة CMAS نجمتان تضمن سلامتك وتطورك في كل مرحلة.'
            },
            service2: {
                title: 'الصيد البحري',
                description: 'تدريب شامل على تقنيات الصيد المسؤول. تعلم قواعد السلامة والممارسات المستدامة مع خبير مؤهل.'
            },
            service3: {
                title: 'استرجاع المفقودات',
                description: 'خدمة احترافية للبحث واسترجاع الأشياء المفقودة في البيئات المائية. تدخل فعال في المسابح والموانئ والمسطحات المائية.'
            },
            service4: {
                title: 'إنتاج المحتوى',
                description: 'إنتاج محتوى مرئي بحري بجودة احترافية. تصوير فوتوغرافي وفيديو لمشاريعك الإعلامية والتجارية.'
            }
        },
        about: {
            title: 'نبذة عن عثمان سيبيانوس',
            description1: 'شغوف بعالم البحار منذ الصغر، أنا مدرب غوص محترف حاصل على شهادة CMAS نجمتان ومقيم في المغرب.',
            description2: 'بخبرة تمتد لعدة سنوات في تدريب الغوص والصيد البحري وإنتاج المحتوى المائي، أضع خبرتي في خدمة اكتشافك للبيئة البحرية.',
            description3: 'هدفي: نقل شغفي بالغوص في بيئة آمنة مع احترام النظام البيئي البحري وتعزيز تطورك الشخصي.',
            stats: {
                experience: '5+',
                experienceLabel: 'سنوات من الخبرة',
                cmasLabel: 'مدرب CMAS',
                students: '50+',
                studentsLabel: 'غواص مدرب'
            },
            certified: 'معتمد من CMAS'
        },
        gallery: {
            title: 'معرض الصور',
            subtitle: 'استكشف مغامراتي تحت الماء',
            videosTitle: 'الفيديوهات',
            videosSubtitle: 'تابع مغامراتي على يوتيوب',
            videoPlaceholder: 'فيديو يوتيوب',
            channelButton: 'زيارة قناتي على يوتيوب'
        },
        certifications: {
            title: 'شهادات CMAS',
            subtitle: 'الاتحاد العالمي للأنشطة المائية - معايير دولية',
            instructor: {
                title: 'مدرب مستوى نجمتان',
                description: 'شهادة مدرب غوص دولي من CMAS مستوى نجمتان. مؤهل كامل لتدريب وإصدار شهادات للغواصين من جميع المستويات وفقاً للمعايير الدولية.'
            },
            diver: {
                title: 'غواص مستوى 3 نجوم',
                description: 'شهادة غواص CMAS مستوى 3 نجوم. إتقان متقدم للغوص المستقل مع مهارات الغوص التقني والعميق.'
            },
            cmasInfo: 'CMAS (الاتحاد العالمي للأنشطة المائية) هي المنظمة الدولية الرائدة في الغوص، معترف بها في أكثر من 130 دولة لمعايير التميز والسلامة.'
        },
        testimonials: {
            title: 'آراء العملاء',
            subtitle: 'تجارب وانطباعات عملائي',
            review1: {
                text: 'مدرب استثنائي! محترف جداً ومتمكن وشغوف. بفضل عثمان حصلت على شهادة الغوص بثقة تامة. أنصح بشدة بخدماته لكل من يريد اكتشاف عالم الغوص.',
                name: 'محمد أ.',
                location: 'الدار البيضاء، المغرب'
            },
            review2: {
                text: 'خدمة استرجاع رائعة! فقدت مفاتيح سيارتي في المسبح ووجدها عثمان في أقل من 30 دقيقة. محترف وسريع وفعال.',
                name: 'سارة ل.',
                location: 'الرباط، المغرب'
            },
            review3: {
                text: 'مدرب صيد بحري ممتاز. علمني عثمان كل تقنيات السلامة ومبادئ الصيد المسؤول. تجربة مثرية مع محترف حقيقي.',
                name: 'يوسف ك.',
                location: 'أكادير، المغرب'
            }
        },
        contact: {
            title: 'تواصل معي',
            subtitle: 'مستعد للغوص؟ دعنا نناقش مشروعك',
            whatsapp: 'واتساب',
            whatsappNote: 'وسيلة التواصل المفضلة',
            email: 'البريد الإلكتروني',
            location: 'الموقع',
            locationText: 'المغرب',
            followMe: 'تابعني',
            formTitle: 'أرسل رسالة',
            namePlaceholder: 'اسمك',
            phonePlaceholder: 'رقم هاتفك',
            messagePlaceholder: 'رسالتك',
            serviceSelect: 'اختر الخدمة',
            serviceDiving: 'تدريب الغوص',
            serviceSpearfishing: 'الصيد البحري',
            serviceRecovery: 'استرجاع المفقودات',
            serviceContent: 'إنتاج المحتوى',
            serviceOther: 'أخرى',
            sendButton: 'إرسال عبر واتساب'
        },
        footer: {
            description: 'مدرب غوص محترف معتمد من CMAS في المغرب. شريكك الموثوق لجميع مغامراتك البحرية بأمان تام.',
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
    // Default to English unless user has saved preference
    return savedLang && ['fr', 'en', 'ar'].includes(savedLang) ? savedLang : 'en';
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
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
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
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
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
