// import using name

// import { addAll, LibraryName } from "./lib.js";
// import mySillyName from './lib.js';

//         or          //

// import mySillyName, {
//     addAll,
//     LibraryName
// } from './lib.js';

//          or           //

import * as libObj from './lib.js';

const val = addAll([1, 2, 3]);
const max = mySillyName([22, 12, 67, 4])
console.log(val);
console.log(max);
console.log(LibraryName);

// import using default


