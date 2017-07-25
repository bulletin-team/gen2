all:
	npm install
run:
	export DEBUG="*"
	forever start -o server.log -e error.log -l bulletin.log -w --watchDirectory `pwd`/core core/core.js
