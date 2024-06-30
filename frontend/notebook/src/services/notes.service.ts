import axios from "axios";
import { ICreateNote, INoteFilter } from "../types";

class NotesService {
    async getNotes({search, sortItem, sortOrder} : INoteFilter){
        try{
            var resposne = await axios.get('/notes', {
                params:  {
                    search,
                    sortItem,
                    sortOrder
                }
            })
            return resposne.data
        }
        catch(e){
            console.log(e)
        }
    }
    async createNote({title, description} : ICreateNote){
        try{
            var resposne = await axios.post('/notes', {title, description})
            return resposne.status
        }
        catch(e){
            console.log(e)
        }
    }
}

export const notesService = new NotesService();