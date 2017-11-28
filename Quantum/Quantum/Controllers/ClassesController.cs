using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Quantum.WebAPI.Data;
using Quantum.WebAPI.Data.Entities;
using Quantum.WebAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quantum.WebAPI.Controllers
{
    [Route("api/[Controller]")]
    public class ClassesController : Controller
    {
        private readonly IClassRepository _repository;
        private readonly ILogger<ClassesController> _logger;
        private readonly IMapper _mapper;

        public ClassesController(IClassRepository repository,
            ILogger<ClassesController> logger,
            IMapper mapper)
        {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult Get(bool includeClassDetails = true)
        {
            try
            {
                //var username = User.Identity.Name;

                var results = _repository.GetAllClasses(includeClassDetails);

                return Ok(_mapper.Map<IEnumerable<Classes>, IEnumerable<ClassesViewModel>>(results));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get Classes: {ex}");
                return BadRequest("Failed to get Classes");
            }
        }

        

        [HttpPost]
        public IActionResult Post([FromBody]ClassesViewModel model)
        {
            // add it to the db
            try
            {
                if (ModelState.IsValid)
                {
                    var newClasses = _mapper.Map<ClassesViewModel, Classes>(model);

                    _repository.AddClasses(newClasses);
                    if (_repository.SaveAll())
                    {
                        return Created($"/api/classes/{newClasses.Id}", _mapper.Map<Classes, ClassesViewModel>(newClasses));
                    }
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }   
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save a new Classes: {ex}");
            }

            return BadRequest("Failed to save new Classes");
        }
    }
}
