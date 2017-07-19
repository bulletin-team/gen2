all:
	npm install
run:
	export DEBUG="*"
	forever start -o server.log -e error.log -w --watchDirectory ./ core.js
