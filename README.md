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

## License

Copyright © 2023 FIXME

This program and the accompanying materials are made available under the
terms of the Eclipse Public License 2.0 which is available at
http://www.eclipse.org/legal/epl-2.0.

This Source Code may also be made available under the following Secondary
Licenses when the conditions for such availability set forth in the Eclipse
Public License, v. 2.0 are satisfied: GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or (at your
option) any later version, with the GNU Classpath Exception which is available
at https://www.gnu.org/software/classpath/license.html.
