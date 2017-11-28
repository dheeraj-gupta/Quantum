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
    public class ClassDetailController :Controller
    {
        private readonly IClassRepository _repository;
        private readonly ILogger<ClassDetailController> _logger;
        private readonly IMapper _mapper;

        public ClassDetailController(IClassRepository repository,
            ILogger<ClassDetailController> logger,
            IMapper mapper)
        {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
        }
       
        [HttpGet("{className}")]
        public IActionResult Get(string className)
        {
            try
            {
                
                    var classDetail = _repository.GetAllClassDetail(className);

                    if (classDetail != null) return Ok(_mapper.Map<IEnumerable<ClassDetail>, IEnumerable<ClassDetailViewModel>>(classDetail));
                    else return NotFound();
               
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get ClassDetail: {ex}");
                return BadRequest("Failed to get ClassDetail by className");
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]ClassDetailViewModel model)
        {
            // add it to the db
            try
            {
                if (ModelState.IsValid)
                {
                    var newClassDetail = _mapper.Map<ClassDetailViewModel, ClassDetail>(model);

                   var isCallSuccess = _repository.AddClassDetail(newClassDetail);
                    if (isCallSuccess && _repository.SaveAll())
                    {
                        return Created($"/api/classdetail/{newClassDetail.Id}", _mapper.Map<ClassDetail, ClassDetailViewModel>(newClassDetail));
                    }
                    else
                    {
                        return BadRequest("Classdetail's can't be added for existing lastname");
                    }
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save a new ClassDetail: {ex}");
            }

            return BadRequest("Failed to save new ClassDetail");
        }
    }
}
