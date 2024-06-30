﻿using Microsoft.AspNetCore.Mvc;
using NoteBook.Contracts;
using NoteBook.DB.Interfaces;

namespace NoteBook.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NotesController : ControllerBase
    {
        private readonly INoteRepository _noteRepository;

        public NotesController(INoteRepository noteRepository)
        {
            _noteRepository = noteRepository;
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateNoteRequest request)
        {
            await _noteRepository.Create(request.Title, request.Description);
            return Ok();
        }
        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] GetNotesRequest request)
        {
            return Ok(await _noteRepository.Get(request.Search, request.SortItem, request.SortOrder));
        }
    }
}
