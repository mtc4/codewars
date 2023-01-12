function loop_size(node) {
  const nodes = new WeakMap();
  let i = 0;
  while (!nodes.get(node)) {
    nodes.set(node, ++i);
    node = node.getNext();
  }
  return i - nodes.get(node) + 1;
}
