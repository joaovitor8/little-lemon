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


export const Conferir = () => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT COUNT(*) as count FROM menu',
      [],
      (_, { rows }) => {
        const { count } = rows.item(0);
        if (count === 0) {
          console.log('A tabela está vazia.');
        } else {
          console.log(`A tabela contém ${count} registros.`);
        }
      }
    );
  });
}


export const VerTabela = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'SELECT * FROM menu;',
      [],
      (_, { rows }) => {
        console.log(rows._array);
      },
      (_, error) => {
        console.log('Error checking for rows:', error);
      }
    );
  });
}


export const Deletar = () => {
  db.transaction(tx => {
    tx.executeSql(
      'DROP TABLE IF EXISTS menu',
      [],
      (_, { rowsAffected }) => {
        console.log('Tabela deleta');
      }
    );
  });
}
