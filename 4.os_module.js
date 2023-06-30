const os = require("os");

const data = {
  release: os.release(),
  type: os.type(),
  version: os.version(),
  platform: os.platform(),
  homedir:os.homedir(),
  hostname:os.hostname(),
  loadavg:os.loadavg(), //The load average is a Unix-specific concept. On Windows, the return value is always [0, 0, 0]
  userInfo:os.userInfo(),
};

console.log(data);

// OS: It tells all about the OS