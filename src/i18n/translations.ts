export type Language = 'en' | 'tr' | 'de' | 'fr' | 'es' | 'ur';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    skills: string;
    experience: string;
    projects: string;
    testimonials: string;
    blog: string;
    contact: string;
  };
  // Hero Section
  hero: {
    greeting: string;
    name: string;
    roles: string[];
    description: string;
    viewWork: string;
    getInTouch: string;
    scrollToExplore: string;
  };
  // Skills Section
  skills: {
    title: string;
    subtitle: string;
    categories: {
      frontend: string;
      backend: string;
      database: string;
      tools: string;
    };
    yearsExperience: string;
    totalSkills: string;
    yearsCoding: string;
    projectsCompleted: string;
    certifications: string;
  };
  // Experience Section
  experience: {
    title: string;
    subtitle: string;
    workExperience: string;
    education: string;
    responsibilities: string;
    achievements: string;
    present: string;
  };
  // Projects Section
  projects: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    filters: string;
    allProjects: string;
    featured: string;
    frontend: string;
    fullstack: string;
    showing: string;
    of: string;
    noProjectsFound: string;
    clearFilters: string;
    viewDetails: string;
    viewCode: string;
    viewDemo: string;
  };
  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    sendMessage: string;
    sending: string;
    successMessage: string;
    errorMessage: string;
    requiredField: string;
    availableForWork: string;
  };
  // Footer
  footer: {
    rights: string;
    builtWith: string;
  };
  // Common
  common: {
    readMore: string;
    loading: string;
    error: string;
    success: string;
    download: string;
    share: string;
    close: string;
  };
}

