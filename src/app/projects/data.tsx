// src/app/projects/data.ts

export type Project = {
    title: string;
    description: string;
    techStack: string;
    liveLink?: string;
    githubLink?: string;
  };
  
  export const projectsData: Project[] = [
    {
      title: "Newsly",
      description:
        "Newsly is a personalized news recommendation app that delivers relevant articles based on user interests using a content-based filtering algorithm.",
      techStack: "Flutter, Supabase, NewsAPI, scikit-learn (TF-IDF, Cosine Similarity), Pandas, Numpy",
      githubLink: "https://github.com/Kevin2508/NewsApp",
    },
    {
      title: "Mobile Price Classification",
      description: "A brief description of project",
      techStack: "",
      liveLink: "",
      githubLink: "",
    },
    {
      title: "Water Potability Classification",
      description: "Water Potability System is a machine learning model that predicts whether water is safe for drinking based on key water quality parameters.",
      techStack: "Streamlit, scikit-learn, Numpy, Pandas",
      liveLink: "https://water-potability-prediction-djkd.streamlit.app/",
      githubLink: "https://github.com/JDhruv14/Water-Potability-Prediction",
    },
  ];
  