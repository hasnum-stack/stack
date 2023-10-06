const { exec } = require('child_process');

// 要打开的应用程序列表
const appsToOpen = ['Safari', 'TextEdit', 'Calculator'];

async function openApps() {
  const openPromises = appsToOpen.map(appName => {
    return new Promise((resolve, reject) => {
      exec(`open -a "${appName}"`, (error, stdout, stderr) => {
        if (error) {
          reject(`打开 ${appName} 时发生错误：${error.message}`);
        } else {
          resolve(`${appName} 已成功打开`);
        }
      });
    });
  });

  try {
    const results = await Promise.all(openPromises);
    results.forEach(result => console.log(result));
  } catch (error) {
    console.error(error);
  }
}

openApps();