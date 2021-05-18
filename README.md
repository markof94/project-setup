CLI for setting up new Koji projects locally on **Windows**. Made for personal use but can expand to make it configurable for all systems if needed.

Data needed for each project to be created:
- Projects Folder path (default: `C:\JS Projects\`)
- Project name
- Git Clone URL
- Koji Project ID
- Koji Project TOKEN
- Frontend URL (default: `http://localhost:8080`)
- Backend URL (default: `http://localhost:3333`)


After this data is provided, the program automatically does the following:
- Clones the project into the specified folder
- Installs the frontend and backend npm packages
- Creates `.bat` files on desktop which set the environment variables and start the local frontend and backend servers

**NOTE**
You have to have `win-node-env` installed for this to work.

```
npm i win-node-env
```