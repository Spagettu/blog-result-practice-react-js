export const sessions = {
  list: {},

  remove(hash) {
    delete this.list[hash];
  },
  create(user) {
    const hash = Math.random().toFixed(50);

    this.list[hash] = user;

    return hash;
  },
};
