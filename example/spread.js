#!/usr/bin/env node
"use strict"

var
  most = require("most"),
  mostPromiseSpread = require("..")

mostPromiseSpread(Promise.resolve([1,2,3,4,5]))
	.forEach(x => console.log(x*2))
	.then(x => console.log("done"))
