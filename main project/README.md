# ToDo List Project by ** HTML,CSS.JS **
Basic Application that applys the principles of integration between HTML,CSS,JS 
[live demo](https://your-example-demo)
----------------------------------------
### screenshots 
[main screen](./assets/preview.png)
----------------------------------------
### Key Features
- **+** add new task
- **X** remove existed task
- **☑️** ensures that the task is done
- **S** saves the task on the local storage
- **R** responsive website designed to adopt any screen size
 ----------------------------------------
 ### Tech Stack
- **HTML5**:building the page skelton. 
- **CSS**:styilng the pages and specify the layouts.
- **Javascript (ES6+)**:DOM manipuliation and app logic.
----------------------------------------
### How to Run
on your own device 
1. open clone:
```bash 
    git clone https://github.com/your-username/todo-list-app.git
```
2. open folder:
```bash
   cd todo-list-app
```
3. run `index.html` by **vscode's live server**
----------------------------------------
### Contact
- **LinkedIn**:[AbdelRahman Essam](https://linkedin.com/yourprofile).
- **Email**:your email.
----------------------------------------
## Architecture
1. Architecture Pattern
- **UI Layer**: present the DOM interactions.
- **Logic (Controller Layer)**:updates the UI depending on state changing.
- **Storage (service layer)**:storage layer that deal with outer API or our local storage.
----------------------------------------
2. Directory Structure
```text
📦main project
 ┣ 📂src
 ┃ ┣ 📜app.js
 ┃ ┗ 📜storage.js
 ┣ 📜index.html
 ┣ 📜main.js
 ┣ 📜README.md
 ┗ 📜style
```
----------------------------------------
3. Data Flow Diagram
```text
[UI interacts with user]
           │
           ▼
[main.js - Event Listener] ── (checks the data)
           │
           ├──► [storageService.js] ──► (save data on  LocalStorage)
           │
           ▼
[taskComponent.js] ───────►(DOM reload the UI with new input)
```
----------------------------------------
4. coding standards
- **ES6 modules**:"import","export".
- **Naming Convensions**:
-camelCase for services.
-PascaleCase for classes and components.
- **Pure Functions**:for easy testing.