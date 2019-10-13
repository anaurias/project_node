module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  freezeTableName: true,
  port: 5433,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
