 const setPagination = async (options) => {
    const sort = {};
    if (options.sort_column) {
      const sortColumn = options.sort_column;
      const order = options?.sort_order === 'asc' ? 1 : -1;
      sort[sortColumn] = order;
    } else {
      sort.created_at = -1;
    }
  
    const limit = +options.limit ? +options.limit : null;
    const offset = ((+options.offset ? +options.offset : 1) - 1) * (+limit ? +limit : 10);
    return { sort, offset, limit };
  };

  module.exports = {setPagination}