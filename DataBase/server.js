const { getConnection } = require ('./db.js');

async function salvarUsuario(nome, email, gender) {
  const conn = await getConnection();
  const [result] = await conn.execute(
    'INSERT INTO usuarios (nome, email, gender) VALUES (?, ?)',
    [nome, email, gender]
  );
  conn.end();
  return result.insertId;
}