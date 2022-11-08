export interface Bookmark extends chrome.bookmarks.BookmarkTreeNode {
  path: Array<string>;
  editing: boolean;
}

const getBookMarks = async (): Promise<Bookmark[]> => {
  let result: Bookmark[] = [];

  // 将书签树展开成一维数组
  function flatTree(
    node: chrome.bookmarks.BookmarkTreeNode,
    path: string[] = []
  ) {
    if (node.title && !["1", "2"].includes(node.id)) {
      path.push(node.title);
    }

    if (!node.children) {
      result.push({
        ...node,
        editing: false,
        path: [...path], // 不能直接使用 path，由于指向的都是同一个数组，递归结束，数组会变为空
      });
      path.pop();
      return;
    }

    for (const _node of node.children) {
      flatTree(_node, path);
    }
    path.pop();
  }

  const tree = await chrome.bookmarks.getTree();

  console.log(tree, "tree")

  flatTree(tree[0]);
  return result;
};


export default getBookMarks;
