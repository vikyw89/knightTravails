const prettyPrint = (node, prefix = '') => {
    if (!node) {
      return
    }
    if (node.next !== null) {
      console.log(node.next)
      for (let i = 0; i < node.next.length; i++) {
        prettyPrint(node.next[i], `${prefix}${isLeft ? '│   ' : '    '}`);
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.row}`);
      }
    }
}

export { prettyPrint }