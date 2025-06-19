document.addEventListener('DOMContentLoaded', function () {
    // --- CONFIGURATION ---
    const githubUsername = "suramdivyareddy";
    const featuredRepoNames = ["profguide", "asset-provenance-tracking", "transportation-project", "stock-portfolio", "cardamageclassification"];

    // --- DOM Element References ---
    const fileList = document.getElementById('file-list');
    const tabsContainer = document.getElementById('tabs-container');
    const editorContainer = document.getElementById('editor-container');
    const sidebarContainer = document.getElementById('sidebar-container');
    const activityBarIcons = document.querySelectorAll('.activity-bar .icon');
    const panels = document.querySelectorAll('.panel');
    const terminalInput = document.getElementById('terminal-input');
    const terminalOutput = document.getElementById('terminal-output');
    const sidebarResizeHandle = document.getElementById('sidebar-resize-handle');
    const terminalResizeHandle = document.getElementById('terminal-resize-handle');
    
    // --- Data ---
    const fileContents = {
        'home.md': { 
            icon: 'fab fa-markdown', 
            color: '#61afef', 
            content: `<span class="token-selector"># Hi, I'm Divya Reddy Suram.</span>\n<span class="token-keyword">## Welcome to my portfolio.</span>\n\nI'm a software engineer with over 2 years of professional experience building mobile and web applications.` 
        },
        'projects.ts': { icon: 'fas fa-microchip', color: '#c678dd', content: `<span class="token-comment">// Fetching featured projects from GitHub...</span>` },
        'experience.jsx': { 
            icon: 'fab fa-react', 
            color: '#61dafb', 
            content: `\n<span class="token-comment">// A summary of my professional journey.</span>\n\n<span class="token-keyword">const</span> <span class="token-function">MyExperience</span> <span class="token-operator">=</span> <span class="token-punctuation">(</span><span class="token-punctuation">)</span> <span class="token-operator">=></span> <span class="token-punctuation">{</span>\n  <span class="token-keyword">return</span> <span class="token-punctuation">(</span>\n    <span class="token-tag">&lt;div&gt;</span>\n      <span class="token-tag">&lt;Job\n        <span class="token-attribute">title</span><span class="token-operator">=</span><span class="token-value">\"Software Engineer\"</span>\n        <span class="token-attribute">company</span><span class="token-operator">=</span><span class="token-value">\"CardiacFitt\"</span>\n        <span class="token-attribute">tasks</span><span class="token-operator">=</span><span class="token-punctuation">{[</span>\n          <span class="token-string">\"Engineered HIPAA-compliant React Native app, reducing security risks by 40%.\"</span>,\n          <span class="token-string">\"Migrated WordPress site to Vue.js, increasing performance and user retention by 25%.\"</span>\n        <span class="token-punctuation">]}</span>\n      /&gt;</span>\n      <span class="token-tag">&lt;Job\n        <span class="token-attribute">title</span><span class="token-operator">=</span><span class="token-value">\"Software Engineer\"</span>\n        <span class="token-attribute">company</span><span class="token-operator">=</span><span class="token-value">\"Tiger Analytics\"</span>\n        <span class="token-attribute">tasks</span><span class="token-operator">=</span><span class="token-punctuation">{[</span>\n          <span class="token-string">'Integrated 20+ APIs (REST & GraphQL), cutting load times by 30%.'</span>,\n          <span class="token-string">'Architected 50+ reusable React components, ensuring WCAG accessibility.'</span>,\n          <span class="token-string">'Optimized MongoDB schema and added Redis caching, reducing DB latency by 35%.'</span>\n        <span class="token-punctuation">]}</span>\n      /&gt;</span>\n      <span class="token-tag">&lt;Job\n        <span class="token-attribute">title</span><span class="token-operator">=</span><span class="token-value">\"Software Engineer Intern\"</span>\n        <span class="token-attribute">company</span><span class="token-operator">=</span><span class="token-value">\"Tiger Analytics\"</span>\n        <span class="token-attribute">tasks</span><span class="token-operator">=</span><span class="token-punctuation">{[</span>\n          <span class="token-string">'Automated frontend testing with Jest, increasing test coverage to 80%.'</span>,\n          <span class="token-string">'Refactored legacy JS components to TypeScript, enhancing maintainability.'</span>\n        <span class="token-punctuation">]}</span>\n      /&gt;</span>\n      <span class="token-tag">&lt;Job\n        <span class="token-attribute">title</span><span class="token-operator">=</span><span class="token-value">\"Software Intern\"</span>\n        <span class="token-attribute">company</span><span class="token-operator">=</span><span class="token-value">\"Virtusa\"</span>\n        <span class="token-attribute">tasks</span><span class="token-operator">=</span><span class="token-punctuation">{[</span>\n          <span class="token-string">'Developed reusable UI components in React adhering to design system guidelines.'</span>,\n          <span class="token-string">'Containerized local development with Docker, reducing setup time by 60%.'</span>\n        <span class="token-punctuation">]}</span>\n      /&gt;</span>\n    <span class="token-tag">&lt;/div&gt;</span>\n  <span class="token-punctuation">)</span>\n<span class="token-punctuation">}</span><span class="token-punctuation">;</span>\n` 
        },
        'skills.ts': { 
            icon: 'fas fa-code', 
            color: '#e5c07b', 
            content: `\n<span class="token-keyword">type</span> <span class="token-type">TechnicalSkills</span> <span class="token-operator">=</span> <span class="token-punctuation">{</span>\n  <span class="token-property">languagesAndTools</span><span class="token-punctuation">:</span> <span class="token-type">string</span><span class="token-punctuation">[]</span><span class="token-punctuation">;</span>\n  <span class="token-property">frameworksAndLibraries</span><span class="token-punctuation">:</span> <span class="token-type">string</span><span class="token-punctuation">[]</span><span class="token-punctuation">;</span>\n  <span class="token-property">devopsAndCloud</span><span class="token-punctuation">:</span> <span class="token-type">string</span><span class="token-punctuation">[]</span><span class="token-punctuation">;</span>\n<span class="token-punctuation">}</span><span class="token-punctuation">;</span>\n\n<span class="token-comment">// My core competencies</span>\n<span class="token-keyword">const</span> <span class="token-variable">skillSet</span><span class="token-punctuation">:</span> <span class="token-type">TechnicalSkills</span> <span class="token-operator">=</span> <span class="token-punctuation">{</span>\n  <span class="token-property">languagesAndTools</span><span class="token-punctuation">:</span> <span class="token-punctuation">[</span><span class="token-string">'TypeScript'</span><span class="token-punctuation">,</span> <span class="token-string">'JavaScript'</span><span class="token-punctuation">,</span> <span class="token-string">'Python'</span><span class="token-punctuation">,</span>  <span class="token-string">'C#'</span><span class="token-punctuation">,</span> <span class="token-string">'.NET'</span><span class="token-punctuation">,</span><span class="token-string">'SQL'</span><span class="token-punctuation">,</span> <span class="token-string">'Git'</span><span class="token-punctuation">]</span><span class="token-punctuation">,</span>\n  <span class="token-property">frameworksAndLibraries</span><span class="token-punctuation">:</span> <span class="token-punctuation">[</span>\n    <span class="token-string">'React'</span><span class="token-punctuation">,</span> <span class="token-string">'React Native'</span><span class="token-punctuation">,</span> <span class="token-string">'Node.js'</span><span class="token-punctuation">,</span> <span class="token-string">'Next.js'</span><span class="token-punctuation">,</span> \n    <span class="token-string">'Redux'</span><span class="token-punctuation">,</span> <span class="token-string">'GraphQL'</span><span class="token-punctuation">,</span> <span class="token-string">'Express.js'</span><span class="token-punctuation">,</span> <span class="token-string">'Jest'</span>\n  <span class="token-punctuation">]</span><span class="token-punctuation">,</span>\n  <span class="token-property">devopsAndCloud</span><span class="token-punctuation">:</span> <span class="token-punctuation">[</span><span class="token-string">'CI/CD'</span><span class="token-punctuation">,</span> <span class="token-string">'Docker'</span><span class="token-punctuation">,</span> <span class="token-string">'Kubernetes'</span><span class="token-punctuation">,</span> <span class="token-string">'Azure'</span><span class="token-punctuation">,</span> <span class="token-string">'AWS'</span><span class="token-punctuation">]</span><span class="token-punctuation">,</span>\n<span class="token-punctuation">}</span><span class="token-punctuation">;</span>\n` 
        },
        'education.json': { icon: 'fas fa-graduation-cap', color: '#98c379', content: `<span class="token-punctuation">{</span>\n  <span class="token-property">"education"</span><span class="token-punctuation">:</span> <span class="token-punctuation">[</span>\n    <span class="token-punctuation">{</span>\n      <span class="token-property">"degree"</span><span class="token-punctuation">:</span> <span class="token-string">"M.S. in Computer Science"</span><span class="token-punctuation">,</span>\n      <span class="token-property">"institution"</span><span class="token-punctuation">:</span> <span class="token-string">"University of South Florida, Tampa, FL"</span><span class="token-punctuation">,</span>\n      <span class="token-property">"graduation"</span><span class="token-punctuation">:</span> <span class="token-string">"May 2025"</span>\n    <span class="token-punctuation">}</span><span class="token-punctuation">,</span>\n    <span class="token-punctuation">{</span>\n      <span class="token-property">"degree"</span><span class="token-punctuation">:</span> <span class="token-string">"B.E. in Computer Science"</span><span class="token-punctuation">,</span>\n      <span class="token-property">"institution"</span><span class="token-punctuation">:</span> <span class="token-string">"Anna University, Chennai, India"</span><span class="token-punctuation">,</span>\n      <span class="token-property">"graduation"</span><span class="token-punctuation">:</span> <span class="token-string">"July 2021"</span>\n    <span class="token-punctuation">}</span>\n  <span class="token-punctuation">]</span>\n<span class="token-punctuation">}</span>` },
        'contact.html': { icon: 'fab fa-html5', color: '#e06c75', content: `<span class="token-comment">&lt;!-- Let's connect! --&gt;</span>\n<span class="token-tag">&lt;section&gt;</span>\n  <span class="token-tag">&lt;h1&gt;</span>Get In Touch<span class="token-tag">&lt;/h1&gt;</span>\n  <span class="token-tag">&lt;ul&gt;</span>\n    <span class="token-tag">&lt;li&gt;</span><span class="token-tag">&lt;strong&gt;</span>Email:<span class="token-tag">&lt;/strong&gt;</span> <a href="mailto:divyareddysuram.work@gmail.com" target="_blank">divyareddysuram.work@gmail.com</a><span class="token-tag">&lt;/li&gt;</span>\n    <span class="token-tag">&lt;li&gt;</span><span class="token-tag">&lt;strong&gt;</span>LinkedIn:<span class="token-tag">&lt;/strong&gt;</span> <a href="https://linkedin.com/in/divya-reddy-suram" target="_blank">linkedin.com/in/divya-reddy-suram</a><span class="token-tag">&lt;/li&gt;</span>\n    <span class="token-tag">&lt;li&gt;</span><span class="token-tag">&lt;strong&gt;</span>GitHub:<span class="token-tag">&lt;/strong&gt;</span> <a href="https://github.com/suramdivyareddy" target="_blank">github.com/suramdivyareddy</a><span class="token-tag">&lt;/li&gt;</span>\n  <span class="token-tag">&lt;/ul&gt;</span>\n<span class="token-tag">&lt;/section&gt;</span>` }
    };
    const skillsAsExtensions = [
        { name: 'React Native', publisher: 'Facebook', desc: 'Building secure, HIPAA-compliant mobile applications for healthcare.', icon: 'fab fa-react' },
        { name: 'TypeScript', publisher: 'Microsoft', desc: 'Enhancing code maintainability and reducing bugs in large-scale projects.', icon: 'fas fa-shield-alt' },
        { name: 'Node.js & Next.js', publisher: 'OpenJS & Vercel', desc: 'Creating performant Backend-for-Frontend (BFF) layers.', icon: 'fas fa-server' },
        { name: 'Docker & CI/CD', publisher: 'Docker', desc: 'Automating deployment pipelines and ensuring production reliability.', icon: 'fab fa-docker' },
        { name: 'GraphQL', publisher: 'GraphQL Foundation', desc: 'Integrating complex APIs and reducing client-side load times.', icon: 'fas fa-project-diagram' }
    ];
    const gitHistory = [
        { hash: '4a1b2c3', msg: 'feat(API): Integrate GitHub for live project data', author: 'Divya Reddy Suram', date: '1 day ago' },
        { hash: 'd4e5f6g', msg: 'feat(UI): Implement Git, Debug & Extensions panels', author: 'Divya Reddy Suram', date: '2 days ago' },
        { hash: 'h7i8j9k', msg: 'refactor: Customize all content based on resume', author: 'Divya Reddy Suram', date: '2 days ago' }
    ];

    // --- App State ---
    let openFiles = {}, activeFile = null, typingTimeout = null, commandHistory = [], historyIndex = -1, isResizingSidebar = false, isResizingTerminal = false;

    // --- Core Functions ---
    function typeWriter(element, text, callback) {
        if (typingTimeout) clearTimeout(typingTimeout);
        element.innerHTML = '';
        const lines = text.trim().split('\n');
        let lineIndex = 0;
        function typeLine() {
            if (lineIndex >= lines.length) {
                const cursor = element.querySelector('.typing-cursor');
                if (cursor) cursor.remove();
                if (callback) callback();
                return;
            }
            const lineContent = lines[lineIndex];
            const lineWrapper = document.createElement('div');
            lineWrapper.innerHTML = `<span class="line-number">${lineIndex + 1}</span><span class="line-content">${lineContent}</span>`;
            const cursor = element.querySelector('.typing-cursor');
            if (cursor) element.insertBefore(lineWrapper, cursor);
            else element.appendChild(lineWrapper);
            lineIndex++;
            typingTimeout = setTimeout(typeLine, 50);
        }
        element.innerHTML = '<span class="typing-cursor"></span>';
        typeLine();
    }

    function openFile(fileName) {
        if (!fileContents[fileName]) return;
        if (openFiles[fileName]) { setActiveFileUI(fileName); return; }
        const fileData = fileContents[fileName];
        const tab = document.createElement('div');
        tab.className = 'tab';
        tab.dataset.file = fileName;
        tab.innerHTML = `<i class="${fileData.icon} tab-icon" style="color: ${fileData.color};"></i><span>${fileName}</span><span class="tab-close"><i class="fas fa-times"></i></span>`;
        tabsContainer.appendChild(tab);
        const pane = document.createElement('div');
        pane.className = 'editor-pane';
        pane.dataset.file = fileName;
        editorContainer.appendChild(pane);
        openFiles[fileName] = { tab, pane };
        setActiveFileUI(fileName);
        if (fileName === 'projects.ts') fetchGitHubProjects(pane);
        else typeWriter(pane, fileData.content);
        tab.querySelector('.tab-close').addEventListener('click', e => { e.stopPropagation(); closeFile(fileName); });
        tab.addEventListener('click', () => setActiveFileUI(fileName));
    }

    function setActiveFileUI(fileName) {
        if (activeFile && openFiles[activeFile]) {
            openFiles[activeFile].tab.classList.remove('active');
            openFiles[activeFile].pane.classList.remove('active');
        }
        activeFile = fileName;
        if (openFiles[activeFile]) {
            openFiles[activeFile].tab.classList.add('active');
            openFiles[activeFile].pane.classList.add('active');
        }
    }
    
    function closeFile(fileName) {
        if (!openFiles[fileName]) return;
        const { tab, pane } = openFiles[fileName];
        tab.remove();
        pane.remove();
        delete openFiles[fileName];
        if (activeFile === fileName) {
            const remaining = Object.keys(openFiles);
            setActiveFileUI(remaining.length > 0 ? remaining[remaining.length - 1] : null);
            if (remaining.length === 0) editorContainer.innerHTML = `<div class="editor-pane active" style="padding: 40px; text-align: center; color: var(--text-color-secondary);">Select a file to begin</div>`;
        }
    }

    function switchPanel(panelId) {
        activityBarIcons.forEach(icon => icon.classList.remove('active'));
        document.querySelector(`[data-panel=${panelId}]`).classList.add('active');
        panels.forEach(p => p.classList.remove('active'));
        document.getElementById(`${panelId}-panel`).classList.add('active');
        if (sidebarContainer.classList.contains('collapsed')) sidebarContainer.classList.remove('collapsed');
    }

    async function fetchGitHubProjects(pane) {
        typeWriter(pane, `\n<span class="token-keyword">const</span> <span class="token-variable">githubUsername</span> <span class="token-operator">=</span> <span class="token-string">"${githubUsername}"</span><span class="token-punctuation">;</span>\n<span class="token-comment">// Fetching projects...</span>`, async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&direction=desc`);
                if (!response.ok) throw new Error(`GitHub API Error: ${response.status}`);
                const allRepos = await response.json();
                const featuredRepos = featuredRepoNames.map(name => allRepos.find(repo => repo.name === name)).filter(repo => repo);
                let projectContent = `<span class="token-keyword">import</span> <span class="token-punctuation">{</span> <span class="token-type">Project</span> <span class="token-punctuation">}</span> <span class="token-keyword">from</span> <span class="token-string">'./types'</span><span class="token-punctuation">;</span>\n<span class="token-keyword">const</span> <span class="token-variable">projects</span><span class="token-punctuation">:</span> <span class="token-type">Project</span><span class="token-punctuation">[]</span> <span class="token-operator">=</span> <span class="token-punctuation">[</span>`;
                featuredRepos.forEach(repo => {
                    projectContent += `\n  <span class="token-punctuation">{</span>\n    <span class="token-property">title</span><span class="token-punctuation">:</span> <span class="token-string">"${repo.name}"</span><span class="token-punctuation">,</span>\n    <span class="token-property">description</span><span class="token-punctuation">:</span> <span class="token-string">"${repo.description ? repo.description.replace(/"/g, '\\"') : 'No description'}"</span><span class="token-punctuation">,</span>\n    <span class="token-property">github</span><span class="token-punctuation">:</span> <span class="token-string">"<a href=\"${repo.html_url}\" target=\"_blank\">${repo.html_url}</a>"</span><span class="token-punctuation">,</span>\n  <span class="token-punctuation">}</span><span class="token-punctuation">,</span>`;
                });
                projectContent += `\n<span class="token-punctuation">]</span><span class="token-punctuation">;</span>`;
                typeWriter(pane, projectContent);
            } catch (error) {
                 typeWriter(pane, `<span class="token-comment">// Error fetching projects: ${error.message}</span>`);
            }
        });
    }
    
    function executeCommand(cmd) {
        const outputLine = document.createElement('div');
        outputLine.innerHTML = `<span class="terminal-prompt">~/portfolio $</span> ${cmd}`;
        terminalOutput.appendChild(outputLine);
        const [command, ...args] = cmd.trim().split(' ');
        const response = document.createElement('div');
        switch (command) {
            case 'help': response.innerHTML = `Available commands: <br>- help: Show this help message <br>- ls: List all files <br>- open [filename]: Open a file in the editor <br>- clear: Clear the terminal`; break;
            case 'ls': response.innerHTML = Object.keys(fileContents).join('<br>'); break;
            case 'open':
                const fileToOpen = args[0];
                if (fileToOpen && fileContents[fileToOpen]) { openFile(fileToOpen); response.textContent = `Opening ${fileToOpen}...`; } 
                else { response.textContent = `Error: file '${fileToOpen}' not found.`; }
                break;
            case 'clear': terminalOutput.innerHTML = ''; return;
            case '': break;
            default: response.textContent = `Command not found: ${command}. Type 'help' for commands.`;
        }
        terminalOutput.appendChild(response);
    }

    function populateSidePanels() {
        const gitLog = document.querySelector('.git-log');
        gitHistory.forEach(commit => { gitLog.innerHTML += `<div class="commit"><div class="commit-line"><span class="commit-graph">*</span><span class="commit-message">${commit.msg}</span></div><div class="commit-details"><span class="commit-hash">${commit.hash}</span> by <span class="author">${commit.author}</span> - ${commit.date}</div></div>`; });
        const extensionsPanel = document.getElementById('extensions-content');
        skillsAsExtensions.forEach(skill => { extensionsPanel.innerHTML += `<div class="extension-card"><div class="extension-header"><i class="${skill.icon} extension-icon"></i><div><div class="extension-name">${skill.name}</div><div class="extension-publisher">${skill.publisher}</div></div></div><div class="extension-description">${skill.desc}</div></div>`; });
        const debugContent = document.getElementById('debug-content');
        debugContent.innerHTML = `<div class="debugger-section"><div class="debugger-section-header">Variables</div><div class="variable-item"><span class="name">passion</span>: <span class="value">"HIPAA-compliant mobile apps"</span></div><div class="variable-item"><span class="name">focus</span>: <span class="value">"Performance & Scalability"</span></div></div><div class="debugger-section"><div class="debugger-section-header">Call Stack</div><div class="call-stack-item"><span class="function">SoftwareEngineer()</span><span class="location">CardiacFitt</span></div><div class="call-stack-item"><span class="function">SoftwareEngineer()</span><span class="location">Tiger Analytics</span></div><div class="call-stack-item"><span class="function">MS_ComputerScience()</span><span class="location">Univ. of South Florida</span></div><div class="call-stack-item"><span class="function">BE_ComputerScience()</span><span class="location">Anna University</span></div></div>`;
    }

    // --- Event Listeners & Initialisation ---
    activityBarIcons.forEach(icon => icon.addEventListener('click', () => switchPanel(icon.dataset.panel)));
    fileList.addEventListener('click', e => { const target = e.target.closest('li'); if (target && target.dataset.file) { switchPanel('explorer'); openFile(target.dataset.file); } });
    
    terminalInput.addEventListener('keydown', e => {
        if (e.key === 'Enter' && terminalInput.value) {
            executeCommand(terminalInput.value);
            if(terminalInput.value) { if (!commandHistory.includes(terminalInput.value)) commandHistory.unshift(terminalInput.value); historyIndex = -1; }
            terminalInput.value = '';
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
        } else if (e.key === 'ArrowUp') { if (historyIndex < commandHistory.length - 1) { historyIndex++; terminalInput.value = commandHistory[historyIndex]; }
        } else if (e.key === 'ArrowDown') { if (historyIndex > 0) { historyIndex--; terminalInput.value = commandHistory[historyIndex]; } else { historyIndex = -1; terminalInput.value = ''; } }
    });

    document.getElementById('toggle-terminal').addEventListener('click', () => { const terminal = document.getElementById('terminal-container'), handle = document.getElementById('terminal-resize-handle'), isHidden = terminal.style.display === 'none'; terminal.style.display = isHidden ? 'flex' : 'none'; handle.style.display = isHidden ? 'block' : 'none'; });

    // Resizing Logic
    sidebarResizeHandle.addEventListener('mousedown', () => { isResizingSidebar = true; document.body.style.cursor = 'col-resize'; });
    terminalResizeHandle.addEventListener('mousedown', () => { isResizingTerminal = true; document.body.style.cursor = 'ns-resize'; });
    document.addEventListener('mousemove', e => {
        if (isResizingSidebar) { const newWidth = e.clientX - document.querySelector('.activity-bar').offsetWidth; if (newWidth > 200 && newWidth < 500) sidebarContainer.style.width = `${newWidth}px`; }
        if (isResizingTerminal) { const newHeight = window.innerHeight - e.clientY - document.querySelector('.status-bar').offsetHeight; if (newHeight > 50 && newHeight < window.innerHeight - 150) document.getElementById('terminal-container').style.height = `${newHeight}px`; }
    });
    document.addEventListener('mouseup', () => { isResizingSidebar = false; isResizingTerminal = false; document.body.style.cursor = 'default'; });
    
    // Init
    populateSidePanels();
    openFile('home.md');
    executeCommand('help');
}); 