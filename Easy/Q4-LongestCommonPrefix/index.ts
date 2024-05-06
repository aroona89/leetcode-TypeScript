// Q4 "Longest Common Prefix 

function longestCommonPrefix(strs: string[]): string {
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
    }
    if (prefix === '') {
      return prefix;
    }
  }
  return prefix;
};
let  strs = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs));



/* Q4 "Longest Common Prefix (topic covered: string, trie)"
A Trie (“retrieval” or “prefix tree”) is a data structure used to efficiently store and search for a list of words.
Searching for Prefixes: Tries allow efficient prefix-based searches 
(e.g., Useful for functionalities like auto-completion where you need to find prefixes shared by many words). */
// class Trie {
//   private root: Node;

//   constructor() {
//     this.root = new Node();
//   }

//   insert(word: string) {
//     let node = this.root;
//     for (let char of word) {
//       if (!node.children[char]) {
//         node.children[char] = new Node();
//       }
//       node = node.children[char];
//       node.count++; // Increment count for each node
//     }
//     node.isWord = true;
//   }

//   longestCommonPrefix(strs: string[]): string {
//     let prefix = "";
//     let node = this.root;
//     for (let char of strs[0]) {
//       if (node.children[char] && node.children[char].count === strs.length) {
//         prefix += char;
//         node = node.children[char];
//       } else {
//         break;
//       }
//     }
//     return prefix;
//   }
// }

// class Node {
//   children: { [key: string]: Node };
//   isWord: boolean;
//   count: number;

//   constructor() {
//     this.children = {};
//     this.isWord = false;
//     this.count = 0;
//   }
// }

// function longestCommonPrefix(strs: string[]): string {
//   const trie = new Trie();
//   for (let str of strs) {
//     trie.insert(str);
//   }
//   return trie.longestCommonPrefix(strs);
// }

// const strs = ["flower", "flow", "flight"];
// console.log("The longest common prefix is:", longestCommonPrefix(strs));