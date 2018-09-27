function call implementation variants for functional languages
==============================================================

Building the web application
----------------------------

This repository contains an application that I use to demonstrate my results, or to test out ideas. It is written in Dart and runs in a web browser, completely client side. To build it locally, you need to

 1. Install the [Dart 2 SDK](https://webdev.dartlang.org/tools/sdk#install)
 2. [Clone](https://services.github.com/on-demand/github-cli/clone-repo-cli) this repository
 3. Navigate into the directory of the repository: `cd bachelors-thesis`
 4. Install app dependencies: `pub get`
 5. Install the build tool: `pub global activate webdev`
 6. Either serve the app locally with `pub run global webdev serve`, or build it with `pub run global webdev build`

interesting links
-----------------

* Great dense Haskell tutorial: http://learn.hfm.io/index.html
* http://haskellbook.com/
* This book introduces the base for the VM architecture I work with: https://link.springer.com/book/10.1007/978-3-540-49597-0
