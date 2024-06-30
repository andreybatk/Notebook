using Microsoft.Extensions.DependencyInjection;
using NoteBook.DB.Interfaces;
using NoteBook.DB.Repositories;

namespace NoteBook.DB.DiContainer
{
    public static class DiExtension
    {
        public static void AddRepositories(this IServiceCollection services)
        {
            services.AddScoped<INoteRepository, NoteRepository>();
        }
    }
}
