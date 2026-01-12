const projects = [
  {
    title: "React Theme Toggle",
    description: "Light/Dark mode using Context API",
    live: "https://your-live-link.netlify.app",
    github: "https://github.com/utpanna-pradhan/theme-toggle",
  },
  {
    title: "Note App",
    description: "CRUD note app with local storage",
    live: "https://note-app-demo.netlify.app",
    github: "https://github.com/utpanna-pradhan/note-app",
  },
  {
    title: "GitHub Profile Analyzer",
    description: "Analyze GitHub profile using API",
    live: "https://github-analyzer.netlify.app",
    github: "https://github.com/utpanna-pradhan/github-analyzer",
  },
];

const container = document.getElementById("projects");

projects.forEach((project, index) => {
  const card = document.createElement("div");

  card.className = `
    bg-slate-800/70 backdrop-blur
    rounded-xl p-6 shadow-lg
    hover:shadow-2xl hover:-translate-y-2
    transition-all duration-300
    opacity-0 animate-fadeUp
  `;

  card.style.animationDelay = `${index * 150}ms`;

  card.innerHTML = `
    <h2 class="text-xl font-semibold mb-2">${project.title}</h2>
    <p class="text-gray-400 text-sm mb-4">${project.description}</p>

    <div class="flex gap-3">
      <a href="${project.live}" target="_blank"
        class="flex-1 text-center bg-blue-600 hover:bg-blue-700 py-2 rounded-lg text-sm font-medium">
        Live Demo
      </a>
      <a href="${project.github}" target="_blank"
        class="flex-1 text-center border border-gray-600 hover:border-white py-2 rounded-lg text-sm font-medium">
        GitHub
      </a>
    </div>
  `;

  container.appendChild(card);
});
