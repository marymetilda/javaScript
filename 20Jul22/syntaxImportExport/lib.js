const name = 'My Array Library';

const options = {
    version: '1.1',
    author: 'Code Malayalam'
}

export function addAll(arr = []){
    log('addAll');
    return arr.reduce((total, item) => total + item, 0)
}

export default function findMax(arr = []) {
    log('findMax');
    return Math.max(...arr);
}

function log(val){
    console.log('INSIDE', val);
}

//            or

export{
    name as LibraryName,
    options
}