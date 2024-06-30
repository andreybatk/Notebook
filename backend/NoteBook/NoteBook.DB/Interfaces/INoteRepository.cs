using NoteBook.DB.Models;

namespace NoteBook.DB.Interfaces
{
    public interface INoteRepository
    {
        Task Create(string title, string description);
        Task<List<Note>> Get(string? search, string? sortItem, string? order);
    }
}