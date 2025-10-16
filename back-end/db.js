// aqui vou colocar os comandos SQL que vão ser responsáveis pela: 
//  1 trazer dados que estão no banco 
//  2 inserção de dados no banco
//  3 atualização de dados no banco
//  4 deletar algum dado do banco 


const { Pool } = require('pg');
const dotenv = require('dotenv');
let instance = null;
dotenv.config();

const pool = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
});

pool.connect(err => {
  if (err) {
    console.log("CONNECTION ERROR. ERROR MESSAGE: ", err.message);
  } else {
    console.log("Connected to PostgreSQL database");
  }
});



  
  async function getAllData() {
    try {
      const sql = "SELECT * FROM  usuarios;";
      const result = await pool.query(sql);
      
      return result.rows;
    } catch (error) {
      console.log(error);
    }
  }

  
  async function insertNewName(dados) {
    try {
      const dateAdded = new Date();
      
      const sql = "INSERT INTO  usuarios (cpf, nome, email, senha ) VALUES ($1, $2, $3, $4) RETURNING *;";
      const values = [dados.cpf, dados.nome, dados.email, dados.senha]
      
      const result = await pool.query(sql, values);
      console.log("Checando resultado ====>>>>> ", result.rows[0]);
      
      const cpf = result.rows[0].cpf;
      const nome = result.rows[0].nome;
      const  email = result.rows[0].email;      
      const senha = result.rows[0].senha;
    //   const profissao = result.rows[0].profissao;
    
      return {
        cpf: cpf,
        name: nome,
        email: email
        // senha: senha
       
      };
    } catch (error) {
      console.log(error);
    }
  }

  
  async function deleteRowById(id) {
    try {
      id = parseInt(id, 10);
      const sql = "DELETE FROM  usuarios WHERE cpf = $1;";
      const result = await pool.query(sql, [id]);
      return result.rowCount === 1;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async function updateNameById(dados) {
    console.log("dados dados dados dados ===>>>>>> ", dados);
    
    try {
      const sql = "UPDATE  usuarios SET  nome=$2, email=$3  WHERE cpf = $1;";
      const values = [dados.cpf, dados.nome, dados.email ]

      const result = await pool.query(sql, values);
      return result.rowCount === 1;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

//   async function searchByName(name) {
//     try {
//       const sql = "SELECT * FROM client WHERE nome = $1;";
//       const result = await pool.query(sql, [name]);
//       return result.rows;
//     } catch (error) {
//       console.log(error);
//     }
//   }

module.exports = {
  getAllData,
  insertNewName,
  deleteRowById,
  updateNameById
//   searchByName

}
