// Simplify Unix - style file system path
// '.' -> current directory
// '..' -> directory up a level
// '//' -> considered as single slash(even if more slashes are there)
// '...' -> considered as file/directory names

// Canonocal path should :
// -> start with single '/'
// -> any 2 directories are separated by '/'
// -> path doesn't ends with '/'
// -> path only contains the directories on the path from root directory to target file or directory
// -> i.e. no period or double period

//=> /home/ -> /home
//=> /../ -> /
//=> /home//foo/ -> /home/foo
//=> /a/./b/../../c/ -> /c

function canonicalPath(path) {
    const stack = [];
    let pathArr = path.split('/').filter(el => el !== '.' && el !== '');

    for (const name of pathArr) {
        if (name === "..") stack.pop();
        else stack.push(name);
        // console.log(stack);
    }

    return '/' + stack.join('/');
}

console.log(canonicalPath('/home//foo/'));
console.log(canonicalPath('/a/./b/../../c/'));