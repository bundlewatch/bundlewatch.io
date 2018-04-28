SHELL := /bin/bash
export PATH := $(shell yarn bin):$(PATH)

.PHONY: help
help:
	@echo "--------------------- Useful Commands for Development ----------------------"
	@echo "make start                           - starts the site for local development"
	@echo "make install                         - install dependencies, blows up node_modules"


# ---- Installing, Building and Running ----

.PHONY: install
install: clean node_modules

.PHONY: start
start: node_modules
	docsify serve docs

# ----------------- Helpers ------------------

.PHONY: clean
clean:
	@rm -rf node_modules

node_modules:
	yarn install
	@touch node_modules