export const translations: Record<Language, Translations> = {
  // English
  en: {
    nav: {
      home: 'Home',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      testimonials: 'Testimonials',
      blog: 'Blog',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Muhammad',
      roles: ['Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Tech Explorer'],
      description: 'I craft exceptional digital experiences with modern web technologies. Passionate about building accessible, performant, and user-friendly applications that make a difference.',
      viewWork: 'View My Work',
      getInTouch: 'Get In Touch',
      scrollToExplore: 'Scroll to explore',
    },
    skills: {
      title: 'Skills & Technologies',
      subtitle: 'A comprehensive overview of my technical skills and proficiency levels',
      categories: {
        frontend: 'Frontend Development',
        backend: 'Backend Development',
        database: 'Databases',
        tools: 'Tools & Technologies',
      },
      yearsExperience: 'years experience',
      totalSkills: 'Total Skills',
      yearsCoding: 'Years Coding',
      projectsCompleted: 'Projects',
      certifications: 'Certifications',
    },
    experience: {
      title: 'Experience & Education',
      subtitle: 'My professional journey and academic background',
      workExperience: 'Work Experience',
      education: 'Education',
      responsibilities: 'Key Responsibilities',
      achievements: 'Achievements',
      present: 'Present',
    },
    projects: {
      title: 'My Projects',
      subtitle: 'projects showcasing my skills and experience',
      searchPlaceholder: 'Search by project name, tech stack, features...',
      filters: 'Filters',
      allProjects: 'All Projects',
      featured: 'Featured',
      frontend: 'Frontend',
      fullstack: 'Full Stack',
      showing: 'Showing',
      of: 'of',
      noProjectsFound: 'No projects found',
      clearFilters: 'Clear all filters',
      viewDetails: 'View details',
      viewCode: 'View code',
      viewDemo: 'View demo',
    },
    contact: {
      title: "Let's Work Together",
      subtitle: "Have a project in mind or want to collaborate? I'd love to hear from you!",
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      sendMessage: 'Send Message',
      sending: 'Sending...',
      successMessage: "Message sent successfully! I'll get back to you soon.",
      errorMessage: 'Failed to send message. Please try again.',
      requiredField: 'Required',
      availableForWork: 'Available for Work',
    },
    footer: {
      rights: 'All rights reserved',
      builtWith: 'Built with',
    },
    common: {
      readMore: 'Read more',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      download: 'Download',
      share: 'Share',
      close: 'Close',
    },
  },
  
  // Turkish (Türkçe)
  tr: {
    nav: {
      home: 'Ana Sayfa',
      skills: 'Yetenekler',
      experience: 'Deneyim',
      projects: 'Projeler',
      testimonials: 'Referanslar',
      blog: 'Blog',
      contact: 'İletişim',
    },
    hero: {
      greeting: "Merhaba, Ben",
      name: 'Muhammad',
      roles: ['Full Stack Geliştirici', 'UI/UX Meraklısı', 'Problem Çözücü', 'Teknoloji Kaşifi'],
      description: 'Modern web teknolojileriyle olağanüstü dijital deneyimler yaratıyorum. Erişilebilir, performanslı ve kullanıcı dostu uygulamalar geliştirme konusunda tutkuluyum.',
      viewWork: 'Çalışmalarımı Görüntüle',
      getInTouch: 'İletişime Geç',
      scrollToExplore: 'Keşfetmek için kaydır',
    },
    skills: {
      title: 'Yetenekler & Teknolojiler',
      subtitle: 'Teknik becerilerim ve yeterlilik seviyelerimgenel bakış',
      categories: {
        frontend: 'Frontend Geliştirme',
        backend: 'Backend Geliştirme',
        database: 'Veritabanları',
        tools: 'Araçlar & Teknolojiler',
      },
      yearsExperience: 'yıl deneyim',
      totalSkills: 'Toplam Beceri',
      yearsCoding: 'Yıllık Kodlama',
      projectsCompleted: 'Projeler',
      certifications: 'Sertifikalar',
    },
    experience: {
      title: 'Deneyim & Eğitim',
      subtitle: 'Profesyonel yolculuğum ve akademik geçmişim',
      workExperience: 'İş Deneyimi',
      education: 'Eğitim',
      responsibilities: 'Ana Sorumluluklar',
      achievements: 'Başarılar',
      present: 'Şu an',
    },
    projects: {
      title: 'Projelerim',
      subtitle: 'becerilerimi ve deneyimimi sergileyen projeler',
      searchPlaceholder: 'Proje adı, teknoloji yığını, özellikler ile ara...',
      filters: 'Filtreler',
      allProjects: 'Tüm Projeler',
      featured: 'Öne Çıkan',
      frontend: 'Frontend',
      fullstack: 'Full Stack',
      showing: 'Gösteriliyor',
      of: 'toplam',
      noProjectsFound: 'Proje bulunamadı',
      clearFilters: 'Tüm filtreleri temizle',
      viewDetails: 'Detayları görüntüle',
      viewCode: 'Kodu görüntüle',
      viewDemo: 'Demo görüntüle',
    },
    contact: {
      title: 'Birlikte Çalışalım',
      subtitle: 'Aklınızda bir proje mi var veya işbirliği yapmak mı istiyorsunuz? Sizden haber almak isterim!',
      name: 'İsim',
      email: 'E-posta',
      subject: 'Konu',
      message: 'Mesaj',
      sendMessage: 'Mesaj Gönder',
      sending: 'Gönderiliyor...',
      successMessage: 'Mesaj başarıyla gönderildi! Yakında size geri döneceğim.',
      errorMessage: 'Mesaj gönderilemedi. Lütfen tekrar deneyin.',
      requiredField: 'Gerekli',
      availableForWork: 'Çalışmaya Uygun',
    },
    footer: {
      rights: 'Tüm hakları saklıdır',
      builtWith: 'İle yapıldı',
    },
    common: {
      readMore: 'Devamını oku',
      loading: 'Yükleniyor...',
      error: 'Hata',
      success: 'Başarılı',
      download: 'İndir',
      share: 'Paylaş',
      close: 'Kapat',
    },
  },

  // German (Deutsch)
  de: {
    nav: {
      home: 'Startseite',
      skills: 'Fähigkeiten',
      experience: 'Erfahrung',
      projects: 'Projekte',
      testimonials: 'Referenzen',
      blog: 'Blog',
      contact: 'Kontakt',
    },
    hero: {
      greeting: "Hallo, ich bin",
      name: 'Muhammad',
      roles: ['Full-Stack-Entwickler', 'UI/UX-Enthusiast', 'Problemlöser', 'Technologie-Entdecker'],
      description: 'Ich schaffe außergewöhnliche digitale Erlebnisse mit modernen Webtechnologien. Leidenschaftlich für die Entwicklung zugänglicher, leistungsstarker und benutzerfreundlicher Anwendungen.',
      viewWork: 'Meine Arbeiten ansehen',
      getInTouch: 'Kontakt aufnehmen',
      scrollToExplore: 'Scrollen zum Erkunden',
    },
    skills: {
      title: 'Fähigkeiten & Technologien',
      subtitle: 'Ein umfassender Überblick über meine technischen Fähigkeiten und Kompetenzniveaus',
      categories: {
        frontend: 'Frontend-Entwicklung',
        backend: 'Backend-Entwicklung',
        database: 'Datenbanken',
        tools: 'Tools & Technologien',
      },
      yearsExperience: 'Jahre Erfahrung',
      totalSkills: 'Gesamte Fähigkeiten',
      yearsCoding: 'Jahre Programmierung',
      projectsCompleted: 'Projekte',
      certifications: 'Zertifizierungen',
    },
    experience: {
      title: 'Erfahrung & Bildung',
      subtitle: 'Meine berufliche Laufbahn und akademischer Hintergrund',
      workExperience: 'Berufserfahrung',
      education: 'Bildung',
      responsibilities: 'Hauptverantwortlichkeiten',
      achievements: 'Erfolge',
      present: 'Gegenwart',
    },
    projects: {
      title: 'Meine Projekte',
      subtitle: 'Projekte, die meine Fähigkeiten und Erfahrung zeigen',
      searchPlaceholder: 'Nach Projektname, Tech-Stack, Funktionen suchen...',
      filters: 'Filter',
      allProjects: 'Alle Projekte',
      featured: 'Hervorgehoben',
      frontend: 'Frontend',
      fullstack: 'Full Stack',
      showing: 'Zeige',
      of: 'von',
      noProjectsFound: 'Keine Projekte gefunden',
      clearFilters: 'Alle Filter löschen',
      viewDetails: 'Details anzeigen',
      viewCode: 'Code anzeigen',
      viewDemo: 'Demo anzeigen',
    },
    contact: {
      title: 'Lass uns zusammenarbeiten',
      subtitle: 'Haben Sie ein Projekt im Kopf oder möchten zusammenarbeiten? Ich würde gerne von Ihnen hören!',
      name: 'Name',
      email: 'E-Mail',
      subject: 'Betreff',
      message: 'Nachricht',
      sendMessage: 'Nachricht senden',
      sending: 'Wird gesendet...',
      successMessage: 'Nachricht erfolgreich gesendet! Ich melde mich bald bei Ihnen.',
      errorMessage: 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.',
      requiredField: 'Erforderlich',
      availableForWork: 'Verfügbar für Arbeit',
    },
    footer: {
      rights: 'Alle Rechte vorbehalten',
      builtWith: 'Erstellt mit',
    },
    common: {
      readMore: 'Weiterlesen',
      loading: 'Laden...',
      error: 'Fehler',
      success: 'Erfolg',
      download: 'Herunterladen',
      share: 'Teilen',
      close: 'Schließen',
    },
  },

  // French (Français)
  fr: {
    nav: {
      home: 'Accueil',
      skills: 'Compétences',
      experience: 'Expérience',
      projects: 'Projets',
      testimonials: 'Témoignages',
      blog: 'Blog',
      contact: 'Contact',
    },
    hero: {
      greeting: "Salut, je suis",
      name: 'Muhammad',
      roles: ['Développeur Full Stack', 'Passionné UI/UX', 'Résolveur de Problèmes', 'Explorateur Tech'],
      description: "Je crée des expériences numériques exceptionnelles avec des technologies web modernes. Passionné par la création d'applications accessibles, performantes et conviviales.",
      viewWork: 'Voir mon travail',
      getInTouch: 'Prendre contact',
      scrollToExplore: 'Défiler pour explorer',
    },
    skills: {
      title: 'Compétences & Technologies',
      subtitle: 'Un aperçu complet de mes compétences techniques et niveaux de maîtrise',
      categories: {
        frontend: 'Développement Frontend',
        backend: 'Développement Backend',
        database: 'Bases de données',
        tools: 'Outils & Technologies',
      },
      yearsExperience: "ans d'expérience",
      totalSkills: 'Compétences totales',
      yearsCoding: 'Années de codage',
      projectsCompleted: 'Projets',
      certifications: 'Certifications',
    },
    experience: {
      title: 'Expérience & Éducation',
      subtitle: 'Mon parcours professionnel et formation académique',
      workExperience: 'Expérience professionnelle',
      education: 'Éducation',
      responsibilities: 'Responsabilités principales',
      achievements: 'Réalisations',
      present: 'Présent',
    },
    projects: {
      title: 'Mes Projets',
      subtitle: 'projets présentant mes compétences et mon expérience',
      searchPlaceholder: 'Rechercher par nom de projet, stack technique, fonctionnalités...',
      filters: 'Filtres',
      allProjects: 'Tous les projets',
      featured: 'En vedette',
      frontend: 'Frontend',
      fullstack: 'Full Stack',
      showing: 'Affichage',
      of: 'sur',
      noProjectsFound: 'Aucun projet trouvé',
      clearFilters: 'Effacer tous les filtres',
      viewDetails: 'Voir les détails',
      viewCode: 'Voir le code',
      viewDemo: 'Voir la démo',
    },
    contact: {
      title: 'Travaillons ensemble',
      subtitle: "Avez-vous un projet en tête ou souhaitez collaborer? J'aimerais avoir de vos nouvelles!",
      name: 'Nom',
      email: 'E-mail',
      subject: 'Sujet',
      message: 'Message',
      sendMessage: 'Envoyer le message',
      sending: 'Envoi en cours...',
      successMessage: 'Message envoyé avec succès! Je vous répondrai bientôt.',
      errorMessage: "Échec de l'envoi du message. Veuillez réessayer.",
      requiredField: 'Requis',
      availableForWork: 'Disponible pour le travail',
    },
    footer: {
      rights: 'Tous droits réservés',
      builtWith: 'Construit avec',
    },
    common: {
      readMore: 'Lire la suite',
      loading: 'Chargement...',
      error: 'Erreur',
      success: 'Succès',
      download: 'Télécharger',
      share: 'Partager',
      close: 'Fermer',
    },
  },

  // Spanish (Español)
  es: {
    nav: {
      home: 'Inicio',
      skills: 'Habilidades',
      experience: 'Experiencia',
      projects: 'Proyectos',
      testimonials: 'Testimonios',
      blog: 'Blog',
      contact: 'Contacto',
    },
    hero: {
      greeting: "Hola, soy",
      name: 'Muhammad',
      roles: ['Desarrollador Full Stack', 'Entusiasta UI/UX', 'Solucionador de Problemas', 'Explorador Tecnológico'],
      description: 'Creo experiencias digitales excepcionales con tecnologías web modernas. Apasionado por construir aplicaciones accesibles, eficientes y fáciles de usar.',
      viewWork: 'Ver mi trabajo',
      getInTouch: 'Contactar',
      scrollToExplore: 'Desplázate para explorar',
    },
    skills: {
      title: 'Habilidades y Tecnologías',
      subtitle: 'Una visión completa de mis habilidades técnicas y niveles de competencia',
      categories: {
        frontend: 'Desarrollo Frontend',
        backend: 'Desarrollo Backend',
        database: 'Bases de datos',
        tools: 'Herramientas y Tecnologías',
      },
      yearsExperience: 'años de experiencia',
      totalSkills: 'Habilidades totales',
      yearsCoding: 'Años programando',
      projectsCompleted: 'Proyectos',
      certifications: 'Certificaciones',
    },
    experience: {
      title: 'Experiencia y Educación',
      subtitle: 'Mi trayectoria profesional y formación académica',
      workExperience: 'Experiencia laboral',
      education: 'Educación',
      responsibilities: 'Responsabilidades principales',
      achievements: 'Logros',
      present: 'Presente',
    },
    projects: {
      title: 'Mis Proyectos',
      subtitle: 'proyectos que muestran mis habilidades y experiencia',
      searchPlaceholder: 'Buscar por nombre de proyecto, stack tecnológico, características...',
      filters: 'Filtros',
      allProjects: 'Todos los proyectos',
      featured: 'Destacados',
      frontend: 'Frontend',
      fullstack: 'Full Stack',
      showing: 'Mostrando',
      of: 'de',
      noProjectsFound: 'No se encontraron proyectos',
      clearFilters: 'Borrar todos los filtros',
      viewDetails: 'Ver detalles',
      viewCode: 'Ver código',
      viewDemo: 'Ver demo',
    },
    contact: {
      title: 'Trabajemos juntos',
      subtitle: '¿Tienes un proyecto en mente o quieres colaborar? ¡Me encantaría saber de ti!',
      name: 'Nombre',
      email: 'Correo electrónico',
      subject: 'Asunto',
      message: 'Mensaje',
      sendMessage: 'Enviar mensaje',
      sending: 'Enviando...',
      successMessage: '¡Mensaje enviado con éxito! Me pondré en contacto pronto.',
      errorMessage: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
      requiredField: 'Requerido',
      availableForWork: 'Disponible para trabajar',
    },
    footer: {
      rights: 'Todos los derechos reservados',
      builtWith: 'Construido con',
    },
    common: {
      readMore: 'Leer más',
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito',
      download: 'Descargar',
      share: 'Compartir',
      close: 'Cerrar',
    },
  },

  // Urdu (اردو)
  ur: {
    nav: {
      home: 'ہوم',
      skills: 'مہارتیں',
      experience: 'تجربہ',
      projects: 'پراجیکٹس',
      testimonials: 'تعریفیں',
      blog: 'بلاگ',
      contact: 'رابطہ',
    },
    hero: {
      greeting: "ہیلو، میں",
      name: 'محمد',
      roles: ['فل سٹیک ڈیولپر', 'یو آئی/یو ایکس کا شوقین', 'مسائل حل کرنے والا', 'ٹیکنالوجی کا متلاشی'],
      description: 'میں جدید ویب ٹیکنالوجیز کے ساتھ غیر معمولی ڈیجیٹل تجربات تخلیق کرتا ہوں۔ قابل رسائی، کارکردگی اور صارف دوست ایپلیکیشنز بنانے کا شوقین۔',
      viewWork: 'میرا کام دیکھیں',
      getInTouch: 'رابطہ کریں',
      scrollToExplore: 'تلاش کرنے کے لیے سکرول کریں',
    },
    skills: {
      title: 'مہارتیں اور ٹیکنالوجیز',
      subtitle: 'میری تکنیکی صلاحیتوں اور مہارت کی سطحوں کا جامع جائزہ',
      categories: {
        frontend: 'فرنٹ اینڈ ڈیولپمنٹ',
        backend: 'بیک اینڈ ڈیولپمنٹ',
        database: 'ڈیٹا بیسز',
        tools: 'ٹولز اور ٹیکنالوجیز',
      },
      yearsExperience: 'سال کا تجربہ',
      totalSkills: 'کل مہارتیں',
      yearsCoding: 'کوڈنگ کے سال',
      projectsCompleted: 'پراجیکٹس',
      certifications: 'سرٹیفیکیٹس',
    },
    experience: {
      title: 'تجربہ اور تعلیم',
      subtitle: 'میرا پیشہ ورانہ سفر اور تعلیمی پس منظر',
      workExperience: 'کام کا تجربہ',
      education: 'تعلیم',
      responsibilities: 'اہم ذمہ داریاں',
      achievements: 'کامیابیاں',
      present: 'حال',
    },
    projects: {
      title: 'میرے پراجیکٹس',
      subtitle: 'میری مہارتوں اور تجربے کو ظاہر کرنے والے پراجیکٹس',
      searchPlaceholder: 'پراجیکٹ کے نام، ٹیک سٹیک، خصوصیات سے تلاش کریں...',
      filters: 'فلٹرز',
      allProjects: 'تمام پراجیکٹس',
      featured: 'نمایاں',
      frontend: 'فرنٹ اینڈ',
      fullstack: 'فل سٹیک',
      showing: 'دکھا رہا ہے',
      of: 'میں سے',
      noProjectsFound: 'کوئی پراجیکٹ نہیں ملا',
      clearFilters: 'تمام فلٹرز صاف کریں',
      viewDetails: 'تفصیلات دیکھیں',
      viewCode: 'کوڈ دیکھیں',
      viewDemo: 'ڈیمو دیکھیں',
    },
    contact: {
      title: 'آئیے مل کر کام کریں',
      subtitle: 'کوئی پراجیکٹ ذہن میں ہے یا تعاون کرنا چاہتے ہیں؟ میں آپ سے سننا پسند کروں گا!',
      name: 'نام',
      email: 'ای میل',
      subject: 'موضوع',
      message: 'پیغام',
      sendMessage: 'پیغام بھیجیں',
      sending: 'بھیجا جا رہا ہے...',
      successMessage: 'پیغام کامیابی سے بھیج دیا گیا! میں جلد آپ سے رابطہ کروں گا۔',
      errorMessage: 'پیغام بھیجنے میں ناکام۔ برائے مہربانی دوبارہ کوشش کریں۔',
      requiredField: 'ضروری',
      availableForWork: 'کام کے لیے دستیاب',
    },
    footer: {
      rights: 'تمام حقوق محفوظ ہیں',
      builtWith: 'کے ساتھ بنایا گیا',
    },
    common: {
      readMore: 'مزید پڑھیں',
      loading: 'لوڈ ہو رہا ہے...',
      error: 'خرابی',
      success: 'کامیابی',
      download: 'ڈاؤن لوڈ',
      share: 'شیئر',
      close: 'بند کریں',
    },
  },
};
