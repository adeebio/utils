const child_process = require("child_process");
const path = require("path");

const args = process.argv.slice();
const exePath = args.shift();
args.shift();

const exeDirPath = exePath.substring(0, exePath.lastIndexOf(path.sep));
const exeFileName = exePath.substr(exePath.lastIndexOf(path.sep) + 1, exePath.length - 1);
const projectName = exeFileName.substr(3, exeFileName.length - 1);
const projectPath = `${exeDirPath}${path.sep}${projectName}${path.sep}`;

for (let i = 0; i < args.length; i++) {
    args[i] = args[i].replace(/ /g, "\\ ");
}

process.chdir(projectPath);

const execStr = `npm start ${args.join(" ")}`;

child_process.exec(execStr, (err, stdout, stderr) => {
    if (err) {
        throw err;
    } else {
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    }
});
