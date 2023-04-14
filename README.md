# Devneya

FIXME: description

## Installation

```
$ git clone https://github.com/get-zen-dev/Devneya.git
```

#### start.sh example: 

```
#!/bin/sh
export OPENAI_KEY="OPENAI-KEY"
export DENO_DEPLOY_TOKEN="DENO-TOKEN"
export DENO_PROJECT="PROJECT-NAME"
```

#### Config file example:
config.yml

```
OPENAI_KEY: OPENAI_KEY
DENO_DEPLOY_TOKEN: DENO_TOKEN
DENO_PROJECT: PROJECT-NAME
```

## Usage
Create `~/.config/devneya/keys.yml` or use `source ./start.sh`

```
$ bb generate [flags] prompt
```

## Options

`-o filename` - Name of the output file
`-x` - execute in Deno
 
## Examples

```
bb generate -o ./code-path/code.js -x prompt
```

#### If only execution is required:

```
bb execute ./code-path/code.js
```
### Bugs

...

### Any Other Sections
### That You Think
### Might be Useful

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
