using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ApiController : ControllerBase
    {
        //private readonly SqlContext _context;
        private readonly ILogger<ApiController> _logger;

        public ApiController(ILogger<ApiController> logger
            //, SqlContext context
            )
        {
            _logger = logger;
            //_context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Message>> Get()
        {
            return Ok("hi");
            //var messages = _context.Messages.ToList();
            //return Ok(messages);
        }

        //[HttpPost]
        //public ActionResult Post(Message message)
        //{
        //    try
        //    {
        //        message.Id = 0;
        //        _context.Messages.Add(message);
        //        return Ok(message);
        //    }
        //    catch (Exception)
        //    {
        //        return Ok("can't connect to database");
        //    }
        //}
    }
}