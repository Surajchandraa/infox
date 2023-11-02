# infox
A cli tool to read directories.

## Overview:
- The Directory Info CLI is a command-line tool designed to provide detailed information about files and directories within a specified directory. It displays valuable insights such as type (file or directory), size in bytes, modification time (mtime), permissions, and creation time (btime).

## Installation:
To use the Directory Info CLI, follow these steps:

- Install the package : `npm i infox`
- Run the command: `show-info <directory path>` 

## Usage:
The primary command provided by the tool is show_info. When executed, it will display a table with the following columns:

- **Name**: The name of the file or directory.
- **Type**: Indicates whether it is a file or a directory.
- **Size (bytes)**: The size of the file in bytes. For directories, this represents the total size of all contents within.
- **Modification Time (mtime)**: The timestamp of the last modification made to the file.
- **Permissions**: The file's permission settings, showing read (r), write (w), and execute (x) permissions.
- **Creation Time (btime)**: The timestamp indicating when the file was originally created.


## Example output:
- **Name**: directory.js
  - **Type**: file
  - **Size (bytes)**: 619
  - **Modification Time (`mtime`)**: 11/2/2023T7:25:33 PM
  - **Permissions**: rw-rw-r--
  - **Creation Time (`btime`)**: 11/2/2023T5:42:24 PM

- **Name**: index.js
  - **Type**: file
  - **Size (bytes)**: 2660
  - **Modification Time (`mtime`)**: 11/2/2023T9:50:29 PM
  - **Permissions**: rw-rw-r--
  - **Creation Time (`btime`)**: 11/1/2023T11:44:45 PM

- **Name**: .gitignore
  - **Type**: file
  - **Size (bytes)**: 13
  - **Modification Time (`mtime`)**: 11/2/2023T9:56:43 PM
  - **Permissions**: rw-rw-r--
  - **Creation Time (`btime`)**: 11/2/2023T9:56:28 PM

- **Name**: node_modules
  - **Type**: dir
  - **Size (bytes)**: 1910772
  - **Modification Time (`mtime`)**: 11/2/2023T9:27:38 PM
  - **Permissions**: rwxrwxr-x
  - **Creation Time (`btime`)**: 11/2/2023T12:57:53 AM

- **Name**: package-lock.json
  - **Type**: file
  - **Size (bytes)**: 11118
  - **Modification Time (`mtime`)**: 11/2/2023T9:27:38 PM
  - **Permissions**: rw-rw-r--
  - **Creation Time (`btime`)**: 11/2/2023T12:57:53 AM

- **Name**: package.json
  - **Type**: file
  - **Size (bytes)**: 276
  - **Modification Time (`mtime`)**: 11/2/2023T9:27:38 PM
  - **Permissions**: rw-rw-r--
  - **Creation Time (`btime`)**: 11/1/2023T11:44:38 PM

- **Name**: readme.md
  - **Type**: file
  - **Size (bytes)**: 0
  - **Modification Time (`mtime`)**: 11/2/2023T9:56:52 PM
  - **Permissions**: rw-rw-r--
  - **Creation Time (`btime`)**: 11/2/2023T9:56:52 PM

 



## Acknowledgments:

- This tool was developed to provide quick and informative insights into file and directory attributes.
- Special thanks to the Node.js community for creating and maintaining the `fs` module, which enables access to file system information.

## Feedback and Contributions

Feedback, bug reports, and contributions are welcome! Feel free to open an issue or create a pull request.

---

**Disclaimer**: This tool provides information based on the available file system metadata. Some file systems or platforms may not support all timestamps. Use this tool at your own discretion.

## Repository

The source code for this project is available on [GitHub](https://github.com/Surajchandraa/read-dir).

Feel free to open issues, submit pull requests, or explore the codebase.
