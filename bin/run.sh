# run.sh
#!/bin/sh

prisma deploy --force;
node dist/server.js;