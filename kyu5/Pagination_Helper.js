class PaginationHelper {
  collection;
  itemsPerPage;

  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  itemCount() {
    return this.collection.length;
  }

  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }

  pageItemCount(pageIndex) {
    if (!this.hasItemAtIndex(pageIndex, this.pageCount())) return -1;
    return (
      this.itemsPerPage -
      Math.ceil(
        (((pageIndex + 1) * this.itemsPerPage) % this.itemCount()) %
          this.itemsPerPage
      )
    );
  }

  pageIndex(itemIndex) {
    if (!this.hasItemAtIndex(itemIndex, this.itemCount())) return -1;
    return Math.ceil((itemIndex + 1) / this.itemsPerPage) - 1;
  }

  //utils
  hasItemAtIndex(index, count) {
    return index >= 0 && index <= count - 1;
  }
}
