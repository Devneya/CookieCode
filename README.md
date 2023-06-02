# Devneya

FIXME: description

## Installation

```
$ git clone https://github.com/get-zen-dev/Devneya.git
```

#### Config file example:
```~/.config/devneya/keys.yml```
```
OPENAI_KEY: OPENAI_KEY
DENO_DEPLOY_TOKEN: DENO_TOKEN
DENO_PROJECT: PROJECT_NAME
REQUEST_LOG_PATH: "LOG_PATH"
MAX_REPS: 3
CODE_FILENAME: CODE.js ("./code-path/code.js" by default)
DENO_ERROR_FILENAME: ERROR_FILENAME ("deno_error.txt" by default)
```

#### start.sh example: 

```
#!/bin/sh
export OPENAI_KEY="OPENAI-KEY"
export DENO_DEPLOY_TOKEN="DENO-TOKEN"
export DENO_PROJECT="PROJECT-NAME"
export REQUEST_LOG_PATH=""
export MAX_REPS=3
```

## Usage
Create config file or use `source ./start.sh`

```
$ bb devneya [flags] prompt
```

Start a webserver:

```
lein deps ;; optional
lein run
```

## Options
```
"-g" "--[no-]gen" "Generate the code" :default true
"-x" "--[no-]exec" "Execute the code" :default false
"-a" "--all" "Repeat code generation and execution" :default false
"-h" "--help"
```

## Examples
```
bb devneya prompt
bb devneya -a prompt 
```
