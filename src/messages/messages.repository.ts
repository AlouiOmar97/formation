import { Injectable, NotFoundException } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
    async findOne(id: string) {
          // on va récuperer les données depuis notre fichier json
          const content= await readFile("messages.json","utf-8")
          // on va convertir nos données en objet
          const messages= JSON.parse(content)
          // on va retourner l'objet dont la clé est id
          const message=  messages[id]
          if (!message) {
               throw new NotFoundException("Le message n'existe pas")
            }
          return message
         }
         async findAll() {
                const content= await readFile("messages.json", "utf-8")
                console.log(content);
                
                const messages= JSON.parse(content)
                return messages
               }
             async create(content: string) {
                const contents= await readFile("messages.json", "utf-8")
                const messages= JSON.parse(contents)
                // on générer un id d'une façon aléatoire et l'arrondir
                let id= Math.floor(Math.random()*999)
                // on va ajouter notre message
                messages[id]={id, content}
                await writeFile("messages.json",JSON.stringify(messages))
               }
            
        
}
