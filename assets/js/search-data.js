// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "Selected research on reliable machine learning for health.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Accepted work, with status and artifacts labeled explicitly.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Research CV focused on reliable machine learning, selective prediction, uncertainty quantification, distribution shift, multimodal health sensing, and medical AI.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-my-first-author-paper-when-does-quality-aware-multimodal-fusion-matter-was-accepted-to-interspeech-2026",
          title: 'My first-author paper, “When Does Quality-Aware Multimodal Fusion Matter?”, was accepted to INTERSPEECH...',
          description: "",
          section: "News",},{id: "news-i-started-the-mayo-clinic-summer-undergraduate-research-fellowship-working-with-prof-wei-liu-on-reliable-ai-for-radiation-oncology",
          title: 'I started the Mayo Clinic Summer Undergraduate Research Fellowship, working with Prof. Wei...',
          description: "",
          section: "News",},{id: "news-my-first-author-paper-reliagate-reliability-routing-for-low-stakes-wearable-stress-prediction-was-accepted-to-wellcomp-2026-an-ubicomp-iswc-2026-workshop",
          title: 'My first-author paper, “ReliaGate: Reliability Routing for Low-Stakes Wearable Stress Prediction,” was accepted...',
          description: "",
          section: "News",},{id: "projects-reliable-multimodal-fusion",
          title: 'Reliable Multimodal Fusion',
          description: "Diagnosing whether quality signals actually change multimodal decisions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/01_reliable_multimodal_fusion/";
            },},{id: "projects-radiotherapy-segmentation-quality-assurance",
          title: 'Radiotherapy Segmentation Quality Assurance',
          description: "Selective review of head-and-neck autosegmentation under asymmetric clinical risk.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/02_radiotherapy_segmentation_qa/";
            },},{id: "projects-reliagate",
          title: 'ReliaGate',
          description: "Reliability routing for low-stakes wearable stress prediction.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/02_reliagate/";
            },},{id: "projects-resource-efficient-llm-adaptation-for-therapeutic-dialogue",
          title: 'Resource-Efficient LLM Adaptation for Therapeutic Dialogue',
          description: "Reproducible fine-tuning and structured evaluation under constrained compute.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/03_therapeutic_dialogue_llm/";
            },},{id: "projects-ldaseg",
          title: 'LDASeg',
          description: "Latent diffusion for ambiguous medical image segmentation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/04_ldaseg/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Jaden_Moon_CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%61%64%65%6E.%6D%6F%6F%6E.%32%37@%64%61%72%74%6D%6F%75%74%68.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=0y1JayYAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mmjsk0805", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jmoon85", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
