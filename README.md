# VS Code Themed Portfolio

This is a personal portfolio website designed to look and feel like a Visual Studio Code editor. It's built with vanilla HTML, CSS, and JavaScript to be lightweight, fast, and fully customizable.

Portfolio: https://suramdivyareddy.github.io/ide-portfolio-website/


<img width="1470" alt="image" src="https://github.com/user-attachments/assets/12937856-60c9-4ec5-964d-e180e4f148ab" />


## Features

* **IDE-Inspired UI:** A complete interface mimicking VS Code, including an activity bar, a file explorer, editor tabs, a status bar, and a terminal.
* **Interactive Panels:**
    * **Explorer:** Navigate through "files" that represent different sections of your resume.
    * **Source Control:** Displays a fake, stylized `git log` to creatively showcase your career milestones.
    * **Run and Debug:** A panel that outlines your career path in a "Call Stack" and highlights key skills as "Variables".
    * **Extensions:** Your skills are presented as if they are installed VS Code extensions.
* **Live GitHub Projects:** The `projects.ts` file automatically fetches your chosen public repositories from the GitHub API and displays them.
* **Resizable Layout:** Both the sidebar and the terminal can be dynamically resized by dragging their borders.
* **Functional Terminal:** A command-line interface that accepts commands like `ls`, `open`, and `help`.
* **Pure JavaScript:** No external frameworks are required, making it easy to understand and deploy.

## How to Customize for Your Own Use

This portfolio is designed to be easily personalized. Follow these steps to make it your own:

### 1. Update Personal Information

Open the `script.js` file and find the configuration section at the top. You'll need to edit the following constants:

* **`githubUsername`**: Change this to your GitHub username to fetch your projects.
* **`featuredRepoNames`**: List the exact names of the repositories you want to showcase, in the order you want them to appear.

```javascript
// --- CONFIGURATION ---
const githubUsername = "your-github-username";
const featuredRepoNames = [
    "your-repo-name-1",
    "your-repo-name-2",
    "another-cool-project"
];
```

### 2. Update File Contents

The content for each "file" in the portfolio is stored in the `fileContents` object in `script.js`. You can edit the `content` string for each file to match your own information.

```javascript
const fileContents = {
    'home.md': { 
        icon: 'fab fa-markdown', 
        color: '#61afef', 
        content: `<span class="token-selector"># Hi, I'm Your Name.</span>\n<span class="token-keyword">## Welcome to my portfolio.</span>` 
    },
    // ... edit other files like experience.jsx, skills.ts, etc.
};
```

### 3. Customize Side Panels

The content for the "Source Control", "Debugger", and "Extensions" panels is also stored in `script.js`.

* **`gitHistory`**: Edit the commit messages and dates to reflect your career milestones.
* **`skillsAsExtensions`**: Update this array with your own skills, choosing an appropriate icon from [Font Awesome](https://fontawesome.com/icons).
* **Debugger Panel:** You can update the "Variables" and "Call Stack" directly in the `populateSidePanels` function.

### 4. Link Your Resume

In the `index.html` file, find the link for `resume.pdf` and replace the placeholder `href` with a public link to your resume file (e.g., from Google Drive or a public web server).

```html
<!-- In index.html -->
<a href="YOUR_PUBLIC_RESUME_LINK_HERE" target="_blank" ...>
    ...
    <span class="file-name">resume.pdf</span>
</a>
```

## Running Locally

1.  Clone or download this repository.
2.  Open the `index.html` file in your web browser.

That's it! No build process or dependencies are required.
