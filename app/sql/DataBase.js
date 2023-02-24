import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase('little_lemon');

export const ConferirTabela = (apiDados) => {
  db.transaction(tx => {
    tx.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name='menu'",
      [],
      (_, { rows }) => {
        if (rows.length > 0) {
          console.log('A tabela "menu" existe.');
          ConferirDados(apiDados)
        } else {
          console.log('A tabela "menu" não existe.');
          CriarTabela()
        }
      }
    );
  });
}


export const CriarTabela = () => {
  db.transaction((tx) => {
    tx.executeSql('CREATE TABLE IF NOT EXISTS menu (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, preco TEXT, descricao TEXT, imagem TEXT, categoria TEXT);',
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


export const ConferirDados = (apiDados) => {
  db.transaction(tx => {
    tx.executeSql('SELECT COUNT(*) as count FROM menu',
      [],
      (_, { rows }) => {
        const { count } = rows.item(0);
        if (count === 0) {
          console.log('A tabela está vazia.');
          AddDados(apiDados)
        } else {
          console.log(`A tabela contém ${count} registros.`);
        }
      }
    );
  });
}


export const AddDados = (apiDados) => {
  db.transaction((tx) => {
    apiDados.forEach(item => {
      tx.executeSql('INSERT INTO menu (nome, preco, descricao, imagem,categoria) VALUES (?, ?, ?, ?, ?);',
        [item.name, item.price, item.description, item.image, item.category],
        (_, { rowsAffected, insertId }) => {
          console.log(`Linhas afetadas: ${rowsAffected}`);
          console.log(`ID da linha inserida: ${insertId}`);
          console.log('Dados adicionados com sucesso!');
        },
        (_, error) => {
          console.log('Erro ao adicionar dados:', error);
        }
      );
    })
  });
}


export const Deletar = () => {
  db.transaction(tx => {
    tx.executeSql('DROP TABLE IF EXISTS menu',
      [],
      (_, { rowsAffected }) => {
        console.log('Tabela deleta');
      }
    );
  });
}
