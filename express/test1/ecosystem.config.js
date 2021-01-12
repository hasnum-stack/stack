module.exports = {
    apps: [
        {
            name: 'app',
            script: './bin/www',
            watch: '.',
        },
    ],
    deploy: {
        production: {
            'user': 'SSH_USERNAME',
            'host': 'SSH_HOSTMACHINE',
            'ref': 'origin/master',
            'repo': 'GIT_REPOSITORY',
            'path': 'DESTINATION_PATH',
            'pre-deploy-local': '',
            'post-deploy': 'yarn install && pm2 reload ecosystem.config.js --env production',
            'pre-setup': '',
        },
    },
};
