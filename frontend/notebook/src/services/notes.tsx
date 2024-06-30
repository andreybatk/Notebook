import axios from "axios";

interface Filter {
	search?: string;
	sortItem?: string;
	sortOrder?: string;
  }

interface Note{
	title?: string;
	description?: string;
}

export const fetchNotes = async (filter: Filter) => {
	try {
		var resposne = await axios.get("http://localhost:5000/notes", {
			params: {
				search: filter?.search,
				sortItem: filter?.sortItem,
				sortOrder: filter?.sortOrder,
			},
		});

		return resposne.data.notes;
	} catch (e) {
		console.error(e);
	}
};

export const createNote = async (note: Note) => {
	try {
		var resposne = await axios.post("http://localhost:5000/notes", note);

		return resposne.status;
	} catch (e) {
		console.error(e);
	}
};