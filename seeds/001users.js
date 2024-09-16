exports.seed = knex => {
  return knex('users').then(() => {
    return knex('users').insert([
      { id: 1, name: 'Mike' },
      { id: 2, name: 'Bernie' },
      { id: 3, name: 'Jackson' }
    ]);
  });
};
