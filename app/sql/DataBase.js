import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase('little_lemon');


export const CriarTabela = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS menu (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, preco TEXT, descricao TEXT, imagem TEXT);',
      [],
      (_, result) => {
        console.log('Tabela criada com Sucesso');
      },
      (_, error) => {
        console.log('Erro ao criar a tabela:', error);
      }
    );
  });
}


export const AddDados = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO menu (nome, preco, descricao, imagem) VALUES (?, ?, ?, ?);',
      ['teste1', 'teste2', 'teste3', 'teste4'],
      (_, result) => {
        console.log('Dados adicionados com sucesso!');
      },
      (_, error) => {
        console.log('Erro ao adicionar dados:', error);
      }
    );
  });
}


export const VerTabela = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'SELECT COUNT(*) as count FROM menu;',
      [],
      (_, result) => {
        const count = result.rows.item(0).count;
        console.log(`There are ${count} rows in the table`);
      },
      (_, error) => {
        console.log('Error checking for rows:', error);
      }
    );
  });
}
