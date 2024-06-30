using Microsoft.EntityFrameworkCore;
using NoteBook.DB.Interfaces;
using NoteBook.DB.Models;
using System.Linq.Expressions;

namespace NoteBook.DB.Repositories
{
    public class NoteRepository : INoteRepository
    {
        private readonly ApplicationDbContext _context;

        public NoteRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task Create(string title, string description)
        {
            var note = new Note(title, description);

            await _context.Notes.AddAsync(note);
            await _context.SaveChangesAsync();
        }
        public async Task<List<Note>> Get(string? search, string? sortItem, string? order)
        {
            var notesQuery = _context.Notes
            .Where(n => string.IsNullOrWhiteSpace(search) ||
                        n.Title.ToLower().Contains(search.ToLower()));

            Expression<Func<Note, object>> selectorKey = sortItem?.ToLower() switch
            {
                "date" => note => note.CreatedAt,
                "title" => note => note.Title,
                _ => note => note.Id
            };

            notesQuery = order == "desc"
                ? notesQuery.OrderByDescending(selectorKey)
                : notesQuery.OrderBy(selectorKey);

            return await notesQuery.ToListAsync();
        }
    }
}
